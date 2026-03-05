<template>
  <footer class="border-t border-white/5 py-8 mt-8">
    <UContainer>
      <div class="flex flex-col sm:flex-row items-center justify-between gap-3">
        <p class="text-gray-600 text-sm">
          &copy; {{ new Date().getFullYear() }} Redilbert Ranz Sarcos. All rights reserved.
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
