<script setup lang="ts">
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
  <section id="hero" class="relative min-h-screen flex items-center overflow-hidden">
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
        <!-- Status badge -->
        <div
          class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium mb-10"
        >
          <span class="size-1.5 rounded-full bg-indigo-400 animate-pulse" />
          Available for new opportunities
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
