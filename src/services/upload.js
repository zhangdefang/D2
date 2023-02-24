import request from '@/utils/request'
export function getFiles() {
    return request({
        url: '/getList/file',
        method: 'get'
    })
}

export function uploadFile(data) {
    return request({
        url: '/upload/file',
        data,
        method: 'post'
    })
}

export function getScurry() {
    return request({
        url: '/getScurry/key',
        method: 'get'
    })
}