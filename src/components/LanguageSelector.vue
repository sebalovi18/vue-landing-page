<script setup lang="ts">
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { languages } from '@/constants/languages'
import type { Language } from '@/types/Language'

const { locale, t } = useI18n()

const selectedLanguage = computed((): Language => 
  languages.find((language) => language.code === locale.value) as Language
)

const filteredLanguages = computed((): Array<Language> => 
  languages.filter((language) => language.code !== locale.value)
)

const isLanguageSelectorHovered = ref(false)
</script>
<template>
  <div
    @mouseenter="isLanguageSelectorHovered = true"
    @mouseleave="isLanguageSelectorHovered = false"
  >
    <button
      class="relative base-button border-white text-white bg-blue-900 hover:bg-blue-800"
    >
      <img
        :src="selectedLanguage.image"
        :alt="selectedLanguage.code"
        class="w-4 h-4 grow-0 shrink-0"
      >
      <span>
        {{ t('languages.' + selectedLanguage.code) }}
      </span>
    </button>
    <Transition
      name="language-selector"
    >
      <div
        v-if="isLanguageSelectorHovered"
        class="absolute flex flex-col justify-center items-center"
      >
        <div
          v-for="language in filteredLanguages"
          :key="language.id"
          class="pt-1"
        >
          <button
            class="base-button bg-white hover:bg-gray-50 text-gray-500"
            @click="locale = language.code"
          >
            <img
              :src="language.image"
              :alt="language.code"
              class="w-4 h-4 grow-0 shrink-0"
            >
            <span>
              {{ t('languages.' + language.code) }}
            </span>
          </button>
        </div>
      </div>
    </Transition>
  </div>
</template>
<style scoped>
.language-selector-enter-active,
.language-selector-leave-active {
  transition: opacity 0.3s ease;
}

.language-selector-enter-from,
.language-selector-leave-to {
  opacity: 0;
}
</style>