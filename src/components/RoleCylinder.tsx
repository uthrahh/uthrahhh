const ROLES = ["Data Engineer", "Data Analyst", "Software Developer"];

// One pass of the sequence, "|"-separated with a trailing separator so the
// join between the two duplicated copies below reads identically to every
// other junction in the belt.
const SEQUENCE = `${ROLES.join(" | ")} | `;

/**
 * A continuously scrolling horizontal text belt, not a rotating shape.
 * The track renders the sequence twice back to back and animates
 * transform: translateX(-50%) linearly; since both halves are pixel-
 * identical, that translation is exactly one sequence-width, so the loop
 * has no visible seam. All three roles get identical styling and pass
 * through the same masked viewport in turn, no single label is ever
 * emphasized over the others.
 */
export function RoleCylinder() {
  return (
    <div
      className="role-ticker-viewport relative w-full max-w-[23rem] overflow-hidden sm:max-w-[27rem]"
      role="text"
      aria-label={ROLES.join(", ")}
    >
      <div className="role-ticker-track flex w-max" aria-hidden="true">
        <span className="role-ticker-seq whitespace-nowrap font-mono text-sm uppercase tracking-widest text-accent sm:text-base">
          {SEQUENCE}
        </span>
        <span className="role-ticker-seq whitespace-nowrap font-mono text-sm uppercase tracking-widest text-accent sm:text-base">
          {SEQUENCE}
        </span>
      </div>
    </div>
  );
}
