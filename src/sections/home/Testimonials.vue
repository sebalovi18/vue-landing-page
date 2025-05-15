<script setup lang="ts">
import TestimonialCard from '@/components/TestimonialCard.vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const testimonials = [
  {
    rate: 5,
    name: 'John Doe',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    rate: 4,
    name: 'Alex M.',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    rate: 5,
    name: 'Jessica R.',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    rate: 5,
    name: 'Michael S.',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  }
]

</script>
<template>
  <div
    class="flex flex-col gap-8 py-16 bg-blue-50 space-y-12"
  >
    <h1
      class="text-4xl font-bold text-center"
    >
      {{ t('testimonials.title') }}
    </h1>
    <div
      class="flex items-center justify-center gap-4 flex-wrap"
    >
      <TestimonialCard
        v-for="testimonial in testimonials"
        :key="testimonial.name"
        :rate="testimonial.rate"
        :name="testimonial.name"
        :description="testimonial.description"
      />
    </div>
  </div>
</template>