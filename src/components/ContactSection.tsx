import { Container } from "@/components/Container";
import { ButtonLink } from "@/components/ui";
import { site } from "@/lib/data/site";

export function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-16">
      <Container className="py-24 sm:py-28">
        <p className="mb-4 font-mono text-xs uppercase tracking-widest text-accent">
          Contact
        </p>
        <h2 className="max-w-2xl font-display text-3xl leading-tight text-ink sm:text-4xl">
          Open to Data Engineering, Analytics Engineering, and Data Analyst
          roles.
        </h2>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-muted">
          The fastest way to reach me is email. I&apos;m also active on
          LinkedIn and keep every project documented on GitHub.
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-4">
          <ButtonLink href={`mailto:${site.email}`}>
            Email {site.email}
          </ButtonLink>
          <ButtonLink href={site.linkedin} variant="secondary" external>
            LinkedIn
          </ButtonLink>
          <ButtonLink href={site.github} variant="secondary" external>
            GitHub
          </ButtonLink>
          {site.resumeAvailable ? (
            <ButtonLink href={site.resumeUrl} variant="secondary">
              Download résumé
            </ButtonLink>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
