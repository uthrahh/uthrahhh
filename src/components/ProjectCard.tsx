import { MediaFrame } from "@/components/MediaFrame";
import { AwardRibbon } from "@/components/AwardBadge";
import type { Project } from "@/lib/types";

export function ProjectCard({
  project,
  onOpen,
}: {
  project: Project;
  onOpen: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onOpen}
      className="group relative block aspect-[4/3] overflow-hidden border border-border text-left transition-colors hover:border-accent"
    >
      <MediaFrame
        asset={project.cover}
        fill
        imgClassName="scale-100 transition-transform duration-500 ease-out group-hover:scale-[1.04]"
        className="absolute inset-0"
      />

      {project.achievement ? <AwardRibbon achievement={project.achievement} /> : null}

      {/* Scrim: fixed dark gradient regardless of site theme, so overlaid text stays legible on any image. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/88 via-black/25 to-transparent transition-opacity duration-300 group-hover:from-black/92"
      />

      <div className="absolute inset-x-0 bottom-0 p-5">
        <div className="mb-1.5 flex items-center justify-between gap-3">
          <p className="font-mono text-[11px] uppercase tracking-wide text-white/70">
            {project.categories[0]}
          </p>
        </div>
        <h3 className="font-display text-lg text-white sm:text-xl">
          {project.title}
        </h3>
        <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-white/80">
          {project.summary}
        </p>
        <p className="mt-3 text-xs text-white/60">
          {project.technologies.slice(0, 4).join(" · ")}
        </p>
      </div>
    </button>
  );
}
