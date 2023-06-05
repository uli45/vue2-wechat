import {
	TOKEN,
	ENT_ID,
	PARK_ID,
	PARK_NAME,
	USER_ID,
	BASE_URL,
	SUITE_CODE
} from "@/api/config.js"

import * as u from './u_config.js'

class uli {

	//获取随机id
	static uuid (len, binary) {
		len = !len ? 36 : len;
		binary = !binary ? 16 : binary;
		return 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
			var r = Math.random() * binary | 0,
				v = c == 'x' ? r : (r & 0x3 | 0x8);
			return v.toString(binary);
		}).substring(0, len)
	};

	static getRandom (a, b) {
		var max = a;
		var min = b;
		if (a < b) {
			max = b;
			min = a;
		}
		return parseInt(Math.random() * (max - min)) + min;
	};

	//1.随机数中是否包含数字,2.随机数中是否包大写字母,3.随机数中是否包小写字母,4.生成多少位随机数
	static suijione (num, maxA, minlA, fqy) {
		let arr = []
		let arr1 = []
		let arr2 = []
		if (num) {
			for (let m = 0; m <= 9; m++) {
				arr.push(m)
			}
		}
		if (maxA) {
			for (let m = 65; m <= 90; m++) {
				arr1.push(m)
			}
		}
		if (minlA) {
			for (let m = 97; m <= 122; m++) {
				arr2.push(m)
			}
		}
		if (!fqy) {
			console.log('生成位数必传')
		}
		let mergeArr = arr.concat(arr1);
		let mergeArr1 = mergeArr.concat(arr2);
		let _length = mergeArr1.length
		let text = ''
		for (let m = 0; m < fqy; m++) {
			let text1 = ''
			let random = this.getRandom(0, _length)
			if ((mergeArr1[random]) <= 9) {
				text1 = mergeArr1[random]
			} else if ((mergeArr1[random]) > 9) {
				text1 = String.fromCharCode(mergeArr1[random])
			}
			text += text1
		}
		return text
	}

	//提示框
	static toast (e) {
		uni.showToast({
			title: e,
			duration: 2000,
			icon: 'none',
			position: 'bottom'
		});
	}

	//加载框
	static loading (e) {
		if (e) {
			uni.showLoading({
				title: '加载中...'
			});
		} else {
			setTimeout(function () {
				uni.hideLoading();
			}, 500);
		}
	}

	//全局获取
	static get (key) {
		return uni.getStorageSync(key)
	}

	//全局存储
	static save (key, value) {
		uni.setStorageSync(key, value)
	}



	//获取 token
	static getToken = () => {
		let token = ''
		try {
			token = this.get(u.token)
			if (!token) {
				token = TOKEN
			}
		} catch (e) { }
		return token
	}

	//获取 baseUrl
	static getBasePath = () => {
		let basePath = ''
		try {
			basePath = uni.getStorageSync(u.basePath)

			if (!basePath) {
				basePath = BASE_URL
			}
		} catch (e) {
			basePath = BASE_URL
		}
		return basePath
	}

	


	//获取用户 id
	static getUserId () {
		let userId = this.get(u.userId)
		if (!userId) {
			userId = USER_ID
		}
		return userId
	}

	//弹窗
	static dialog (e) {
		uni.showModal({
			title:e.title,
			content: e.content,
			success: function (res) {
				if (res.confirm) {
					
					console.log('用户点击确定');
				} else if (res.cancel) {
					console.log('用户点击取消');
				}
			}
		});
	}

	/**
	 * 跳转方法 arguments[0]:界面地址
	 * arguments[1]:数据对象
	 */
	static start () {
		this.log("arguments", arguments)
		let path = arguments[0]
		let queryStr = this.getQuerStr(arguments[1])
		uni.navigateTo({
			url: `/${path}?query=${queryStr}`
		});
	}

	/**
	 * 返回上一页
	 * */
	static back () {
		uni.navigateBack({
			delta: 1,
			animationDuration: 500
		});
	}

	static log (tag, text) {
		console.log(`uli->>${tag}-${JSON.stringify(text)}`)
	}

	//解析数据
	static getQuerStr (query) {
		if (this.isObject(query)) {
			return encodeURIComponent(JSON.stringify(query))
		} else {
			throw new Error('query数据必须是Object')
		}
	}

	/**
	 * @description 判断是否是Object类型
	 */
	static isObject (value) {
		return toString.call(value) === '[object Object]'
	}
}

export default uli
