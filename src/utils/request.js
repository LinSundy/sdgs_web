import axios from 'axios'
// eslint-disable-next-line no-unused-vars

axios.defaults.withCredentials = true
const service = axios.create({
  baseURL: 'http://www.sdgaosu.cn/sdgs-api',
  timeout: 15000,
})
service.interceptors.request.use(config => {
  // 在发送请求之前做些什么
  return config
}, error => {
  // 对请求错误做些什么
  return Promise.reject(error)
})
service.interceptors.response.use(response => {
  return response.data
}, err => {
  return Promise.reject(err)
})

const request = (config) => {
  return service.request(config).then(res => {
    return res
  })
}

export default service