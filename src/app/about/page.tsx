import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/ui";
import { skills } from "@/lib/data/skills";
import { education, certifications } from "@/lib/data/education";
import { getProject } from "@/lib/data/projects";
import { site } from "@/lib/data/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Education, technical skills with evidence, and certifications for Pavithra Uthrah R. K.",
};

function EvidenceLink({ evidence }: { evidence: string }) {
  const project = getProject(evidence);
  if (project) {
    return (
      <Link
        href={`/projects/${project.slug}`}
        className="text-ink-muted underline decoration-border-strong underline-offset-2 hover:text-accent-strong hover:decoration-accent"
      >
        {project.title}
      </Link>
    );
  }
  return <span className="text-ink-muted">{evidence}</span>;
}

export default function AboutPage() {
  return (
    <Container className="py-16 sm:py-20">
      <SectionHeading
        eyebrow="About"
        title="Profile"
        description={site.positioning}
      />

      <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-muted">
        Outside coursework and internships, I run the Open Source Programming
        Club at VIT Chennai as Chairperson, volunteer as a tutor through the
        U&amp;I Trust, and I&apos;m working on an all-women hackathon with the
        Rotaract Club of VIT Chennai. See{" "}
        <Link href="/leadership" className="text-ink underline decoration-border-strong underline-offset-4 hover:text-accent-strong hover:decoration-accent">
          Leadership &amp; Achievements
        </Link>{" "}
        for the full picture.
      </p>

      {/* Skills with evidence */}
      <section className="mt-16 border-t border-border pt-14">
        <h2 className="font-display text-2xl text-ink">
          Technical skills, with evidence
        </h2>
        <p className="mt-2 max-w-2xl text-sm text-ink-muted">
          No proficiency bars. Each skill links to where it was actually
          used.
        </p>

        <div className="mt-10 space-y-10">
          {skills.map((group) => (
            <div key={group.category}>
              <p className="mb-4 font-mono text-xs uppercase tracking-widest text-ink-faint">
                {group.category}
              </p>
              <dl className="grid gap-x-8 gap-y-4 sm:grid-cols-2">
                {group.skills.map((s) => (
                  <div key={s.name} className="border-b border-border pb-4">
                    <dt className="font-display text-base text-ink">{s.name}</dt>
                    <dd className="mt-1.5 flex flex-wrap gap-x-2 gap-y-1 text-sm">
                      {s.evidence.map((ev, i) => (
                        <span key={ev}>
                          <EvidenceLink evidence={ev} />
                          {i < s.evidence.length - 1 ? (
                            <span className="text-ink-faint">, </span>
                          ) : null}
                        </span>
                      ))}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="mt-16 border-t border-border pt-14">
        <h2 className="font-display text-2xl text-ink">Education</h2>
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
              <p className="mt-1 text-sm font-medium text-ink-muted">{ed.degree}</p>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">{ed.detail}</p>
              {ed.activities.length ? (
                <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1">
                  {ed.activities.map((a) => (
                    <li key={a} className="text-sm text-ink-faint">
                      · {a}
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section className="mt-16 border-t border-border pt-14">
        <h2 className="font-display text-2xl text-ink">Certifications</h2>
        <div className="mt-8 space-y-5">
          {certifications.map((c) => (
            <div key={c.name} className="flex flex-wrap items-baseline justify-between gap-3 border-b border-border pb-5">
              <div>
                <a
                  href={c.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-display text-lg text-ink hover:text-accent-strong"
                >
                  {c.name}
                </a>
                <p className="mt-1 text-sm text-ink-muted">{c.issuer}</p>
              </div>
              <span className="font-mono text-xs text-ink-faint">{c.date}</span>
            </div>
          ))}
        </div>
      </section>
    </Container>
  );
}
