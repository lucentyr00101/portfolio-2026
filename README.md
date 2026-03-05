# Redilbert Ranz Sarcos — Portfolio

Personal portfolio site built with Nuxt 4 and Nuxt UI 4.

## Tech Stack

- [Nuxt 4](https://nuxt.com) — framework
- [Nuxt UI 4](https://ui.nuxt.com) — component library
- [Tailwind CSS 4](https://tailwindcss.com) — styling
- [TypeScript](https://www.typescriptlang.org) — type safety
- [Bun](https://bun.sh) — package manager & runtime

## Getting Started

```bash
# Install dependencies
bun install

# Start development server
bun run dev

# Build for production
bun run build

# Preview production build
bun run preview
```

## Project Structure

```
app/
  app.vue                    # Root component (UApp wrapper)
  app.config.ts              # Nuxt UI theme (primary: indigo)
  assets/css/main.css        # Global styles, scroll behavior
  layouts/default.vue        # Navbar + Footer shell
  pages/index.vue            # Single-page entry point
  components/
    AppNavbar.vue            # Fixed navigation bar
    AppFooter.vue            # Footer
    SectionHero.vue          # Hero with typewriter effect
    SectionSkills.vue        # Tech stack by category
    SectionProjects.vue      # Public projects + private work notice
    SectionExperience.vue    # Work history timeline
    SectionContact.vue       # Contact card with email + social links
```

## Updating Content

| What | File | What to change |
|---|---|---|
| Name / bio / tagline | `SectionHero.vue` | `roles` array, bio paragraph |
| Skills | `SectionSkills.vue` | `categories` array |
| Projects | `SectionProjects.vue` | `projects` array |
| Work experience | `SectionExperience.vue` | `experiences` array |
| Email | `SectionContact.vue` | `href` on the email button |
| Resume | `public/resume.pdf` | Replace the file |
| Social links | `SectionHero.vue`, `SectionContact.vue` | `href` attributes |

## Deployment

Connect the repo to [Vercel](https://vercel.com) for automatic deployments, or generate a static build manually:

```bash
bun run generate
```

Then deploy the `.output/public` directory to any static host.
