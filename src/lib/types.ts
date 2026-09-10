export type ProjectCategory =
  | "Data Engineering"
  | "AI & GenAI"
  | "Software Engineering"
  | "Full-Stack"
  | "Data Analytics & ML";

export type ProjectLink = {
  label: string;
  href: string;
  kind: "repo" | "docs" | "demo" | "data";
};

export type ProjectSection = {
  heading: string;
  body: string[];
};

export type Project = {
  slug: string;
  title: string;
  summary: string;
  categories: ProjectCategory[];
  technologies: string[];
  year: string;
  role: string;
  context: string;
  featured: boolean;
  status: "Shipped internally" | "In progress" | "Proof of concept" | "Completed";
  links: ProjectLink[];
  sections: ProjectSection[];
  metrics?: { label: string; value: string }[];
};

export type ExperienceItem = {
  org: string;
  orgUrl?: string;
  role: string;
  location: string;
  start: string;
  end: string;
  summary: string;
  workstreams: { title: string; detail: string; projectSlug?: string }[];
  technologies: string[];
};

export type LeadershipRole = {
  org: string;
  orgUrl?: string;
  role: string;
  start: string;
  end: string;
  detail: string[];
};

export type HackathonEntry = {
  name: string;
  result: string;
  date: string;
  organizer: string;
  team?: string;
  problem: string;
  solution: string[];
  contribution: string;
};

export type SkillGroup = {
  category: string;
  skills: { name: string; evidence: string[] }[];
};
