"use client";

import { useEffect, useRef } from "react";
import { site } from "@/lib/data/site";

export function ResumeModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) {
      dialog.showModal();
    } else if (!open && dialog.open) {
      dialog.close();
    }
  }, [open]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    const handleClose = () => onClose();
    dialog.addEventListener("close", handleClose);
    return () => dialog.removeEventListener("close", handleClose);
  }, [onClose]);

  if (!site.resumeVariants?.length) return null;

  return (
    <dialog
      ref={dialogRef}
      className="m-auto max-w-md border border-border bg-paper p-0 backdrop:bg-ink/60 backdrop:backdrop-blur-sm open:animate-none"
      onClick={(e) => {
        if (e.target === dialogRef.current) onClose();
      }}
    >
      <div className="flex items-center justify-between border-b border-border px-5 py-4">
        <p className="font-display text-lg text-ink">Download Resume</p>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="flex h-9 w-9 items-center justify-center rounded-sm text-ink-muted transition-colors hover:text-accent-strong"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M3 3l10 10M13 3 3 13" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      <div className="p-5">
        <p className="text-sm text-ink-muted">Pick the version tailored to what you&apos;re hiring for.</p>
        <div className="mt-4 flex flex-col gap-2.5">
          {site.resumeVariants.map((variant) => (
            <a
              key={variant.short}
              href={variant.url}
              download={variant.url.slice(1)}
              className="flex items-center gap-3 border border-border px-4 py-3 text-sm transition-colors hover:border-accent hover:bg-paper-sunken"
            >
              <span className="font-mono text-xs font-semibold uppercase tracking-wide text-accent-strong">
                {variant.short}
              </span>
              <span className="text-ink">{variant.role}</span>
            </a>
          ))}
        </div>
      </div>
    </dialog>
  );
}
