import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/sections/section-heading";
import { stackGroups } from "@/lib/site-config";

export function Stack() {
  return (
    <section id="stack" className="mx-auto max-w-[1160px] px-6 py-20 md:px-10">
      <SectionHeading eyebrow="03 / Toolbox" title="Tecnologías que uso" />

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {stackGroups.map((group, index) => (
          <Reveal
            key={group.label}
            delay={index * 0.05}
            className="rounded-[14px] border border-border bg-surface p-[26px]"
          >
            <div className="mb-[18px] font-mono text-xs uppercase tracking-wide text-accent">
              {group.label}
            </div>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <Badge key={item} variant="interactive">
                  {item}
                </Badge>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
