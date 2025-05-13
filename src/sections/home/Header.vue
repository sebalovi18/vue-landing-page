<script setup lang="ts">
import AcademicCap from '@/components/icons/AcademicCap.vue'
import LanguageSelector from '@/components/LanguageSelector.vue'

import { useI18n } from 'vue-i18n'

const { t } = useI18n() 
</script>

<template>
  <div
    class="flex items-center justify-between p-4 bg-blue-900"
  >
    <div
      class="flex items-center gap-2"
    >
      <AcademicCap 
        class="size-5 stroke-white"
      />
      <span
        class="text-white"
      >
        {{ t('header.title') }}
      </span>
    </div>
    <LanguageSelector />
  </div>
</template>