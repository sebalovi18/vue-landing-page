import pluginVue from 'eslint-plugin-vue'
import * as vueEslintParser from 'vue-eslint-parser'
export default [
  // add more generic rulesets here, such as:
  // js.configs.recommended,
  ...pluginVue.configs['flat/recommended'],
  // ...pluginVue.configs['flat/vue2-recommended'], // Use this if you are using Vue.js 2.x.
  {
    name: 'generic-config',
    languageOptions: {
      parser: vueEslintParser
    },
    rules: {
      'no-debugger': 'warn',
      'no-console': 'off',
      'no-else-return': 'error',
      'no-param-reassign': 'error',
      'arrow-body-style': ['error', 'as-needed'],
      'vue/max-attributes-per-line': ['error', {
        singleline: {
          max: 1
        },
        multiline: {
          max: 1
        }
      }],
      'vue/first-attribute-linebreak': ['error', {
        singleline: 'below',
        multiline: 'below'
      }],
      'vue/no-v-html': 'off',
      'vue/multi-word-component-names': 'off',
      'vue/require-default-prop': 'off',
      'vue/v-on-event-hyphenation': ['error', 'always', {
        autofix: true
      }],
      'vue/comma-dangle': ['error', 'never']
    }
  }
]