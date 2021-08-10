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
        'c@': path.join(__dirname, 'src/ts/components/'),
        's@': path.join(__dirname, 'src/ts/store/'),
        '@': path.join(__dirname, 'src/')
      }
    }
  },
  css: {
    loaderOptions: {
      sass: {
        sourceMap: true,
        additionalData: '@import "~@/sass/app.sass"'
      }
    }
  }
}
