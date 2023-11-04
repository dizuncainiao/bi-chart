import AxiosHttp, { RequestInterceptors, ResponseInterceptors } from './http'

const http = new AxiosHttp({
  baseURL: '',
  timeout: 60 * 1000
})

export const initRequestInterceptors = (callback: RequestInterceptors) => {
  http.requestInterceptors(callback)
}

// 外部 callback 至少具备 defaultResponseInterceptors 函数的基本功能
export const initResponseInterceptors = (callback?: ResponseInterceptors) => {
  http.responseInterceptors(callback)
}

export default http
