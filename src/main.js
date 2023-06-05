import Vue from 'vue'
import App from './App'
import uView from "uview-ui"
import uli from './common/ULI.js'
import * as u from '@/common/u_config.js'
import { OSS_URL } from '@/api/config.js'
import dayjs from 'dayjs'
import store from './store/index'
import share from "./utils/share.js"
// 全局分享 小程序分享的封装


Vue.mixin(share)
    //UI框架
Vue.use(uView);


Vue.prototype.$u = u
Vue.prototype.$uli = uli

   // OSS_URL
Vue.prototype.$ossUrl = uni.getStorageSync('basePath')+ OSS_URL

Vue.config.productionTip = false

App.mpType = 'app'
if (process.env.NODE_ENV !== 'production') {
	// console.log = () => {}//开发环境去除看一下效果
}else{
	//正式环境去除
	console.log = () => {}
}
const app = new Vue({
    store,
    ...App
})
app.$mount()