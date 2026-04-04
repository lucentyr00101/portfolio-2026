<script setup lang="ts">
const { el: statsRef, isVisible } = useReveal()

const stats = [
  { value: '8+', label: 'Years of Experience', numeric: 8, suffix: '+' },
  { value: '5', label: 'Companies Worked At', numeric: 5, suffix: '' },
  { value: '15+', label: 'Projects Delivered', numeric: 15, suffix: '+' },
  { value: 'Remote · Full-time\nor Contract', label: 'Availability' },
]

const displayValues = ref(stats.map(s => s.numeric !== undefined ? `0${s.suffix ?? ''}` : s.value))

const prefersReducedMotion = ref(false)
onMounted(() => {
  prefersReducedMotion.value = window.matchMedia('(prefers-reduced-motion: reduce)').matches
})

watch(isVisible, (visible) => {
  if (!visible) return
  // Delay until after the reveal fade-in (duration-700) completes
  setTimeout(() => {
    stats.forEach((stat, i) => {
      if (stat.numeric === undefined) return
      const { numeric: target, suffix = '' } = stat
      if (prefersReducedMotion.value) {
        displayValues.value[i] = `${target}${suffix}`
        return
      }
      const start = performance.now()
      function update(now: number) {
        const progress = Math.min((now - start) / 800, 1)
        const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress)
        displayValues.value[i] = `${Math.round(eased * target)}${suffix}`
        if (progress < 1) requestAnimationFrame(update)
      }
      requestAnimationFrame(update)
    })
  }, 700)
})
</script>

<template>
  <div
    ref="statsRef"
    role="region"
    aria-label="Career statistics"
    class="border-y border-white/[0.06] transition-all duration-700"
    :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
  >
    <UContainer>
      <div class="grid grid-cols-2 sm:grid-cols-4 divide-x divide-white/[0.06] py-10">
        <div
          v-for="(stat, index) in stats"
          :key="stat.label"
          class="flex flex-col items-center justify-center gap-1 px-4 py-4 text-center"
        >
          <span class="text-3xl font-bold text-indigo-400 whitespace-pre-line leading-tight">{{ displayValues[index] }}</span>
          <span class="text-xs text-gray-500 font-medium tracking-wide uppercase">{{ stat.label }}</span>
        </div>
      </div>
    </UContainer>
  </div>
</template>
