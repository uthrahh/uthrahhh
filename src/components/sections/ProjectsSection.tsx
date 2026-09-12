"use client";

import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/ui";
import { ProjectsExplorer } from "@/components/ProjectsExplorer";
import { useProjectModal } from "@/components/ProjectModalProvider";
import { projects } from "@/lib/data/projects";

export function ProjectsSection() {
  const openProject = useProjectModal();
  const sorted = [...projects].sort((a, b) =>
    a.featured === b.featured ? 0 : a.featured ? -1 : 1
  );

  return (
    <section id="projects" className="scroll-mt-6 border-b border-border">
      <Container className="py-5 sm:py-6">
        <SectionHeading eyebrow="Projects" />

        <div className="mt-3">
          <ProjectsExplorer projects={sorted} onOpenProject={openProject} />
        </div>
      </Container>
    </section>
  );
}
