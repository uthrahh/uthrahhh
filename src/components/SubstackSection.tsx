"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/data/site";
import type { SubstackPost } from "@/lib/types";

function formatDate(iso: string): string {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "";
  return d.toLocaleDateString("en-US", { month: "short", year: "numeric" });
}

export function SubstackSection() {
  const [posts, setPosts] = useState<SubstackPost[] | null>(null);

  useEffect(() => {
    let cancelled = false;
    fetch("/api/substack")
      .then((r) => r.json())
      .then((data) => {
        if (!cancelled) setPosts(data.posts ?? []);
      })
      .catch(() => {
        if (!cancelled) setPosts([]);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="border border-border p-7">
      <div className="flex items-baseline justify-between gap-3">
        <p className="text-sm text-ink-muted">
          Notes on data engineering and the systems behind it.
        </p>
        <a
          href={site.substack}
          target="_blank"
          rel="noopener noreferrer"
          className="whitespace-nowrap text-xs font-medium text-accent-strong underline decoration-border-strong underline-offset-4 hover:text-accent hover:decoration-accent"
        >
          Substack ↗
        </a>
      </div>

      {posts && posts.length > 0 ? (
        <ul className="mt-5 space-y-5">
          {posts.map((post) => (
            <li key={post.url} className="border-t border-border pt-5 first:border-t-0 first:pt-0">
              <a
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div className="flex items-baseline justify-between gap-3">
                  <h4 className="font-display text-lg text-accent-strong group-hover:text-accent">
                    {post.title}
                  </h4>
                  <span className="whitespace-nowrap font-mono text-xs text-ink-faint">
                    {formatDate(post.publishedAt)}
                  </span>
                </div>
                {post.excerpt ? (
                  <p className="mt-1.5 text-sm text-ink-muted">{post.excerpt}</p>
                ) : null}
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <div className="mt-5">
          <p className="text-sm leading-relaxed text-ink-faint">
            Nothing published yet. This space fills in automatically the
            moment the first piece goes live.
          </p>
        </div>
      )}
    </div>
  );
}
