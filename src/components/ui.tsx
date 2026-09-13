import Link from "next/link";
import type { ReactNode } from "react";

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-sm border border-border px-2 py-0.5 font-mono text-[11px] uppercase tracking-wide text-ink-muted">
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title?: string;
  description?: string;
}) {
  return (
    <div className="max-w-2xl">
      {eyebrow ? (
        <p className="mb-1 font-mono text-sm font-medium uppercase tracking-widest text-accent">
          {eyebrow}
        </p>
      ) : null}
      {title ? (
        <h2 className="font-display text-3xl leading-tight text-ink sm:text-4xl">
          {title}
        </h2>
      ) : null}
      {description ? (
        <p className={`${title ? "mt-4" : "mt-3"} max-w-xl text-[14px] leading-relaxed text-ink-muted`}>
          {description}
        </p>
      ) : null}
    </div>
  );
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
  external = false,
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  external?: boolean;
}) {
  const base =
    "inline-flex items-center gap-2 rounded-sm px-5 py-2.5 text-sm font-medium transition-colors min-h-11";
  const styles =
    variant === "primary"
      ? "bg-ink text-paper hover:bg-accent-strong"
      : "border border-border-strong text-ink hover:border-accent hover:text-accent-strong";

  const extProps = external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <Link href={href} className={`${base} ${styles}`} {...extProps}>
      {children}
    </Link>
  );
}

export function ExternalLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
    </a>
  );
}
