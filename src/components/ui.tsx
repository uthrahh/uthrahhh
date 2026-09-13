import Link from "next/link";
import type { ReactNode } from "react";

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-sm border border-border px-2 py-0.5 font-mono text-[11px] uppercase tracking-wide text-ink-muted">
      {children}
    </span>
  );
}

export type EyebrowLogo = {
  /** Light-theme (or theme-agnostic) image. */
  src: string;
  /** Optional dark-theme variant, swapped in via CSS (see .badge-logo-* in globals.css). */
  darkSrc?: string;
  alt: string;
};

/** Small circular logo badges, right-aligned on the eyebrow's own row. */
function EyebrowLogos({ logos }: { logos: EyebrowLogo[] }) {
  return (
    <div className="flex items-center gap-2">
      {logos.map((logo) => (
        <span
          key={logo.alt}
          title={logo.alt}
          className="flex h-6 w-6 shrink-0 items-center justify-center overflow-hidden rounded-full border border-border bg-paper-raised shadow-sm sm:h-[0.84375in] sm:w-[0.84375in]"
        >
          {logo.darkSrc ? (
            <>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={logo.src} alt={logo.alt} className="badge-logo-light h-full w-full object-cover" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={logo.darkSrc} alt={logo.alt} className="badge-logo-dark h-full w-full object-cover" />
            </>
          ) : (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={logo.src} alt={logo.alt} className="h-full w-full object-cover" />
          )}
        </span>
      ))}
    </div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  logos,
}: {
  eyebrow?: string;
  title?: string;
  description?: string;
  logos?: EyebrowLogo[];
}) {
  return (
    <div>
      {eyebrow || logos?.length ? (
        <div className="mb-1 flex items-center justify-between gap-4">
          {eyebrow ? (
            <p className="font-mono text-sm font-medium uppercase tracking-widest text-accent">
              {eyebrow}
            </p>
          ) : (
            <span />
          )}
          {logos?.length ? <EyebrowLogos logos={logos} /> : null}
        </div>
      ) : null}
      <div className="max-w-2xl">
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
