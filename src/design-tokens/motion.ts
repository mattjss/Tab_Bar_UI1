/**
 * Motion presets derived from design tokens.
 * Use with Framer Motion (motion) and react-spring.
 */

import { tokens } from "./index";

// Framer Motion transition presets
export const motionTransitions = {
  fast: {
    duration: tokens.motion.duration.fast / 1000,
    ease: tokens.motion.easing.default as [number, number, number, number],
  },
  normal: {
    duration: tokens.motion.duration.normal / 1000,
    ease: tokens.motion.easing.default as [number, number, number, number],
  },
  slow: {
    duration: tokens.motion.duration.slow / 1000,
    ease: tokens.motion.easing.out as [number, number, number, number],
  },
  spring: {
    type: "spring" as const,
    stiffness: 300,
    damping: 25,
  },
  springBouncy: {
    type: "spring" as const,
    stiffness: 400,
    damping: 20,
  },
} as const;

// react-spring config presets
export const springConfigs = {
  default: {
    tension: 300,
    friction: 25,
  },
  gentle: {
    tension: 200,
    friction: 30,
  },
  snappy: {
    tension: 400,
    friction: 20,
  },
  bouncy: {
    tension: 400,
    friction: 15,
  },
} as const;
