"use client";

import { MediaFrame } from "@/components/MediaFrame";
import { Tag } from "@/components/ui";
import { useProjectModal } from "@/components/ProjectModalProvider";
import type { Workstream } from "@/lib/types";

export function WorkstreamDisclosure({ workstream }: { workstream: Workstream }) {
  const openProject = useProjectModal();
  const hasExpandedContent = Boolean(
    workstream.context || workstream.contribution || workstream.media?.length
  );

  const caseStudyLink = workstream.projectSlug ? (
    <button
      type="button"
      onClick={() => openProject(workstream.projectSlug!)}
      className="text-sm font-medium text-accent-strong underline underline-offset-4 hover:text-accent"
    >
      Read the full case study →
    </button>
  ) : (
    <Tag>No further detail</Tag>
  );

  return (
    <details className="group border border-border p-5 open:bg-paper-raised">
      <summary className="flex cursor-pointer list-none items-start justify-between gap-4 [&::-webkit-details-marker]:hidden">
        <div>
          <h3 className="font-display text-base text-ink">{workstream.title}</h3>
          <p className="mt-1 text-sm text-ink-muted">{workstream.oneLiner}</p>
          <p className="mt-2 text-xs text-ink-faint">
            {workstream.technologies.join(" · ")}
          </p>
        </div>
        {hasExpandedContent ? (
          <span
            aria-hidden="true"
            className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-sm border border-border text-ink-faint transition-transform group-open:rotate-45"
          >
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path d="M5 1v8M1 5h8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
            </svg>
          </span>
        ) : null}
      </summary>

      {hasExpandedContent ? (
        <div className="mt-5 space-y-4 border-t border-border pt-5">
          {workstream.context ? (
            <p className="text-sm leading-relaxed text-ink-muted">
              <span className="font-medium text-ink">Context: </span>
              {workstream.context}
            </p>
          ) : null}
          {workstream.contribution ? (
            <p className="text-sm leading-relaxed text-ink-muted">
              <span className="font-medium text-ink">My contribution: </span>
              {workstream.contribution}
            </p>
          ) : null}
          {workstream.media?.length ? (
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {workstream.media.map((m, i) => (
                <MediaFrame key={i} asset={m} />
              ))}
            </div>
          ) : null}
          <div className="flex flex-wrap gap-3 pt-1">{caseStudyLink}</div>
        </div>
      ) : (
        <div className="mt-4 border-t border-border pt-4">{caseStudyLink}</div>
      )}
    </details>
  );
}
