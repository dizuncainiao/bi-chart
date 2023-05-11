import AxiosHttp from './http'

const http = new AxiosHttp({
  baseURL: '',
  timeout: 60 * 1000
})

export default http
