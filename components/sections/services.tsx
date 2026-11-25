import Image from "next/image";

import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/sections/section-heading";
import { buttonVariants } from "@/components/ui/button";
import { services, whatsappLink } from "@/lib/site-config";
import { cn } from "@/lib/utils";

/** A phone showing a real screen of the demo, so the idea reads at a glance. */
function Phone({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative mx-auto w-[200px] shrink-0 rounded-[34px] bg-[#1f1b16] p-[7px] shadow-[0_24px_48px_-20px_rgba(31,27,22,0.45)] sm:w-[220px]">
      <div className="relative aspect-[390/844] overflow-hidden rounded-[28px] bg-surface-2">
        <Image src={src} alt={alt} fill sizes="220px" className="object-cover object-top" />
      </div>
      <span aria-hidden className="absolute top-[14px] left-1/2 h-[18px] w-[64px] -translate-x-1/2 rounded-full bg-[#1f1b16]" />
    </div>
  );
}

function Check() {
  return (
    <svg viewBox="0 0 20 20" className="mt-[3px] size-[18px] shrink-0 text-accent" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden>
      <path d="M4.5 10.5 8 14l7.5-8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Services() {
  return (
    <section id="servicios" className="mx-auto max-w-[1160px] scroll-mt-16 px-6 pt-8 pb-24 md:px-10 lg:pt-4">
      <SectionHeading
        title="¿Qué puedo hacer por tu negocio?"
        description="Herramientas sencillas para vender más por WhatsApp. Tus clientes las abren desde su celular, sin descargar nada. Toca cualquier ejemplo para probarlo."
      />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {services.map((s, i) => (
          <Reveal
            key={s.id}
            delay={(i % 2) * 0.06}
            className="flex flex-col gap-8 rounded-2xl border border-border bg-surface p-6 sm:flex-row sm:items-center sm:p-8"
          >
            <a href={s.demoUrl} target="_blank" rel="noopener noreferrer" aria-label={s.demoLabel} className="transition-transform duration-300 ease-out hover:-translate-y-1">
              <Phone src={s.image} alt={`Ejemplo: ${s.title}`} />
            </a>

            <div className="flex min-w-0 flex-1 flex-col">
              <p className="text-[14px] text-faint">{s.forWho}</p>
              <h3 className="mt-1 text-[22px] font-medium leading-snug tracking-[-0.01em]">{s.title}</h3>
              <ul className="mt-4 flex flex-col gap-2.5 text-[15px] leading-6 text-muted">
                {s.benefits.map((b) => (
                  <li key={b} className="flex gap-2.5">
                    <Check />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-2.5">
                <a
                  href={s.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(buttonVariants({ variant: "outline", size: "sm" }))}
                >
                  Míralo funcionando ↗
                </a>
                <a
                  href={whatsappLink(s.message)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(buttonVariants({ variant: "primary", size: "sm" }))}
                >
                  Lo quiero
                </a>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
