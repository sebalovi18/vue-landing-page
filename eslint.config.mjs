import { fileURLToPath } from 'node:url'
import { includeIgnoreFile } from '@eslint/compat'
import path from 'node:path'
import pluginVue from 'eslint-plugin-vue'
import stylistic from '@stylistic/eslint-plugin'
import tseslint from 'typescript-eslint'

// The next is necessary to ignore the same files as gitignore
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const gitignorePath = path.resolve(__dirname, '.gitignore')

export default tseslint.config(
  {
    extends: [
      includeIgnoreFile(gitignorePath),
      ...tseslint.configs.recommended,
      ...pluginVue.configs['flat/recommended']
    ],
    ignores: [
      'src/components/icons/**'
    ],
    name: 'generic-project-config',
    plugins: {
      '@stylistic': stylistic
    },
    rules: {
      '@stylistic/brace-style': 'off',
      '@stylistic/comma-dangle': ['error', 'never'],
      '@stylistic/comma-spacing': 'error',
      '@stylistic/indent': ['error', 2],
      '@stylistic/key-spacing': ['error', {
        afterColon: true,
        beforeColon: false,
        mode: 'strict'
      }],
      '@stylistic/keyword-spacing': ['error', {
        after: true,
        before: true
      }],
      '@stylistic/max-len': ['error', {
        code: 120,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreUrls: true
      }],
      '@stylistic/no-extra-semi': 'error',
      '@stylistic/object-curly-spacing': ['error', 'always'],
      '@stylistic/quotes': ['error', 'single'],
      '@stylistic/semi': ['error', 'never'],
      '@stylistic/space-before-blocks': 'error',
      '@stylistic/space-before-function-paren': ['error', 'always'],
      '@stylistic/type-annotation-spacing': 'error',
      'arrow-body-style': ['error', 'as-needed'],
      'no-console': 'off',
      'no-debugger': 'warn',
      'no-duplicate-imports': 'error',
      'no-else-return': 'error',
      'no-param-reassign': 'error',
      'sort-imports': 'warn',
      'sort-keys': ['warn', 'asc', {
        caseSensitive: false,
        natural: true
      }],
      'vue/comma-dangle': ['error', 'never'],
      'vue/first-attribute-linebreak': ['error', {
        multiline: 'below',
        singleline: 'below'
      }],
      'vue/max-attributes-per-line': ['error', {
        multiline: {
          max: 1
        },
        singleline: {
          max: 1
        }
      }],
      'vue/multi-word-component-names': 'off',
      'vue/no-undef-components': 'error',
      'vue/no-undef-properties': 'error',
      'vue/no-v-html': 'off',
      'vue/require-default-prop': 'off',
      'vue/v-on-event-hyphenation': ['error', 'always', {
        autofix: true
      }]
    }
  }
)