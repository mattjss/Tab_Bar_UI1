/**
 * Flattens design tokens into CSS custom properties.
 * Import and inject into :root or your theme layer.
 */

import { tokens } from "./index";

function flattenObj(
  obj: Record<string, unknown>,
  prefix = ""
): Record<string, string> {
  return Object.entries(obj).reduce((acc, [key, value]) => {
    const varName = prefix ? `${prefix}-${key}` : key;
    if (typeof value === "object" && value !== null && !Array.isArray(value)) {
      Object.assign(acc, flattenObj(value as Record<string, unknown>, varName));
    } else if (typeof value === "string" || typeof value === "number") {
      acc[varName] = String(value);
    }
    return acc;
  }, {} as Record<string, string>);
}

export function getDesignTokenCSSVars(): string {
  const flat = flattenObj(tokens as unknown as Record<string, unknown>);
  return Object.entries(flat)
    .map(([key, val]) => `  --token-${key}: ${val};`)
    .join("\n");
}
