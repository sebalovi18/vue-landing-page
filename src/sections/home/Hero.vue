<script setup lang="ts">
import CheckCircle from '@/components/icons/CheckCircle.vue'
import CheckBadge from '@/components/icons/CheckBadge.vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const scrollToPricing = () => {
  const pricingSection = document.getElementById('pricing')
  pricingSection?.scrollIntoView({ behavior: 'smooth' })
}

</script>
<template>
  <div
    class="bg-blue-900 text-white grid grid-cols-1 gap-4 lg:grid-cols-2 items-center"
  >
    <div
      class="space-y-4 px-4"
    >
      <!-- Hero title and description -->
      <div>
        <h1
          class="text-4xl font-bold"
        >
          {{ t('hero.title') }}
        </h1>
        <p
          class="text-lg w-auto md:w-lg font-thin"
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
            <CheckBadge 
              class="size-5 grow-0 shrink-0 stroke-white"
            />
            <span>
              {{ t('hero.list.item1') }}
            </span>
          </li>
          <li
            class="flex items-center gap-2"
          >
            <CheckBadge 
              class="size-5 grow-0 shrink-0 stroke-white"
            />
            <span>
              {{ t('hero.list.item2') }}
            </span>
          </li>
          <li
            class="flex items-center gap-2"
          >
            <CheckBadge 
              class="size-5 grow-0 shrink-0 stroke-white"
            />
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
          @click="scrollToPricing"
        >
          {{ t('hero.button.view') }}
        </button>
      </div>
    </div>
    <div
      class="px-4"
    >
      <iframe
        class="w-full h-[360px] lg:h-[576px]"
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