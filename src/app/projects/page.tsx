import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/ui";
import { ProjectsExplorer } from "@/components/ProjectsExplorer";
import { projects } from "@/lib/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Data engineering, AI, backend, and full-stack projects, with real architecture decisions, not feature lists.",
};

export default function ProjectsPage() {
  const sorted = [...projects].sort((a, b) =>
    a.featured === b.featured ? 0 : a.featured ? -1 : 1
  );

  return (
    <Container className="py-16 sm:py-20">
      <SectionHeading
        eyebrow="Work"
        title="Projects"
        description="Twelve projects spanning data engineering, backend systems, GenAI, and applied ML. Every entry links to real source and documents the actual scope, including what's still in progress."
      />

      <div className="mt-10">
        <ProjectsExplorer projects={sorted} />
      </div>
    </Container>
  );
}
