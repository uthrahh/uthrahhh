"use client";

import { useEffect, useRef, useState } from "react";
import { ThemeToggle } from "@/components/ThemeToggle";

const sections = [
  { id: "home", label: "Home", icon: "home" },
  { id: "projects", label: "Projects", icon: "grid" },
  { id: "experience", label: "Experience", icon: "briefcase" },
  { id: "about", label: "About", icon: "profile" },
  { id: "contact", label: "Contact", icon: "mail" },
] as const;

type IconName = (typeof sections)[number]["icon"];

function NavIcon({ name }: { name: IconName }) {
  const common = { stroke: "currentColor", strokeWidth: 1.3, fill: "none" } as const;
  switch (name) {
    case "home":
      return (
        <svg width="15" height="15" viewBox="0 0 16 16" aria-hidden="true">
          <path d="M2 8.5 8 3l6 5.5" {...common} strokeLinecap="round" strokeLinejoin="round" />
          <path d="M3.5 7.5V13a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5V7.5" {...common} strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6.5 13v-4h3v4" {...common} strokeLinejoin="round" />
        </svg>
      );
    case "grid":
      return (
        <svg width="15" height="15" viewBox="0 0 16 16" aria-hidden="true">
          <rect x="1.5" y="1.5" width="5.5" height="5.5" {...common} />
          <rect x="9" y="1.5" width="5.5" height="5.5" {...common} />
          <rect x="1.5" y="9" width="5.5" height="5.5" {...common} />
          <rect x="9" y="9" width="5.5" height="5.5" {...common} />
        </svg>
      );
    case "briefcase":
      return (
        <svg width="15" height="15" viewBox="0 0 16 16" aria-hidden="true">
          <rect x="1.5" y="5" width="13" height="8.5" rx="1" {...common} />
          <path d="M5.5 5V3.5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1V5" {...common} />
          <path d="M1.5 9h13" {...common} />
        </svg>
      );
    case "profile":
      return (
        <svg width="15" height="15" viewBox="0 0 16 16" aria-hidden="true">
          <circle cx="8" cy="5" r="2.75" {...common} />
          <path d="M2.5 14c0-3 2.5-5 5.5-5s5.5 2 5.5 5" {...common} strokeLinecap="round" />
        </svg>
      );
    case "mail":
      return (
        <svg width="15" height="15" viewBox="0 0 16 16" aria-hidden="true">
          <rect x="1.5" y="3" width="13" height="10" rx="1" {...common} />
          <path d="M2 4l6 5 6-5" {...common} strokeLinejoin="round" />
        </svg>
      );
  }
}

export function FloatingNav() {
  const [active, setActive] = useState<string>("");
  const ticking = useRef(false);

  useEffect(() => {
    const els = sections
      .map((s) => document.getElementById(s.id))
      .filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        if (ticking.current) return;
        ticking.current = true;
        requestAnimationFrame(() => {
          const visible = entries
            .filter((e) => e.isIntersecting)
            .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
          if (visible) setActive(visible.target.id);
          ticking.current = false;
        });
      },
      { rootMargin: "-20% 0px -55% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  function goTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <>
      {/* Desktop: compact floating left rail, icon-only with hover labels */}
      <nav
        aria-label="Primary"
        className="fixed left-4 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-stretch gap-1 border border-border bg-paper/90 p-1.5 backdrop-blur lg:flex"
      >
        {sections.map((s) => {
          const isActive = active === s.id;
          return (
            <button
              key={s.id}
              type="button"
              onClick={() => goTo(s.id)}
              aria-current={isActive ? "true" : undefined}
              title={s.label}
              className={`group relative flex h-10 w-10 items-center justify-center rounded-sm transition-colors ${
                isActive ? "bg-accent-soft text-accent-strong" : "text-ink-muted hover:text-ink"
              }`}
            >
              <NavIcon name={s.icon} />
              <span
                aria-hidden="true"
                className={`absolute -right-1 top-1/2 h-1 w-1 -translate-y-1/2 translate-x-full rounded-full transition-colors ${
                  isActive ? "bg-accent-strong" : "bg-transparent"
                }`}
              />
              <span className="pointer-events-none absolute left-full ml-3 whitespace-nowrap rounded-sm border border-border bg-paper px-2.5 py-1 text-xs font-medium text-ink opacity-0 shadow-sm transition-opacity group-hover:opacity-100">
                {s.label}
              </span>
            </button>
          );
        })}
        <div className="mt-1 flex justify-center border-t border-border pt-1.5">
          <ThemeToggle />
        </div>
      </nav>

      {/* Mobile / tablet: floating bottom bar, compact icons only */}
      <nav
        aria-label="Primary"
        className="fixed inset-x-4 bottom-4 z-40 flex items-center justify-between gap-1 border border-border bg-paper/95 px-2 py-2 backdrop-blur lg:hidden"
      >
        {sections.map((s) => {
          const isActive = active === s.id;
          return (
            <button
              key={s.id}
              type="button"
              onClick={() => goTo(s.id)}
              aria-label={s.label}
              aria-current={isActive ? "true" : undefined}
              className={`flex min-h-11 min-w-11 flex-1 items-center justify-center rounded-sm transition-colors ${
                isActive ? "bg-accent-soft text-accent-strong" : "text-ink-muted"
              }`}
            >
              <NavIcon name={s.icon} />
            </button>
          );
        })}
        <div className="flex min-h-11 min-w-11 flex-1 items-center justify-center">
          <ThemeToggle />
        </div>
      </nav>
    </>
  );
}
