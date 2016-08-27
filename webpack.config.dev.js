'use strict'

import webpack from 'webpack'
import baseConfig from './webpack.config.base'

const port = 3000

export default {
  ...baseConfig,

  debug: true,

  devtool: 'source-map',

  entry: {
    ...baseConfig.entry,
    // 重载 app, 热替换
    app: [
      `webpack-dev-server/client?http://localhost:${port}`,
      'webpack/hot/only-dev-server',
      './index'
    ]
  },

  plugins: [
    ...baseConfig.plugins,
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development')
      }
    })
  ]
}
