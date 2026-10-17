"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";

type HudFrameProps = {
  src?: string;
  alt?: string;
  className?: string;
};

// Fades shoulders/shirt into the dark so the bust never looks hard-cut
const FADE_MASK =
  "radial-gradient(ellipse 75% 68% at 50% 38%, #000 52%, transparent 100%)";

const CHIPS = [
  { label: "Next.js", className: "-left-14 top-[14%]", depth: 70, delay: 0 },
  { label: "AI Agents", className: "-right-16 top-[30%]", depth: 90, delay: 0.8 },
  { label: "SaaS", className: "-left-10 bottom-[26%]", depth: 55, delay: 1.6 },
  { label: "PostgreSQL", className: "-right-12 bottom-[12%]", depth: 75, delay: 2.4 },
];

function FloatingChip({
  label,
  className,
  depth,
  delay,
  mx,
  my,
  reduce,
}: {
  label: string;
  className: string;
  depth: number;
  delay: number;
  mx: MotionValue<number>;
  my: MotionValue<number>;
  reduce: boolean;
}) {
  // Chips shift opposite to the tilt, deeper chips shift more (parallax)
  const x = useTransform(mx, [-0.5, 0.5], [depth * 0.3, -depth * 0.3]);
  const y = useTransform(my, [-0.5, 0.5], [depth * 0.3, -depth * 0.3]);

  return (
    <motion.div
      className={`absolute z-20 hidden md:block ${className}`}
      style={{ x, y, z: depth }}
    >
      <motion.div
        animate={reduce ? undefined : { y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay }}
      >
        <span className="flex items-center gap-2 rounded-full border border-white/15 bg-[#0B0F19]/70 px-3 py-1.5 font-mono text-[10px] uppercase tracking-widest text-white/80 backdrop-blur-md shadow-[0_0_24px_rgba(56,189,248,0.18)]">
          <span className="h-1.5 w-1.5 rounded-full bg-accent-blue" />
          {label}
        </span>
      </motion.div>
    </motion.div>
  );
}

export function HudFrame({
  src = "/me.webp",
  alt = "Mohammad Shakir",
  className = "",
}: HudFrameProps) {
  const [failed, setFailed] = useState(false);

  // Server aur pehla client render same rehna chahiye (hydration),
  // isliye OS ki reduced-motion setting sirf mount ke baad use hoti hai
  const prefersReduced = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const reduce = mounted && !!prefersReduced;

  // Mouse position inside the frame, normalised to -0.5 .. 0.5
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const spring = { stiffness: 120, damping: 14, mass: 0.6 };
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [6, -6]), spring);
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-6, 6]), spring);

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    if (reduce) return;
    const rect = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function handleLeave() {
    mx.set(0);
    my.set(0);
  }

  return (
    <div
      className={`relative ${className}`}
      style={{ perspective: "1000px" }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      <motion.div
        className="relative w-[200px] sm:w-[260px] md:w-[300px] lg:w-[330px] aspect-[3/4]"
        style={reduce ? undefined : { rotateX, rotateY, transformStyle: "preserve-3d" }}
      >
        {/* Back glow */}
        <div className="absolute -inset-6 -z-10 rounded-full bg-accent-blue/20 blur-3xl pointer-events-none" />

        {/* Image box */}
        <div className="absolute inset-0 overflow-hidden rounded-2xl border border-white/10 bg-[#0B0F19]">
          {/* Backdrop glow behind the cutout */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 70% 55% at 50% 38%, rgba(56,189,248,0.28), rgba(129,140,248,0.10) 55%, transparent 80%)",
            }}
          />

          {failed ? (
            <div className="flex h-full w-full items-center justify-center">
              <span className="font-kanit text-6xl font-black text-white/15">MS</span>
            </div>
          ) : (
            <Image
              src={src}
              alt={alt}
              fill
              priority
              sizes="(max-width: 640px) 200px, (max-width: 1024px) 300px, 330px"
              className="object-cover object-bottom contrast-[1.05] saturate-[1.05]"
              style={{ WebkitMaskImage: FADE_MASK, maskImage: FADE_MASK }}
              onError={() => setFailed(true)}
            />
          )}

          {/* Soft bottom fade (keeps label readable, keeps shirt clean) */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19]/60 via-transparent via-45% to-transparent pointer-events-none" />

          {/* HUD grid */}
          <div
            className="absolute inset-0 opacity-[0.10] pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(rgba(56,189,248,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.7) 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />

          {/* Scan line */}
          {!reduce && (
            <motion.div
              className="absolute left-0 right-0 h-16 pointer-events-none"
              style={{
                background:
                  "linear-gradient(180deg, transparent, rgba(56,189,248,0.22), transparent)",
              }}
              initial={{ top: "-20%" }}
              animate={{ top: "100%" }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            />
          )}

          {/* Status tag (top-left) */}
          <div className="absolute left-3 top-3 flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-2.5 py-1 backdrop-blur-md">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 animate-pulse-ring" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
            </span>
            <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/70">
              Online
            </span>
          </div>

          {/* Bottom label */}
          <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-3">
            <div className="leading-tight">
              <p className="font-kanit text-xs font-semibold uppercase tracking-wider text-white">
                Mohammad Shakir
              </p>
              <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-accent-blue/80">
                Product Engineer
              </p>
            </div>
            <span className="font-mono text-[9px] tracking-widest text-white/30">
              SYS.01
            </span>
          </div>
        </div>

        {/* Corner brackets */}
        <span className="pointer-events-none absolute -left-2 -top-2 h-6 w-6 border-l-2 border-t-2 border-accent-blue" />
        <span className="pointer-events-none absolute -right-2 -top-2 h-6 w-6 border-r-2 border-t-2 border-accent-blue" />
        <span className="pointer-events-none absolute -bottom-2 -left-2 h-6 w-6 border-b-2 border-l-2 border-accent-blue" />
        <span className="pointer-events-none absolute -bottom-2 -right-2 h-6 w-6 border-b-2 border-r-2 border-accent-blue" />

        {/* Floating chips (3D depth) */}
        {CHIPS.map((chip) => (
          <FloatingChip key={chip.label} {...chip} mx={mx} my={my} reduce={reduce} />
        ))}
      </motion.div>
    </div>
  );
}