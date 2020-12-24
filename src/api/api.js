import request from '@/utils/request'

export const GET = params => request('get', '/index/get', params)
export const POST = params => request('post', '/index/post', params)

export const getUser = params => request('get', '/github/user', params)
export const getCDNContent = params => request('get', '/github/cdnContent', params)
export const getCDNFile = params => request('get', '/github/cdnFile', params)

export const getGiteeUser = params => request('get', '/gitee/user', params)
