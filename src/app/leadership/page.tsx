import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/ui";
import { clubLeadership, communityRoles, hackathons } from "@/lib/data/leadership";

export const metadata: Metadata = {
  title: "Leadership & Achievements",
  description:
    "Leadership at VIT Chennai's Open Source Programming Club, community roles, and hackathon results.",
};

export default function LeadershipPage() {
  return (
    <Container className="py-16 sm:py-20">
      <SectionHeading
        eyebrow="Leadership & achievements"
        title="Leadership, community, and hackathons"
        description="Four years of progressively larger responsibility at VIT Chennai's Open Source Programming Club, alongside community work and two hackathon wins."
      />

      <section className="mt-14">
        <h2 className="font-display text-2xl text-ink">
          Open Source Programming Club, VIT Chennai
        </h2>
        <p className="mt-2 max-w-2xl text-sm text-ink-muted">
          Recognized as VIT Chennai&apos;s Best Tech Club for 2025-26.
        </p>

        <ol className="mt-8 space-y-8 border-l border-border pl-6">
          {clubLeadership.map((role) => (
            <li key={`${role.role}-${role.start}`} className="relative">
              <span className="absolute -left-[27px] top-1.5 h-2.5 w-2.5 rounded-full bg-accent" />
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <h3 className="font-display text-lg text-ink">{role.role}</h3>
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
      </section>

      <section className="mt-16 border-t border-border pt-14">
        <h2 className="font-display text-2xl text-ink">Community</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {communityRoles.map((role) => (
            <div key={`${role.org}-${role.role}`} className="border border-border p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <h3 className="font-display text-lg text-ink">{role.org}</h3>
                <span className="font-mono text-xs text-ink-faint">
                  {role.start} – {role.end}
                </span>
              </div>
              <p className="mt-1 text-sm font-medium text-ink-muted">{role.role}</p>
              <ul className="mt-3 space-y-2">
                {role.detail.map((d, i) => (
                  <li key={i} className="text-sm leading-relaxed text-ink-muted">
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16 border-t border-border pt-14">
        <h2 className="font-display text-2xl text-ink">Hackathons</h2>
        <div className="mt-8 space-y-8">
          {hackathons.map((h) => (
            <div key={h.name} className="border border-border p-7">
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <p className="font-mono text-xs uppercase tracking-widest text-accent">
                  {h.result}
                </p>
                <span className="font-mono text-xs text-ink-faint">{h.date}</span>
              </div>
              <h3 className="mt-2 font-display text-xl text-ink">{h.name}</h3>
              <p className="mt-1 text-sm text-ink-muted">{h.organizer}</p>
              {h.team ? (
                <p className="mt-1 text-sm text-ink-faint">{h.team}</p>
              ) : null}

              <p className="mt-4 text-sm leading-relaxed text-ink-muted">
                <span className="font-medium text-ink">Problem: </span>
                {h.problem}
              </p>
              <ul className="mt-3 space-y-1.5">
                {h.solution.map((s, i) => (
                  <li key={i} className="text-sm leading-relaxed text-ink-muted">
                    · {s}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm leading-relaxed text-ink-muted">
                <span className="font-medium text-ink">My contribution: </span>
                {h.contribution}
              </p>
            </div>
          ))}
        </div>
      </section>
    </Container>
  );
}
