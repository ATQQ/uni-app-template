import http from '../../utils/http'

function code2session (code) {
  return http.get('/wechat/auth/code2session', {
    code
  })
}

export default {
  code2session
}
