import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";

import { Badge } from "@/components/ui/badge";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { getProjectBySlug, getProjectSlugs } from "@/lib/projects";
import { buildProjectMetadata, projectJsonLd } from "@/lib/seo";

// Fully static: every case study is generated at build time.
export const dynamicParams = false;

export function generateStaticParams() {
  return getProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return buildProjectMetadata(project);
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(projectJsonLd(project)),
        }}
      />
      <Navbar />
      <main className="mx-auto max-w-[760px] px-6 pb-20 pt-40 md:px-10">
        <Link
          href="/#work"
          className="font-mono text-[13px] text-muted transition-colors hover:text-accent"
        >
          ← Volver a proyectos
        </Link>

        <header className="mt-8 mb-12 border-b border-border pb-10">
          <span className="font-mono text-[13px] text-accent">
            {project.num}
          </span>
          <h1 className="mb-5 mt-2 font-display text-[clamp(2rem,5vw,3rem)] font-semibold tracking-[-0.02em]">
            {project.title}
          </h1>
          <p className="mb-6 text-[18px] leading-relaxed text-muted">
            {project.problem}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Badge key={tag}>{tag}</Badge>
            ))}
          </div>
          {project.liveUrl || project.repoUrl ? (
            <div className="mt-6 flex gap-[18px] font-mono text-[13px]">
              {project.liveUrl ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent transition-opacity hover:opacity-80"
                >
                  Ver demo en vivo ↗
                </a>
              ) : null}
              {project.repoUrl ? (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground transition-opacity hover:opacity-80"
                >
                  Código en GitHub ↗
                </a>
              ) : null}
            </div>
          ) : null}
        </header>

        {project.cover ? (
          <div className="relative mb-12 aspect-[16/10] overflow-hidden rounded-2xl border border-border bg-surface-2">
            <Image
              src={project.cover}
              alt={`Captura de ${project.title}`}
              fill
              priority
              sizes="(min-width: 768px) 760px, 100vw"
              className="object-cover object-top"
            />
          </div>
        ) : null}

        <article className="prose-portfolio flex flex-col gap-5 text-[17px] leading-[1.7] text-muted">
          <MDXRemote source={project.body} />
        </article>
      </main>
      <Footer />
    </>
  );
}
