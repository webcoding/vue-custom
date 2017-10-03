

export function checkStatus([status, statusText, data]) {
  if (status >= 200 && status < 300) {
    // 请求成功
    return data
  }

  const error = new Error(statusText)
  error.status = status
  error.message = data
  throw error
  // return Promise.reject(error)
}
