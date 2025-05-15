<script setup lang="ts">
import PlanCard from '@/components/PlanCard.vue'
import { usePlan } from '@/composables/usePlan'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const {
  plans
} = usePlan()
</script>

<template>
  <div
    id="pricing"
    class="px-4 py-8 space-y-4"
  >
    <div
      class="flex flex-wrap gap-4 justify-center"
    >
      <PlanCard
        v-for="plan in plans"
        :key="plan.id"
        :plan="plan"
      />
    </div>
    <!-- Guarantee -->
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