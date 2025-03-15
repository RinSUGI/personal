// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  css: ['~/assets/styles/global.scss'],
  devtools: { enabled: false },
  modules: ["@nuxt/eslint"],
  ssr: false, // SPAモードで実行
  typescript: {
    typeCheck: true, // ビルド時・開発時に型チェック
  },
});