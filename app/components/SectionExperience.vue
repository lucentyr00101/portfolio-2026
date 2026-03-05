<script setup lang="ts">
const { el: headerRef, isVisible: headerVisible } = useReveal()
const { el: timelineRef, isVisible: timelineVisible } = useReveal()

interface Experience {
  role: string
  company: string
  period: string
  type: 'current' | 'past'
  highlights: string[]
}

const experiences: Experience[] = [
  {
    role: 'Full Stack Developer',
    company: 'Exponential Science Foundation',
    period: 'Jul 2024 — Present',
    type: 'current',
    highlights: [
      'Built and maintained responsive UI components using Vue.js and Nuxt.js, supporting Web3 features including Hedera blockchain integration and NFT/tokenization workflows',
      'Integrated RESTful APIs and MongoDB data layers for dynamic, data-driven frontend features',
      'Conducted performance audits and applied targeted optimizations, reducing page load times across multiple modules',
    ],
  },
  {
    role: 'Lead Frontend Developer',
    company: 'Trycansoft',
    period: 'Jan 2024 — Jul 2024',
    type: 'past',
    highlights: [
      'Built interactive, animation-rich UI features for an online gaming platform using React.js, without reliance on third-party UI libraries',
      'Led a team of 5 developers with 100% on-time feature delivery across all sprints, managing task allocation and code reviews',
      'Collaborated with designers to translate complex, visually rich mockups into polished, high-performance interfaces',
    ],
  },
  {
    role: 'Lead Frontend Developer',
    company: 'Morivy Data and Technology',
    period: 'Apr 2022 — Dec 2023',
    type: 'past',
    highlights: [
      'Owned frontend architecture decisions across multiple concurrent projects, ensuring scalable and maintainable codebases',
      'Mentored 5+ junior developers through code reviews, technical guidance, and structured feedback, accelerating team growth',
      'Integrated RESTful APIs and drove performance optimizations to improve application speed and user experience',
    ],
  },
  {
    role: 'Frontend Developer',
    company: 'Yondu Inc.',
    period: 'Nov 2019 — Apr 2022',
    type: 'past',
    highlights: [
      'Developed enterprise-grade UI components using Vue.js, Nuxt.js, and TypeScript across 3+ large-scale enterprise projects',
      'Contributed to a high-profile Globe Telecom partnership, integrating GCash as an in-app payment solution for a nationwide user base',
      'Integrated RESTful APIs and implemented performance optimizations to improve application speed and reliability',
    ],
  },
  {
    role: 'Web Developer',
    company: 'MyBusybee Inc.',
    period: 'Sep 2017 — Nov 2019',
    type: 'past',
    highlights: [
      'Built and maintained full-stack web applications using Laravel and Vue.js, and developed custom WordPress sites for multiple clients',
      'Designed and managed databases to support complex, data-driven application workflows',
      'Led end-to-end development of a procurement tracking system for a national government office, handling 100% of the build from database architecture to UI',
    ],
  },
]

const typeStyles: Record<Experience['type'], { dot: string; glow: string }> = {
  current: { dot: 'bg-indigo-500 border-indigo-400', glow: 'shadow-indigo-500/60' },
  past: { dot: 'bg-gray-800 border-white/20', glow: '' },
}
</script>

<template>
  <section id="experience" class="py-28 relative">
    <div class="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900/30 to-gray-950" />

    <UContainer class="relative z-10">
      <!-- Section header -->
      <div ref="headerRef" class="reveal flex flex-col items-center text-center mb-16" :class="{ 'is-visible': headerVisible }">
        <span class="text-indigo-400 text-xs font-bold uppercase tracking-[0.2em] mb-3">
          Where I've been
        </span>
        <h2 class="text-4xl sm:text-5xl font-bold text-white mb-4">Experience</h2>
        <p class="text-gray-400 max-w-lg">
          A career built on continuous learning, shipping products that matter, and leveling up
          every step of the way.
        </p>
      </div>

      <!-- Timeline -->
      <div ref="timelineRef" class="relative max-w-2xl mx-auto">
        <!-- Vertical line -->
        <div
          class="absolute left-[22px] top-3 bottom-3 w-px bg-gradient-to-b from-indigo-500/60 via-white/10 to-transparent"
        />

        <div class="space-y-8">
          <div
            v-for="(exp, index) in experiences"
            :key="index"
            class="relative pl-14 reveal"
            :class="{ 'is-visible': timelineVisible }"
            :style="{ transitionDelay: timelineVisible ? `${index * 80}ms` : '0ms' }"
          >
            <!-- Timeline dot -->
            <div
              class="absolute left-0 top-5 size-[18px] rounded-full border-2 flex items-center justify-center shadow-lg"
              :class="[typeStyles[exp.type].dot, typeStyles[exp.type].glow]"
            >
              <span
                v-if="exp.type === 'current'"
                class="size-2 rounded-full bg-white animate-ping absolute"
              />
            </div>

            <!-- Card -->
            <div
              class="group rounded-2xl bg-white/[0.03] border border-white/[0.08] p-6 hover:border-indigo-500/25 hover:bg-white/[0.05] transition-all duration-300"
            >
              <div class="flex flex-wrap items-start justify-between gap-3 mb-3">
                <div>
                  <h3 class="font-semibold text-white group-hover:text-indigo-300 transition-colors">
                    {{ exp.role }}
                  </h3>
                  <p class="text-indigo-400 text-sm font-medium mt-0.5">{{ exp.company }}</p>
                </div>
                <span
                  class="shrink-0 text-xs font-medium text-gray-600 bg-white/[0.04] border border-white/[0.08] px-2.5 py-1 rounded-md whitespace-nowrap"
                >
                  {{ exp.period }}
                </span>
              </div>

              <ul class="space-y-1.5">
                <li
                  v-for="highlight in exp.highlights"
                  :key="highlight"
                  class="flex items-start gap-2.5 text-sm text-gray-500"
                >
                  <UIcon
                    name="i-heroicons-chevron-right"
                    class="size-3.5 text-indigo-500 mt-0.5 shrink-0"
                  />
                  <span>{{ highlight }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </UContainer>
  </section>
</template>
