# uni-app-template
uni-app vue-cli 模板

主要用于小程序开发使用

>使用Node 版本 v12.22.1,
## feature
### dev
* [x] Vue2
* [x] babel
* [x] postcss
* [x] eslint
* [x] sass

### prod
* [x] vuex
* [x] 类Axios[axios-miniprogram](https://github.com/fluffff/axios-miniprogram#readme)
* [x] [vant-weapp](https://github.com/youzan/vant-weapp#readme)

## 开始
### 安装依赖
```
yarn install
```

### 开发热重载
#### h5
```
yarn serve
```
#### 微信小程序
```
yarn dev:mp-weixin
```

### 生产环境打包构建
#### h5
```
yarn build
```

#### 微信小程序
```
yarn build:mp-weixin
```

其它更多脚本 查看 [package.json](./package.json)中的scripts
### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
