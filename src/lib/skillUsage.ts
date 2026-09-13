import { experience } from "@/lib/data/experience";
import { projects } from "@/lib/data/projects";

export type SkillUsageEntry = {
  label: string;
  type: "Internship" | "Hackathon" | "Project";
};

/** A handful of skill labels are worded slightly differently from the exact
 * technology strings already recorded in experience/project data (e.g. the
 * skill "REST API design" vs. the tracked technology "REST APIs"). Each
 * entry here points at real, already-verified technology strings elsewhere
 * in this file's source data — it never introduces a new claim. */
const ALIASES: Record<string, string[]> = {
  "rest api design": ["rest apis"],
  "jwt authentication": ["jwt"],
  "alembic migrations": ["alembic"],
};

function normalize(value: string): string {
  return value
    .toLowerCase()
    .replace(/\s+[\d.]+$/, "")
    .trim();
}

function buildUsageMap(): Map<string, SkillUsageEntry[]> {
  const map = new Map<string, SkillUsageEntry[]>();

  const add = (tech: string, entry: SkillUsageEntry) => {
    const key = normalize(tech);
    const list = map.get(key) ?? [];
    if (!list.some((e) => e.label === entry.label)) {
      list.push(entry);
    }
    map.set(key, list);
  };

  for (const exp of experience) {
    for (const tech of exp.technologies) {
      add(tech, { label: exp.org, type: "Internship" });
    }
  }

  for (const project of projects) {
    const type: SkillUsageEntry["type"] = project.context === "Hackathon" ? "Hackathon" : "Project";
    for (const tech of project.technologies) {
      add(tech, { label: project.title, type });
    }
  }

  return map;
}

const usageMap = buildUsageMap();

/** Verified places a skill has actually been used, drawn only from the
 * `technologies` arrays already present on experience and project entries.
 * Returns an empty array (never a guess) when nothing is tagged. */
export function getSkillUsage(skill: string): SkillUsageEntry[] {
  const key = normalize(skill);
  const direct = usageMap.get(key) ?? [];
  const aliasKeys = ALIASES[key] ?? [];
  const aliased = aliasKeys.flatMap((k) => usageMap.get(k) ?? []);

  const seen = new Set<string>();
  return [...direct, ...aliased].filter((entry) => {
    if (seen.has(entry.label)) return false;
    seen.add(entry.label);
    return true;
  });
}
