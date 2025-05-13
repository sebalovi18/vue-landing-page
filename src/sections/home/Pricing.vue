<script setup lang="ts">
import Bolt from '@/components/icons/Bolt.vue'
import CheckCircle from '@/components/icons/CheckCircle.vue'
import XCircle from '@/components/icons/XCircle.vue'
import { type Component, computed } from 'vue'

import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const plans = computed((): Array<{
  features: Array<{
    description: string,
    icon: Component,
    iconColor: string
  }>,
  id: string,
  name: string,
  shortDescription: string,
  price: string,
  priceDescription: string
}> => [
  {
    id: 'essential',
    name: t('pricing.1.name'),
    shortDescription: t('pricing.1.shortDescription'),
    price: t('pricing.1.price'),
    priceDescription: t('pricing.shared.priceDescription'),
    features: [
      {
        description: t('pricing.1.uniqueFeatures.1.description'),
        icon: Bolt,
        iconColor: 'stroke-blue-900'
      },
      ...getPlanFeatures('essential')
    ]
  },
  {
    id: 'advanced_solo',
    name: t('pricing.2.name'),
    shortDescription: t('pricing.2.shortDescription'),
    price: t('pricing.2.price'),
    priceDescription: t('pricing.shared.priceDescription'),
    features: [
      {
        description: t('pricing.2.uniqueFeatures.1.description'),
        icon: Bolt,
        iconColor: 'stroke-blue-900'
      },
      ...getPlanFeatures('advanced_solo')
    ]
  },
  {
    id: 'advanced',
    name: t('pricing.3.name'),
    shortDescription: t('pricing.3.shortDescription'),
    price: t('pricing.3.price'),
    priceDescription: t('pricing.shared.priceDescription'),
    features: [
      {
        description: t('pricing.3.uniqueFeatures.1.description'),
        icon: Bolt,
        iconColor: 'stroke-blue-900'
      },
      ...getPlanFeatures('advanced')
    ]
  },
  {
    id: 'expert',
    name: t('pricing.4.name'),
    shortDescription: t('pricing.4.shortDescription'),
    price: t('pricing.4.price'),
    priceDescription: t('pricing.shared.priceDescription'),
    features: [
      {
        description: t('pricing.4.uniqueFeatures.1.description'),
        icon: Bolt,
        iconColor: 'stroke-blue-900'
      },
      ...getPlanFeatures('expert')
    ]
  }
])

const getPlanFeatures = (id: string): Array<{
  description: string,
  icon: Component,
  iconColor: string
}> => {
  const isEssential = id === 'essential'
  const greenColor = 'stroke-green-800'
  const redColor = 'stroke-red-800'

  return [
    {
      description: t('pricing.shared.features.1.description'),
      icon: isEssential ? CheckCircle : XCircle,
      iconColor: isEssential ? greenColor : redColor
    },
    {
      description: t('pricing.shared.features.2.description'),
      icon: isEssential ? CheckCircle : XCircle,
      iconColor: isEssential ? greenColor : redColor
    },
    {
      description: t('pricing.shared.features.3.description'),
      icon: isEssential ? CheckCircle : XCircle,
      iconColor: isEssential ? greenColor : redColor
    },
    {
      description: t('pricing.shared.features.4.description'),
      icon: isEssential ? CheckCircle : XCircle,
      iconColor: isEssential ? greenColor : redColor
    },
    {
      description: t('pricing.shared.features.5.description'),
      icon: isEssential ? CheckCircle : XCircle,
      iconColor: isEssential ? greenColor : redColor
    },
    {
      description: t('pricing.shared.features.6.description'),
      icon: isEssential ? XCircle : CheckCircle,
      iconColor: isEssential ? redColor : greenColor
    },
    {
      description: t('pricing.shared.features.7.description'),
      icon: isEssential ? XCircle : CheckCircle,
      iconColor: isEssential ? redColor : greenColor
    },
    {
      description: t('pricing.shared.features.8.description'),
      icon: isEssential ? XCircle : CheckCircle,
      iconColor: isEssential ? redColor : greenColor
    },
    {
      description: t('pricing.shared.features.9.description'),
      icon: isEssential ? XCircle : CheckCircle,
      iconColor: isEssential ? redColor : greenColor
    }
  ]
}
</script>

<template>
  <div
    class="py-8"
  >
    <div
      class="flex gap-4 p-4 justify-center"
    >
      <div
        v-for="plan in plans"
        :key="plan.id"
        class="flex items-end flex-wrap"
      >
        <div
          class="shadow-md w-[300px]"
        >
          <div
            v-if="plan.id === 'advanced_solo'"
            class="text-lg font-light text-center text-white bg-blue-900 rounded-t-lg w-[300px] py-2"
          >
            {{ t('pricing.popular') }}
          </div>
          <div
            class="flex flex-col gap-4 py-4 px-8 border bg-white hover:bg-gray-50"
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
    </div>
    <div
      class="text-center"
    >
      <p
        class="text-sm text-gray-500"
      >
        {{ t('pricing.guarantee') }}
      </p>
    </div>
  </div>
</template>