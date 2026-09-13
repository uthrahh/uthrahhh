"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/** Renders `**text**` as selective bold emphasis within an otherwise plain
 * data string, so source content can call out key technical terms without
 * the data layer needing to carry JSX. */
function renderWithBold(text: string): ReactNode {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) =>
    part.startsWith("**") && part.endsWith("**") ? (
      <strong key={i} className="font-semibold text-ink">
        {part.slice(2, -2)}
      </strong>
    ) : (
      part
    )
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-1.5">
      {items.map((h, i) => (
        <li key={i} className="flex gap-2 text-sm leading-relaxed text-ink-muted">
          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden="true" />
          <span>{renderWithBold(h)}</span>
        </li>
      ))}
    </ul>
  );
}

/**
 * A one-line summary with a "Read more"/"Read less" toggle glued to the end
 * of its last word, expanding inline to the full labeled bullet groups
 * below. Collapsed state shows only the summary — enough to understand the
 * role at a glance; nothing is truncated mid-sentence since the summary
 * itself is always shown in full.
 */
export function ExperienceHighlights({
  summary,
  groups,
}: {
  summary: string;
  groups: { label: string; items: string[] }[];
}) {
  const [expanded, setExpanded] = useState(false);
  const [contentHeight, setContentHeight] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);
  const hasMore = groups.length > 0;

  useEffect(() => {
    const measure = () => {
      if (contentRef.current) {
        setContentHeight(contentRef.current.scrollHeight);
      }
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [groups]);

  return (
    <div>
      <p className="text-[15px] leading-relaxed text-ink-muted">
        {summary}
        {hasMore ? (
          <>
            {" "}
            <button
              type="button"
              onClick={() => setExpanded((v) => !v)}
              aria-expanded={expanded}
              className="inline-flex items-center gap-1 whitespace-nowrap font-mono text-xs uppercase tracking-wide text-accent-strong transition-colors hover:text-accent"
            >
              {expanded ? "Read less" : "Read more"}
              <span aria-hidden="true">{expanded ? "↑" : "→"}</span>
            </button>
          </>
        ) : null}
      </p>

      {hasMore ? (
        <div
          style={{ maxHeight: expanded ? contentHeight : 0 }}
          aria-hidden={!expanded}
          className="overflow-hidden transition-[max-height] duration-300 ease-out"
        >
          <div ref={contentRef} className="space-y-4 pt-4">
            {groups.map((group) => (
              <div key={group.label}>
                <p className="mb-1.5 font-mono text-[11px] uppercase tracking-widest text-ink-faint">
                  {group.label}
                </p>
                <BulletList items={group.items} />
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}
