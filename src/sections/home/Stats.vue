<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'

const { t } = useI18n()

const stats = computed((): Array<{ title: string, description: string }> => [
  {
    title: t('stats.1.title'),
    description: t('stats.1.description')
  },
  {
    title: t('stats.2.title'),
    description: t('stats.2.description')
  },
  {
    title: t('stats.3.title'),
    description: t('stats.3.description')
  },
  {
    title: t('stats.4.title'),
    description: t('stats.4.description')
  }
])
</script>
<template>
  <div
    class="grid grid-cols-2 md:grid-cols-4 gap-4 items-center justify-evenly px-4 h-[200px] bg-blue-200"
  >
    <div
      v-for="stat in stats"
      :key="stat.title"
      class="flex flex-col items-center text-center justify-center"
    >
      <h2
        class="text-lg text-center lg:text-xl xl:text-4xl font-bold text-blue-900"
      >
        {{ stat.title }}
      </h2>
      <p
        class="text-[10px] lg:text-[11px] xl:text-sm text-blue-900"
      >
        {{ stat.description }}
      </p>
    </div>
  </div>
</template>