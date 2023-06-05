/**
 * 统一配置，获取从 @/common/ULI.js 中获取
 * 
 * */
//token:用户校验
export const TOKEN = 'bearer xxx'
    //entId:企业 id
export const ENT_ID = 'xxx'
    //parkId:园区 id
    // export const PARK_ID = ''
export const PARK_ID = 'xxx'

export const PARK_NAME = 'xxx'
    //userId:用户 id
export const USER_ID = 'xxx'

//SERVICE_URL
export const SERVICE_URL = 'xxx'

//ossUrl
export const OSS_URL = '/oss-api/oss/v1/'

export const BASE_URL = process.env.NODE_ENV === 'development' ?'' : ''