import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { projectFrontmatterSchema, type Project, type ProjectWithBody } from "@/types";

const PROJECTS_DIR = path.join(process.cwd(), "content", "projects");

/** Repository layer: components consume these, never the filesystem directly. */
function readAll(): ProjectWithBody[] {
  if (!fs.existsSync(PROJECTS_DIR)) return [];

  return fs
    .readdirSync(PROJECTS_DIR)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const slug = file.replace(/\.mdx$/, "");
      const raw = fs.readFileSync(path.join(PROJECTS_DIR, file), "utf-8");
      const { data, content } = matter(raw);

      const parsed = projectFrontmatterSchema.safeParse(data);
      if (!parsed.success) {
        throw new Error(
          `Invalid frontmatter in content/projects/${file}:\n${parsed.error.message}`,
        );
      }

      return { slug, body: content, ...parsed.data };
    })
    .sort((a, b) => a.order - b.order);
}

/** All projects, ordered, metadata only. */
export function getProjects(): Project[] {
  return readAll().map(({ body, ...project }) => project);
}

/** Projects shown on the home page. */
export function getFeaturedProjects(): Project[] {
  return getProjects().filter((project) => project.featured);
}

/** Slugs for generateStaticParams. */
export function getProjectSlugs(): string[] {
  return readAll().map((project) => project.slug);
}

/** A single case study including its MDX body. */
export function getProjectBySlug(slug: string): ProjectWithBody | null {
  return readAll().find((project) => project.slug === slug) ?? null;
}
