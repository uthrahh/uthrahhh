import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { SectionHeading, Tag } from "@/components/ui";
import { experience } from "@/lib/data/experience";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Data engineering internship at KaarTech and software development internship at AIC-CIIC: roles, workstreams, and technologies.",
};

export default function ExperiencePage() {
  return (
    <Container className="py-16 sm:py-20">
      <SectionHeading
        eyebrow="Experience"
        title="Work experience"
        description="Two internships, each with a defined set of workstreams. Every workstream links to the project it produced."
      />

      <div className="mt-14 space-y-16">
        {experience.map((exp) => (
          <div key={exp.org} className="border-t border-border pt-10">
            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <div>
                <a
                  href={exp.orgUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-display text-2xl text-ink hover:text-accent-strong"
                >
                  {exp.org}
                </a>
                <p className="mt-1 text-base text-ink-muted">
                  {exp.role} · {exp.location}
                </p>
              </div>
              <span className="font-mono text-sm text-ink-faint">
                {exp.start} – {exp.end}
              </span>
            </div>

            <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-muted">
              {exp.summary}
            </p>

            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {exp.workstreams.map((ws) => (
                <div key={ws.title} className="border border-border p-6">
                  <h3 className="font-display text-lg text-ink">{ws.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                    {ws.detail}
                  </p>
                  {ws.projectSlug ? (
                    <Link
                      href={`/projects/${ws.projectSlug}`}
                      className="mt-4 inline-block text-sm font-medium text-accent-strong underline underline-offset-4 hover:text-accent"
                    >
                      View project case study →
                    </Link>
                  ) : null}
                </div>
              ))}
            </div>

            <div className="mt-7">
              <p className="mb-3 font-mono text-xs uppercase tracking-widest text-ink-faint">
                Technologies
              </p>
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}
