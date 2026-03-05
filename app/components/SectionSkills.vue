<script setup lang="ts">
interface Category {
  name: string
  color: 'indigo' | 'violet' | 'purple' | 'pink'
  skills: string[]
}

const categories: Category[] = [
  {
    name: 'Frontend',
    color: 'indigo',
    skills: ['Vue.js', 'Nuxt.js', 'React.js', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS', 'Pinia', 'Vuex'],
  },
  {
    name: 'Backend',
    color: 'violet',
    skills: ['Laravel', 'Node.js', 'MongoDB'],
  },
  {
    name: 'Tools & Platforms',
    color: 'purple',
    skills: ['Git', 'REST APIs', 'WordPress', 'Docker', 'Web3 (Hedera, NFTs)', 'Figma'],
  },
  {
    name: 'Practices',
    color: 'pink',
    skills: ['Agile / Scrum', 'Code Review', 'Performance Optimization', 'UI/UX Collaboration'],
  },
]

const colorBorder: Record<Category['color'], string> = {
  indigo: 'border-indigo-500/25',
  violet: 'border-violet-500/25',
  purple: 'border-purple-500/25',
  pink: 'border-pink-500/25',
}

const colorText: Record<Category['color'], string> = {
  indigo: 'text-indigo-400',
  violet: 'text-violet-400',
  purple: 'text-purple-400',
  pink: 'text-pink-400',
}

const colorTag: Record<Category['color'], string> = {
  indigo: 'bg-indigo-500/10 border-indigo-500/20 text-indigo-300 hover:bg-indigo-500/20',
  violet: 'bg-violet-500/10 border-violet-500/20 text-violet-300 hover:bg-violet-500/20',
  purple: 'bg-purple-500/10 border-purple-500/20 text-purple-300 hover:bg-purple-500/20',
  pink: 'bg-pink-500/10 border-pink-500/20 text-pink-300 hover:bg-pink-500/20',
}
</script>

<template>
  <section id="skills" class="py-28 relative">
    <!-- Section gradient -->
    <div class="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900/40 to-gray-950" />

    <UContainer class="relative z-10">
      <!-- Section header -->
      <div class="flex flex-col items-center text-center mb-16">
        <span class="text-indigo-400 text-xs font-bold uppercase tracking-[0.2em] mb-3">
          What I work with
        </span>
        <h2 class="text-4xl sm:text-5xl font-bold text-white mb-4">Tech Stack</h2>
        <p class="text-gray-400 max-w-lg">
          8+ years of hands-on experience spanning the full modern web development spectrum.
        </p>
      </div>

      <!-- Categories grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div
          v-for="category in categories"
          :key="category.name"
          class="rounded-2xl bg-white/[0.03] border backdrop-blur-sm p-6 hover:bg-white/[0.05] transition-colors duration-300"
          :class="colorBorder[category.color]"
        >
          <h3
            class="text-xs font-bold uppercase tracking-[0.18em] mb-5"
            :class="colorText[category.color]"
          >
            {{ category.name }}
          </h3>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="skill in category.skills"
              :key="skill"
              class="px-3 py-1.5 rounded-lg border text-sm font-medium transition-colors duration-200 cursor-default"
              :class="colorTag[category.color]"
            >
              {{ skill }}
            </span>
          </div>
        </div>
      </div>
    </UContainer>
  </section>
</template>
