import Image from "next/image";
import Link from "next/link";

import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/sections/section-heading";
import { getFeaturedProjects } from "@/lib/projects";

export function Work() {
  const projects = getFeaturedProjects();

  return (
    <section id="work" className="mx-auto max-w-[1160px] scroll-mt-16 px-6 py-24 md:px-10">
      <SectionHeading
        title="Proyectos técnicos"
        description="Para reclutadores y equipos de desarrollo: cada proyecto tiene su caso de estudio con el problema, la decisión técnica y el resultado, además del código en GitHub."
      />

      <ul className="flex flex-col gap-8">
        {projects.map((project, index) => (
          <Reveal as="li" key={project.slug} delay={Math.min(index, 3) * 0.05}>
            <article className="group overflow-hidden rounded-2xl border border-border bg-surface transition-colors duration-200 hover:border-foreground/20">
              <div className="grid grid-cols-1 md:grid-cols-[1.1fr_1fr]">
                <div className="flex flex-col p-6 sm:p-8">
                  <div className="mb-6 flex items-baseline gap-3">
                    <span className="font-mono text-[13px] tabular-nums text-faint">
                      {project.num}
                    </span>
                    <h3 className="text-[24px] font-medium leading-tight tracking-[-0.01em]">
                      <Link href={`/projects/${project.slug}`} className="transition-colors hover:text-accent">
                        {project.title}
                      </Link>
                    </h3>
                  </div>

                  <dl className="flex flex-1 flex-col gap-4">
                    <div>
                      <dt className="mb-1 text-[13px] text-faint">El problema</dt>
                      <dd className="text-[15px] leading-6 text-foreground">{project.problem}</dd>
                    </div>
                    <div>
                      <dt className="mb-1 text-[13px] text-faint">Mi enfoque</dt>
                      <dd className="text-[15px] leading-6 text-muted">{project.approach}</dd>
                    </div>
                  </dl>

                  <p className="mt-6 font-mono text-[12px] leading-5 text-faint">
                    {project.tags.join(" · ")}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-[15px] font-medium">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="text-foreground underline decoration-border decoration-2 underline-offset-[6px] transition-colors hover:decoration-accent"
                    >
                      Caso de estudio
                    </Link>
                    {project.liveUrl ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted transition-colors hover:text-foreground"
                      >
                        Ver demo ↗
                      </a>
                    ) : null}
                    {project.repoUrl ? (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted transition-colors hover:text-foreground"
                      >
                        Código ↗
                      </a>
                    ) : null}
                  </div>
                </div>

                <div className="relative aspect-[16/10] border-t border-border bg-surface-2 md:aspect-auto md:border-l md:border-t-0">
                  {project.cover ? (
                    <Image
                      src={project.cover}
                      alt={`Captura de ${project.title}`}
                      fill
                      sizes="(min-width: 768px) 520px, 100vw"
                      className="object-cover object-left-top"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center p-8">
                      <div className="w-full max-w-[280px] rounded-[10px] border border-border bg-surface p-4 font-mono text-[12px] leading-6 text-muted">
                        {project.tags.slice(0, 5).map((tag) => (
                          <div key={tag} className="text-foreground">
                            {tag}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
