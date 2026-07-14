export interface SiteConfig extends HeaderProps {
  title: string;
  description: string;
  lang: string;
  author: string;
  socialLinks: { text: string; href: string }[];
  socialImage: string;
  canonicalURL?: string;
}

export interface SkillCategories {
  languages?: string[];
  frontend?: string[];
  backend?: string[];
  databases?: string[];
  tools?: string[];
  other?: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  featured?: boolean;
  description?: string;
}

export interface Coursework {
  name: string;
  issuer: string;
  date: string;
}

export interface SkillsAndCertifications {
  skillCategories: SkillCategories;
  certifications: Certification[];
  additionalCoursework?: Coursework[];
}

export interface SiteContent {
  hero: HeroProps;
  experience: ExperienceProps[];
  projects: ProjectProps[];
  about: AboutProps;
  skillsAndCertifications: SkillsAndCertifications;
}

export interface HeroProps {
  name: string;
  specialty: string;
  summary: string;
  email: string;
}

export interface ExperienceProps {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  summary: string | string[];
}

export interface ProjectProps {
  name: string;
  summary: string;
  image: string;
  linkPreview?: string;
  linkSource?: string;
}

export interface AboutProps {
  description: string;
  image: string;
}

export interface HeaderProps {
  siteLogo: string;
  navLinks: { text: string; href: string }[];
}