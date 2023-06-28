const path = require('path')

module.exports = {
  pluginOptions: {
    webpackBundleAnalyzer: {
      analyzerMode: "disabled"
    }
  },
  configureWebpack: {
    // devtool: 'source-map',
    resolve: {
      alias: {
        '@/': path.join(__dirname, 'src/'),
      }
    },
  },
  transpileDependencies: [
    'vuetify'
  ],
}
