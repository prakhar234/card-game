module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/styles/global.scss";`,
      },
      scss: {
        additionalData: `@import "@/styles/global.scss";`,
      },
    },
  },
};
