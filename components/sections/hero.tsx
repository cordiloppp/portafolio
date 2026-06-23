import { buttonVariants } from "@/components/ui/button";
import { heroStack, siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section
      id="top"
      className="mx-auto max-w-[1160px] px-6 pb-28 pt-48 md:px-10 md:pt-52"
    >
      <p className="mb-7 flex items-center gap-2.5 font-mono text-[13px] uppercase tracking-wider text-accent">
        <span className="status-dot inline-block size-[7px] rounded-full bg-accent" />
        Based in {siteConfig.location} · Open to Junior / Trainee roles
      </p>

      <h1 className="mb-7 font-display text-[clamp(2.75rem,7vw,4.875rem)] font-semibold leading-[1.02] tracking-[-0.02em]">
        Jonathan Molinero
        <span className="block font-medium text-muted">
          Software Developer enfocado en arquitectura.
        </span>
      </h1>

      <p className="mb-11 max-w-[620px] text-[19px] leading-relaxed text-muted">
        {siteConfig.description}
      </p>

      <div className="mb-16 flex flex-wrap gap-3.5">
        <a href="#work" className={cn(buttonVariants({ variant: "primary" }))}>
          Ver proyectos
        </a>
        <a
          href={siteConfig.links.cv}
          className={cn(buttonVariants({ variant: "outline" }))}
        >
          Descargar CV ↓
        </a>
      </div>

      <div className="flex flex-wrap items-center gap-x-6 gap-y-2.5 font-mono text-[13px] text-muted">
        <span className="text-foreground/50">Stack ·</span>
        {heroStack.map((tech) => (
          <span key={tech}>{tech}</span>
        ))}
      </div>
    </section>
  );
}
