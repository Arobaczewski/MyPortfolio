export interface Project {
  id: string;
  slug: string; // URL-friendly version (e.g., "bloom-wellness")
  title: string;
  company: string;
  role: string;
  duration: string;
  description: string; // One-sentence description
  skills: string[]; // Top 3 skills demonstrated
  tools: string[]; // Top 3 tools/technologies
  thumbnail: string; // Main project image
  liveUrl?: string;
  githubUrl?: string;
  caseStudy: CaseStudy;
}

export interface CaseStudy {
  hero: {
    image: string;
    company: string;
    role: string;
    duration: string;
    tools: string[];
    technologies: string[];
  };
  roleContext: {
    title: string;
    content: string;
    images?: string[];
  };
  overview: {
    title: string;
    content: string;
    images?: string[];
  };
  design: {
    title: string;
    content: string;
    features: string[];
    images?: string[];
  };
  takeaways: {
    title: string;
    content: string;
    learnings: string[];
  };
}

export interface Skill {
  category: string;
  description: string;
  icon?: string;
}