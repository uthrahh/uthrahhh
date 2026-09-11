import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/ui";
import { WorkstreamDisclosure } from "@/components/WorkstreamDisclosure";
import { experience } from "@/lib/data/experience";
import {
  clubLeadership,
  collegeActivities,
  communityUniversity,
  communitySocial,
} from "@/lib/data/leadership";
import { education } from "@/lib/data/education";
import { hackathons } from "@/lib/data/leadership";
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

export function ExperienceSection() {
  const schoolActivities = education[1]?.activities ?? [];
  const schoolName = education[1]?.institution ?? "School";

  return (
    <section id="experience" className="scroll-mt-6 border-b border-border">
      <Container className="py-20 sm:py-24">
        <SectionHeading
          eyebrow="Work Experience"
          title="Work, leadership, and activities"
          description="Two internships in depth, followed by four years of club leadership and campus, school, and community involvement."
        />

        {/* WORK EXPERIENCE */}
        <div className="mt-14">
          <h3 className="font-mono text-xs uppercase tracking-widest text-accent">
            Work Experience
          </h3>

          <div className="mt-6 space-y-16">
            {experience.map((exp) => (
              <div key={exp.org}>
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h4 className="font-display text-2xl text-ink sm:text-3xl">
                      {exp.role}
                    </h4>
                    <div className="mt-1.5 flex flex-wrap items-baseline gap-x-2">
                      <a
                        href={exp.orgUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-base font-medium text-ink-muted hover:text-accent-strong"
                      >
                        {exp.org}
                      </a>
                      <span className="text-ink-faint">·</span>
                      <span className="text-sm text-ink-faint">{exp.location}</span>
                    </div>
                  </div>
                  <span className="font-mono text-sm text-ink-faint">
                    {exp.start} – {exp.end}
                  </span>
                </div>

                <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-muted">
                  {exp.summary}
                </p>

                <div className="mt-7 space-y-3">
                  {exp.workstreams.map((ws) => (
                    <WorkstreamDisclosure key={ws.title} workstream={ws} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* LEADERSHIP */}
        <div className="mt-20 border-t border-border pt-14">
          <h3 className="font-mono text-xs uppercase tracking-widest text-accent">
            Leadership
          </h3>
          <p className="mt-3 max-w-2xl text-sm text-ink-muted">
            Open Source Programming Club, VIT Chennai. Recognized as VIT Chennai&apos;s
            Best Tech Club for 2025-26.
          </p>

          <ol className="mt-8 space-y-8 border-l border-border pl-6">
            {clubLeadership.map((role) => (
              <li key={`${role.role}-${role.start}`} className="relative">
                <span className="absolute -left-[27px] top-1.5 h-2.5 w-2.5 rounded-full bg-accent" />
                <div className="flex flex-wrap items-baseline justify-between gap-3">
                  <h4 className="font-display text-lg text-ink">{role.role}</h4>
                  <span className="font-mono text-xs text-ink-faint">
                    {role.start} – {role.end}
                  </span>
                </div>
                <ul className="mt-3 space-y-2">
                  {role.detail.map((d, i) => (
                    <li key={i} className="text-sm leading-relaxed text-ink-muted">
                      {d}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </div>

        {/* ACHIEVEMENTS */}
        <div className="mt-20 border-t border-border pt-14">
          <h3 className="font-mono text-xs uppercase tracking-widest text-accent">
            Achievements
          </h3>
          <ul className="mt-6 divide-y divide-border border border-border">
            {hackathons.map((h) => (
              <li key={h.name} className="flex flex-wrap items-baseline justify-between gap-3 px-6 py-4">
                <div>
                  <span className="font-medium text-ink">{h.result}</span>
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

        {/* COLLEGE ACTIVITIES */}
        <div className="mt-20 border-t border-border pt-14">
          <h3 className="font-mono text-xs uppercase tracking-widest text-accent">
            College activities
          </h3>
          <div className="mt-6 border border-border px-6">
            {collegeActivities.map((item, i) => (
              <ActivityRow key={i} item={item} />
            ))}
          </div>
        </div>

        {/* SCHOOL ACTIVITIES */}
        {schoolActivities.length ? (
          <div className="mt-20 border-t border-border pt-14">
            <h3 className="font-mono text-xs uppercase tracking-widest text-accent">
              School activities
            </h3>
            <p className="mt-3 text-sm text-ink-muted">{schoolName}</p>
            <ul className="mt-4 space-y-1.5">
              {schoolActivities.map((a) => (
                <li key={a} className="text-sm leading-relaxed text-ink-muted">
                  {a}
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        {/* COMMUNITY */}
        <div className="mt-20 border-t border-border pt-14">
          <h3 className="font-mono text-xs uppercase tracking-widest text-accent">
            Community
          </h3>

          <div className="mt-8 grid gap-10 md:grid-cols-2">
            <div>
              <p className="mb-3 text-sm font-medium text-ink">University</p>
              <div className="border border-border px-6">
                {communityUniversity.map((item, i) => (
                  <ActivityRow key={i} item={item} />
                ))}
              </div>
            </div>
            <div>
              <p className="mb-3 text-sm font-medium text-ink">Social</p>
              <div className="border border-border px-6">
                {communitySocial.map((item, i) => (
                  <ActivityRow key={i} item={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
