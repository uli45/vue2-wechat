import { http } from "@/common/service.js"
//此处二次封装的方法，是处理默认携带token的情况
export const httpPost = (url, data) => {
    return http.post(`${url}`, data)
}

export const httpDelete = (url, data) => {
    return http.delete(`${url}`, data)
}

export const httpGet = (url, params) => {
    return http.get(`${url}`, { params: params })
}

export const httpPut = (url, config) => {
    return http.put(`${url}`, {}, config)
}

export const httpUpload = (url, config) => {
    return http.upload(`${url}`, config)
}