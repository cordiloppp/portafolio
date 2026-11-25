import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import type { Project } from "@/types";

/** Person structured data for the home page (helps Google understand the site). */
export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    jobTitle: "Software Developer",
    description: siteConfig.description,
    url: siteConfig.url,
    email: `mailto:${siteConfig.email}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Tijuana",
      addressRegion: "Baja California",
      addressCountry: "MX",
    },
    sameAs: [siteConfig.links.github, siteConfig.links.linkedin as string].filter(
      Boolean,
    ),
  };
}

/** CreativeWork structured data for an individual case study. */
export function projectJsonLd(project: Project) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    abstract: project.problem,
    keywords: project.tags.join(", "),
    author: { "@type": "Person", name: siteConfig.name },
    url: `${siteConfig.url}/projects/${project.slug}`,
  };
}

/** Build per-project metadata. */
export function buildProjectMetadata(project: Project): Metadata {
  const url = `/projects/${project.slug}`;
  return {
    title: project.title,
    description: project.problem,
    alternates: { canonical: url },
    openGraph: {
      title: project.title,
      description: project.problem,
      url,
      type: "article",
    },
  };
}
