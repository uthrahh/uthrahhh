import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/ui";
import { education, certifications } from "@/lib/data/education";
import { clubLeadership, hackathons, community } from "@/lib/data/leadership";
import type { ActivityEntry } from "@/lib/types";

function ActivityRow({ item }: { item: ActivityEntry }) {
  return (
    <div className="border-b border-border py-4 last:border-b-0">
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <div>
          <span className="font-medium text-ink">{item.role}</span>
          {item.orgUrl ? (
            <>
              {", "}
              <a
                href={item.orgUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink-muted hover:text-accent-strong"
              >
                {item.org}
              </a>
            </>
          ) : (
            <span className="text-ink-muted">, {item.org}</span>
          )}
        </div>
        {item.start || item.end ? (
          <span className="font-mono text-xs text-ink-faint">
            {item.start ? `${item.start} – ${item.end}` : item.end}
          </span>
        ) : null}
      </div>
      {item.detail.length ? (
        <ul className="mt-2 space-y-1.5">
          {item.detail.map((d, i) => (
            <li key={i} className="text-sm leading-relaxed text-ink-muted">
              {d}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

export function EducationSection() {
  const university = education[0];
  const school = education[1];

  return (
    <section id="education" className="scroll-mt-6 border-b border-border">
      <Container className="py-20 sm:py-24">
        <SectionHeading eyebrow="Education" title="Education" />

        {/* University */}
        {university ? (
          <div className="mt-12 border border-border p-7 sm:p-8">
            <div className="flex flex-wrap items-baseline justify-between gap-3">
              {university.institutionUrl ? (
                <a
                  href={university.institutionUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-display text-xl text-ink hover:text-accent-strong sm:text-2xl"
                >
                  {university.institution}
                </a>
              ) : (
                <p className="font-display text-xl text-ink sm:text-2xl">
                  {university.institution}
                </p>
              )}
              <span className="font-mono text-xs text-ink-faint">
                {university.start ? `${university.start} – ${university.end}` : university.end}
              </span>
            </div>
            {university.degree ? (
              <p className="mt-1.5 text-sm font-medium text-ink-muted">{university.degree}</p>
            ) : null}

            {/* Achievements: dedicated, prominent, not buried in metadata */}
            <div className="mt-8 border-t border-border pt-7">
              <p className="mb-4 font-mono text-xs uppercase tracking-widest text-accent">
                Achievements
              </p>
              <ul className="divide-y divide-border border border-border">
                {hackathons.map((h) => (
                  <li
                    key={h.name}
                    className="flex flex-wrap items-baseline justify-between gap-3 border-l-2 border-l-accent px-5 py-4"
                  >
                    <div>
                      <span className="font-display text-base text-ink">{h.result}</span>
                      <span className="text-ink-muted"> · {h.name}</span>
                    </div>
                    <span className="font-mono text-xs text-ink-faint">{h.organizer}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-3 text-xs text-ink-faint">
                AutCore&apos;s full case study, including the award, is under Projects.
              </p>
            </div>

            {/* Activities & Societies */}
            <div className="mt-8 border-t border-border pt-7">
              <p className="mb-4 font-mono text-xs uppercase tracking-widest text-ink-faint">
                Activities &amp; Societies
              </p>
              <ul className="space-y-1.5">
                {university.activities.map((a) => (
                  <li key={a} className="text-sm leading-relaxed text-ink-muted">
                    {a}
                  </li>
                ))}
              </ul>

              <details className="group mt-5 border border-border">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-5 py-3 text-sm font-medium text-ink [&::-webkit-details-marker]:hidden">
                  Leadership history, Open Source Programming Club
                  <span
                    aria-hidden="true"
                    className="flex h-6 w-6 shrink-0 items-center justify-center rounded-sm border border-border text-ink-faint transition-transform group-open:rotate-45"
                  >
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M5 1v8M1 5h8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
                    </svg>
                  </span>
                </summary>
                <div className="border-t border-border px-5">
                  {clubLeadership.map((role) => (
                    <div key={`${role.role}-${role.start}`} className="border-b border-border py-4 last:border-b-0">
                      <div className="flex flex-wrap items-baseline justify-between gap-3">
                        <h4 className="font-display text-base text-ink">{role.role}</h4>
                        <span className="font-mono text-xs text-ink-faint">
                          {role.start} – {role.end}
                        </span>
                      </div>
                      <ul className="mt-2 space-y-1.5">
                        {role.detail.map((d, i) => (
                          <li key={i} className="text-sm leading-relaxed text-ink-muted">
                            {d}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </details>
            </div>

            {/* Relevant coursework */}
            {university.coursework.length ? (
              <div className="mt-8 border-t border-border pt-7">
                <p className="mb-4 font-mono text-xs uppercase tracking-widest text-ink-faint">
                  Relevant Coursework
                </p>
                <ul className="flex flex-wrap gap-2">
                  {university.coursework.map((c) => (
                    <li
                      key={c}
                      className="rounded-sm border border-border px-3 py-1.5 text-sm text-ink-muted"
                    >
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            {/* Community */}
            <div className="mt-8 border-t border-border pt-7">
              <p className="mb-4 font-mono text-xs uppercase tracking-widest text-ink-faint">
                Community
              </p>
              <div className="border border-border px-5">
                {community.map((item, i) => (
                  <ActivityRow key={i} item={item} />
                ))}
              </div>
            </div>
          </div>
        ) : null}

        {/* School */}
        {school ? (
          <div className="mt-8 border border-border p-7 sm:p-8">
            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <p className="font-display text-xl text-ink sm:text-2xl">{school.institution}</p>
              <span className="font-mono text-xs text-ink-faint">{school.end}</span>
            </div>

            {school.levels ? (
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {school.levels.map((lvl) => (
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

            {school.activities.length ? (
              <div className="mt-7 border-t border-border pt-6">
                <p className="mb-3 font-mono text-xs uppercase tracking-widest text-ink-faint">
                  School Activities
                </p>
                <ul className="space-y-1.5">
                  {school.activities.map((a) => (
                    <li key={a} className="text-sm leading-relaxed text-ink-muted">
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        ) : null}

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
      </Container>
    </section>
  );
}
