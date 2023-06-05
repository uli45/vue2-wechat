import {
	BASE_URL
} from '@/api/config.js'
import http from '@/common/http.js'


/**
 * 只负责登录，业务请求，参考attach.js
 * */

// const request = new Request()
// request.setConfig((config) => {
// 	config.baseURL = BASE_URL
// 	config.header = {
// 		...config.header
// 	}
// 	console.log("-->>>config:", config)
// 	return config
// })


/**获取短信验证码*/
export const getSMSVerifyCode = (phone) => {
	return http.request({
		url: `/auth-api/oauth2/sendLoginSms/${phone}`,
		method: 'POST',
		params: {
			parkId: null
		},
		data: {
			'type': 'workbench'
		}
	})
}

/**验证码登录*/
export const loginSMSVerify = (phone, code) => {
	// +8618607560169 / 1234
	return http.request({
		url: `/auth-api/oauth/token`,
		method: 'POST',
		params: {
			'parkId': null,
			'username': phone,
			'sms_code': code,
			'grant_type': 'sms_code',
			'scope': 'server',
			'client_id': 'workbench',
			'client_secret': '123456',
			'type': 'workbench'
		},
	})
}

/**密码登录*/
export const loginPasswordVerify = (username, password) => {
	return http.request({
		url: `/auth-api/oauth/token`,
		method: 'POST',
		params: {
			'parkId': null,
			'username': username,
			'password': password,
			'grant_type': 'password',
			'scope': 'server',
			'client_id': 'workbench',
			'client_secret': '123456',
			'type': 'workbench'
		},
	})
}

/**刷新token*/
export const refreshToken = (refreshToken) => {
	return request.post('/auth-api/oauth/token', {
		refresh_token: refreshToken,
		grant_type: 'refresh_token',
		scope: 'server',
		client_id: 'mobile',
		client_secret: '123456',
	}, {
		header: {
			"Content-Type": "application/x-www-form-urlencoded"
		}
	})
}

/**注销*/
export const logout = () => {
	return http.request({
		url: `/auth-api/oauth2/logout`,
		method: 'POST',
		params: {}
	})
}


//微信登录
export const wechatLogin = (openId) => {
	return http.request({
		url: `/wx/login`,
		method: 'GET',
		params: {
			'openId': openId
		},
	})
}


//微信账号绑定
export const bindUser = (openId, phone, smsCode) => {
	return http.request({
		url: `/wx/bind/user`,
		method: 'POST',
		params: {
			'bindId': openId,
			'phone': phone,
			'smsCode': smsCode
		},
	})
}

//微信-发送验证码
export const sendLoginSmsByType = (phone) => {
	return http.request({
		url: `/wx/send/sms`,
		method: 'GET',
		params: {
			'phone': phone
		},
	})

}

//微信-获取openId
export const getOpenId = (code) => {
	return http.request({
		url: '/wx/openId',
		method: 'GET',
		params: {
			'code': code
		},
	})
}
