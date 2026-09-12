import { TextCylinder } from "@/components/TextCylinder";

const ROLES = ["Data Engineer", "Data Analyst", "Software Developer"];

export function RoleCylinder() {
  return (
    <div className="w-full max-w-sm sm:max-w-md">
      <TextCylinder
        items={ROLES}
        textClassName="font-mono text-base uppercase tracking-widest text-accent sm:text-lg"
        heightEm={1}
        durationSeconds={14}
        perspective={3400}
      />
    </div>
  );
}
