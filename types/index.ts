import { z } from "zod";

/**
 * Frontmatter contract for every case study in /content/projects.
 * Validated at read-time so a malformed file fails the build, not production.
 */
export const projectFrontmatterSchema = z.object({
  title: z.string().min(1),
  num: z.string().min(1),
  problem: z.string().min(1),
  approach: z.string().min(1),
  tags: z.array(z.string()).min(1),
  featured: z.boolean().default(true),
  order: z.number().int(),
  liveUrl: z.string().optional(),
  repoUrl: z.string().optional(),
  cover: z.string().optional(),
});

export type ProjectFrontmatter = z.infer<typeof projectFrontmatterSchema>;

export type Project = ProjectFrontmatter & {
  slug: string;
};

export type ProjectWithBody = Project & {
  body: string;
};

export interface StackGroup {
  label: string;
  items: string[];
}

export interface ArchNode {
  layer: string;
  name: string;
  tech: string;
  arrow: boolean;
}

export interface NavLink {
  label: string;
  href: string;
}
