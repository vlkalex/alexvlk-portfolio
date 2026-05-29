export interface ProjectLink {
  label: string;
  href: string;
}

export interface Project {
  title: string;
  description: string;
  caseStudy?: string;
  links: ProjectLink[];
}
