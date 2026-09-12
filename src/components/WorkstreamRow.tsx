"use client";

import { useProjectModal } from "@/components/ProjectModalProvider";
import type { Workstream } from "@/lib/types";

/**
 * A compact, borderless row for a project done during an experience. One
 * click opens the complete project case study directly — there is no
 * intermediate summary/expand state, since the project's own detail page
 * already covers the same ground as anything a preview here could show.
 */
export function WorkstreamRow({ workstream }: { workstream: Workstream }) {
  const openProject = useProjectModal();

  return (
    <button
      type="button"
      onClick={() => workstream.projectSlug && openProject(workstream.projectSlug)}
      disabled={!workstream.projectSlug}
      className="group block w-full border-b border-border py-4 text-left first:pt-0 last:border-b-0 disabled:cursor-default"
    >
      <div className="flex items-start justify-between gap-3">
        <h4 className="font-display text-base text-ink transition-colors group-hover:text-accent-strong group-disabled:group-hover:text-ink">
          {workstream.title}
        </h4>
        {workstream.projectSlug ? (
          <span
            aria-hidden="true"
            className="mt-1 shrink-0 text-ink-faint transition-all group-hover:translate-x-0.5 group-hover:text-accent-strong group-focus-visible:translate-x-0.5 group-focus-visible:text-accent-strong"
          >
            →
          </span>
        ) : null}
      </div>
      <p className="mt-1 text-sm text-ink-muted">{workstream.oneLiner}</p>
      <p className="mt-1.5 text-xs text-ink-faint">
        {workstream.technologies.join(" · ")}
      </p>
    </button>
  );
}
