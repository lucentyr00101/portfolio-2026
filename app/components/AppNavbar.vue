<script setup lang="ts">
interface NavItem {
  label: string
  href: string
}

const navItems: NavItem[] = [
  { label: 'About', href: '#hero' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

const mobileMenuOpen = ref(false)
const scrolled = ref(false)

function onScroll() {
  scrolled.value = window.scrollY > 20
}

onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 transition-[backdrop-filter,box-shadow,border-color] duration-300"
    :class="
      scrolled
        ? 'backdrop-blur-md bg-gray-950/90 border-b border-white/5 shadow-lg shadow-black/30'
        : 'bg-transparent'
    "
  >
    <UContainer>
      <nav class="flex items-center justify-between h-16">
        <!-- Logo -->
        <a
          href="#hero"
          class="text-xl font-bold tracking-tight hover:opacity-80 transition-opacity"
        >
          <span class="text-white">rrs</span><span class="text-indigo-400">.</span>
        </a>

        <!-- Desktop nav -->
        <ul class="hidden md:flex items-center gap-8">
          <li v-for="item in navItems" :key="item.href">
            <a
              :href="item.href"
              class="text-sm font-medium text-gray-400 hover:text-white transition-colors duration-200 relative group"
            >
              {{ item.label }}
              <span
                class="absolute -bottom-0.5 left-0 w-0 h-px bg-indigo-400 group-hover:w-full transition-all duration-300"
              />
            </a>
          </li>
        </ul>

        <!-- Resume CTA + mobile toggle -->
        <div class="flex items-center gap-3">
          <UButton
            href="/resume.pdf"
            target="_blank"
            size="sm"
            color="primary"
            variant="outline"
            class="hidden md:flex"
          >
            Resume
          </UButton>
          <button
            class="md:hidden text-gray-400 hover:text-white transition-colors p-1"
            :aria-label="mobileMenuOpen ? 'Close menu' : 'Open menu'"
            @click="mobileMenuOpen = !mobileMenuOpen"
          >
            <UIcon
              :name="mobileMenuOpen ? 'i-heroicons-x-mark' : 'i-heroicons-bars-3'"
              class="size-6"
            />
          </button>
        </div>
      </nav>

      <!-- Mobile menu -->
      <Transition name="slide-down">
        <div
          v-if="mobileMenuOpen"
          class="md:hidden border-t border-white/5 py-4 space-y-1"
        >
          <a
            v-for="item in navItems"
            :key="item.href"
            :href="item.href"
            class="block px-2 py-2.5 text-sm font-medium text-gray-400 hover:text-white transition-colors rounded-lg hover:bg-white/5"
            @click="mobileMenuOpen = false"
          >
            {{ item.label }}
          </a>
          <div class="pt-2">
            <UButton href="/resume.pdf" target="_blank" color="primary" size="sm" variant="outline" class="w-full">
              Resume
            </UButton>
          </div>
        </div>
      </Transition>
    </UContainer>
  </header>
</template>

<style scoped>
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.2s ease;
}

.slide-down-enter-from,
.slide-down-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
