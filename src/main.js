import Vue from 'vue'
import App from './App'
import http from './utils/http'
import api from './api/index'
import store from './store/index'
import dateFormat from './utils/dateFormat'

Vue.prototype.$http = http
Vue.prototype.$api = api

// eslint-disable-next-line no-extend-native
Date.prototype.Format = dateFormat
Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
  ...App,
  store
})
app.$mount()
