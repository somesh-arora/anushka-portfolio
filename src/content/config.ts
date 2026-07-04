import { z, defineCollection } from "astro:content";

const work = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    role: z.string(),
    company: z.string().optional(),
    date: z.coerce.date(),
    featured: z.boolean().default(false),
    sortOrder: z.number().default(99),
    tags: z.array(z.string()),
    heroImage: z.string().optional(),
    tools: z.array(z.string()),
    dataScope: z.string().optional(),
    impact: z.array(z.string()),
    problem: z.string().optional(),
    approach: z.string().optional(),
    links: z
      .object({
        dashboard: z.string().url().optional(),
        report: z.string().url().optional(),
        github: z.string().url().optional(),
        live: z.string().url().optional(),
      })
      .optional(),
  }),
});

const experience = defineCollection({
  type: "content",
  schema: z.object({
    company: z.string(),
    role: z.string(),
    location: z.string(),
    startDate: z.coerce.date(),
    endDate: z.coerce.date().nullable().default(null),
    logo: z.string().optional(),
    sortOrder: z.number().default(99),
    highlights: z.array(z.string()),
  }),
});

export const collections = { work, experience };
