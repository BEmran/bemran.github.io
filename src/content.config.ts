import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const research = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/research' }),
  schema: z.object({
    title: z.string(),
    shortDescription: z.string(),
    order: z.number().default(99),
    status: z.enum(['active', 'archived']).default('active'),
    featured: z.boolean().default(false),
    icon: z.string().optional(),
    heroImage: z.string().optional(),
    video: z.string().url().optional(),
    keywords: z.array(z.string()).default([])
  })
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    shortDescription: z.string(),
    status: z.enum(['active', 'completed', 'planned', 'archived']),
    projectType: z.string(),
    startYear: z.number(),
    endYear: z.number().optional(),
    researchAreas: z.array(z.string()).default([]),
    graduateResearchers: z.array(z.string()).default([]),
    undergraduateTeam: z.array(z.object({
      name: z.string(),
      program: z.string().optional(),
      academicYear: z.string().optional(),
      role: z.string().optional(),
      linkedin: z.string().url().optional()
    })).default([]),
    tags: z.array(z.string()).default([]),
    image: z.string(),
    video: z.string().url().optional(),
    featured: z.boolean().default(false),
    order: z.number().default(99),
    github: z.string().url().optional(),
    dataset: z.string().url().optional()
  })
});

const people = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/people' }),
  schema: z.object({
    name: z.string(),
    degree: z.string(),
    status: z.enum(['current', 'alumni']),
    startYear: z.number(),
    graduationYear: z.number().optional(),
    researchAreas: z.array(z.string()).default([]),
    projects: z.array(z.string()).default([]),
    photo: z.string().optional(),
    thesisTitle: z.string().optional(),
    currentPosition: z.string().optional(),
    scholar: z.string().url().optional(),
    linkedin: z.string().url().optional(),
    github: z.string().url().optional(),
    website: z.string().url().optional(),
    featured: z.boolean().default(false),
    order: z.number().default(99)
  })
});

const publications = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/publications' }),
  schema: z.object({
    title: z.string(),
    authors: z.array(z.string()),
    year: z.number(),
    type: z.enum(['journal', 'conference', 'workshop', 'book-chapter', 'book', 'preprint', 'thesis', 'technical-report']),
    venue: z.string(),
    doi: z.string().optional(),
    paperUrl: z.string().url().optional(),
    pdfUrl: z.string().url().optional(),
    codeUrl: z.string().url().optional(),
    videoUrl: z.string().url().optional(),
    slidesUrl: z.string().url().optional(),
    researchAreas: z.array(z.string()).default([]),
    projects: z.array(z.string()).default([]),
    graduateResearchers: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    order: z.number().default(99)
  })
});

const news = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/news' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    type: z.enum(['publication', 'project', 'award', 'student', 'conference', 'funding', 'teaching', 'software', 'general']),
    shortDescription: z.string(),
    image: z.string().optional(),
    researchAreas: z.array(z.string()).default([]),
    projects: z.array(z.string()).default([]),
    people: z.array(z.string()).default([]),
    publications: z.array(z.string()).default([]),
    featured: z.boolean().default(false)
  })
});

const courses = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/courses' }),
  schema: z.object({
    code: z.string(),
    title: z.string(),
    level: z.string(),
    institution: z.string(),
    status: z.enum(['current', 'past']),
    shortDescription: z.string(),
    topics: z.array(z.string()).default([]),
    featured: z.boolean().default(false)
  })
});

const site = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/site' }),
  schema: z.object({
    page: z.enum(['home', 'about']),
    name: z.string(),
    strapline: z.string().optional(),
    academicTitle: z.string().optional(),
    heroTitle: z.string().optional(),
    heroDescription: z.string().optional(),
    heroImage: z.string().optional(),
    heroCaption: z.string().optional(),
    department: z.string().optional(),
    institution: z.string().optional(),
    email: z.string().email().optional(),
    location: z.string().optional(),
    scholar: z.string().url().optional(),
    github: z.string().url().optional(),
    orcid: z.string().url().optional(),
    linkedin: z.string().url().optional(),
    cv: z.string().optional(),
    office: z.string().optional(),
    shortBio: z.string().optional(),
    researchStatement: z.string().optional(),
    opportunitiesText: z.string().optional()
  })
});

export const collections = { research, projects, people, publications, news, courses, site };
