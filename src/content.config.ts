import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders'; 

const projectsCollection = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    techStack: z.array(z.string()),
    order: z.number(), 
    image: z.string(),   // NEW: For the 3D Card Back
    liveUrl: z.string(), // NEW: For the "View Project" button
  }),
});

const experienceCollection = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/experience" }),
  schema: z.object({
    title: z.string(),
    company: z.string(),
    date: z.string(),
    problemStatement: z.string(),
    order: z.number(),
  }),
});

const educationCollection = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/education" }),
  schema: z.object({
    degree: z.string(),
    institution: z.string(),
    date: z.string(),
    order: z.number(),
  }),
});

const ethosCollection = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/ethos" }),
  schema: z.object({
    title: z.string(),
    buttonText: z.string(),
    buttonLink: z.string(),
  }),
});

export const collections = {
  'projects': projectsCollection,
  'experience': experienceCollection,
  'education': educationCollection,
  'ethos': ethosCollection,
};