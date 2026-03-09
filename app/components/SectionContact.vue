<script setup lang="ts">
const { el: cardRef, isVisible: cardVisible } = useReveal()

const email = 'sarcosredilbertranz@gmail.com'
const copied = ref(false)

async function copyEmail() {
  await navigator.clipboard.writeText(email)
  copied.value = true
  setTimeout(() => { copied.value = false }, 2000)
}

interface ContactLink {
  label: string
  href: string
  icon: string
  external: boolean
}

const links: ContactLink[] = [
  {
    label: 'GitHub',
    href: 'https://github.com/lucentyr00101',
    icon: 'i-simple-icons-github',
    external: true,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/redilbert-ranz-sarcos/',
    icon: 'i-simple-icons-linkedin',
    external: true,
  },
  {
    label: 'Resume',
    href: '/resume.pdf',
    icon: 'i-heroicons-document-text',
    external: true,
  },
]
</script>

<template>
  <section id="contact" class="py-28 relative overflow-hidden">
    <!-- Dot grid -->
    <div class="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:32px_32px]" />
    <!-- Ambient orbs -->
    <div class="absolute -bottom-20 -left-40 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />
    <div class="absolute -top-20 -right-40 w-[400px] h-[400px] bg-violet-600/10 rounded-full blur-[120px] pointer-events-none" />
    <UContainer class="relative z-10">
      <div ref="cardRef" class="reveal relative max-w-2xl mx-auto" :class="{ 'is-visible': cardVisible }">
        <!-- Glow -->
        <div
          class="absolute inset-0 bg-indigo-600/5 rounded-3xl blur-3xl -z-10 scale-110"
        />

        <!-- Card -->
        <div class="rounded-3xl bg-white/[0.03] border border-white/[0.08] p-10 sm:p-14 text-center flex flex-col items-center gap-8">
          <!-- Section header -->
          <div class="flex flex-col items-center gap-5">
            <p class="text-indigo-400 text-xs font-bold uppercase tracking-[0.2em]">
              Say hello
            </p>
            <h2 class="text-4xl sm:text-5xl font-bold text-white">
              Let's Work Together
            </h2>
            <p class="text-gray-400 text-lg leading-relaxed max-w-lg">
              Open to new opportunities, interesting projects, or just a great tech conversation.
              Copy my email or connect on LinkedIn — I typically respond within 24 hours.
            </p>
          </div>

          <!-- Email CTA -->
          <UButton
            size="xl"
            :icon="copied ? 'i-heroicons-check' : 'i-heroicons-clipboard'"
            :color="copied ? 'success' : 'primary'"
            class="cursor-pointer"
            @click="copyEmail"
          >
            {{ copied ? 'Email Copied!' : 'Copy Email Address' }}
          </UButton>

          <!-- Divider -->
          <div class="flex items-center gap-3 w-full">
            <div class="flex-1 h-px bg-white/[0.06]" />
            <span class="text-gray-700 text-xs uppercase tracking-widest">or find me on</span>
            <div class="flex-1 h-px bg-white/[0.06]" />
          </div>

          <!-- Social links -->
          <div class="flex flex-wrap items-center justify-center gap-3">
            <a
              v-for="link in links"
              :key="link.label"
              :href="link.href"
              :target="link.external ? '_blank' : undefined"
              :rel="link.external ? 'noopener noreferrer' : undefined"
              class="flex items-center gap-2.5 px-5 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-gray-400 hover:text-white hover:border-indigo-500/30 hover:bg-white/[0.08] transition-all duration-200 text-sm font-medium group"
            >
              <UIcon
                :name="link.icon"
                class="size-4.5 group-hover:text-indigo-400 transition-colors"
              />
              {{ link.label }}
            </a>
          </div>
        </div>
      </div>
    </UContainer>
  </section>
</template>
