import path from "node:path"
import pluginVue from 'eslint-plugin-vue'
import { includeIgnoreFile } from "@eslint/compat"
import { fileURLToPath } from "node:url"

// The next is needed to ignore the same files as gitignore
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const gitignorePath = path.resolve(__dirname, ".gitignore")

export default [
  // This is needed to ignore the same files as gitignore
  includeIgnoreFile(gitignorePath),
  ...pluginVue.configs['flat/recommended'],
  {
    name: 'generic-project-config',
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
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