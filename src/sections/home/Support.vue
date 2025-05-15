<script setup lang="ts">
import CheckCircle from '@/components/icons/CheckCircle.vue'
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'

const { t } = useI18n()

const features = computed((): Array<string> => [
  t('support.features.1'),
  t('support.features.2'),
  t('support.features.3'),
  t('support.features.4')
])
</script>
<template>
  <div
    class="bg-blue-900 text-white py-20 flex-wrap lg:flex-nowrap space-y-8 lg:space-y-0 space-x-0 lg:space-x-12 px-4 flex items-center justify-center"
  >
    <div
      class="w-auto max-w-[600px] space-y-4"
    >
      <h1
        class="text-4xl font-bold"
      >
        {{ t('support.title') }}
      </h1>
      <p
        class="text-lg"
      >
        {{ t('support.description') }}
      </p>
      <div
        class="grid grid-cols-2 gap-y-6 text-sm font-medium"
      >
        <div
          v-for="feature in features"
          :key="feature"
          class="flex items-center gap-1"
        >
          <CheckCircle
            class="size-5 shrink-0 grow-0"
          />
          <p
            class="leading-5"
          >
            {{ feature }}
          </p>
        </div>
      </div>
    </div>
    <div
      class="w-auto max-w-[600px]"
    >
      <img
        src="/public/image-test.webp"
        alt="Support"
      >
    </div>
  </div>
</template>