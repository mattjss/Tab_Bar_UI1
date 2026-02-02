"use client";

import { motion } from "motion/react";
import { useRef, useEffect } from "react";
import type { InteractionHandlers, InteractionHandlersWithForwardRef } from "@/types/interactions";

type MotionDivProps = React.ComponentProps<typeof motion.div>;
type AnimationProps = Pick<MotionDivProps, "initial" | "animate" | "exit" | "transition" | "whileHover" | "whileTap">;

export interface InteractiveElementProps
  extends InteractionHandlersWithForwardRef,
    AnimationProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Base interactive element — structure for MCP hook integration.
 * All interaction handlers are passed through for wiring to MCP server.
 * Uses native HTML5 drag events (not Motion's gesture drag) for onDragStart/onDrag/onDragEnd.
 */
export function InteractiveElement({
  onClick,
  onHoverStart,
  onHoverEnd,
  onScrollIntoView,
  onDragStart,
  onDrag,
  onDragEnd,
  onScroll,
  innerRef,
  children,
  initial,
  animate,
  exit,
  transition,
  whileHover,
  whileTap,
  className,
}: InteractiveElementProps) {
  const elementRef = useRef<HTMLDivElement>(null);
  const ref = innerRef ?? elementRef;

  useEffect(() => {
    if (!onScrollIntoView || !ref?.current) return;

    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => onScrollIntoView(entry)),
      { threshold: 0.1, rootMargin: "0px" }
    );

    const el = "current" in ref ? ref.current : null;
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, [onScrollIntoView, ref]);

  const hasAnimation =
    initial !== undefined ||
    animate !== undefined ||
    exit !== undefined ||
    whileHover !== undefined ||
    whileTap !== undefined;

  const hasDrag = !!(onDragStart || onDrag || onDragEnd);

  const baseInteractionProps = {
    onClick,
    onMouseEnter: onHoverStart,
    onMouseLeave: onHoverEnd,
    onWheel: onScroll,
  };

  const dragProps = hasDrag
    ? { onDragStart, onDrag, onDragEnd, draggable: true as const }
    : {};

  const allInteractionProps = { ...baseInteractionProps, ...dragProps };

  // motion.div overrides HTML5 drag API — use plain div when drag handlers present
  if (hasDrag || !hasAnimation) {
    return (
      <div
        ref={ref as React.Ref<HTMLDivElement>}
        className={className}
        {...allInteractionProps}
      >
        {hasAnimation ? (
          <motion.div
            initial={initial}
            animate={animate}
            exit={exit}
            transition={transition}
            whileHover={whileHover}
            whileTap={whileTap}
          >
            {children}
          </motion.div>
        ) : (
          children
        )}
      </div>
    );
  }

  return (
    <motion.div
      ref={ref as React.Ref<HTMLDivElement>}
      className={className}
      initial={initial}
      animate={animate}
      exit={exit}
      transition={transition}
      whileHover={whileHover}
      whileTap={whileTap}
      {...baseInteractionProps}
    >
      {children}
    </motion.div>
  );
}
