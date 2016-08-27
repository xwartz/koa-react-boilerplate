# Koa-React-Boilerplate

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](http://standardjs.com/)
[![Dependency Status](https://david-dm.org/xwartz/koa-react-boilerplate.svg?style=flat-square)](https://david-dm.org/xwartz/koa-react-boilerplate)
[![MIT Licensed](https://img.shields.io/badge/License-MIT-blue.svg?style=flat)](https://opensource.org/licenses/MIT)

基于 `NodeJS` 和 `React` 的前后端开发解决方案。

## 要解决的问题

在开发后台应用或者个人应用的时候，往往缺少后端资源，那么只能自己前后端一起搞定了。

由于 `Nodejs` 的流行，对于不会用 `Java`、`PHP`等语言来写后端的人来说，只需要会 `JavaScript` 就够了。

然而每次开发一个新应用就得重新配置一遍，也很麻烦的，据说都有开始招 `Webpack` 配置人员了。

为了省去自己的一些重复劳动，将好的实践方案集中起来，因此就有了这个项目。

## 使用的一些技术

### 静态检测

#### `JavaScript`

[`eslint`](http://eslint.org/): 配置了 `pre-commit`，每次提交都会先做 `lint` 检测。

避免开发时造成低级错误：Sublime 编辑器安装插件 [eslint](https://packagecontrol.io/search/eslint)

#### `css`

[`precss`](https://github.com/jonathantneal/precss)：可以让你写 `scss` 的语法。

[postcss](https://github.com/postcss/postcss)：autoprefixer

@todo: 添加 `csslint`

### 前端框架

`React` 全家桶(`react`, `redux`, `react-router`, `react-router-redux`...)

当然前端的选型比较自由，可以根据自己的熟悉程度更换

### 构建工具 `Webpack`

#### 开发环境使用:

不再需要刷新页面， [热替换](http://webpack.github.io/docs/hot-module-replacement-with-webpack.html)

使用 redux 插件调试, [devToolsExtension](https://github.com/zalmoxisus/redux-devtools-extension)

接口请求代理：
  1. 默认请所有 `/api` 请求代理到 `Node` 服务。
  2. 如果有现成接口，可直接代理到可用服务器。

[Proxy 配置](http://webpack.github.io/docs/webpack-dev-server.html#bypass-the-proxy)

#### 生产环境

做了打包体积的优化，参考文档 http://webpack.github.io/docs/optimization.html

打包目录 `/static`

### 后端框架

[Koa](https://github.com/koajs/koa)：避免 callback hell，简化 error 的处理方式。

## 安装

```
npm i
```

## 运行

### 前端

```bash
$ npm run hot-server
```

### 后端

```bash
$ npm run server
```

然后打开地址，`http://localhost:3000`

demo 修改自 redux 的官网例子[real-world](https://github.com/reactjs/redux/tree/master/examples/real-world)

## 生产环境

静态资源

```bash
$ npm run build-render
```

启动服务

```bash
$ npm run build-server
```

# License

MIT · [xwartz](https://github.com/xwartz/)
