<script setup lang="ts">
import CheckCircle from '@/components/icons/CheckCircle.vue'
import CheckBadge from '@/components/icons/CheckBadge.vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>
<template>
  <div
    class="bg-blue-900 text-white py-4 px-16 flex items-center justify-between"
  >
    <div
      class="space-y-4"
    >
      <!-- Hero title and description -->
      <div>
        <h1
          class="text-4xl font-bold"
        >
          {{ t('hero.title') }}
        </h1>
        <p
          class="text-lg w-lg font-thin"
        >
          {{ t('hero.description') }}
        </p>
      </div>
      <!-- Hero list -->
      <div>
        <ul
          class="flex flex-col gap-2"
        >
          <li
            class="flex items-center gap-2"
          >
            <CheckBadge />
            <span>
              {{ t('hero.list.item1') }}
            </span>
          </li>
          <li
            class="flex items-center gap-2"
          >
            <CheckBadge />
            <span>
              {{ t('hero.list.item2') }}
            </span>
          </li>
          <li
            class="flex items-center gap-2"
          >
            <CheckBadge />
            <span>
              {{ t('hero.list.item3') }}
            </span>
          </li>
        </ul>
      </div>
      <!-- Hero buttons -->
      <div
        class="flex items-center gap-2"
      >
        <button
          class="base-button bg-white hover:bg-gray-100 text-blue-900 text-xs"
        >
          {{ t('hero.button.buy') }}
        </button>
        <button
          class="base-button text-white bg-blue-900 hover:bg-white hover:text-blue-900 text-xs"
        >
          {{ t('hero.button.view') }}
        </button>
      </div>
    </div>
    <div>
      <iframe
        width="1024"
        height="576"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=Qy1vqtm-OjM5chcM"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      />
    </div>
  </div>
</template>