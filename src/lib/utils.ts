// src/lib/utils.ts

import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges Tailwind classes dynamically without conflicts.
 * Essential for reusable UI components and Framer Motion variants.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}