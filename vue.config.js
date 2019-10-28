module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/vue-cal' : '',
  outputDir: 'dist',
  chainWebpack: config => config.plugins.delete('prefetch'),
  productionSourceMap: false,
  devServer: {
    port: 8000
  }
}
