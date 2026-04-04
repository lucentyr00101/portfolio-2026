<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps<{ error: NuxtError }>()

const is404 = computed(() => props.error.statusCode === 404)

const title = computed(() => is404.value ? 'Page not found' : 'Something went wrong')
const description = computed(() =>
  is404.value
    ? 'The page you\'re looking for doesn\'t exist or has been moved.'
    : 'An unexpected error occurred. Try reloading the page.'
)

function goHome() {
  clearError({ redirect: '/' })
}

function reload() {
  clearError()
}
</script>

<template>
  <div class="min-h-screen bg-gray-950 flex items-center justify-center px-6 font-sans">
    <!-- Ambient orbs -->
    <div class="absolute -top-20 -left-40 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />
    <div class="absolute -bottom-20 -right-40 w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[140px] pointer-events-none" />

    <div class="relative z-10 text-center max-w-lg">
      <!-- Decorative error code -->
      <p class="text-[10rem] sm:text-[14rem] font-extrabold text-white/[0.04] leading-none select-none font-display" aria-hidden="true">
        {{ error.statusCode }}
      </p>

      <div class="-mt-8 sm:-mt-12 space-y-4">
        <h1 class="text-3xl sm:text-4xl font-bold text-white font-display">
          {{ title }}
        </h1>
        <p class="text-gray-400 text-lg leading-relaxed">
          {{ description }}
        </p>
      </div>

      <div class="mt-10 flex flex-wrap items-center justify-center gap-4">
        <UButton size="lg" color="primary" icon="i-heroicons-home" @click="goHome">
          Back to Home
        </UButton>
        <UButton v-if="!is404" size="lg" color="neutral" variant="ghost" icon="i-heroicons-arrow-path" @click="reload">
          Reload
        </UButton>
      </div>
    </div>
  </div>
</template>
