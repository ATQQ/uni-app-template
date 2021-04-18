<template>
  <view>
    <view class="title">
      <text>{{ title }}</text>
    </view>
  </view>
</template>

<script>
export default {
  data () {
    return {
      title: 'vuex示例'
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
