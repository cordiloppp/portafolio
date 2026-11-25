import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-[1160px] scroll-mt-16 px-6 pb-16 pt-24 md:px-10">
      <div className="rounded-2xl border border-border bg-surface px-6 py-16 md:px-16">
        <h2 className="mb-4 font-display text-[40px] leading-[1.05] tracking-[-0.02em] sm:text-[56px]">
          Hablemos
        </h2>
        <p className="mb-8 max-w-[480px] text-[17px] leading-[28px] text-muted">
          Busco mi primer puesto como desarrollador junior o trainee. Si crees
          que encajo en tu equipo, o tienes un negocio que necesita su menú o
          catálogo en línea, escríbeme.
        </p>

        <div className="flex flex-wrap items-center gap-3">
          <a href={`mailto:${siteConfig.email}`} className={cn(buttonVariants({ variant: "primary" }))}>
            {siteConfig.email}
          </a>
          {siteConfig.links.github ? (
            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ variant: "outline" }))}
            >
              GitHub
            </a>
          ) : null}
          {siteConfig.links.linkedin ? (
            <a
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ variant: "outline" }))}
            >
              LinkedIn
            </a>
          ) : null}
        </div>
      </div>
    </section>
  );
}
