<script setup lang="ts">
useSeoMeta({
  title: 'Redilbert Ranz Sarcos | Senior Software Engineer',
  description:
    'Vue and Nuxt specialist with 8+ years shipping production apps across fintech, gaming, and Web3 — led teams of 5, owned frontend architecture, and delivered on time.',
  ogTitle: 'Redilbert Ranz Sarcos | Senior Software Engineer',
  ogDescription:
    'Vue and Nuxt specialist with 8+ years shipping production apps across fintech, gaming, and Web3 — led teams of 5, owned frontend architecture, and delivered on time.',
  ogUrl: 'https://portfolio-2026-jet-alpha.vercel.app/',
  ogType: 'website',
  ogImage: 'https://portfolio-2026-jet-alpha.vercel.app/og-image.png',
  ogLocale: 'en_US',
  ogSiteName: 'Redilbert Ranz Sarcos',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Redilbert Ranz Sarcos | Senior Software Engineer',
  twitterDescription:
    'Vue and Nuxt specialist with 8+ years shipping production apps across fintech, gaming, and Web3 — led teams of 5, owned frontend architecture, and delivered on time.',
  twitterImage: 'https://portfolio-2026-jet-alpha.vercel.app/og-image.png',
})

useHead({
  link: [{ rel: 'canonical', href: 'https://portfolio-2026-jet-alpha.vercel.app/' }],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Redilbert Ranz Sarcos',
        jobTitle: 'Senior Software Engineer',
        url: 'https://portfolio-2026-jet-alpha.vercel.app/',
        email: 'sarcosredilbertranz@gmail.com',
        sameAs: [
          'https://github.com/lucentyr00101',
          'https://www.linkedin.com/in/redilbert-ranz-sarcos/',
        ],
        knowsAbout: ['Vue.js', 'Nuxt.js', 'TypeScript', 'React.js', 'Node.js', 'MongoDB', 'Web3', 'Blockchain'],
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Manila',
          addressCountry: 'PH',
        },
      }),
    },
  ],
})
</script>

<template>
  <div>
    <SectionHero />
    <SectionStats />
    <SectionSkills />
    <SectionProjects />
    <SectionExperience />
    <SectionContact />
  </div>
</template>
