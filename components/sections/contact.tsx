import { buttonVariants } from "@/components/ui/button";
import { siteConfig, whatsappLink } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-[1160px] scroll-mt-16 px-6 pb-16 pt-24 md:px-10">
      <h2 className="mb-10 font-display text-[40px] leading-[1.05] tracking-[-0.02em] sm:text-[56px]">Hablemos</h2>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* Business owners */}
        <div className="flex flex-col rounded-2xl bg-foreground p-6 text-background sm:p-10">
          <p className="text-[14px] opacity-70">Para negocios</p>
          <h3 className="mt-1 font-display text-[30px] leading-tight">Tengo un negocio</h3>
          <p className="mt-3 max-w-[420px] text-[16px] leading-[26px] opacity-80">
            Cuéntame qué vendes y te digo qué te conviene: menú, catálogo,
            invitaciones o página web. Te respondo por WhatsApp.
          </p>
          <div className="mt-auto pt-8">
            <a
              href={whatsappLink("Hola Jonathan, vi tu portafolio y quiero información para mi negocio.")}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ variant: "primary" }))}
            >
              Escribir por WhatsApp
            </a>
          </div>
        </div>

        {/* Recruiters */}
        <div className="flex flex-col rounded-2xl border border-border bg-surface p-6 sm:p-10">
          <p className="text-[14px] text-faint">Para equipos de desarrollo</p>
          <h3 className="mt-1 font-display text-[30px] leading-tight">Quiero contratarte</h3>
          <p className="mt-3 max-w-[420px] text-[16px] leading-[26px] text-muted">
            Busco mi primer puesto como desarrollador junior o trainee. Revisa mis
            proyectos técnicos y mi código, o escríbeme por correo.
          </p>
          <div className="mt-auto flex flex-wrap gap-3 pt-8">
            <a href={`mailto:${siteConfig.email}`} className={cn(buttonVariants({ variant: "outline" }))}>
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
      </div>
    </section>
  );
}
