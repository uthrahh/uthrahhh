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

export type MediaKind =
  | "screenshot"
  | "website"
  | "code"
  | "architecture"
  | "dashboard"
  | "product"
  | "team"
  | "event"
  | "documentation"
  | "portrait";

export type MediaAsset = {
  kind: MediaKind;
  /** Path under /public once the real file is added. Omit to render the placeholder. */
  src?: string;
  alt: string;
  caption?: string;
  aspect?: "16/9" | "4/3" | "1/1" | "3/2" | "3/4";
};

export type Achievement = {
  rank: string;
  event: string;
  organizer: string;
  year: string;
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
  status:
    | "Shipped internally"
    | "In progress"
    | "Proof of concept"
    | "Completed"
    | "Award winner"
    | "Product in development";
  achievement?: Achievement;
  links: ProjectLink[];
  sections: ProjectSection[];
  metrics?: { label: string; value: string }[];
  cover: MediaAsset;
  gallery?: MediaAsset[];
};

export type Workstream = {
  title: string;
  /** One-line summary shown in the compact, scannable list. */
  oneLiner: string;
  technologies: string[];
  projectSlug?: string;
  /** Shown only when the workstream is expanded. */
  context?: string;
  contribution?: string;
  media?: MediaAsset[];
};

export type ExperienceItem = {
  org: string;
  orgUrl?: string;
  role: string;
  employmentType: string;
  workMode: string;
  city: string;
  duration: string;
  start: string;
  end: string;
  summary: string;
  workstreams: Workstream[];
  technologies: string[];
};

export type ActivityEntry = {
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
  skills: string[];
};

export type LanguageEntry = {
  name: string;
  proficiency?: string;
};

export type SchoolLevel = {
  grade: string;
  board: string;
  result?: string;
};

export type EducationEntry = {
  institution: string;
  institutionUrl?: string;
  degree?: string;
  start?: string;
  end: string;
  activities: string[];
  coursework: string[];
  levels?: SchoolLevel[];
};

export type SubstackPost = {
  title: string;
  url: string;
  publishedAt: string;
  excerpt?: string;
};
