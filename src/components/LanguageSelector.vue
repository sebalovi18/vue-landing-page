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
      class="relative flex items-center justify-center gap-2 border border-white text-white rounded-md p-2 w-[120px] cursor-pointer grow-0 shrink-0 bg-blue-900 hover:bg-blue-800"
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
        class="mt-1 absolute flex flex-col justify-center items-center gap-1"
      >
        <button
          v-for="language in filteredLanguages"
          :key="language.id"
          class="flex items-center justify-center gap-2 border rounded-md p-2 w-[120px] cursor-pointer grow-0 shrink-0 bg-white hover:bg-gray-100 text-gray-500 shadow-sm"
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