export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
  images: string[];
  status?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    slug: 'project-one',
    title: 'Project One',
    description: 'Short description of what this project does and the problem it solves.',
    longDescription: `A longer description of the project. Explain the motivation, what you built, and any interesting technical decisions you made along the way.

This can span multiple paragraphs to give visitors a fuller picture of the work.`,
    tech: ['Go', 'TypeScript', 'PostgreSQL', 'Docker'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/jpecheverryp/project-one',
    images: [],
    status: 'live',
    featured: true,
  },
  {
    slug: 'project-two',
    title: 'Project Two',
    description: 'Short description of what this project does and the problem it solves.',
    longDescription: `A longer description of the project. Explain the motivation, what you built, and any interesting technical decisions you made along the way.`,
    tech: ['Astro', 'Tailwind', 'TypeScript'],
    githubUrl: 'https://github.com/jpecheverryp/project-two',
    images: [],
    status: 'in progress',
    featured: true,
  },
  {
    slug: 'kepein-coffee-website',
    title: 'Kepein Coffee Website',
    description: 'Marketing site for an Atlanta-based mobile coffee bar serving weddings, corporate events, and private gatherings.',
    longDescription: `KEPËIN Coffee Station is a Latina-owned mobile coffee bar founded by two sisters, serving weddings, corporate events, and private gatherings around Atlanta. They needed a web presence that felt as warm and intentional as the experience they bring to events, somewhere prospective clients could quickly understand the offering, see the team behind it, and reach out to book.
I built the site with Astro for fast, content-first static delivery and styled it with TailwindCSS to keep the visual language consistent across sections. The build prioritizes performance, accessibility, and SEO, giving the sisters a polished home base for inquiries and bookings.`,
    tech: ['Astro', 'TailwindCSS'],
    liveUrl: 'https://kepeincoffee.com',
    images: [],
    status: 'live',
    featured: true,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
