<script setup lang="ts">
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { languages } from '@/constants/languages'
import type { Language } from '@/types/Language'

const { locale } = useI18n()

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
    class="space-y-1"
    @mouseenter="isLanguageSelectorHovered = true"
    @mouseleave="isLanguageSelectorHovered = false"
  >
    <button
      class="flex items-center gap-2 border border-green-600 rounded-md p-2 w-[100px] cursor-pointer grow-0 shrink-0 bg-green-50 hover:bg-green-100 text-gray-500"
    >
      <img
        :src="selectedLanguage.image"
        :alt="selectedLanguage.label"
        class="w-4 h-4 grow-0 shrink-0"
      >
      <span>
        {{ selectedLanguage.label }}
      </span>
    </button>
    <Transition
      name="language-selector"
    >
      <div
        v-if="isLanguageSelectorHovered"
        class="flex flex-col justify-center items-center gap-1"
      >
        <button
          v-for="language in filteredLanguages"
          :key="language.id"
          class="flex items-center gap-2 border rounded-md p-2 w-[100px] cursor-pointer grow-0 shrink-0 bg-white hover:bg-gray-100 text-gray-500 shadow-sm"
          @click="locale = language.code"
        >
          <img
            :src="language.image"
            :alt="language.label"
            class="w-4 h-4 grow-0 shrink-0"
          >
          <span>
            {{ language.label }}
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