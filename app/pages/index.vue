<script setup lang="ts">
useSeoMeta({
  title: 'Redilbert Ranz Sarcos | Senior Software Engineer',
  description:
    'Portfolio of Redilbert Ranz Sarcos — Senior Software Engineer with 8+ years building performant, scalable web applications.',
  ogTitle: 'Redilbert Ranz Sarcos | Senior Software Engineer',
  ogDescription:
    'Portfolio of Redilbert Ranz Sarcos — Senior Software Engineer with 8+ years building performant, scalable web applications.',
  ogUrl: 'https://portfolio-2026-jet-alpha.vercel.app/',
  ogType: 'website',
  ogImage: 'https://portfolio-2026-jet-alpha.vercel.app/og-image.png',
  ogLocale: 'en_US',
  ogSiteName: 'Redilbert Ranz Sarcos',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Redilbert Ranz Sarcos | Senior Software Engineer',
  twitterDescription:
    'Portfolio of Redilbert Ranz Sarcos — Senior Software Engineer with 8+ years building performant, scalable web applications.',
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
