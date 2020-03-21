module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "./" : "/",
  productionSourceMap: false,
  pluginOptions: {
    apollo: {
      lintGQL: false
    }
  }
};
