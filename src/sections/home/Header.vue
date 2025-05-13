<script setup lang="ts">
import AcademicCap from '@/components/icons/AcademicCap.vue'
import LanguageSelector from '@/components/LanguageSelector.vue'

import { useI18n } from 'vue-i18n'

const { t } = useI18n() 
</script>

<template>
  <div
    class="flex items-center justify-between"
  >
    <div
      class="flex items-center gap-2"
    >
      <AcademicCap 
        class="size-5"
      />
      <span>
        {{ t('header.title') }}
      </span>
    </div>
    <div
      class="flex items-center gap-2"
    >
      <div>
        Flag
      </div>
      <div>
        <LanguageSelector />
      </div>
    </div>
  </div>
</template>