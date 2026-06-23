"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  /** Stagger delay in seconds. */
  delay?: number;
  className?: string;
  as?: "div" | "section" | "article" | "li";
}

/**
 * Reveal-on-scroll wrapper (Motion). Animates once when entering the viewport.
 *
 * Notes:
 * - Respects prefers-reduced-motion (renders static, fully visible).
 * - A <noscript> rule in the layout forces [data-reveal] visible without JS,
 *   so crawlers and no-JS clients always see content.
 */
export function Reveal({
  children,
  delay = 0,
  className,
  as = "div",
}: RevealProps) {
  const reduceMotion = useReducedMotion();
  const MotionTag = motion[as];

  if (reduceMotion) {
    const Tag = as;
    return (
      <Tag data-reveal className={className}>
        {children}
      </Tag>
    );
  }

  return (
    <MotionTag
      data-reveal
      className={className}
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </MotionTag>
  );
}
