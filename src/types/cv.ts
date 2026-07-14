export interface Experience {
  role: string;
  company: string;
  key_responsibilities?: string[];
  startDate: string;
  endDate: string;
}

export interface Education {
  school: string;
  degree: string;
  startDate: string;
  endDate: string;
  description?: string;
}

export interface CVData {
  name: string;
  title: string;
  contact: {
    phone: string;
    email: string;
    github: string;
    linkedin: string;
  };
  summary: string;
  skills: {
    category: string;
    items: string[];
  }[];
  education: Education[];
  experience: Experience[];
}

export interface Project {
  title: string;
  features: string[];
  technologies?: string[];
  role?: string;
  projectType: 'commercial' | 'personal' | 'group';
  liveLink?: string;
  githubLink?: string;
}
