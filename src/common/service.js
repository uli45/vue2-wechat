/**
 * @version 3.0.4
 * @Author lu-ch
 * 文档: https://www.quanzhan.co/luch-request/
 * github: https://github.com/lei-mu/luch-request
 * DCloud: http://ext.dcloud.net.cn/plugin?id=392
 */
import Request from 'luch-request'
import store from '@/store/index.js'
import {
	wechatLogin,
	refreshToken
} from '@/api/auth.js'
import {
	BASE_URL
} from "@/api/config.js"
import {
	token
} from './u_config'
const http = new Request({
	baseURL: BASE_URL, //设置请求的base url
	timeout: 5000, //超时时长5s,
	// header: {
	//     'Content-Type': 'multipart/form-data;application/json;charset=UTF-8;'
	// }  
})

http.interceptors.request.use(
	(config) => {
		if (config.header.Authorization === undefined) {
			config.header = {
				...config.header,
				Authorization: store.state.USER_INFO.token || uni.getStorageSync('USER_INFO').token,
			}
		}
		console.log("config>>>>>>>>>>>>", config)
		return config
	},
	(err) => {
		return Promise.reject(err)
	}
)
http.interceptors.response.use(
	async (response) => {
			/* 请求之后拦截器。可以使用async await 做异步操作  */
			if (response.data.code == 401) {
				// token值过期
				console.log('>>>app-code-isReset：-401',response.data.code)
				let token = reloginError()
				let config = await doRequestConfig(response, token)
				console.log(config, 'config');
			}
			return response.data
		},
		(err) => {
			// 请求错误做点什么。可以使用async await 做异步操作
			console.log(err)
			return Promise.reject(err)
		}
)
var reloginError = function() {
	console.log('>>>app---微信登陆')
	//微信小程序重新获取token
	let token = ''
	wechatLogin(store.state.openId || uni.getStorageSync("openId")).then((res) => {
		token = res.data.token_type + ' ' + res.data.access_token
		let user_info = {}
		user_info = res.data
		user_info.token = token
		store.dispatch('SET_USER_INFO', user_info)
		console.log("-->>>>wechatlogin:Success", res)
	}).catch(err => {
		console.log('err 微信登录失败', err,uni.getStorageSync("openId"));
		
	})

	return token


}
var loginInfo = function() {
	//这里可以写一些用户注册相关的，比如跳转注册页 登陆失败的处理事件等
	
}
var doRequestConfig = function(res, token) {
	return new Promise((resolve, reject) => {
		let config = res.config
		config.header.Authorization = token
		resolve(config)
	})
}

export {
	http
}