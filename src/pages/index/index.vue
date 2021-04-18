<template>
  <view class="content">
    <image class="logo" src="/static/logo.png"></image>
    <view>
      <text class="title">{{ title }}</text>
    </view>
    <view>
      <text>
        页面导航
      </text>
    </view>
    <view class="nav">
      <!-- 导航 -->
      <navigator
        v-for="(l, idx) in links"
        :key="idx"
        :url="l.href"
        open-type="navigate"
        hover-class="navigator-hover"
      >
        {{ l.text }}
      </navigator>
    </view>
  </view>
</template>

<script>
export default {
  data () {
    return {
      title: 'Hello World',
      links: [
        { href: '../axios/index', text: 'axiios' },
        { href: '../vant/index', text: 'vant' },
        { href: '../vuex/index', text: 'vuex' }
      ]
    }
  },
  onLoad () {},
  methods: {}
}
</script>

<style lang="scss">
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin: 200rpx auto 50rpx auto;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}

.nav {
  display: flex;
  justify-content: space-around;
  navigator {
    margin: 10rpx;
  }
}
</style>
