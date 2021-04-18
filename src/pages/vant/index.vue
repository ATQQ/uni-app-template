<template>
  <view>
    <view class="title">
      <text>{{ title }}</text>
    </view>
    <view>
      <van-button type="default">默认按钮</van-button>
      <van-button type="primary">主要按钮</van-button>
      <van-button plain type="primary">朴素按钮</van-button>
    </view>
    <view>
      <van-icon name="close" />
      <van-icon name="chat" dot />
      <van-icon name="chat" info="9" />
      <van-icon name="chat" info="99+" />
    </view>
  </view>
</template>

<script>
export default {
  data () {
    return {
      title: 'vant示例'
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
