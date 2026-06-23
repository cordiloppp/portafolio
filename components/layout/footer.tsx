import { siteConfig } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="mx-auto flex max-w-[1160px] flex-wrap items-center justify-between gap-3 border-t border-border px-6 py-10 font-mono text-xs text-muted md:px-10">
      <span>© {new Date().getFullYear()} {siteConfig.shortName}</span>
      <span>Built with Next.js + TypeScript</span>
    </footer>
  );
}
