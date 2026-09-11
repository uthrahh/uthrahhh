import { TextCylinder } from "@/components/TextCylinder";

const ROLES = ["Data Engineer", "Data Analyst", "Software Developer"];

export function RoleCylinder() {
  return (
    <div className="w-full max-w-sm sm:max-w-md">
      <TextCylinder
        items={ROLES}
        textClassName="font-mono text-lg uppercase tracking-widest text-accent sm:text-xl"
        heightEm={1.5}
        durationSeconds={14}
        perspective={340}
      />
    </div>
  );
}
