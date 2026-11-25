import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/sections/section-heading";
import { buttonVariants } from "@/components/ui/button";
import { processSteps, whatsappLink } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function Process() {
  return (
    <section id="proceso" className="mx-auto max-w-[1160px] scroll-mt-16 px-6 py-24 md:px-10">
      <SectionHeading title="Así trabajamos" description="Tres pasos, todo por WhatsApp y en español claro." />

      <ol className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {processSteps.map((step, i) => (
          <Reveal as="li" key={step.title} delay={i * 0.06} className="relative rounded-2xl border border-border bg-surface p-6 sm:p-8">
            <span className="flex size-11 items-center justify-center rounded-full bg-foreground font-display text-[22px] text-background">
              {i + 1}
            </span>
            <h3 className="mt-5 text-[20px] font-medium">{step.title}</h3>
            <p className="mt-2 text-[15px] leading-6 text-muted">{step.text}</p>
          </Reveal>
        ))}
      </ol>

      <Reveal className="mt-10 flex flex-col items-start gap-4 rounded-2xl bg-foreground px-6 py-8 text-background sm:flex-row sm:items-center sm:justify-between sm:px-10">
        <div>
          <p className="font-display text-[28px] leading-tight">¿Tienes un negocio?</p>
          <p className="mt-1 text-[15px] opacity-75">Escríbeme y te digo qué te conviene, sin compromiso.</p>
        </div>
        <a
          href={whatsappLink("Hola Jonathan, vi tu portafolio y quiero información para mi negocio.")}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(buttonVariants({ variant: "primary" }), "shrink-0")}
        >
          Escribir por WhatsApp
        </a>
      </Reveal>
    </section>
  );
}
