import Link from "next/link";
import { Tag } from "@/components/ui";
import type { Project } from "@/lib/types";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group flex h-full flex-col justify-between border border-border p-6 transition-colors hover:border-accent"
    >
      <div>
        <div className="mb-3 flex items-center justify-between gap-3">
          <p className="font-mono text-xs uppercase tracking-wide text-ink-faint">
            {project.categories[0]}
          </p>
          <p className="font-mono text-xs text-ink-faint">{project.year}</p>
        </div>
        <h3 className="font-display text-xl text-ink transition-colors group-hover:text-accent-strong">
          {project.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-ink-muted">
          {project.summary}
        </p>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.technologies.slice(0, 4).map((t) => (
          <Tag key={t}>{t}</Tag>
        ))}
      </div>
    </Link>
  );
}
