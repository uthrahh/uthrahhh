import type { Achievement } from "@/lib/types";

/** Compact ribbon overlaid on a project card's media, top corner. */
export function AwardRibbon({ achievement }: { achievement: Achievement }) {
  return (
    <div className="absolute left-0 top-0 z-10 flex items-center gap-2 bg-accent px-3 py-1.5 text-accent-ink">
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
        <path
          d="M6 1 7.3 3.9 10.5 4.3 8.2 6.5 8.8 9.7 6 8.1 3.2 9.7 3.8 6.5 1.5 4.3 4.7 3.9Z"
          fill="currentColor"
        />
      </svg>
      <span className="font-mono text-[10px] font-medium uppercase tracking-widest">
        {achievement.rank} · {achievement.event}
      </span>
    </div>
  );
}

/** Compact status ribbon overlaid on a project card's media, top corner —
 * same treatment/position as AwardRibbon, for a project with no achievement
 * but a status worth flagging at a glance (e.g. still in development). */
export function StatusRibbon({ status }: { status: string }) {
  return (
    <div className="absolute left-0 top-0 z-10 flex items-center gap-2 bg-ink px-3 py-1.5 text-paper">
      <span className="font-mono text-[10px] font-medium uppercase tracking-widest">
        {status}
      </span>
    </div>
  );
}

/** Full-weight award block used at the top of the project case study. */
export function AwardBlock({ achievement }: { achievement: Achievement }) {
  return (
    <div className="flex items-stretch gap-5 border-2 border-accent bg-accent-soft p-5 sm:p-6">
      <span className="font-mono text-xs text-accent">01</span>
      <div>
        <p className="font-display text-2xl leading-none text-accent sm:text-3xl">
          {achievement.rank}
        </p>
        <p className="mt-2 font-mono text-xs uppercase tracking-widest text-ink">
          {achievement.event}
        </p>
        <p className="mt-1 text-xs text-ink-muted">
          {achievement.organizer} · {achievement.year}
        </p>
      </div>
    </div>
  );
}
