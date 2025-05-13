import App from '@/App.vue'

import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import { createPinia } from 'pinia'

import de from '@/langs/de.json'
import en from '@/langs/en.json'
import es from '@/langs/es.json'

import router from '@/router'

const i18n = createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    en,
    es,
    de
  }
})

const app = createApp(App)

app.use(createPinia())
app.use(i18n)
app.use(router)

app.mount('#app')
