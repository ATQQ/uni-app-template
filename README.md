# uni-app-template
uni-app vue-cli 模板

主要用于小程序开发使用

* Vue-3 TS模板见此处：[uni-vue3-ts-template](https://github.com/ATQQ/uni-vue3-ts-template)
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
然后将编译结果`dist/dev/mp-weixin`导入微信开发者工具即可运行

![图片](https://img.cdn.sugarat.top/mdImg/MTYzNzQxNjc3MjA4Mw==637416772083)

![图片](https://img.cdn.sugarat.top/mdImg/MTYzNzQ3MjYwMTg4OQ==637472601889)

![图片](https://img.cdn.sugarat.top/mdImg/MTYzNzQ3MjY0NDEzOA==637472644138)

其它更多脚本 查看 [package.json](./package.json)中的scripts
