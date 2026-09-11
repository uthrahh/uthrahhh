"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import { ProjectDetailModal } from "@/components/ProjectDetailModal";
import { getProject } from "@/lib/data/projects";

const ProjectModalContext = createContext<(slug: string) => void>(() => {});

export function useProjectModal() {
  return useContext(ProjectModalContext);
}

export function ProjectModalProvider({ children }: { children: ReactNode }) {
  const [openSlug, setOpenSlug] = useState<string | null>(null);

  return (
    <ProjectModalContext.Provider value={setOpenSlug}>
      {children}
      <ProjectDetailModal
        project={openSlug ? getProject(openSlug) ?? null : null}
        onClose={() => setOpenSlug(null)}
      />
    </ProjectModalContext.Provider>
  );
}
