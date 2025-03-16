// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  css: ['~/assets/styles/global.scss'],
  devtools: { enabled: false },
  modules: ['@nuxt/eslint', '@ant-design-vue/nuxt'],
  runtimeConfig: {
    // サーバー側でのみ使用する環境変数はruntimeConfig直下に定義する
    public: {
      // UI側でも使用する環境変数はpublic配下に定義する
      baseUrl: process.env.BASE_URL,
      nuxtEnv: process.env.NUXT_ENV,
    },
  },
  ssr: false, // SPAモードで実行
  typescript: {
    typeCheck: true, // ビルド時・開発時に型チェック
  },
});
