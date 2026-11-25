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
  // 52 + 10 digits. Business owners reach me here.
  whatsapp: "526645462905",
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
  { label: "Servicios", href: "#servicios" },
  { label: "Cómo trabajamos", href: "#proceso" },
  { label: "Proyectos", href: "#work" },
  { label: "Contacto", href: "#contact" },
];

/** WhatsApp link with a prefilled message. */
export function whatsappLink(message: string): string {
  return `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(message)}`;
}

export interface Service {
  id: string;
  title: string;
  forWho: string;
  benefits: string[];
  image: string;
  demoUrl: string;
  demoLabel: string;
  message: string;
}

/** What I offer to businesses, in plain words. Each one has a live example. */
export const services: Service[] = [
  {
    id: "menu",
    title: "Menú digital para tu restaurante",
    forWho: "Taquerías, cafeterías, mariscos y loncherías",
    benefits: [
      "Tus clientes ven fotos y precios desde su celular",
      "El pedido te llega completo por WhatsApp",
      "Lo comparten con un código QR en la mesa",
    ],
    image: "/images/services/menu.webp",
    demoUrl: "https://menu-tacos-el-guero.vercel.app",
    demoLabel: "Ver el menú de una taquería",
    message: "Hola Jonathan, vi tu portafolio y me interesa un menú digital para mi negocio.",
  },
  {
    id: "catalogo",
    title: "Catálogo en línea para tu tienda",
    forWho: "Reposterías, boutiques, florerías y artesanías",
    benefits: [
      "Tus clientas eligen tamaño, sabor, talla o color",
      "Arman su pedido y te llega listo por WhatsApp",
      "Sin comisiones por venta ni apps que descargar",
    ],
    image: "/images/services/catalogo.webp",
    demoUrl: "https://dulce-alba-demo.vercel.app",
    demoLabel: "Ver el catálogo de una repostería",
    message: "Hola Jonathan, vi tu portafolio y me interesa un catálogo en línea para mi tienda.",
  },
  {
    id: "invitaciones",
    title: "Invitaciones digitales con confirmación",
    forWho: "Bodas, XV años, bautizos y cumpleaños",
    benefits: [
      "Cada familia recibe su invitación con su nombre",
      "Confirman su asistencia con un solo toque",
      "Tú ves quién viene y cuántos lugares van",
    ],
    image: "/images/services/invitacion.webp",
    demoUrl: "https://convite-rsvp.vercel.app/i/demo-boda-pendiente",
    demoLabel: "Ver una invitación de boda",
    message: "Hola Jonathan, vi tu portafolio y me interesan invitaciones digitales para un evento.",
  },
  {
    id: "web",
    title: "Página web para tu negocio",
    forWho: "Oficios, servicios y profesionales",
    benefits: [
      "Tus clientes te llaman o piden cotización en un toque",
      "Se ve bien en celular, tableta y computadora",
      "En español, en inglés o en los dos idiomas",
    ],
    image: "/images/services/web.webp",
    demoUrl: "https://aaa-plumbing-drains.pages.dev",
    demoLabel: "Ver la página de una plomería",
    message: "Hola Jonathan, vi tu portafolio y me interesa una página web para mi negocio.",
  },
];

/** How a project with me goes, in three steps. */
export const processSteps = [
  {
    title: "Me escribes",
    text: "Por WhatsApp me cuentas qué vendes y a quién. No necesitas saber nada de tecnología.",
  },
  {
    title: "Te muestro una muestra",
    text: "Preparo una versión con tus productos, precios y fotos para que la veas en tu celular antes de decidir.",
  },
  {
    title: "La compartes",
    text: "La publicamos y la compartes con un código QR, en tus redes o por WhatsApp. Si cambias un precio, lo actualizo.",
  },
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
