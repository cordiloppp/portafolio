import { siteConfig } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="mx-auto flex max-w-[1160px] flex-wrap items-center justify-between gap-3 px-6 py-10 text-[13px] text-faint md:px-10">
      <span>
        © {new Date().getFullYear()} {siteConfig.shortName} · {siteConfig.location}
      </span>
      <span>Hecho con Next.js y TypeScript</span>
    </footer>
  );
}
