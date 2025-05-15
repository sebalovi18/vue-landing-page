<script setup lang="ts">
import CheckBadge from '@/components/icons/CheckBadge.vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const scrollToPricing = () => {
  const pricingSection = document.getElementById('pricing')
  const header = document.getElementById('header')

  if (!pricingSection || !header) return

  const { top } = pricingSection.getBoundingClientRect()
  const { height } = header.getBoundingClientRect()

  window.scrollTo({
    top: top - height,
    behavior: 'smooth'
  })
}

</script>
<template>
  <div
    class="bg-blue-900 text-white flex px-4 flex-wrap lg:flex-nowrap justify-center items-center space-y-8 lg:space-y-0 space-x-0 lg:space-x-12"
  >
    <div
      class="shrink max-w-[600px] space-y-4"
    >
      <!-- Hero title and description -->
      <div>
        <h1
          class="text-4xl font-bold"
        >
          {{ t('hero.title') }}
        </h1>
        <p
          class="text-lg font-thin"
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
          class="base-button bg-white hover:bg-gray-50 text-blue-900 text-xs"
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
      class="shrink w-full max-w-[600px]"
    >
      <iframe
        class="w-full h-[400px] "
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