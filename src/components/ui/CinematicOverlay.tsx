export function CinematicOverlay() {
  return (
    <>
      {/* Vignette — darkens edges, pulls focus to center like a camera lens */}
      <div
        className="fixed inset-0 pointer-events-none z-[60]"
        style={{
          background:
            "radial-gradient(ellipse 80% 70% at 50% 50%, transparent 40%, rgba(0,0,0,0.55) 100%)",
        }}
      />
      {/* Film grain — subtle texture, the difference between "flat" and "premium" */}
      <svg
        className="fixed inset-0 pointer-events-none z-[60] opacity-[0.035] mix-blend-overlay w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <filter id="grainFilter">
          <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#grainFilter)" />
      </svg>
    </>
  );
}