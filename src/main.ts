import App from '@/App.vue'

import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import { createPinia } from 'pinia'

import { i18nConfig } from '@/i18n'

import router from '@/router'

const i18n = createI18n(i18nConfig)

const app = createApp(App)

app.use(createPinia())
app.use(i18n)
app.use(router)

app.mount('#app')
