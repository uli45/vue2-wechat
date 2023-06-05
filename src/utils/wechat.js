import {
	ApiGetOssToken
} from '@/api/attach'
import {
	USER
} from "@/common/u_config.js"
import {
	wechatLogin,
	getOpenId
} from "@/api/auth.js"
import store from '@/store/index'
const wechat = {

	checkIsLogin() {
		//校验微信小程序是否已绑定	
		wx.login({
			success: (res) => {
				this.getOpenIdRes(res.code)
				console.log('wx.login', res);
			},
			fail: (err) => {
				console.log(err, '微信登录失败', err);
			}
		});
	},
	//获取微信 id
	getOpenIdRes(code) {
		getOpenId(code).then((res) => {
			// 如果该请求失败，请确认交当前使用的openid和给后端处理的openid 是不是同一个
			if(res.data?.openId) {
				store.dispatch('SET_OPENID', res.data.openid)
				this.login(res.data.openid)
			}
			
		});
		wx.getSystemInfo({
			success(res) {
				console.log(res.version, '微信版本号');
				console.log(res.system, '操作系统及版本');
				console.log(res.SDKVersion, '基础库版本');
			}
		})
	},
	//微信登陆
	login(openId) {
		if (!openId) {
			return
		}
		wechatLogin(openId).then((res) => {
			console.log( 'wechatLogin',res);
			//	return  //暂不处理
			if (!res.data.access_token) {
				//初次打开微信小程序可以做些什么，
			} else {
				let token = res.data.token_type + ' ' + res.data.access_token
				let user_info = {}
				user_info = res.data
				user_info.token = token
				store.dispatch('SET_USER_INFO', user_info)


			}
		})
	},
	//获取osstoken
	getOssToken() {
		ApiGetOssToken().then(res => {
			if (res.data) {
				let ossToken = res.data.token
				store.dispatch('SET_$OSSTOKEN', ossToken)
			}

		})
	}
}



export default wechat