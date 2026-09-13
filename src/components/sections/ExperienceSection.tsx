import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/ui";
import { ExperienceProjectBarrel } from "@/components/ExperienceProjectBarrel";
import { ExperienceHighlights } from "@/components/ExperienceHighlights";
import { MediaFrame } from "@/components/MediaFrame";
import { experience } from "@/lib/data/experience";
import { communitySocial } from "@/lib/data/leadership";

export function ExperienceSection() {
  return (
    <section id="experience" className="scroll-mt-6 border-b border-border">
      <Container className="py-5 sm:py-6">
        <SectionHeading eyebrow="Work Experience" />

        <div className="mt-4 space-y-6">
          {experience.map((exp) => (
            <div key={exp.org} className="border-t border-border pt-5 first:border-t-0 first:pt-0">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                <h3 className="font-display text-xl leading-snug text-ink sm:text-2xl">
                  {exp.role}
                  <span className="text-ink-muted"> at </span>
                  <a
                    href={exp.orgUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent-strong hover:text-accent"
                  >
                    {exp.org}
                  </a>
                  <span className="text-ink-muted">, {exp.city}</span>
                </h3>
                <span className="shrink-0 font-mono text-xs text-ink-faint sm:text-sm">
                  {exp.start} – {exp.end}
                </span>
              </div>

              <p className="mt-2 font-mono text-xs uppercase tracking-wide text-ink-faint">
                {exp.employmentType} · {exp.workMode} · {exp.duration}
              </p>

              <div className="mt-3 grid gap-x-10 gap-y-3 lg:grid-cols-2">
                <div className="max-w-md">
                  {exp.summary ? (
                    <ExperienceHighlights summary={exp.summary} groups={exp.highlightGroups ?? []} />
                  ) : null}
                </div>

                <div>
                  <ExperienceProjectBarrel workstreams={exp.workstreams} />
                </div>
              </div>
            </div>
          ))}

          {/* Volunteer work: distinguished from the formal internships above,
              not framed as employment. */}
          {communitySocial.map((item) => (
            <div key={item.org} className="border-t border-border pt-5">
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-between">
                <div className="min-w-0">
                  <h3 className="font-display text-lg leading-snug text-ink sm:text-xl">
                    {item.role}
                    <span className="text-ink-muted"> · </span>
                    {item.orgUrl ? (
                      <a
                        href={item.orgUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent-strong hover:text-accent"
                      >
                        {item.org}
                      </a>
                    ) : (
                      item.org
                    )}
                  </h3>
                  <p className="mt-2 font-mono text-xs uppercase tracking-wide text-ink-faint">
                    Volunteer · {item.start} – {item.end}
                  </p>
                  {item.detail?.length ? (
                    <p className="mt-2 max-w-2xl text-base leading-relaxed text-ink-muted">
                      {item.detail[0]}
                    </p>
                  ) : null}
                </div>

                {item.photo ? (
                  <MediaFrame asset={item.photo} className="w-full shrink-0 sm:w-40" />
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
