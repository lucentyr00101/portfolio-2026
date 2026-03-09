<template>
  <div class="min-h-screen bg-gray-950 text-white antialiased">
    <a
      href="#main-content"
      class="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-indigo-600 focus:text-white focus:text-sm focus:font-medium"
    >
      Skip to main content
    </a>
    <AppNavbar />
    <main id="main-content">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>
