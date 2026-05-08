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
    slug: 'kepein-coffee-website',
    title: 'Kepein Coffee Website',
    description: 'Marketing site for an Atlanta-based mobile coffee bar serving weddings, corporate events, and private gatherings.',
    longDescription: `KEPËIN Coffee Station is a Latina-owned mobile coffee bar founded by two sisters, serving weddings, corporate events, and private gatherings around Atlanta. They needed a web presence that felt as warm and intentional as the experience they bring to events, somewhere prospective clients could quickly understand the offering, see the team behind it, and reach out to book.
I built the site with Astro for fast, content-first static delivery and styled it with TailwindCSS to keep the visual language consistent across sections. The build prioritizes performance, accessibility, and SEO, giving the business a polished home base for inquiries and bookings.`,
    tech: ['Astro', 'TailwindCSS'],
    liveUrl: 'https://kepeincoffee.com',
    images: [],
    status: 'live',
    featured: true,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
