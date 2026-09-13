"use client";

import { useState } from "react";
import { ExperienceProjectBarrel } from "@/components/ExperienceProjectBarrel";
import { ExperienceHighlights } from "@/components/ExperienceHighlights";
import type { ExperienceItem } from "@/lib/types";

/**
 * One work-experience entry. Owns the "Read more" expanded state so it can
 * drive both halves of the row in lockstep: expanding the highlights also
 * switches the project barrel to a plain, readable list (easier to scan
 * alongside the now-longer highlights text), collapsing switches it back
 * to the rotating barrel.
 */
export function ExperienceEntry({ exp }: { exp: ExperienceItem }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="border-t border-border pt-5 first:border-t-0 first:pt-0">
      <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
        <h3 className="font-display text-xl leading-snug text-ink sm:text-2xl">
          {exp.role}
          <span className="text-ink-muted"> at </span>
          <a
            href={exp.orgUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent-strong hover:text-accent"
          >
            {exp.org}
          </a>
          <span className="text-ink-muted">, {exp.city}</span>
        </h3>
        <span className="shrink-0 font-mono text-xs text-ink-faint sm:text-sm">
          {exp.start} – {exp.end}
        </span>
      </div>

      <p className="mt-2 font-mono text-xs uppercase tracking-wide text-ink-faint">
        {exp.employmentType} · {exp.workMode} · {exp.duration}
      </p>

      <div className="mt-3 grid gap-x-10 gap-y-3 lg:grid-cols-2 lg:items-center">
        <div className="max-w-md">
          {exp.summary ? (
            <ExperienceHighlights
              summary={exp.summary}
              groups={exp.highlightGroups ?? []}
              expanded={expanded}
              onToggle={() => setExpanded((v) => !v)}
            />
          ) : null}
        </div>

        <div>
          <ExperienceProjectBarrel workstreams={exp.workstreams} asList={expanded} />
        </div>
      </div>
    </div>
  );
}
