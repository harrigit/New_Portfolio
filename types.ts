export interface Project {
  name: string;
  description: string;
  technologies: string[];
  image: string | null;
  date?: string;
  githubLink?: string;
  websiteLink?: string;
}

export enum TechLevel {
  Advanced,
  Proficient,
  Learning,
}

export interface Technology {
  name: string;
  eg: string;
  level: TechLevel;
}

export interface DetailTechList {
  techName: string;
  listing: string[];
}

export interface CarrierTimeline {
  date: string;
  position: string;
  company: string;
  jobDescription: string;
}

export interface Contact {
  email: string;
  phoneNumber: string;
  skype: string;
}
