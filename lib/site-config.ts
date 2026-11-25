import type { ArchNode, NavLink, StackGroup } from "@/types";

/**
 * Single source of truth for editable site data.
 * Change a link or your email here — never inside a component.
 */
export const siteConfig = {
  name: "Jonathan Armando Molinero Pérez",
  shortName: "Jonathan Molinero",
  logo: "<jmp/>",
  role: "Software Developer enfocado en arquitectura",
  location: "Guatemala",
  // Placeholder — replace with your real address before publishing.
  email: "molineroperez9@email.com",
  description:
    "Estudiante de Ingeniería en Software próximo a graduarme. Construyo aplicaciones web full-stack con React, TypeScript, Python y Go, y productos reales para negocios locales. Me interesa el diseño de sistemas y escribir código que otros puedan mantener.",
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
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Stack", href: "#stack" },
  { label: "Contact", href: "#contact" },
];

export const heroStack: string[] = [
  "React",
  "Next.js",
  "TypeScript",
  "Python",
  "FastAPI",
  "Go",
  "PostgreSQL",
  "Docker",
];

export const stackGroups: StackGroup[] = [
  { label: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind", "Vite"] },
  { label: "Backend", items: ["Python · FastAPI", "Go", "Node.js", "Convex", "Prisma"] },
  { label: "Data", items: ["PostgreSQL", "SQLAlchemy", "sqlc", "MongoDB"] },
  { label: "Tooling", items: ["Git", "GitHub", "Docker", "Vercel", "Pytest", "Playwright"] },
];

export const archNodes: ArchNode[] = [
  { layer: "Client", name: "React", tech: "TypeScript + Vite", arrow: true },
  { layer: "API", name: "FastAPI", tech: "REST + JWT", arrow: true },
  { layer: "Domain", name: "Services", tech: "Reglas de negocio", arrow: true },
  { layer: "Data", name: "PostgreSQL", tech: "SQLAlchemy + Alembic", arrow: false },
];
