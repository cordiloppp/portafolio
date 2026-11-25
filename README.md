# Portafolio — Jonathan Molinero

**En vivo:** https://portafolio-inky-theta-84.vercel.app

Portafolio profesional construido con un enfoque **SSG-first**: contenido en
archivos, interactividad en islas, todo prerenderizado en build.

## Stack

Next.js 15 (App Router) · React 19 · TypeScript (estricto) · Tailwind CSS v4 ·
shadcn/ui · Motion · Vercel.

## Arquitectura

- **Server Components por defecto.** Solo `navbar`, `theme-toggle` y `reveal`
  son Client Components (las "islas" de interactividad).
- **Contenido en `content/projects/*.mdx`.** Frontmatter validado con Zod en
  read-time (`lib/projects.ts`, patrón Repository). Añadir un proyecto = crear
  un `.mdx`; no se toca ningún componente.
- **SEO:** Metadata API, JSON-LD (`Person` + `CreativeWork`), `sitemap.ts`,
  `robots.ts` y `opengraph-image.tsx` generados automáticamente.
- **Tema claro/oscuro** vía `next-themes` + CSS variables (sin FOUC).
- **Reveal-on-scroll** con Motion, con fallback `<noscript>` que garantiza que
  el contenido es visible sin JS (protege SEO/LCP).

```
app/                 Rutas, layouts, metadata (sitemap, robots, og)
components/
  ui/                Primitivos shadcn (button, badge, card)
  sections/          Una sección = un archivo (Server)
  layout/            Navbar, footer, theme toggle
  motion/            Reveal (Motion)
content/projects/    Case studies en MDX (fuente de verdad)
lib/                 projects (repository), site-config, seo, utils
types/               Tipos + schema Zod compartidos
```

## Scripts

```bash
npm run dev        # desarrollo
npm run build      # build de producción (SSG)
npm run start      # servir el build
npm run lint       # ESLint
npm run typecheck  # tsc --noEmit
```

## Configuración

Copia `.env.example` a `.env.local` y ajusta `NEXT_PUBLIC_SITE_URL`.
Edita tus datos (nombre, email, enlaces, stack) en `lib/site-config.ts`.

## Pendientes

- Foto en `About` (hoy muestra un monograma) y `public/cv.pdf` (pon `links.cv: "/cv.pdf"` para mostrar el botón).
- Email de contacto y LinkedIn en `lib/site-config.ts` (un enlace vacío `""` se oculta).

## Deploy

Conecta el repo a **Vercel**. Cada `push` a `main` despliega a producción y
cada PR genera un Preview Deployment. Define `NEXT_PUBLIC_SITE_URL` en las
variables de entorno del proyecto.
