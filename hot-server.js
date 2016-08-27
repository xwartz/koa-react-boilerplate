'use strict'

import webpack from 'webpack'
import WebpackDevServer from 'webpack-dev-server'
import https from 'https'

import config from './webpack.config.dev'

const port = 3000

new WebpackDevServer(webpack(config), {
  contentBase: './client',
  hot: true,
  historyApiFallback: true,
  noInfo: false,
  reload: true,
  stats: {
    colors: true
  },
  proxy: {
    '/api': {
      target: 'https://api.github.com/',
      pathRewrite: { '^/api': '' },
      // http -> https 代理
      // see detail https://github.com/nodejitsu/node-http-proxy/blob/master/examples/http/proxy-http-to-https.js
      agent: https.globalAgent,
      headers: {
        host: 'api.github.com'
      }
    }
  }
}).listen(port, 'localhost', (err, result) => {
  if (err) {
    return console.log(err)
  }

  console.log(`Listening at http://localhost:${port}/`)
})
