"use client";

import { useMemo, useState } from "react";
import { ProjectCard } from "@/components/ProjectCard";
import type { Project, ProjectCategory } from "@/lib/types";

const CATEGORIES: ProjectCategory[] = [
  "Data Engineering",
  "AI & GenAI",
  "Software Engineering",
  "Full-Stack",
  "Data Analytics & ML",
];

export function ProjectsExplorer({
  projects,
  onOpenProject,
}: {
  projects: Project[];
  onOpenProject: (slug: string) => void;
}) {
  const [query, setQuery] = useState("");
  const [activeCategories, setActiveCategories] = useState<ProjectCategory[]>([]);

  function toggleCategory(cat: ProjectCategory) {
    setActiveCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  }

  function reset() {
    setQuery("");
    setActiveCategories([]);
  }

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return projects.filter((p) => {
      const matchesCategory =
        activeCategories.length === 0 ||
        p.categories.some((c) => activeCategories.includes(c));

      if (!matchesCategory) return false;
      if (!q) return true;

      const haystack = [
        p.title,
        p.summary,
        ...p.technologies,
        ...p.categories,
      ]
        .join(" ")
        .toLowerCase();

      return haystack.includes(q);
    });
  }, [projects, query, activeCategories]);

  const hasActiveFilters = query.trim().length > 0 || activeCategories.length > 0;

  return (
    <div>
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="relative w-full lg:max-w-xs">
          <label htmlFor="project-search" className="sr-only">
            Search projects
          </label>
          <input
            id="project-search"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by name or technology…"
            className="w-full border border-border bg-paper-raised px-4 py-2.5 text-sm text-ink placeholder:text-ink-faint focus-visible:outline-2 focus-visible:outline-focus-ring"
          />
        </div>

        <div
          className="flex flex-wrap items-center gap-2 lg:justify-end"
          role="group"
          aria-label="Filter by category"
        >
          {CATEGORIES.map((cat) => {
            const active = activeCategories.includes(cat);
            return (
              <button
                key={cat}
                type="button"
                onClick={() => toggleCategory(cat)}
                aria-pressed={active}
                className={`min-h-9 rounded-sm border px-3.5 py-1.5 text-sm transition-colors ${
                  active
                    ? "border-accent bg-accent-soft text-accent-strong"
                    : "border-border text-ink-muted hover:border-border-strong hover:text-ink"
                }`}
              >
                {cat}
              </button>
            );
          })}
          {hasActiveFilters ? (
            <button
              type="button"
              onClick={reset}
              className="text-sm font-medium text-ink-muted underline decoration-border-strong underline-offset-4 hover:text-accent-strong"
            >
              Reset
            </button>
          ) : null}
        </div>
      </div>

      <p className="mt-6 text-sm text-ink-faint" role="status">
        {filtered.length} project{filtered.length === 1 ? "" : "s"}
      </p>

      {filtered.length > 0 ? (
        <div className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
              onOpen={() => onOpenProject(project.slug)}
            />
          ))}
        </div>
      ) : (
        <div className="mt-4 border border-dashed border-border p-10 text-center">
          <p className="text-sm text-ink-muted">
            No projects match that search. Try a different term or{" "}
            <button
              type="button"
              onClick={reset}
              className="text-accent-strong underline underline-offset-4"
            >
              reset filters
            </button>
            .
          </p>
        </div>
      )}
    </div>
  );
}
