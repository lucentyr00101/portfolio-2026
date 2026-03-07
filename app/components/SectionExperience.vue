<script setup lang="ts">
const { el: headerRef, isVisible: headerVisible } = useReveal()
const { el: timelineRef, isVisible: timelineVisible } = useReveal()

interface Project {
  name: string
  description: string
  stack: string[]
}

interface Experience {
  role: string
  company: string
  period: string
  type: 'current' | 'past'
  highlights: string[]
  projects?: Project[]
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
    projects: [
      {
        name: 'Nodiens',
        description: 'Crypto and stablecoin market tracker with decentralized token listings, Reddit/Telegram trend analysis, and mood/trust indices per currency.',
        stack: ['Nuxt 4', 'Nuxt UI', 'Chart.js', 'TypeScript', 'REST APIs'],
      },
      {
        name: 'DAO Accounting',
        description: 'Accounting management platform for DAOs with ledgers, journals, and full financial document workflows.',
        stack: ['Nuxt 4', 'Nuxt UI', 'TypeScript'],
      },
      {
        name: 'Education Certification',
        description: 'Blockchain-powered platform for generating and distributing certificates to learners via the Hedera network.',
        stack: ['Nuxt 4', 'Nuxt UI', 'Chart.js', 'MongoDB', 'Hedera Blockchain', 'TypeScript'],
      },
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
    projects: [
      {
        name: 'Onetop',
        description: 'Feature-rich online gaming platform with animation-heavy interfaces built without third-party UI libraries.',
        stack: ['React', 'TypeScript', 'CSS Animations', 'REST APIs'],
      },
      {
        name: 'Onetop Rebrands',
        description: 'Multiple white-label reskins of the Onetop platform tailored for different markets and operators.',
        stack: ['React', 'TypeScript'],
      },
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
    projects: [
      {
        name: 'Easygetapp',
        description: 'Malaysia-focused app marketplace for discovering and distributing mobile applications.',
        stack: ['React', 'Ant Design', 'TypeScript', 'REST APIs'],
      },
      {
        name: 'EZPay / Opay / MPay / FPay',
        description: 'Suite of four payment portals serving the Malaysian digital payments market.',
        stack: ['React', 'Ant Design', 'TypeScript', 'REST APIs'],
      },
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
    projects: [
      {
        name: 'Ives PH',
        description: 'Automated voice call-out platform for enterprise-scale outbound communications.',
        stack: ['Vue.js', 'Nuxt.js', 'TypeScript', 'REST APIs'],
      },
      {
        name: 'Loadup',
        description: "Load disbursement application for Globe Telecom's nationwide user base with GCash payment integration.",
        stack: ['Vue.js', 'Nuxt.js', 'TypeScript', 'REST APIs', 'GCash Integration'],
      },
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
    projects: [
      {
        name: 'Procurement Monitoring System',
        description: 'End-to-end procurement tracking system for a national government agency, covering full CRUD workflows and reporting.',
        stack: ['Vue.js', 'Laravel', 'MySQL', 'REST APIs'],
      },
      {
        name: 'Government Websites',
        description: 'Custom websites for multiple government entities with CMS capabilities.',
        stack: ['WordPress', 'PHP', 'MySQL'],
      },
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

              <div v-if="exp.projects?.length" class="mt-4 pt-4 border-t border-white/[0.06]">
                <p class="text-[10px] font-bold uppercase tracking-[0.18em] text-gray-600 mb-3">Projects</p>
                <div class="space-y-3.5">
                  <div v-for="project in exp.projects" :key="project.name">
                    <p class="text-sm font-medium text-gray-300">{{ project.name }}</p>
                    <p class="text-xs text-gray-500 mt-0.5 mb-2 leading-relaxed">{{ project.description }}</p>
                    <div class="flex flex-wrap gap-1.5">
                      <span
                        v-for="tech in project.stack"
                        :key="tech"
                        class="px-2 py-0.5 rounded-md bg-white/[0.04] border border-white/[0.06] text-gray-500 text-[11px] font-medium"
                      >
                        {{ tech }}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </UContainer>
  </section>
</template>
