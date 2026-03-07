<template>
  <footer class="border-t border-white/5 py-8 mt-8">
    <UContainer>
      <div class="flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
        <p class="text-gray-600 text-sm">
          &copy; {{ new Date().getFullYear() }} Redilbert Ranz Sarcos. All rights reserved.
        </p>
        <p class="flex items-center gap-1.5 text-gray-600 text-sm">
          <UIcon name="i-heroicons-map-pin" class="size-3.5 shrink-0" />
          Manila, PH &middot; UTC+8 &middot; Open to Remote
        </p>
        <p class="text-gray-600 text-sm">
          Built with
          <span class="text-indigo-500 font-medium">Nuxt 4</span>
          +
          <span class="text-indigo-500 font-medium">Nuxt UI</span>
        </p>
      </div>
    </UContainer>
  </footer>
</template>
