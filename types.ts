export type Project = {
  name: string;
  description: string;
  technologies: string[];
  image: string | null;
};

export enum TechLevel {
  Advanced,
  Proficient,
  Learning,
}

export type Technology = {
  name: string;
  eg: string;
  level: TechLevel;
};
