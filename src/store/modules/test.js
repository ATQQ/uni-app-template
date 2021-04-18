import api from '../../api/index.js'
const state = {
  value3: '',
  num: 0
}

const getters = {
  doubleNum: state => {
    return state.num * 2
  }
}

const mutations = {
  increaseNum (state, payload) {
    state.num += payload
  },
  decreaseNum (state, payload) {
    state.num -= payload
  },
  updateValue3 (state, payload) {
    state.value3 = payload
  }
}

const actions = {
  refreshWeather (context, payload) {
    api.test.checkWeather().then(res => {
      context.commit('updateValue3', JSON.stringify(res))
    })
  },
  asyncIncrease (context, payload) {
    setTimeout(() => {
      context.commit('increaseNum', payload)
    }, 1000)
  },
  asyncDecrease (context, payload) {
    setTimeout(() => {
      context.commit('decreaseNum', payload)
    }, 1000)
  }
}
export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations
}
