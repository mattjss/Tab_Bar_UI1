/**
 * Design Token System
 *
 * Structure derived from Figma styles — update these values when syncing
 * from your Figma variables. Tokens flow: Figma → this file → CSS vars → Tailwind
 */

export const tokens = {
  colors: {
    // Semantic colors — map to Figma color styles
    background: {
      default: "#ffffff",
      secondary: "#f5f5f5",
      tertiary: "#e5e5e5",
    },
    foreground: {
      default: "#171717",
      secondary: "#737373",
      muted: "#a3a3a3",
    },
    accent: {
      primary: "#3b82f6",
      primaryHover: "#2563eb",
      primaryMuted: "#dbeafe",
    },
    border: {
      default: "#e5e5e5",
      strong: "#d4d4d4",
    },
    state: {
      hover: "rgba(0,0,0,0.04)",
      active: "rgba(0,0,0,0.08)",
      focus: "rgba(59,130,246,0.2)",
    },
  },

  typography: {
    // Map to Figma text styles
    fontFamily: {
      sans: "var(--font-geist-sans), ui-sans-serif, system-ui, sans-serif",
      mono: "var(--font-geist-mono), ui-monospace, monospace",
    },
    fontSize: {
      xs: "0.75rem",   // 12px
      sm: "0.875rem",  // 14px
      base: "1rem",    // 16px
      lg: "1.125rem",  // 18px
      xl: "1.25rem",   // 20px
      "2xl": "1.5rem", // 24px
      "3xl": "1.875rem",
    },
    fontWeight: {
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
    },
    lineHeight: {
      tight: "1.25",
      normal: "1.5",
      relaxed: "1.75",
    },
    letterSpacing: {
      tight: "-0.025em",
      normal: "0",
      wide: "0.025em",
    },
  },

  spacing: {
    // Map to Figma auto-layout spacing
    0: "0",
    1: "0.25rem",   // 4px
    2: "0.5rem",    // 8px
    3: "0.75rem",   // 12px
    4: "1rem",      // 16px
    5: "1.25rem",   // 20px
    6: "1.5rem",    // 24px
    8: "2rem",      // 32px
    10: "2.5rem",   // 40px
    12: "3rem",     // 48px
    16: "4rem",
  },

  radius: {
    none: "0",
    sm: "0.25rem",   // 4px
    md: "0.5rem",    // 8px
    lg: "0.75rem",   // 12px
    xl: "1rem",      // 16px
    full: "9999px",
  },

  shadows: {
    sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
    md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
    lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
  },

  motion: {
    // Map to Figma prototyping transitions (used in motion.ts)
    duration: {
      instant: 0,
      fast: 150,
      normal: 250,
      slow: 400,
    },
    easing: {
      default: [0.4, 0, 0.2, 1],
      in: [0.4, 0, 1, 1],
      out: [0, 0, 0.2, 1],
      inOut: [0.4, 0, 0.2, 1],
      spring: [0.175, 0.885, 0.32, 1.275],
    },
  },
} as const;

export type DesignTokens = typeof tokens;
