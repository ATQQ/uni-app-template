import http from '../http'

function login(account, pwd) {
  return http.post('user/login', {
    account,
    pwd
  })
}

/**
 * 获取验证码
 * @param mobile 手机号
 */
function getCode(phone) {
  return http.get('random/code', {
    params: {
      phone
    }
  })
}
export default {
  login,
  getCode
}
