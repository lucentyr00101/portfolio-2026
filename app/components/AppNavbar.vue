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
      scrolled || mobileMenuOpen
        ? 'backdrop-blur-md bg-gray-950/90 border-b border-white/5 shadow-lg shadow-black/30'
        : 'bg-transparent'
    "
  >
    <UContainer>
      <nav class="relative z-10 flex items-center justify-between h-16">
        <!-- Logo -->
        <a
          href="#hero"
          aria-label="Home"
          class="text-xl font-bold tracking-tight hover:opacity-80 transition-opacity font-display"
        >
          <span class="text-white">rrs</span><span class="text-indigo-400">.</span>
        </a>

        <!-- Desktop nav -->
        <ul class="hidden md:flex items-center gap-8">
          <li v-for="item in navItems" :key="item.href">
            <a
              :href="item.href"
              class="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200 relative group"
            >
              {{ item.label }}
              <span
                class="absolute -bottom-0.5 left-0 w-0 h-px bg-indigo-400 group-hover:w-full transition-all duration-300"
              />
            </a>
          </li>
        </ul>

        <!-- Mobile toggle -->
        <div class="flex items-center gap-3">
          <button
            class="md:hidden hamburger p-1"
            :class="{ 'is-open': mobileMenuOpen }"
            :aria-label="mobileMenuOpen ? 'Close menu' : 'Open menu'"
            @click="mobileMenuOpen = !mobileMenuOpen"
          >
            <span class="bar bar-top" />
            <span class="bar bar-mid" />
            <span class="bar bar-bot" />
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
            class="block px-2 py-2.5 text-sm font-medium text-gray-300 hover:text-white transition-colors rounded-lg hover:bg-white/5"
            @click="mobileMenuOpen = false"
          >
            {{ item.label }}
          </a>

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

/* Animated hamburger */
.hamburger {
  position: relative;
  width: 32px;
  height: 32px;
  cursor: pointer;
  color: rgb(156 163 175); /* gray-400 */
  transition: color 0.2s;
  flex-shrink: 0;
}
.hamburger:hover {
  color: white;
}

.bar {
  position: absolute;
  left: 5px; /* (32 - 22) / 2 */
  width: 22px;
  height: 2px;
  border-radius: 2px;
  background: currentColor;
  transform-origin: center;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1),
              opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Centers at y=10, y=16, y=22 — evenly spaced around the 32px midpoint */
.bar-top { top: 9px; }
.bar-mid { top: 15px; }
.bar-bot { top: 21px; }

/* Each outer bar travels 6px to meet at the container center (y=16) */
.is-open .bar-top { transform: translateY(6px) rotate(45deg); }
.is-open .bar-mid { opacity: 0; transform: scaleX(0); }
.is-open .bar-bot { transform: translateY(-6px) rotate(-45deg); }
</style>
