
import { httpPost, httpGet, httpUpload, httpPut } from '@/common/request.js'

export const ApiGetOssToken = () => {
    return httpGet(`/console-api/v1/oss/token`)
}

export const ApiOssUpload = (filePath, attachId, ossToken) => {
    return httpUpload(`/XXX/oss/v1/upload`, {
        filePath: filePath,
        name: 'file',
        formData: {
            'attachId': attachId
        },
        header: {
            'Content-Type': 'multipart/form-data',
            Authorization: ossToken,
        }
    })
}

/**
 * 确认附件
 * @param query
 */
export const ApiOssComplete = (query, ossToken) => {
    console.log('-->>>query:', query)
    return httpPut(`/oss-api/oss/v1/complete`, {
        params: query,
        header: {
            Authorization: ossToken,
        },
    })
}

/**
 * 删除附件
 * @param query
 */
export const ApiOssDelete = (query, ossToken) => {
    return httpPut(`/oss-api/oss/v1/addDeleteTag`, {
        params: query,
        header: {
            Authorization: ossToken,
        },
    })
}

//获取附件id的url
export const ApiGetOssFiles =(attachId) => {
	return httpGet('/upload/v1/get-url',attachId)
}
//获取字典
export const ApiGetDict = (query) => {
	return httpGet('/config-api/dict/v1/query',query)
}

