import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders'; 

const projectsCollection = defineCollection({
  // This loader tells Astro exactly where to look for your markdown files
  loader: glob({ pattern: "*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    techStack: z.array(z.string()),
    order: z.number(), 
  }),
});

export const collections = {
  'projects': projectsCollection,
};