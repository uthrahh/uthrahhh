"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Container } from "@/components/Container";
import { ThemeToggle } from "@/components/ThemeToggle";
import { navLinks } from "@/lib/nav";
import { site } from "@/lib/data/site";

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-paper/90 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <Link
          href="/"
          className="font-display text-lg font-medium tracking-tight text-ink"
        >
          {site.shortName}
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {navLinks.map((link) => {
            const active =
              pathname === link.href || pathname.startsWith(link.href + "/");
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm transition-colors ${
                  active
                    ? "text-ink font-medium"
                    : "text-ink-muted hover:text-ink"
                }`}
                aria-current={active ? "page" : undefined}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <ThemeToggle />
          <Link
            href="/#contact"
            className="inline-flex min-h-9 items-center rounded-sm border border-border-strong px-4 py-1.5 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent-strong"
          >
            Contact
          </Link>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="flex h-10 w-10 items-center justify-center rounded-sm border border-border text-ink"
          >
            {open ? (
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                <path d="M3 3l12 12M15 3 3 15" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                <path d="M2.5 5h13M2.5 9h13M2.5 13h13" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>
      </Container>

      {open ? (
        <div className="border-t border-border bg-paper md:hidden">
          <Container className="flex flex-col py-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="border-b border-border py-3.5 text-base text-ink last:border-b-0"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/#contact"
              onClick={closeMenu}
              className="py-3.5 text-base font-medium text-accent-strong"
            >
              Contact
            </Link>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
