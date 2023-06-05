import Request from 'luch-request';
import { BASE_URL } from "@/api/config.js"

const request = new Request({
        baseURL: BASE_URL, //设置请求的base url
        timeout: 5000, //超时时长5s,
            // header: {
            //     'Content-Type': 'multipart/form-data;application/json;charset=UTF-8;'
            // }
    })
    //请求拦截器
request.interceptors.request.use((config) => {
	// 可使用async await 做异步操作
   
    config.params = {
        ...config.params,
    }
    if (config.method === 'POST') {
        config.data = JSON.stringify(config.data);
    }
    return config
}, error => {
    return Promise.resolve(error)
})

// 响应拦截器
request.interceptors.response.use((response) => {
   console.log('response',response)
    return response.data
}, (error) => {
    //未登录时清空缓存跳转
    // if (error.statusCode == 401) {
    //     uni.clearStorageSync();
    //     uni.switchTab({
    //         url: "/pages/index/index.vue"
    //     })
	console.log('error',error)
    return Promise.resolve(error)
	
})
export default request;
//此处暴露的 request 是不需要携带token的请求