<template>
  <footer class="border-t border-white/[0.08] py-8 mt-8">
    <UContainer>
      <div class="flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
        <p class="text-gray-600 text-sm">
          &copy; {{ new Date().getFullYear() }} Redilbert Ranz Sarcos. All rights reserved.
        </p>
        <p class="flex items-center gap-1.5 text-gray-600 text-sm">
          <UIcon name="i-heroicons-map-pin" class="size-3.5 shrink-0" />
          Manila, PH &middot; UTC+8 &middot; Remote &middot; Full-time &amp; Contract
        </p>
        <div class="flex items-center gap-4 text-sm">
          <p class="text-gray-600">
            Built with
            <span class="text-indigo-500 font-medium">Nuxt 4</span>
            +
            <span class="text-indigo-500 font-medium">Nuxt UI</span>
          </p>
          <a href="#hero" class="text-gray-600 hover:text-gray-400 transition-colors">
            ↑ Back to top
          </a>
        </div>
      </div>
    </UContainer>
  </footer>
</template>
