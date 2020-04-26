import request from '../utils/request'

//获取公司列表
export function getCompanyList(data) {
  return request({
    headers: {
      "Content-Type": 'application/json'
    },
    url: '/companies/',
    method: 'POST',
    data
  })
}

// 获取公司详情
export function getCompanyInfo(params) {
  return request({
    url: '/oneCompany/',
    method: 'GET',
    params
  })
}
