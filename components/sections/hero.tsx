import { buttonVariants } from "@/components/ui/button";
import { HeroTicket } from "@/components/sections/hero-ticket";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section
      id="top"
      className="mx-auto grid min-h-[calc(100svh-64px)] max-w-[1160px] grid-cols-1 items-center gap-16 px-6 pb-20 pt-32 md:px-10 lg:grid-cols-[1.1fr_1fr] lg:gap-12 lg:pb-16 lg:pt-28"
    >
      <div>
        <p className="mb-6 text-[15px] text-muted">
          {siteConfig.location} · Disponible para un puesto junior
        </p>

        <h1 className="mb-6 max-w-[11ch] font-display text-[44px] leading-[1.04] tracking-[-0.02em] sm:text-[60px] lg:text-[68px]">
          Software para los negocios de Tijuana
        </h1>

        <p className="mb-10 max-w-[34rem] text-[19px] leading-[30px] text-muted">
          Menús, catálogos e invitaciones que venden y confirman por WhatsApp, y
          las plataformas full-stack que hay detrás: React, Python, Go y
          PostgreSQL.
        </p>

        <div className="flex flex-wrap gap-3">
          <a href="#work" className={cn(buttonVariants({ variant: "primary" }))}>
            Ver proyectos
          </a>
          <a href="#contact" className={cn(buttonVariants({ variant: "outline" }))}>
            Escríbeme
          </a>
        </div>
      </div>

      <HeroTicket />
    </section>
  );
}
