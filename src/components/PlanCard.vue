<script setup lang="ts">
import type { Plan } from '@/types/Plan'
import { useI18n } from 'vue-i18n'

interface Props {
  plan: Plan
}

const props = defineProps<Props>()

const { t } = useI18n()
</script>
<template>
  <div
    class="w-[300px] flex items-end"
  >
    <div
      class="shadow-md w-[300px]"
    >
      <!-- Popular Plan -->
      <div
        v-if="plan.id === 'advanced_solo'"
        class="w-full text-lg font-light text-center text-white bg-blue-900 rounded-t-lg py-2"
      >
        {{ t('pricing.popular') }}
      </div>
      <div
        class="w-full flex flex-col gap-4 py-4 px-8 border bg-white hover:bg-gray-50"
        :class="plan.id === 'advanced_solo' ? 'border-blue-900 rounded-b-lg' : 'border-gray-200 rounded-lg'"
      >
        <!-- Pricing Name -->
        <h1
          class="text-2xl text-center font-bold"
        >
          {{ plan.name }}
        </h1>
        <!-- Pricing Short Description -->
        <p
          class="text-sm text-gray-500 text-center h-[30px] leading-4"
        >
          {{ plan.shortDescription }}
        </p>
        <!-- Pricing Price -->
        <p
          class="text-3xl font-semibold text-center"
        >
          {{ plan.price }}
        </p>
        <!-- Pricing Price Description -->
        <p
          class="text-xs text-center text-gray-500"
        >
          {{ plan.priceDescription }}
        </p>
        <!-- Pricing buttons -->
        <div
          class="flex items-center justify-center"
        >
          <button
            class="base-button !w-full bg-white hover:bg-blue-900 hover:text-white"
          >
            {{ t('pricing.button.buy') }}
          </button>
        </div>
        <!-- Pricing Features -->
        <div
          class="flex flex-col gap-1"
        >
          <p
            class="text-sm text-gray-500 font-bold"
          >
            {{ t('pricing.features') }}:
          </p>
          <ul
            class="flex flex-col gap-1 text-xs font-light"
          >
            <li
              v-for="feature in plan.features"
              :key="feature.description"
              class="flex items-center gap-2"
            >
              <component
                :is="feature.icon"
                class="size-5"
                :class="feature.iconColor"
              />
              <span>
                {{ feature.description }}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>