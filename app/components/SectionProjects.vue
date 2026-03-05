<script setup lang="ts">
const { el: headerRef, isVisible: headerVisible } = useReveal()
const { el: gridRef, isVisible: gridVisible } = useReveal()
const { el: noticeRef, isVisible: noticeVisible } = useReveal()
const { el: ctaRef, isVisible: ctaVisible } = useReveal()

interface Project {
  title: string
  description: string
  tags: string[]
  gradient: string
  github: string
  live?: string
}

const projects: Project[] = [
  {
    title: 'Performance Monitoring Tool — UI',
    description:
      'A full-featured employee performance management platform with 360° feedback, OKR tracking, review cycles, and real-time analytics dashboards. Features a centralized notification system where stores handle all CRUD feedback automatically.',
    tags: ['Nuxt 4', 'Vue 3', 'TypeScript', 'Pinia', 'Nuxt UI', 'Tailwind CSS', 'Vitest', 'Playwright', 'Bun'],
    gradient: 'from-indigo-600/25 to-violet-600/25',
    github: 'https://github.com/lucentyr00101/performance-monitoring-tool-ui',
  },
  {
    title: 'Performance Monitoring Tool — API',
    description:
      'Backend API powering the performance monitoring platform. Covers authentication, employee management, OKRs, department-specific review forms, analytics, and role-based dashboards — fully containerized with Docker.',
    tags: ['TypeScript', 'Node.js', 'Bun', 'Docker', 'MongoDB', 'REST API'],
    gradient: 'from-violet-600/25 to-purple-600/25',
    github: 'https://github.com/lucentyr00101/performance-monitoring-tool-api',
  },
]
</script>

<template>
  <section id="projects" class="py-28">
    <UContainer>
      <!-- Section header -->
      <div ref="headerRef" class="reveal flex flex-col items-center text-center mb-16" :class="{ 'is-visible': headerVisible }">
        <span class="text-indigo-400 text-xs font-bold uppercase tracking-[0.2em] mb-3">
          What I've built
        </span>
        <h2 class="text-4xl sm:text-5xl font-bold text-white mb-4">Projects</h2>
        <p class="text-gray-400 max-w-lg">
          Public work I can share. Most of my professional projects are proprietary and
          company-owned, but the craft behind them is the same.
        </p>
      </div>

      <!-- Public projects -->
      <div ref="gridRef" class="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
        <article
          v-for="(project, index) in projects"
          :key="project.title"
          class="reveal group flex flex-col rounded-2xl bg-white/[0.03] border border-white/[0.08] overflow-hidden hover:border-indigo-500/30 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-indigo-500/5 transition-all duration-300"
          :class="{ 'is-visible': gridVisible }"
          :style="{ transitionDelay: gridVisible ? `${index * 100}ms` : '0ms' }"
        >
          <!-- Card header gradient -->
          <div class="h-36 bg-gradient-to-br relative shrink-0" :class="project.gradient">
            <div
              class="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:20px_20px]"
            />
            <div class="absolute top-3 right-3">
              <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-400 text-xs font-semibold">
                <span class="size-1.5 rounded-full bg-amber-400 animate-pulse" />
                In Progress
              </span>
            </div>
          </div>

          <!-- Card body -->
          <div class="flex flex-col flex-1 p-6">
            <h3
              class="text-base font-semibold text-white mb-2.5 group-hover:text-indigo-300 transition-colors"
            >
              {{ project.title }}
            </h3>
            <p class="text-gray-400 text-sm leading-relaxed mb-5 flex-1">
              {{ project.description }}
            </p>

            <!-- Tags -->
            <div class="flex flex-wrap gap-1.5 mb-5">
              <span
                v-for="tag in project.tags"
                :key="tag"
                class="px-2.5 py-0.5 rounded-md bg-white/[0.05] border border-white/[0.08] text-gray-400 text-xs font-medium"
              >
                {{ tag }}
              </span>
            </div>

            <!-- Links -->
            <a
              :href="project.github"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center gap-1.5 text-xs font-medium text-gray-500 hover:text-white transition-colors w-fit"
            >
              <UIcon name="i-heroicons-code-bracket" class="size-4" />
              View Source
            </a>
          </div>
        </article>
      </div>

      <!-- Private work notice -->
      <div ref="noticeRef" class="reveal mt-8 max-w-5xl mx-auto" :class="{ 'is-visible': noticeVisible }">
        <div
          class="rounded-2xl border border-white/[0.06] bg-white/[0.02] px-6 py-5 flex flex-col sm:flex-row items-start sm:items-center gap-4"
        >
          <div class="shrink-0 size-9 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center">
            <UIcon name="i-heroicons-lock-closed" class="size-4 text-indigo-400" />
          </div>
          <div>
            <p class="text-sm font-medium text-gray-300">Most of my work is under NDA</p>
            <p class="text-sm text-gray-500 mt-0.5">
              Projects at Exponential Science Foundation, Trycansoft, Morivy, Yondu, and MyBusybee
              are proprietary. I'm happy to discuss them in detail during a conversation.
            </p>
          </div>
          <UButton
            href="#contact"
            color="primary"
            variant="outline"
            size="sm"
            class="shrink-0 sm:ml-auto"
          >
            Let's Talk
          </UButton>
        </div>
      </div>

      <!-- GitHub CTA -->
      <div ref="ctaRef" class="reveal mt-8 text-center" :class="{ 'is-visible': ctaVisible }">
        <UButton
          href="https://github.com/lucentyr00101"
          target="_blank"
          color="primary"
          variant="ghost"
          trailing-icon="i-heroicons-arrow-top-right-on-square"
        >
          View GitHub Profile
        </UButton>
      </div>
    </UContainer>
  </section>
</template>
