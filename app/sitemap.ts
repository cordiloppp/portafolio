import type { MetadataRoute } from "next";

import { getProjectSlugs } from "@/lib/projects";
import { siteConfig } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const projects = getProjectSlugs().map((slug) => ({
    url: `${siteConfig.url}/projects/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    {
      url: siteConfig.url,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...projects,
  ];
}
