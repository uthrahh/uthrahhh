"use client";

import { useState } from "react";

export function EmailCopy({
  email,
  variant = "inline",
}: {
  email: string;
  variant?: "inline" | "button";
}) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API unavailable; the mailto fallback still works.
    }
  }

  const base = "group/copy relative inline-flex items-center gap-2";
  const styles =
    variant === "button"
      ? "min-h-11 rounded-sm bg-ink px-5 py-2.5 text-sm font-medium text-paper transition-colors hover:bg-accent-strong"
      : "text-sm text-ink-muted transition-colors hover:text-accent-strong";

  return (
    <span className={`${base} ${styles}`}>
      <button type="button" onClick={handleCopy} className="flex items-center gap-2">
        {variant === "button" ? (
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true">
            <rect x="4.5" y="4.5" width="8" height="8" rx="1" stroke="currentColor" strokeWidth="1.2" />
            <path d="M2.5 10V3a1 1 0 0 1 1-1h7" stroke="currentColor" strokeWidth="1.2" />
          </svg>
        ) : null}
        {email}
      </button>

      <span
        role="tooltip"
        aria-hidden="true"
        className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-sm border border-border bg-paper px-2.5 py-1 font-mono text-[11px] text-ink opacity-0 shadow-sm transition-all duration-150 group-hover/copy:opacity-100 group-hover/copy:-translate-y-0.5 group-focus-within/copy:opacity-100 group-focus-within/copy:-translate-y-0.5"
      >
        {copied ? "Copied" : "Copy email ID"}
      </span>

      <span role="status" aria-live="polite" className="sr-only">
        {copied ? "Email address copied to clipboard" : ""}
      </span>
    </span>
  );
}
