const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        additionalData:
          '@import "@/assets/sass/_color.sass"\n@import "@/assets/sass/_variables.sass"',
      },
      scss: {
        additionalData: `@import "@/assets/sass/_color.sass"; @import "@/assets/sass/_variables.sass";`,
      },
    },
  },
});
