export interface Project {
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  year: string;
  role: string;
  teamSize: number;
  duration: string;
  responsibilities: string[];
  technologies: string[];
  challenges?: string;
  outcomes?: string;
  users?: string;
  category?: string;
  status: string;
} 