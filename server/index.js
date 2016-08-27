const path = require('path')
const koa = require('koa')
const logger = require('koa-logger')
const proxy = require('koa-proxy')
const serve = require('koa-static')
const router = require('./routes')
const utils = require('./utils')

const env = process.env.NODE_ENV || 'development'
const isDev = env === 'development'

const staticDir = path.resolve(__dirname, '../' + (isDev ? 'client' : 'static'))

const app = koa()

if (isDev) {
  // 开发环境下开启 log
  app.use(logger())
  // 前端的请求直接让前端自己处理
  app.use(proxy({
    host: 'http://127.0.0.1:3000',
    match: /^\/static\//
  }))
}

// global events listen
app.on('error', (err, ctx) => {
  err.url = err.url || ctx.request.url
  console.error(err.stack, ctx)
})

// handle favicon.ico
app.use(function*(next) {
  if (this.url.match(/favicon\.ico$/)) {
    this.body = ''
  }
  yield next
})

// 所有非 API 接口输出使用统一模板，让客户端去渲染
router.get('/(.*)', function *(next) {
  if (this.url.indexOf('/api/') < 0) {
    this.body = yield utils.readFileThunk(staticDir + '/index.html')
  }
  yield next
})

// 静态文件
app.use(serve(staticDir))

// 设置路由
app.use(router.routes())
   .use(router.allowedMethods())

// 设置端口号
const port = 4000

app.listen(port)

console.log(`Node app is listening on port ${port}...`)
