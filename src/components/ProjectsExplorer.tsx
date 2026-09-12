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

function FilterIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" className="shrink-0">
      <path d="M1.5 3.5h11M3.5 7h7M5.5 10.5h3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

const INITIAL_VISIBLE_COUNT = 3;

export function ProjectsExplorer({
  projects,
  onOpenProject,
}: {
  projects: Project[];
  onOpenProject: (slug: string) => void;
}) {
  const [query, setQuery] = useState("");
  const [activeCategories, setActiveCategories] = useState<ProjectCategory[]>([]);
  const [expanded, setExpanded] = useState(false);

  function toggleCategory(cat: ProjectCategory) {
    setActiveCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  }

  function reset() {
    setQuery("");
    setActiveCategories([]);
    setExpanded(false);
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
  const canCollapse = !hasActiveFilters && filtered.length > INITIAL_VISIBLE_COUNT;
  const visible = canCollapse && !expanded ? filtered.slice(0, INITIAL_VISIBLE_COUNT) : filtered;

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
          className="flex flex-nowrap items-center gap-x-5 gap-y-2 overflow-x-auto py-1 lg:justify-end"
          role="group"
          aria-label="Filter by category"
        >
          <FilterIcon />
          <button
            type="button"
            onClick={() => setActiveCategories([])}
            aria-pressed={activeCategories.length === 0}
            className={`shrink-0 whitespace-nowrap text-sm underline-offset-4 transition-colors ${
              activeCategories.length === 0
                ? "text-ink underline decoration-accent"
                : "text-ink-faint hover:text-ink"
            }`}
          >
            All
          </button>
          {CATEGORIES.map((cat) => {
            const active = activeCategories.includes(cat);
            return (
              <button
                key={cat}
                type="button"
                onClick={() => toggleCategory(cat)}
                aria-pressed={active}
                className={`shrink-0 whitespace-nowrap text-sm underline-offset-4 transition-colors ${
                  active
                    ? "text-accent-strong underline decoration-accent"
                    : "text-ink-faint hover:text-ink"
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
              className="shrink-0 whitespace-nowrap text-sm font-medium text-ink-muted underline decoration-border-strong underline-offset-4 hover:text-accent-strong"
            >
              Reset
            </button>
          ) : null}
        </div>
      </div>

      <p className="mt-3 text-sm text-ink-faint" role="status">
        {filtered.length} project{filtered.length === 1 ? "" : "s"}
      </p>

      {filtered.length > 0 ? (
        <>
          <div className="mt-3 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((project) => (
              <ProjectCard
                key={project.slug}
                project={project}
                onOpen={() => onOpenProject(project.slug)}
              />
            ))}
          </div>

          {canCollapse ? (
            <div className="mt-4">
              <button
                type="button"
                onClick={() => setExpanded((e) => !e)}
                className="group inline-flex items-center gap-1.5 text-sm font-medium text-ink-muted transition-colors hover:text-accent-strong"
              >
                {expanded ? "View less" : "View more projects"}
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  aria-hidden="true"
                  className={`transition-transform duration-200 ${expanded ? "-rotate-180" : ""}`}
                >
                  <path d="M2 4l3 3 3-3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          ) : null}
        </>
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
