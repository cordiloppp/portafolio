import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
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
      <main className="mx-auto max-w-[760px] px-6 pb-20 pt-32 md:px-10">
        <Link
          href="/#work"
          className="text-[15px] text-muted transition-colors hover:text-foreground"
        >
          ← Volver a proyectos
        </Link>

        <header className="mb-12 mt-8 border-b border-border pb-10">
          <span className="font-mono text-[13px] tabular-nums text-faint">
            {project.num}
          </span>
          <h1 className="mb-5 mt-2 font-display text-[40px] leading-[1.08] tracking-[-0.02em] sm:text-[52px]">
            {project.title}
          </h1>
          <p className="mb-6 text-[19px] leading-[30px] text-muted">
            {project.problem}
          </p>
          <p className="font-mono text-[12px] leading-5 text-faint">
            {project.tags.join(" · ")}
          </p>
          {project.liveUrl || project.repoUrl ? (
            <div className="mt-6 flex flex-wrap gap-3">
              {project.liveUrl ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(buttonVariants({ variant: "primary", size: "sm" }))}
                >
                  Ver demo en vivo ↗
                </a>
              ) : null}
              {project.repoUrl ? (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(buttonVariants({ variant: "outline", size: "sm" }))}
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

        <article className="prose-portfolio">
          <MDXRemote source={project.body} />
        </article>
      </main>
      <Footer />
    </>
  );
}
