import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/sections/section-heading";
import { stackGroups } from "@/lib/site-config";

export function Stack() {
  return (
    <section id="stack" className="mx-auto max-w-[1160px] scroll-mt-16 px-6 py-24 md:px-10">
      <SectionHeading
        title="Con qué construyo"
        description="Las herramientas que aparecen en los proyectos de arriba."
      />

      <Reveal className="max-w-[760px] rounded-2xl border border-border bg-surface p-6 sm:p-8">
        <dl className="flex flex-col gap-4 text-[15px]">
          {stackGroups.map((group) => (
            <div key={group.label} className="leader flex-col items-start gap-1 sm:flex-row sm:items-baseline sm:gap-2">
              <dt className="shrink-0 font-medium">{group.label}</dt>
              <span className="leader-fill hidden sm:block" aria-hidden />
              <dd className="text-muted sm:text-right">{group.items.join(" · ")}</dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </section>
  );
}
