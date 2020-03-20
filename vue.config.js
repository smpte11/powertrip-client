module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "./" : "/",
  pluginOptions: {
    apollo: {
      lintGQL: false
    }
  }
};
