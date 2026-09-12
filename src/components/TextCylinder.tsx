"use client";

import { useLayoutEffect, useRef, useState } from "react";

/**
 * A rotating cylinder of text: every character in the joined sequence is
 * its own thin face placed with rotateY + translateZ around a shared
 * vertical axis. With one face per character the silhouette reads as a
 * smooth curved drum, not a flat-sided prism. Wrapped exactly once around
 * the circumference, the loop is seamless with no duplicated content: the
 * last face sits at 360 degrees, right back where the first one started.
 * Radius is derived from the sequence's measured pixel width (monospace,
 * so per-character width is uniform), so proportions stay correct
 * responsively. A tight `perspective` exaggerates the foreshortening that
 * sells the curve, and `backface-visibility: hidden` makes each face
 * disappear the instant it rotates past the side, exactly like the far
 * side of a real cylinder. (Per-character opacity based on a *static*
 * angle was tried and removed: the ring's rotation is a CSS keyframe
 * animation, so a fixed inline opacity can't track which face is actually
 * front-facing at a given moment and ends up dimming the wrong
 * characters.) Under prefers-reduced-motion, a plain static line is shown
 * instead of the 3D ring.
 */
export function TextCylinder({
  items,
  separator = "   ·   ",
  ariaLabel,
  textClassName,
  heightEm = 1,
  durationSeconds = 22,
  perspective = 400,
  radiusScale = 1,
}: {
  items: string[];
  separator?: string;
  ariaLabel?: string;
  textClassName: string;
  heightEm?: number;
  durationSeconds?: number;
  /** Camera distance: lower values exaggerate curvature/foreshortening. */
  perspective?: number;
  /** Multiplier applied to the text-derived radius, for extra breathing room. */
  radiusScale?: number;
}) {
  const measureRef = useRef<HTMLSpanElement>(null);
  const [radius, setRadius] = useState<number | null>(null);

  const sequence = `${items.join(separator)}${separator}`;
  const chars = sequence.split("");
  const anglePerChar = 360 / chars.length;

  useLayoutEffect(() => {
    const el = measureRef.current;
    if (!el) return;

    function measure() {
      if (!el) return;
      const width = el.getBoundingClientRect().width;
      setRadius((width / (2 * Math.PI)) * radiusScale);
    }

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(el);
    return () => observer.disconnect();
  }, [sequence, radiusScale]);

  return (
    <div
      className="role-cylinder-wrap relative w-full"
      role="text"
      aria-label={ariaLabel ?? items.join(", ")}
    >
      <span
        ref={measureRef}
        aria-hidden="true"
        className={`pointer-events-none absolute -z-10 whitespace-nowrap opacity-0 ${textClassName}`}
      >
        {sequence}
      </span>

      <p className={`role-cylinder-static whitespace-nowrap ${textClassName}`}>
        {items.join(separator)}
      </p>

      {/*
        The scene's own font-size must match the characters' font-size, or
        the `em`-based height below resolves against an unrelated inherited
        size (e.g. the ambient body font-size) instead of the text's actual
        size at this breakpoint — silently clipping the glyphs whenever the
        two diverge. Applying `textClassName` here (font-size only really
        matters; the rest is inert on an empty container) keeps them locked
        together at every breakpoint.
      */}
      <div
        className={`role-cylinder-scene ${textClassName}`}
        style={{ height: `${heightEm}em`, perspective: `${perspective}px` }}
        aria-hidden="true"
      >
        <div
          className="role-cylinder-ring"
          style={{
            opacity: radius ? 1 : 0,
            animationDuration: `${durationSeconds}s`,
          }}
        >
          {chars.map((ch, i) => {
            const angleDeg = i * anglePerChar;
            return (
              <span
                key={i}
                className={`role-cylinder-char ${textClassName}`}
                style={{
                  lineHeight: `${heightEm}em`,
                  transform: `translateX(-50%) rotateY(${angleDeg.toFixed(3)}deg) translateZ(${(radius ?? 0).toFixed(2)}px)`,
                }}
              >
                {ch}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}
