import _request from '../util/request'
import { merge } from 'lodash'
import queryString from 'query-string'


const proxyUrl = __DEV__ ? '/proxy' : ''
const apiBaseUrl = '//m.api.haoshiqi.net'
const apiUrl = __DEV__ ? proxyUrl : location.protocol + apiBaseUrl + proxyUrl

// const httpReg = /^https?:/
const defaultConfig = {
  method: 'GET',
  credentials: 'include',
  mode: 'cors',
  // cache: 'force-cache',
  cache: 'default',

  timeout: 3000,
}
function urlfix(url, paramsUrl = '') {
  if (paramsUrl) {
    url = url + (url.indexOf('?') === -1 ? '?' : '&') + paramsUrl
  }
  return url
}
function getUrl(url = '', data = {}) {
  return urlfix(url, queryString.stringify(data))
}

function request(url, config = {}) {
  const method = (config.method || 'GET').toUpperCase()
  if (method === 'GET') {
    url = getUrl(url, config.data)
  }
  const requestConfig = merge({}, defaultConfig, config, {
    body: config.data,
  })
  return _request(`${apiUrl}${url}`, requestConfig)
}

export function getTopicInfo(params) {
  return request(`/product/topicskusinfo`, {
    method: 'GET',
    data: params,
  })
}
export function getTopicList(params) {
  return request(`/product/topicskulist`, {
    method: 'GET',
    data: params,
  })
}

// export function patch(id, values) {
//   return request(`/users/${id}`, {
//     method: 'PATCH',
//     body: JSON.stringify(values),
//   })
// }

// export function create(values) {
//   return request('/users', {
//     method: 'POST',
//     body: JSON.stringify(values),
//   })
// }
