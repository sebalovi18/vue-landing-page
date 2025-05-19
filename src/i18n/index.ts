import enMessages from '@/i18n/locales/en/messages.json'
import esMessages from '@/i18n/locales/es/messages.json'
import deMessages from '@/i18n/locales/de/messages.json'

import enDatetimeFormats from '@/i18n/locales/en/datetimeFormats.json'
import esDatetimeFormats from '@/i18n/locales/es/datetimeFormats.json'
import deDatetimeFormats from '@/i18n/locales/de/datetimeFormats.json'

import enNumberFormats from '@/i18n/locales/en/numberFormats.json'
import esNumberFormats from '@/i18n/locales/es/numberFormats.json'
import deNumberFormats from '@/i18n/locales/de/numberFormats.json'

import type { I18nOptions } from 'vue-i18n'

const datetimeFormats = {
  en: enDatetimeFormats,
  es: esDatetimeFormats,
  de: deDatetimeFormats
}

const messages = {
  en: enMessages,
  es: esMessages,
  de: deMessages
}

const numberFormats = {
  en: enNumberFormats,
  es: esNumberFormats,
  de: deNumberFormats
}


export const i18nConfig: I18nOptions = {
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  // datetimeFormats,
  messages
  // numberFormats
}