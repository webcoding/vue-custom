
import request from 'custom-request'
import { utils } from 'custom-request'

// console.log(utils.getUrl(`/product/topicskusinfo`, { a: 2 }))
console.log(utils.getUrl)

// get 要自己拼接字符穿
export function getTopicInfo(params) {
  const url = utils.getUrl(`/product/topicskusinfo`, params)
  return request(url, {
    method: 'GET',
  })
}

export function getTopicList(params) {
  return request(`/product/topicskulist`, {
    method: 'GET',
  })
}

// 常规用法
const PAGE_SIZE = 3
export function fetch({ page }) {
  return request(`/api/users?_page=${page}&_limit=${PAGE_SIZE}`)
}

export function remove(id) {
  return request(`/api/users/${id}`, {
    method: 'DELETE',
  })
}

export function patch(id, values) {
  return request(`/api/users/${id}`, {
    method: 'PATCH',
    body: JSON.stringify(values),
  })
}

export function create(values) {
  return request('/api/users', {
    method: 'POST',
    body: JSON.stringify(values),
  })
}
