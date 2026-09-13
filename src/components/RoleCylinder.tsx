import { TextCylinder } from "@/components/TextCylinder";

const ROLES = ["Data Engineer", "Data Analyst", "Software Developer"];

export function RoleCylinder() {
  return (
    <div className="mx-auto w-full max-w-[21rem]">
      <TextCylinder
        items={ROLES}
        separator=" · "
        textClassName="font-mono text-[15px] uppercase tracking-normal text-accent sm:text-[17px]"
        heightEm={1}
        durationSeconds={20}
        perspective={3400}
        radiusScale={1.2}
        repeat={2}
      />
    </div>
  );
}
