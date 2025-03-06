// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  // Your custom configs here
)
.prepend()
// Lintルールのプロジェクト設定を以下に追加していく
.override('nuxt/typescript/rules', {
  // typescript関連のLintルール
  rules: {
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-unused-vars': 'warn',
  }
})
.override('nuxt/vue/rules', {
  // vue関連のLintルール
  rules: {
    'vue/block-order': ['warn', {
      order: ['script', 'template', 'style']
    }],
  }
});
