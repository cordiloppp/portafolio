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
  email: "jonathan.molinero@email.com",
  description:
    "Estudiante de Ingeniería en Software próximo a graduarme. Construyo aplicaciones web escalables con Next.js y TypeScript, y me interesa el diseño de sistemas y escribir código que otros puedan mantener.",
  // Set NEXT_PUBLIC_SITE_URL in Vercel to your production domain.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://portafolio.vercel.app",
  links: {
    // Placeholders — replace with your real profiles.
    github: "#",
    linkedin: "#",
    resume: "#",
    cv: "/cv.pdf",
  },
} as const;

export const navLinks: NavLink[] = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Stack", href: "#stack" },
  { label: "Contact", href: "#contact" },
];

export const heroStack: string[] = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "Convex",
  "Prisma",
  "Tailwind",
];

export const stackGroups: StackGroup[] = [
  { label: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind"] },
  { label: "Backend", items: ["Node.js", "Convex", "Prisma"] },
  { label: "Data", items: ["MongoDB", "SQL"] },
  { label: "Tooling", items: ["Git", "GitHub"] },
];

export const archNodes: ArchNode[] = [
  { layer: "Client", name: "Next.js", tech: "React + TS", arrow: true },
  { layer: "API", name: "Convex", tech: "Realtime / RPC", arrow: true },
  { layer: "Domain", name: "Prisma", tech: "Repository", arrow: true },
  { layer: "Data", name: "Database", tech: "MongoDB / SQL", arrow: false },
];
