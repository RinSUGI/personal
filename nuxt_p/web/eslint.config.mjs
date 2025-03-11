// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt()
  // Lintルールのプロジェクト設定を以下に追加していく
  .override('nuxt/typescript/rules', {
    // typescript関連のLintルール（参照：https://typescript-eslint.io/rules/）
    rules: {
      '@typescript-eslint/array-type': 'warn',
      '@typescript-eslint/class-literal-property-style': 'warn',
      '@typescript-eslint/consistent-generic-constructors': 'warn',
      '@typescript-eslint/no-array-constructor': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unused-vars': 'warn',
      'prefer-promise-reject-errors': 'warn',
      'require-await': 'warn',
    },
  })
  .override('nuxt/vue/rules', {
    // vue関連のLintルール（参照：https://eslint.vuejs.org/rules/）
    rules: {
      'vue/attributes-order': ['warn'],
      'vue/block-lang': ['error', { script: { lang: 'ts' } }],
      'vue/block-order': ['warn', { order: ['script', 'template', 'style'] }],
      'vue/component-api-style': ['error', ['script-setup']],
      'vue/component-name-in-template-casing': [
        'error',
        'PascalCase',
        { registeredComponentsOnly: true, ignores: [] },
      ],
      'vue/custom-event-name-casing': ['warn', 'camelCase'],
      'vue/define-emits-declaration': ['warn', 'type-based'],
      'vue/define-macros-order': [
        'warn',
        { order: ['defineProps', 'defineEmits'], defineExposeLast: true },
      ],
      'vue/define-props-declaration': ['warn', 'type-based'],
      'vue/enforce-style-attribute': ['error', { allow: ['scoped'] }],
      'vue/html-comment-content-spacing': ['warn', 'always'],
      'vue/max-lines-per-block': ['warn', { script: 150, template: 100 }],
      'vue/max-template-depth': ['warn', { maxDepth: 3 }],
      'vue/no-bare-strings-in-template': ['warn'],
      'vue/no-ref-object-reactivity-loss': ['error'],
      'vue/no-lone-template': ['warn'],
      'vue/no-required-prop-with-default': ['warn', { autofix: true }],
      'vue/no-unused-emit-declarations': ['warn'],
      'vue/no-unused-properties': ['warn'],
      'vue/no-use-v-else-with-v-for': ['error'],
      'vue/no-useless-mustaches': ['warn'],
      'vue/no-useless-v-bind': ['error'],
      'vue/no-v-text': ['warn'],
      'vue/padding-line-between-blocks': ['warn', 'always'],
      'vue/prefer-define-options': ['warn'],
      'vue/prefer-true-attribute-shorthand': ['warn', 'never'],
      'vue/require-macro-variable-name': ['warn', { defineProps: 'props', defineEmits: 'emit' }],
      'vue/require-prop-comment': ['warn', { type: 'block' }],
      'vue/require-typed-ref': ['error'],
      'vue/slot-name-casing': ['error', 'camelCase'],
      'vue/static-class-names-order': ['warn'],
      'vue/v-for-delimiter-style': ['error', 'in'],
      'vue/v-on-handler-style': [
        'error',
        ['method', 'inline-function'],
        { ignoreIncludesComment: false },
      ],
    },
  });
