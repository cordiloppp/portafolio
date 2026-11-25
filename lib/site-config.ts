import type { ArchNode, NavLink, StackGroup } from "@/types";

/**
 * Single source of truth for editable site data.
 * Change a link or your email here — never inside a component.
 */
export const siteConfig = {
  name: "Jonathan Armando Molinero Pérez",
  shortName: "Jonathan Molinero",
  role: "Desarrollador full-stack",
  location: "Tijuana, B.C.",
  studies: "Ingeniería en Software",
  seeking: "Primer puesto junior o trainee",
  email: "molineroperez9@gmail.com",
  description:
    "Desarrollador full-stack en Tijuana. Construyo menús, catálogos e invitaciones que venden y confirman por WhatsApp para negocios locales, y las plataformas con React, Python, Go y PostgreSQL que hay detrás.",
  // Set NEXT_PUBLIC_SITE_URL in Vercel to your production domain.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://portafolio.vercel.app",
  // Leave a link as "" to hide it on the site.
  links: {
    github: "https://github.com/cordiloppp",
    linkedin: "",
    // Put your CV at public/cv.pdf and set this to "/cv.pdf" to show the button.
    cv: "",
  },
} as const;

export const navLinks: NavLink[] = [
  { label: "Proyectos", href: "#work" },
  { label: "Cómo trabajo", href: "#architecture" },
  { label: "Sobre mí", href: "#about" },
  { label: "Contacto", href: "#contact" },
];

export const stackGroups: StackGroup[] = [
  { label: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind", "Vite"] },
  { label: "Backend", items: ["Python · FastAPI", "Go", "Node.js", "Convex", "Prisma"] },
  { label: "Datos", items: ["PostgreSQL", "SQLAlchemy", "sqlc", "MongoDB"] },
  { label: "Herramientas", items: ["Git", "GitHub", "Docker", "Vercel", "Pytest", "Playwright"] },
];

export const archNodes: ArchNode[] = [
  { layer: "Cliente", name: "React", tech: "TypeScript + Vite", arrow: true },
  { layer: "API", name: "FastAPI", tech: "REST + JWT", arrow: true },
  { layer: "Dominio", name: "Servicios", tech: "Reglas de negocio", arrow: true },
  { layer: "Datos", name: "PostgreSQL", tech: "SQLAlchemy + Alembic", arrow: false },
];
