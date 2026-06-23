import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/sections/section-heading";
import { getFeaturedProjects } from "@/lib/projects";

export function Work() {
  const projects = getFeaturedProjects();

  return (
    <section id="work" className="mx-auto max-w-[1160px] px-6 py-20 md:px-10">
      <SectionHeading
        eyebrow="01 / Selected Work"
        title="Proyectos seleccionados"
        description={
          <>
            Cada proyecto se presenta como caso de estudio: el problema, la
            decisión técnica y el resultado.{" "}
            <span className="text-foreground">
              Placeholder — los añadiré pronto.
            </span>
          </>
        }
      />

      <ul className="flex flex-col gap-7">
        {projects.map((project, index) => (
          <Reveal as="li" key={project.slug} delay={index * 0.05}>
            <article className="group rounded-2xl border border-border bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-accent">
              <div className="grid min-h-[300px] grid-cols-1 md:grid-cols-[1.15fr_1fr]">
                <div className="flex flex-col p-8 md:p-10">
                  <div className="mb-6 flex items-center gap-3.5">
                    <span className="font-mono text-[13px] text-accent">
                      {project.num}
                    </span>
                    <h3 className="font-display text-[26px] font-semibold tracking-[-0.01em]">
                      {project.title}
                    </h3>
                  </div>

                  <div className="flex flex-1 flex-col gap-[18px]">
                    <Field label="El problema" tone="foreground">
                      {project.problem}
                    </Field>
                    <Field label="Mi enfoque" tone="muted">
                      {project.approach}
                    </Field>
                  </div>

                  <div className="mt-7 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag}>{tag}</Badge>
                    ))}
                  </div>

                  <div className="mt-6 flex gap-[18px] font-mono text-[13px]">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="text-accent transition-opacity hover:opacity-80"
                    >
                      Caso de estudio →
                    </Link>
                    {project.repoUrl ? (
                      <a
                        href={project.repoUrl}
                        className="text-foreground transition-opacity hover:opacity-80"
                      >
                        Code ↗
                      </a>
                    ) : null}
                  </div>
                </div>

                <div className="relative flex items-center justify-center border-t border-border bg-surface-2 md:border-l md:border-t-0">
                  <div
                    aria-hidden
                    className="absolute inset-0 opacity-50 [background-image:radial-gradient(var(--border)_1px,transparent_1px)] [background-size:22px_22px]"
                  />
                  <span className="relative rounded-lg border border-dashed border-border px-[18px] py-2.5 font-mono text-[13px] text-muted">
                    project_preview.png
                  </span>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}

function Field({
  label,
  tone,
  children,
}: {
  label: string;
  tone: "foreground" | "muted";
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="mb-1.5 font-mono text-[11px] uppercase tracking-wide text-muted">
        {label}
      </div>
      <div
        className={
          tone === "foreground"
            ? "text-[15px] leading-relaxed text-foreground"
            : "text-[15px] leading-relaxed text-muted"
        }
      >
        {children}
      </div>
    </div>
  );
}
