import { siteConfig } from "@/lib/site-config";

export function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-[1160px] px-6 pb-16 pt-24 md:px-10"
    >
      <div className="rounded-[20px] border border-border bg-surface px-6 py-16 text-center md:px-12">
        <div className="mb-5 font-mono text-[13px] uppercase tracking-wider text-accent">
          05 / Contact
        </div>
        <h2 className="mb-5 font-display text-[clamp(2rem,5vw,3.25rem)] font-semibold tracking-[-0.03em]">
          Hablemos.
        </h2>
        <p className="mx-auto mb-9 max-w-[480px] text-[18px] leading-relaxed text-muted">
          Buscando mi primera posición como Junior / Trainee. Si crees que
          encajo en tu equipo, escríbeme.
        </p>

        <a
          href={`mailto:${siteConfig.email}`}
          className="inline-block rounded-xl bg-accent px-8 py-4 font-mono text-base font-medium text-accent-foreground transition-transform hover:-translate-y-0.5"
        >
          {siteConfig.email}
        </a>

        <div className="mt-9 flex justify-center gap-6 font-mono text-sm">
          <a
            href={siteConfig.links.github}
            className="text-muted transition-colors hover:text-accent"
          >
            GitHub ↗
          </a>
          <a
            href={siteConfig.links.linkedin}
            className="text-muted transition-colors hover:text-accent"
          >
            LinkedIn ↗
          </a>
        </div>
      </div>
    </section>
  );
}
