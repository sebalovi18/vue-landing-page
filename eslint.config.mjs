import path from 'node:path'
import pluginVue from 'eslint-plugin-vue'
import stylistic from '@stylistic/eslint-plugin'
import { includeIgnoreFile } from '@eslint/compat'
import { fileURLToPath } from 'node:url'

// The next is needed to ignore the same files as gitignore
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const gitignorePath = path.resolve(__dirname, '.gitignore')

export default [
  // This is needed to ignore the same files as gitignore
  includeIgnoreFile(gitignorePath),
  ...pluginVue.configs['flat/recommended'],
  {
    name: 'generic-project-config',
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module'
    },
    plugins: {
      '@stylistic': stylistic
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
      'vue/comma-dangle': ['error', 'never'],
      '@stylistic/comma-dangle': ['error', 'never'],
      '@stylistic/comma-spacing': 'error',
      '@stylistic/key-spacing': ['error', {
        beforeColon: false,
        afterColon: true,
        mode: 'strict'
      }],
      '@stylistic/keyword-spacing': ['error', {
        before: true,
        after: true
      }],
      '@stylistic/space-before-function-paren': ['error', 'always'],
      '@stylistic/brace-style': 'off',
      '@stylistic/indent': ['error', 2],
      '@stylistic/space-before-blocks': 'error',
      '@stylistic/type-annotation-spacing': 'error',
      '@stylistic/object-curly-spacing': ['error', 'always'],
      '@stylistic/semi': ['error', 'never'],
      '@stylistic/no-extra-semi': 'error',
      '@stylistic/quotes': ['error', 'single'],
      '@stylistic/max-len': ['error', {
        code: 120,
        ignoreStrings: true,
        ignoreTemplateLiterals: true
      }]
    }
  }
]