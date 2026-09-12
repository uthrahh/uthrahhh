import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/ui";
import { WorkstreamRow } from "@/components/WorkstreamRow";
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
                {exp.employmentType} · {exp.workMode} · ({exp.duration})
              </p>

              <div className="mt-3 grid gap-x-10 gap-y-3 lg:grid-cols-2">
                <div>
                  <p className="max-w-md text-base leading-relaxed text-ink-muted">
                    {exp.summary}
                  </p>
                  {exp.highlights?.length ? (
                    <ul className="mt-2 max-w-md space-y-1">
                      {exp.highlights.map((h, i) => (
                        <li key={i} className="flex gap-2 text-sm leading-relaxed text-ink-muted">
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>

                <div>
                  {exp.workstreams.map((ws) => (
                    <WorkstreamRow key={ws.title} workstream={ws} />
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* Volunteer work: distinguished from the formal internships above,
              not framed as employment. */}
          {communitySocial.map((item) => (
            <div key={item.org} className="border-t border-border pt-5">
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
          ))}
        </div>
      </Container>
    </section>
  );
}
