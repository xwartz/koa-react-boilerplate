'use strict'

import webpack from 'webpack'
import WebpackDevServer from 'webpack-dev-server'

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
  }
}).listen(port, 'localhost', (err, result) => {
  if (err) {
    return console.log(err)
  }

  console.log(`Listening at http://localhost:${port}/`)
})
