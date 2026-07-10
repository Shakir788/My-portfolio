"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { ReactNode, useRef, MouseEvent } from "react";

interface MagnetProps {
  children: ReactNode;
  className?: string;
  strength?: number;
  padding?: number; // distance from edge to activate
}

export function Magnet({
  children,
  className = "",
  strength = 3,
  padding = 100,
}: MagnetProps) {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 });
  const springY = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();

    // Check if within padding zone
    const isNear =
      clientX > left - padding &&
      clientX < left + width + padding &&
      clientY > top - padding &&
      clientY < top + height + padding;

    if (!isNear) {
      x.set(0);
      y.set(0);
      return;
    }

    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);

    x.set(middleX / strength);
    y.set(middleY / strength);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY, willChange: "transform" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}