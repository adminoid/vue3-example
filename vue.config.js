const path = require('path')

/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */
module.exports = {
  configureWebpack: {
    devServer: {
      watchOptions: {
        ignored: ['node_modules', 'public']
      }
    },
    resolve: {
      extensions: ['.ts', '.vue'],
      alias: {
        '@': path.join(__dirname, 'src/'),
        'c@': path.join(__dirname, 'src/ts/components/')
      }
    }
  }
}
