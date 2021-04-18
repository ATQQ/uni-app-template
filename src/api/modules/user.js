import http from '../../utils/http'

function login (code, nickname, gender, avatar) {
  return http.post('/user/login', {
    code,
    nickname,
    gender,
    avatar
  })
}

export default {
  login
}
