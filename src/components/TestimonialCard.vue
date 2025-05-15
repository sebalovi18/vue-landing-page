<script setup lang="ts">
import StarIcon from '@/components/icons/StarIcon.vue'
interface Props {
  rate: number
  name: string
  description: string
}

const props = defineProps<Props>()
</script>
<template>
  <div
    class="flex flex-col gap-4 border rounded-lg p-4 w-[300px] shadow-md bg-white hover:bg-gray-50"
  >
    <h1
      class="text-lg font-bold"
    >
      {{ props.name }}
    </h1>
    <p
      class="text-xs"
    >
      {{ props.description }}
    </p>
    <div
      class="flex items-center gap-1"
    >
      <StarIcon
        v-for="n in 5"
        :key="n"
        class="size-4"
        :class="{ 'stroke-yellow-500 fill-yellow-500': n <= props.rate }"
      />
    </div>
  </div>
</template>