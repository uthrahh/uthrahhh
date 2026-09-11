import { Container } from "@/components/Container";
import { RoleCylinder } from "@/components/RoleCylinder";
import { EmailCopy } from "@/components/EmailCopy";
import { site } from "@/lib/data/site";

export function HomeSection() {
  return (
    <section
      id="home"
      className="relative flex h-[100svh] min-h-[560px] flex-col justify-between overflow-hidden border-b border-border"
    >
      <div className="hero-grid pointer-events-none absolute inset-0" aria-hidden="true" />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, transparent 0%, var(--paper) 85%)",
        }}
        aria-hidden="true"
      />

      <Container className="relative flex flex-1 flex-col justify-center py-14">
        <h1 className="max-w-3xl font-display text-4xl leading-[1.08] text-ink sm:text-5xl md:text-[3.2rem]">
          {site.name}
        </h1>

        <div className="mt-4">
          <RoleCylinder />
        </div>

        <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-muted sm:text-lg">
          {site.heroIntro}
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-ink-muted">
          <EmailCopy email={site.email} />
          <span className="text-border-strong">·</span>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent-strong"
          >
            LinkedIn
          </a>
          <span className="text-border-strong">·</span>
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent-strong"
          >
            GitHub
          </a>
          <span className="text-border-strong">·</span>
          <span>{site.location}</span>
        </div>
      </Container>

      <Container className="relative pb-24 lg:pb-10">
        <a
          href="#projects"
          className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-ink-faint transition-colors hover:text-accent-strong"
        >
          Projects
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
            <path d="M2 4l3 3 3-3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </Container>
    </section>
  );
}
