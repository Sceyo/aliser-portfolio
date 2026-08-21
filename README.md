# Francis Aliser — Portfolio

Personal portfolio for Francis Aliser, a Cebu-based full-stack developer and software engineer. The site highlights production-oriented work in retail operations, payment integrations, automation, cloud databases, and real-time applications.

## Highlights

- Detailed project case studies with responsibilities, results, technology stacks, and galleries
- Work experience, technical skills, certifications, and downloadable résumé
- Responsive, accessible, and static-first interface
- Search and social metadata, JSON-LD structured data, sitemap, and robots configuration
- Privacy-conscious Vercel Web Analytics with résumé and project interaction events

## Tech stack

- [Astro](https://astro.build/) 6
- [Tailwind CSS](https://tailwindcss.com/) 4
- TypeScript
- [Motion](https://motion.dev/) for progressive animation and interaction
- Vercel Web Analytics
- Astro Sitemap

## Local setup

### Prerequisites

- Node.js 22 or later
- pnpm 10.18.2 or a compatible pnpm 10 release

### Install and run

```bash
git clone https://github.com/Sceyo/aliser-portfolio.git
cd aliser-portfolio
pnpm install
pnpm dev
```

The development server runs at `http://localhost:4321` by default.

## Commands

| Command        | Purpose                                             |
| -------------- | --------------------------------------------------- |
| `pnpm dev`     | Start the local development server                  |
| `pnpm build`   | Type-check and create a production build in `dist/` |
| `pnpm preview` | Preview the production build locally                |
| `pnpm astro`   | Run Astro CLI commands                              |

## Content and configuration

Portfolio content and site metadata are maintained in `src/config/index.ts`. Reusable page sections live in `src/components`, while static assets such as the résumé, project screenshots, and social image live in `public`.

## Analytics

The site uses Vercel Web Analytics. After deployment, enable Web Analytics in the Vercel project dashboard. Page views are collected anonymously without cookies. Named interaction events are included for résumé downloads, project expansions, live-project visits, and source-code visits; custom-event availability depends on the Vercel plan.

## License

This project is available under the terms in [LICENSE](LICENSE).
