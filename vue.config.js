const path = require('path')
const devApiServer = require('./src/dev-api-server')

// todo: add port 443 for production to devServer

/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */
module.exports = {
  configureWebpack: {
    devServer: {
      watchOptions: {
        ignored: ['node_modules', 'public']
      },
      before: devApiServer
    },
    resolve: {
      extensions: ['.ts', '.vue'],
      alias: {
        'c@': path.join(__dirname, 'src/ts/components/'),
        's@': path.join(__dirname, 'src/ts/store/'),
        '@': path.join(__dirname, 'src/')
      }
    }
  }
}
