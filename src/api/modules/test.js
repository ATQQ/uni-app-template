import http from '../../utils/http'

function checkWeather () {
  return http.get('/demoAPi')
}

export default {
  checkWeather
}
