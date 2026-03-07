<script setup lang="ts">
// --- Mouse-tracking gradient ---
const heroRef = ref<HTMLElement>()
const targetX = ref(50)
const targetY = ref(50)
const currentX = ref(50)
const currentY = ref(50)
const LERP_FACTOR = 0.06
let rafId: number

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t
}

function animate() {
  currentX.value = lerp(currentX.value, targetX.value, LERP_FACTOR)
  currentY.value = lerp(currentY.value, targetY.value, LERP_FACTOR)
  rafId = requestAnimationFrame(animate)
}

function onMouseMove(e: MouseEvent) {
  if (!heroRef.value) return
  const rect = heroRef.value.getBoundingClientRect()
  targetX.value = ((e.clientX - rect.left) / rect.width) * 100
  targetY.value = ((e.clientY - rect.top) / rect.height) * 100
}

function onMouseLeave() {
  targetX.value = 50
  targetY.value = 50
}

onMounted(() => {
  animate()
  heroRef.value?.addEventListener('mousemove', onMouseMove)
  heroRef.value?.addEventListener('mouseleave', onMouseLeave)
})

onUnmounted(() => {
  cancelAnimationFrame(rafId)
  heroRef.value?.removeEventListener('mousemove', onMouseMove)
  heroRef.value?.removeEventListener('mouseleave', onMouseLeave)
})

// --- Typewriter ---
const roles = [
  'Senior Software Engineer',
  'Frontend Specialist',
  'Full-Stack Developer',
]

const displayText = ref('')
const currentRole = ref(0)
const isDeleting = ref(false)

let timeout: ReturnType<typeof setTimeout>

function tick() {
  const current = roles[currentRole.value]!

  displayText.value = isDeleting.value
    ? current.substring(0, displayText.value.length - 1)
    : current.substring(0, displayText.value.length + 1)

  let delay = isDeleting.value ? 50 : 80

  if (!isDeleting.value && displayText.value === current) {
    delay = 2200
    isDeleting.value = true
  } else if (isDeleting.value && displayText.value === '') {
    isDeleting.value = false
    currentRole.value = (currentRole.value + 1) % roles.length
    delay = 400
  }

  timeout = setTimeout(tick, delay)
}

onMounted(() => tick())
onUnmounted(() => clearTimeout(timeout))
</script>

<template>
  <section ref="heroRef" id="hero" class="relative min-h-screen flex items-center overflow-hidden">
    <!-- Interactive mouse-following gradient -->
    <div
      class="absolute inset-0 pointer-events-none"
      :style="{
        background: `radial-gradient(700px circle at ${currentX}% ${currentY}%, rgba(99,102,241,0.12), transparent 70%)`
      }"
    />

    <!-- Dot grid background -->
    <div
      class="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:32px_32px]"
    />

    <!-- Ambient gradient orbs -->
    <div
      class="absolute -top-20 -left-40 w-[500px] h-[500px] bg-indigo-600/15 rounded-full blur-[140px] pointer-events-none"
    />
    <div
      class="absolute bottom-0 -right-40 w-[500px] h-[500px] bg-violet-600/15 rounded-full blur-[140px] pointer-events-none"
    />

    <UContainer class="relative z-10 pt-20 pb-16">
      <div class="max-w-4xl">
        <!-- Status badges -->
        <div class="flex flex-wrap items-center gap-3 mb-10">
          <div
            class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium"
          >
            <span class="size-1.5 rounded-full bg-indigo-400 animate-pulse" />
            Available for new opportunities
          </div>
          <div
            class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-gray-400 text-sm"
          >
            <UIcon name="i-heroicons-map-pin" class="size-3.5 shrink-0" />
            Manila, PH &middot; UTC+8
          </div>
        </div>

        <!-- Name -->
        <h1 class="font-extrabold tracking-tight leading-[1.05] mb-5">
          <span class="block text-6xl sm:text-7xl lg:text-8xl text-white">Redilbert</span>
          <span
            class="block text-6xl sm:text-7xl lg:text-8xl bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-400 bg-clip-text text-transparent"
          >
            Ranz Sarcos
          </span>
        </h1>

        <!-- Animated role -->
        <div class="flex items-center gap-2 text-xl sm:text-2xl text-gray-400 mb-7 h-9">
          <span>{{ displayText }}</span>
          <span class="inline-block w-0.5 h-6 bg-indigo-400 animate-[blink_1s_step-end_infinite]" />
        </div>

        <!-- Bio -->
        <p class="text-gray-400 text-lg leading-relaxed max-w-2xl mb-10">
          I craft
          <span class="text-white font-semibold">performant, scalable web applications</span>
          with modern technologies. With 8+ years of experience across startups, agencies, and
          enterprises, I bring technical depth, clean architecture, and a sharp focus on shipping
          great products.
        </p>

        <!-- CTAs -->
        <div class="flex flex-wrap items-center gap-4 mb-14">
          <UButton href="#projects" color="primary" size="lg" icon="i-heroicons-folder-open">
            View Projects
          </UButton>
          <UButton href="#contact" color="primary" size="lg" variant="ghost" trailing-icon="i-heroicons-arrow-right">
            Get in Touch
          </UButton>
        </div>

        <!-- Social links -->
        <div class="flex items-center gap-6">
          <a
            href="https://github.com/lucentyr00101"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center gap-2 text-sm text-gray-500 hover:text-white transition-colors group"
          >
            <UIcon
              name="i-heroicons-code-bracket-square"
              class="size-5 group-hover:text-indigo-400 transition-colors"
            />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/redilbert-ranz-sarcos/"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center gap-2 text-sm text-gray-500 hover:text-white transition-colors group"
          >
            <UIcon
              name="i-heroicons-briefcase"
              class="size-5 group-hover:text-indigo-400 transition-colors"
            />
            LinkedIn
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            class="flex items-center gap-2 text-sm text-gray-500 hover:text-white transition-colors group"
          >
            <UIcon
              name="i-heroicons-document-text"
              class="size-5 group-hover:text-indigo-400 transition-colors"
            />
            Resume
          </a>
        </div>
      </div>
    </UContainer>

    <!-- Scroll indicator -->
    <div class="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
      <span class="text-[10px] text-gray-700 uppercase tracking-[0.2em] font-medium">Scroll</span>
      <div class="w-px h-10 bg-gradient-to-b from-gray-600 to-transparent" />
    </div>
  </section>
</template>

<style scoped>
@keyframes blink {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}
</style>
