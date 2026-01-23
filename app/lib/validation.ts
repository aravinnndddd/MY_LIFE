import { z } from 'zod';

// Zod schemas for portfolio configuration validation
export const socialLinkSchema = z.object({
  platform: z.enum(['github', 'linkedin', 'twitter', 'instagram', 'website']),
  url: z.string().url(),
  username: z.string().optional()
});

export const personalInfoSchema = z.object({
  name: z.string().min(1, "Name is required"),
  title: z.string().min(1, "Title is required"),
  location: z.string().min(1, "Location is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().optional(),
  socialLinks: z.array(socialLinkSchema)
});

export const heroConfigSchema = z.object({
  tagline: z.string().min(1, "Tagline is required"),
  backgroundImage: z.string().min(1, "Background image is required"),
  accentColor: z.string().regex(/^#[0-9A-F]{6}$/i, "Valid hex color required").optional()
});

export const introConfigSchema = z.object({
  greeting: z.string().min(1, "Greeting is required"),
  introduction: z.string().min(1, "Introduction is required"),
  focusAreas: z.array(z.string())
});

export const projectConfigSchema = z.object({
  id: z.string().min(1, "Project ID is required"),
  title: z.string().min(1, "Project title is required"),
  description: z.string().min(1, "Project description is required"),
  longDescription: z.string().optional(),
  technologies: z.array(z.string()),
  images: z.array(z.string()),
  liveUrl: z.string().url().optional(),
  githubUrl: z.string().url().optional(),
  featured: z.boolean(),
  category: z.string().optional()
});

export const timelineEntrySchema = z.object({
  id: z.string().min(1, "Timeline ID is required"),
  year: z.string().min(1, "Year is required"),
  title: z.string().min(1, "Title is required"),
  organization: z.string().min(1, "Organization is required"),
  description: z.string().min(1, "Description is required"),
  type: z.enum(['work', 'education', 'achievement']),
  image: z.string().optional()
});

export const testimonialConfigSchema = z.object({
  id: z.string().min(1, "Testimonial ID is required"),
  name: z.string().min(1, "Name is required"),
  title: z.string().min(1, "Title is required"),
  company: z.string().min(1, "Company is required"),
  content: z.string().min(1, "Content is required"),
  image: z.string().optional()
});

export const technologyItemSchema = z.object({
  name: z.string().min(1, "Technology name is required"),
  color: z.string().regex(/^#[0-9A-F]{6}$/i, "Valid hex color required").optional(),
  logo: z.string().optional(),
  category: z.string().optional()
});

export const techStackConfigSchema = z.object({
  technologies: z.array(technologyItemSchema),
  categories: z.array(z.string()).optional()
});

export const contactConfigSchema = z.object({
  email: z.string().email("Valid email is required"),
  phone: z.string().optional(),
  resumeUrl: z.string().optional(),
  socialLinks: z.array(socialLinkSchema)
});

export const brandingConfigSchema = z.object({
  primaryColor: z.string().regex(/^#[0-9A-F]{6}$/i, "Valid hex color required"),
  secondaryColor: z.string().regex(/^#[0-9A-F]{6}$/i, "Valid hex color required"),
  accentColor: z.string().regex(/^#[0-9A-F]{6}$/i, "Valid hex color required"),
  backgroundColor: z.string().regex(/^#[0-9A-F]{6}$/i, "Valid hex color required"),
  textColor: z.string().regex(/^#[0-9A-F]{6}$/i, "Valid hex color required"),
  fontFamily: z.string().optional(),
  logo: z.string().optional()
});

export const seoConfigSchema = z.object({
  title: z.string().min(1, "SEO title is required"),
  description: z.string().min(1, "SEO description is required"),
  keywords: z.array(z.string()),
  author: z.string().min(1, "Author is required"),
  siteUrl: z.string().url("Valid site URL is required"),
  image: z.string().optional()
});

export const portfolioConfigSchema = z.object({
  personal: personalInfoSchema,
  hero: heroConfigSchema,
  intro: introConfigSchema,
  projects: z.array(projectConfigSchema),
  timeline: z.array(timelineEntrySchema),
  testimonials: z.array(testimonialConfigSchema),
  techStack: techStackConfigSchema,
  contact: contactConfigSchema,
  branding: brandingConfigSchema,
  seo: seoConfigSchema
});

// Validation function
export function validatePortfolioConfig(config: unknown) {
  try {
    return portfolioConfigSchema.parse(config);
  } catch (error) {
    if (error instanceof z.ZodError) {
      console.error('Portfolio configuration validation failed:', error.errors);
      throw new Error(`Configuration validation failed: ${error.errors.map(e => e.message).join(', ')}`);
    }
    throw error;
  }
}