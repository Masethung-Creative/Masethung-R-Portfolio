import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    /** Short line under the title on the detail page. */
    summary: z.string(),
    /** Shown on the /work index. Omit and `meta` is used instead. */
    date: z.coerce.date().optional(),
    /** e.g. "In progress" — used when there is no single date. */
    meta: z.string().optional(),
    role: z.string(),
    /** Rendered as a definition list in the page header. */
    facts: z.array(z.object({ label: z.string(), value: z.string() })).default([]),
    tags: z.array(z.string()).default([]),
    /** Lower numbers sort first on the index. */
    order: z.number().default(99),
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects };
