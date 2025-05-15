<script setup lang="ts">
import AcademicCap from '@/components/icons/AcademicCap.vue'
import LanguageSelector from '@/components/LanguageSelector.vue'

import { useI18n } from 'vue-i18n'

const { t } = useI18n() 
</script>

<template>
  <div
    id="header"
    class="sticky top-0 z-10 flex items-center justify-between p-4 bg-blue-900"
  >
    <div
      class="flex items-center gap-2"
    >
      <AcademicCap 
        class="size-5 stroke-white grow-0 shrink-0"
      />
      <span
        class="text-white text-lg"
      >
        {{ t('header.title') }}
      </span>
    </div>
    <LanguageSelector />
  </div>
</template>