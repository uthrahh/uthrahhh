import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/ui";
import { SubstackSection } from "@/components/SubstackSection";
import { skills } from "@/lib/data/skills";
import { education, certifications } from "@/lib/data/education";
import { interests, languages } from "@/lib/data/profile";

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-6 border-b border-border">
      <Container className="py-20 sm:py-24">
        <SectionHeading eyebrow="About" title="Profile" />

        {/* Profile: deeper context than the hero, not a repeat of it */}
        <div className="mt-6 max-w-2xl">
          <p className="text-lg leading-relaxed text-ink-muted">
            My work centers on data engineering and the backend systems
            around it: PySpark pipelines, RBAC-driven APIs, and the
            occasional GenAI interface layered on top. Most of what&apos;s
            below comes from two internships and a handful of independent
            projects, alongside four years of running a technical community
            in parallel with them.
          </p>
        </div>

        {/* Skills */}
        <div className="mt-16 border-t border-border pt-14">
          <h3 className="font-display text-2xl text-ink">Skills</h3>
          <div className="mt-8 grid gap-x-10 gap-y-7 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((group) => (
              <div key={group.category}>
                <p className="mb-1.5 font-mono text-xs uppercase tracking-widest text-ink-faint">
                  {group.category}
                </p>
                <p className="text-[15px] leading-relaxed text-ink">
                  {group.skills.join(" · ")}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-16 border-t border-border pt-14">
          <h3 className="font-display text-2xl text-ink">Certifications</h3>
          <div className="mt-8 max-w-2xl space-y-5">
            {certifications.map((c) => (
              <div
                key={c.name}
                className="flex flex-wrap items-baseline justify-between gap-3 border-b border-border pb-5"
              >
                <div>
                  <a
                    href={c.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-display text-base text-ink hover:text-accent-strong"
                  >
                    {c.name}
                  </a>
                  <p className="mt-1 text-sm text-ink-muted">{c.issuer}</p>
                </div>
                <span className="font-mono text-xs text-ink-faint">{c.date}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mt-16 border-t border-border pt-14">
          <h3 className="font-display text-2xl text-ink">Education</h3>
          <div className="mt-8 space-y-8">
            {education.map((ed) => (
              <div key={ed.institution} className="border border-border p-7">
                <div className="flex flex-wrap items-baseline justify-between gap-3">
                  {ed.institutionUrl ? (
                    <a
                      href={ed.institutionUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-display text-xl text-ink hover:text-accent-strong"
                    >
                      {ed.institution}
                    </a>
                  ) : (
                    <p className="font-display text-xl text-ink">{ed.institution}</p>
                  )}
                  <span className="font-mono text-xs text-ink-faint">
                    {ed.start ? `${ed.start} – ${ed.end}` : ed.end}
                  </span>
                </div>
                {ed.degree ? (
                  <p className="mt-1 text-sm font-medium text-ink-muted">{ed.degree}</p>
                ) : null}

                {ed.levels ? (
                  <div className="mt-5 grid gap-4 sm:grid-cols-2">
                    {ed.levels.map((lvl) => (
                      <div key={lvl.grade} className="border border-border p-4">
                        <p className="font-mono text-[11px] uppercase tracking-widest text-ink-faint">
                          {lvl.grade}
                        </p>
                        <p className="mt-1 text-sm font-medium text-ink">{lvl.board}</p>
                        {lvl.result ? (
                          <p className="mt-0.5 text-sm text-ink-muted">{lvl.result}</p>
                        ) : null}
                      </div>
                    ))}
                  </div>
                ) : null}

                {ed.activities.length ? (
                  <div className="mt-6 grid gap-6 sm:grid-cols-2">
                    <div>
                      <p className="mb-2 font-mono text-xs uppercase tracking-widest text-ink-faint">
                        {ed.levels ? "Activities" : "Activities & societies"}
                      </p>
                      <ul className="space-y-1.5">
                        {ed.activities.map((a) => (
                          <li key={a} className="text-sm leading-relaxed text-ink-muted">
                            {a}
                          </li>
                        ))}
                      </ul>
                    </div>
                    {ed.coursework.length ? (
                      <div>
                        <p className="mb-2 font-mono text-xs uppercase tracking-widest text-ink-faint">
                          Relevant coursework
                        </p>
                        <ul className="space-y-1.5">
                          {ed.coursework.map((c) => (
                            <li key={c} className="text-sm leading-relaxed text-ink-muted">
                              {c}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : null}
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </div>

        {/* Interests */}
        <div className="mt-16 border-t border-border pt-14">
          <h3 className="font-display text-2xl text-ink">Interests</h3>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-muted">
            {interests}
          </p>
        </div>

        {/* Languages */}
        <div className="mt-16 border-t border-border pt-14">
          <h3 className="font-display text-2xl text-ink">Languages</h3>
          <ul className="mt-8 flex max-w-2xl flex-wrap gap-x-10 gap-y-3">
            {languages.map((l) => (
              <li key={l.name} className="flex items-baseline gap-2">
                <span className="text-sm text-ink">{l.name}</span>
                {l.proficiency ? (
                  <span className="text-xs text-ink-faint">{l.proficiency}</span>
                ) : null}
              </li>
            ))}
          </ul>
        </div>

        {/* Writing (Substack), last content block before Contact */}
        <div className="mt-16 border-t border-border pt-14">
          <h3 className="font-display text-2xl text-ink">Writing</h3>
          <div className="mt-8 max-w-2xl">
            <SubstackSection />
          </div>
        </div>
      </Container>
    </section>
  );
}
