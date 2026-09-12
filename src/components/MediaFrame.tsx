"use client";

import { useState } from "react";
import type { MediaAsset, MediaKind } from "@/lib/types";

const KIND_LABEL: Record<MediaKind, string> = {
  screenshot: "Project screenshot",
  website: "Website screenshot",
  code: "Code snapshot",
  architecture: "Architecture",
  dashboard: "Dashboard",
  product: "Product UI",
  team: "Team photo",
  event: "Event photo",
  documentation: "Documentation",
  portrait: "Profile photo",
};

const ASPECT_CLASS: Record<NonNullable<MediaAsset["aspect"]>, string> = {
  "16/9": "aspect-[16/9]",
  "4/3": "aspect-[4/3]",
  "1/1": "aspect-square",
  "3/2": "aspect-[3/2]",
  "3/4": "aspect-[3/4]",
};

function KindIcon({ kind }: { kind: MediaKind }) {
  const common = { stroke: "currentColor", strokeWidth: 1.2, fill: "none" } as const;
  switch (kind) {
    case "screenshot":
    case "website":
    case "product":
      return (
        <svg width="22" height="22" viewBox="0 0 22 22" aria-hidden="true">
          <rect x="2" y="4" width="18" height="14" rx="1" {...common} />
          <path d="M2 8h18" {...common} />
          <circle cx="5" cy="6" r="0.6" fill="currentColor" stroke="none" />
        </svg>
      );
    case "code":
      return (
        <svg width="22" height="22" viewBox="0 0 22 22" aria-hidden="true">
          <path d="M8 5 3 11l5 6M14 5l5 6-5 6" {...common} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "architecture":
      return (
        <svg width="22" height="22" viewBox="0 0 22 22" aria-hidden="true">
          <rect x="2" y="3" width="6" height="4" {...common} />
          <rect x="14" y="3" width="6" height="4" {...common} />
          <rect x="8" y="15" width="6" height="4" {...common} />
          <path d="M5 7v4h12V7M11 11v4" {...common} />
        </svg>
      );
    case "dashboard":
      return (
        <svg width="22" height="22" viewBox="0 0 22 22" aria-hidden="true">
          <path d="M4 17V9M11 17V4M18 17v-6" {...common} strokeLinecap="round" />
          <path d="M2 19h18" {...common} strokeLinecap="round" />
        </svg>
      );
    case "team":
    case "event":
      return (
        <svg width="22" height="22" viewBox="0 0 22 22" aria-hidden="true">
          <circle cx="8" cy="8" r="3" {...common} />
          <circle cx="15" cy="9" r="2.4" {...common} />
          <path d="M3 18c0-3 2.5-5 5-5s5 2 5 5M13 18c.3-2.2 1.8-4 4-4s4.2 1.6 4.5 4" {...common} strokeLinecap="round" />
        </svg>
      );
    case "documentation":
      return (
        <svg width="22" height="22" viewBox="0 0 22 22" aria-hidden="true">
          <path d="M6 2h7l4 4v14H6z" {...common} strokeLinejoin="round" />
          <path d="M13 2v4h4" {...common} strokeLinejoin="round" />
          <path d="M8.5 12h6M8.5 15h6" {...common} strokeLinecap="round" />
        </svg>
      );
    case "portrait":
      return (
        <svg width="15" height="15" viewBox="0 0 15 15" aria-hidden="true">
          <circle cx="11" cy="8.5" r="3.5" {...common} />
          <path d="M4 19c0-4 3-7 7-7s7 3 7 7" {...common} strokeLinecap="round" />
        </svg>
      );
  }
}

function Placeholder({ asset }: { asset: MediaAsset }) {
  return (
    <div
      role="img"
      aria-label={asset.alt}
      className="media-placeholder absolute inset-0 flex flex-col items-center justify-center gap-2.5 border border-dashed border-border-strong bg-paper-sunken text-ink-faint"
    >
      <KindIcon kind={asset.kind} />
      <span className="font-mono text-[10px] uppercase tracking-widest">
        {KIND_LABEL[asset.kind]}
      </span>
    </div>
  );
}

/**
 * Renders `asset.src` when it loads successfully; falls back to the
 * labeled placeholder automatically if the file is missing (404) or not
 * yet provided. This means media paths can be filled in ahead of time
 * (see MEDIA_CHECKLIST.md) and start rendering the instant the real file
 * is dropped into /public, with no code changes.
 */
export function MediaFrame({
  asset,
  className = "",
  imgClassName = "",
  priority = false,
  fill = false,
}: {
  asset: MediaAsset;
  className?: string;
  /** Extra classes on the rendered <img> itself, e.g. a hover scale transition. */
  imgClassName?: string;
  priority?: boolean;
  /** Render as an absolutely-positioned layer filling its parent, instead of
   * owning its own aspect-ratio box. Use when the parent element (e.g. a
   * product-style card) already defines the box and the image is a
   * background layer with content stacked on top of it. */
  fill?: boolean;
}) {
  const [errored, setErrored] = useState(false);
  const aspectClass = ASPECT_CLASS[asset.aspect ?? "4/3"];
  const showImage = Boolean(asset.src) && !errored;

  const frame = (
    <div
      className={
        fill
          ? "absolute inset-0 overflow-hidden bg-paper-sunken"
          : `relative overflow-hidden border border-border bg-paper-sunken ${aspectClass}`
      }
    >
      {showImage ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={asset.src}
          alt={asset.alt}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          onError={() => setErrored(true)}
          className={`h-full w-full object-cover ${imgClassName}`}
        />
      ) : (
        <Placeholder asset={asset} />
      )}
    </div>
  );

  if (fill) {
    return <div className={className}>{frame}</div>;
  }

  return (
    <figure className={className}>
      {frame}
      {asset.caption ? (
        <figcaption className="mt-2 text-xs text-ink-faint">{asset.caption}</figcaption>
      ) : null}
    </figure>
  );
}
