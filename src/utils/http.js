import axios from 'axios-miniprogram'

const http = axios

// 请求base路径
http.defaults.baseURL =
  'https://service-36n2x31h-1256505457.cd.apigw.tencentcs.com/release'
http.defaults.headers = {
  'content-Type': 'application/json'
}

http.interceptors.request.use(
  config => {
    // // 所有请求都携带token
    // Object.assign(config.headers, {
    //   token: uni.getStorageSync('token')
    // })
    // 发送之前操作config
    return config
  },
  err => {
    // 处理错误
    return Promise.reject(err)
  }
)

/**
 * 响应拦截
 */
http.interceptors.response.use(
  response => {
    // 对拿到的数据做一些额外操作操作 (如无权限,直接跳转首页)
    // const { code, msg } = response.data
    // if (code !== 0) {
    //   if (msg) {
    //     uni.showToast({
    //       title: msg
    //     })
    //   }
    //   return Promise.reject(response.data)
    // }
    // 返回前操作
    return response.data
  },
  err => {
    return Promise.reject(err)
  }
)

export default http
