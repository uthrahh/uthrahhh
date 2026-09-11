import { Container } from "@/components/Container";
import { ButtonLink, SectionHeading } from "@/components/ui";
import { EmailCopy } from "@/components/EmailCopy";
import { site } from "@/lib/data/site";

export function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-6">
      <Container className="py-20 sm:py-28">
        <SectionHeading eyebrow="Contact" title="Get in touch" />

        <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-muted">
          {site.careerStatement}
        </p>

        <div className="mt-10 max-w-md space-y-7 border-t border-border pt-8">
          <div>
            <p className="mb-3 font-mono text-xs uppercase tracking-widest text-ink-faint">
              Email
            </p>
            <EmailCopy email={site.email} variant="button" />
          </div>

          <div className="flex flex-wrap gap-x-8 gap-y-4">
            <div>
              <p className="mb-2 font-mono text-xs uppercase tracking-widest text-ink-faint">
                LinkedIn
              </p>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-ink hover:text-accent-strong"
              >
                linkedin.com/in/uthrah-rk
                <span aria-hidden="true">↗</span>
              </a>
            </div>
            <div>
              <p className="mb-2 font-mono text-xs uppercase tracking-widest text-ink-faint">
                GitHub
              </p>
              <a
                href={site.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-ink hover:text-accent-strong"
              >
                github.com/uthrahh
                <span aria-hidden="true">↗</span>
              </a>
            </div>
            <div>
              <p className="mb-2 font-mono text-xs uppercase tracking-widest text-ink-faint">
                Substack
              </p>
              <a
                href={site.substack}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-ink hover:text-accent-strong"
              >
                @uthrahhh
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>

          {site.resumeAvailable ? (
            <div className="pt-2">
              <ButtonLink href={site.resumeUrl} variant="secondary">
                Download résumé
              </ButtonLink>
            </div>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
