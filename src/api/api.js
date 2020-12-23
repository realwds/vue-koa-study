import request from '../utils/request'

export const GET = params => request('get', '/index/get', params)
export const POST = params => request('post', '/index/post', params)
