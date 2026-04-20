export function GrainOverlay() {
  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[60] h-full w-full opacity-20 mix-blend-overlay"
    >
      <filter id="grain-overlay-noise">
        <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch" />
        <feColorMatrix type="saturate" values="0" />
      </filter>
      <rect width="100%" height="100%" filter="url(#grain-overlay-noise)" />
    </svg>
  );
}
