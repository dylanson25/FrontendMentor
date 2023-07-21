const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        additionalData:
          '@import "@/assets/sass/_color.sass"\n@import "@/assets/sass/_variables.sass"\n@import "@/assets/sass/_mixins.sass"',
      },
      scss: {
        additionalData: `@import "@/assets/sass/_color.sass"; @import "@/assets/sass/_variables.sass"; @import "@/assets/sass/_mixins.sass";`,
      },
    },
  },
});
