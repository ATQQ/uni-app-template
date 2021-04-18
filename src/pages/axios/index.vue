<template>
  <view>
    <view class="title">
      <text>{{ title }}</text>
    </view>
    <view>
      <button @click="handleGlobal">全局方法</button>
      <textarea v-model="value1"></textarea>
    </view>
    <view>
      <button @click="handleMethod">包装方法调用</button>
      <textarea v-model="value2"></textarea>
    </view>
    <view>
      <button @click="handleVuex">vuex调用</button>
      <textarea v-model="value3"></textarea>
    </view>
  </view>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  data () {
    return {
      title: 'axios示例',
      value1: '',
      value2: ''
    }
  },
  computed: {
    ...mapState('test', ['value3'])
  },
  methods: {
    ...mapActions('test', ['refreshWeather']),
    handleGlobal () {
      this.$http.get('demoAPi').then(res => {
        this.value1 = JSON.stringify(res)
      })
    },
    handleMethod () {
      this.$api.test.checkWeather().then(res => {
        this.value2 = JSON.stringify(res)
      })
    },
    handleVuex () {
      this.refreshWeather()
    }
  }
}
</script>

<style scoped>
.title {
  text-align: center;
  padding: 20rpx;
}
</style>
