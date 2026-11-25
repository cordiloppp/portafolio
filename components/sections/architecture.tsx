import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/sections/section-heading";
import { archNodes } from "@/lib/site-config";

export function Architecture() {
  return (
    <section
      id="architecture"
      className="mx-auto max-w-[1160px] scroll-mt-16 px-6 py-24 md:px-10"
    >
      <SectionHeading
        title="Cómo trabajo"
        description="Pienso en cómo se conectan las piezas antes de escribir la primera pantalla. Así está construido Convite, mi plataforma de invitaciones con confirmación de asistencia."
      />

      <Reveal className="rounded-2xl border border-border bg-surface px-6 py-10 md:px-10">
        <ol className="flex flex-col items-stretch gap-3 md:flex-row md:items-center md:gap-0">
          {archNodes.map((node) => (
            <li key={node.name} className="flex flex-col items-stretch md:flex-1 md:flex-row md:items-center">
              <div className="flex-1 rounded-[12px] border border-border bg-background px-4 py-4">
                <div className="text-[13px] text-faint">{node.layer}</div>
                <div className="mt-1 text-[17px] font-medium">{node.name}</div>
                <div className="mt-1 font-mono text-[12px] text-muted">{node.tech}</div>
              </div>
              {node.arrow ? (
                <span aria-hidden className="py-1 text-center text-faint md:px-3 md:py-0">
                  <span className="hidden md:inline">→</span>
                  <span className="md:hidden">↓</span>
                </span>
              ) : null}
            </li>
          ))}
        </ol>

        <p className="mt-8 max-w-[640px] text-[15px] leading-6 text-muted">
          La interfaz nunca habla directo con la base de datos. Las reglas de
          negocio viven en una capa de servicios y se refuerzan en PostgreSQL con
          restricciones CHECK, así que una regla no depende de que la pantalla la
          respete.
        </p>
      </Reveal>
    </section>
  );
}
