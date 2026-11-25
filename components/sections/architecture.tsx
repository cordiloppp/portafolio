import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/sections/section-heading";
import { archNodes } from "@/lib/site-config";

export function Architecture() {
  return (
    <section
      id="architecture"
      className="mx-auto max-w-[1160px] px-6 py-20 md:px-10"
    >
      <SectionHeading
        eyebrow="02 / How I Think"
        title="Diseño de sistemas"
        description="No solo construyo features — pienso en cómo se conectan las piezas. Así está construido Convite, mi plataforma de invitaciones con RSVP."
      />

      <Reveal className="rounded-2xl border border-border bg-surface px-6 py-12 md:px-8">
        <ol className="flex flex-col items-stretch justify-center gap-0 md:flex-row md:flex-wrap md:items-center">
          {archNodes.map((node) => (
            <li
              key={node.name}
              className="flex flex-col items-center md:flex-row"
            >
              <div className="min-w-[150px] rounded-xl border border-border bg-surface-2 px-4 py-5 text-center">
                <div className="mb-2 font-mono text-[11px] uppercase tracking-wide text-accent">
                  {node.layer}
                </div>
                <div className="mb-1 font-display text-[17px] font-semibold">
                  {node.name}
                </div>
                <div className="text-xs text-muted">{node.tech}</div>
              </div>
              {node.arrow ? (
                <span
                  aria-hidden
                  className="px-3.5 py-2 font-mono text-lg text-muted md:py-0"
                >
                  <span className="hidden md:inline">→</span>
                  <span className="md:hidden">↓</span>
                </span>
              ) : null}
            </li>
          ))}
        </ol>

        <p className="mx-auto mt-8 max-w-[640px] text-center text-sm leading-relaxed text-muted">
          La UI nunca habla directo con la base. Las reglas de negocio viven en
          una capa de servicios y se refuerzan en PostgreSQL con restricciones
          CHECK, así que una regla no depende de que la pantalla la respete.
        </p>
      </Reveal>
    </section>
  );
}
