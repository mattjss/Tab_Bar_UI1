/**
 * Interaction handler types for MCP server hook integration.
 * Wire MCP tools to these handlers for click, hover, scroll, drag tracking.
 */

import type { MouseEvent, DragEvent, WheelEvent } from "react";

export interface InteractionHandlers {
  /** Fired on pointer down / click */
  onClick?: (event: MouseEvent) => void;
  /** Fired when pointer enters element */
  onHoverStart?: (event: MouseEvent) => void;
  /** Fired when pointer leaves element */
  onHoverEnd?: (event: MouseEvent) => void;
  /** Fired when element enters viewport (for scroll-triggered animations) */
  onScrollIntoView?: (entry: IntersectionObserverEntry) => void;
  /** Fired on drag start */
  onDragStart?: (event: DragEvent) => void;
  /** Fired during drag */
  onDrag?: (event: DragEvent) => void;
  /** Fired on drag end */
  onDragEnd?: (event: DragEvent) => void;
  /** Fired on wheel/scroll */
  onScroll?: (event: WheelEvent) => void;
}

export interface InteractionHandlersWithForwardRef extends InteractionHandlers {
  /** Ref to attach for scroll/intersection observation */
  innerRef?: React.RefObject<HTMLElement | null>;
}
