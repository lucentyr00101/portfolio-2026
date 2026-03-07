<script setup lang="ts">
const { el: statsRef, isVisible } = useReveal()

const stats = [
  { value: '8+', label: 'Years of Experience' },
  { value: '5', label: 'Companies Worked At' },
  { value: '15+', label: 'Projects Shipped' },
  { value: 'Open to\nRemote', label: 'Availability' },
]
</script>

<template>
  <div
    ref="statsRef"
    class="border-y border-white/[0.06] transition-all duration-700"
    :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
  >
    <UContainer>
      <div class="grid grid-cols-2 sm:grid-cols-4 divide-x divide-white/[0.06] py-10">
        <div
          v-for="stat in stats"
          :key="stat.label"
          class="flex flex-col items-center justify-center gap-1 px-4 py-4 text-center"
        >
          <span class="text-3xl font-bold text-indigo-400 whitespace-pre-line leading-tight">{{ stat.value }}</span>
          <span class="text-xs text-gray-500 font-medium tracking-wide uppercase">{{ stat.label }}</span>
        </div>
      </div>
    </UContainer>
  </div>
</template>
