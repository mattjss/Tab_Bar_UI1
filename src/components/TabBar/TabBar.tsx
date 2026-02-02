"use client";

import { motion } from "motion/react";
import { useSpring, animated } from "react-spring";
import { useState } from "react";
import { InteractiveElement } from "@/components/InteractiveElement";
import { motionTransitions, springConfigs } from "@/design-tokens/motion";
import type { InteractionHandlers } from "@/types/interactions";

const tabs = [
  { id: "home", label: "Home", icon: "⌂" },
  { id: "explore", label: "Explore", icon: "◇" },
  { id: "create", label: "Create", icon: "+" },
  { id: "profile", label: "Profile", icon: "○" },
];

export interface TabBarProps extends Partial<InteractionHandlers> {
  /** Optional MCP-injectable handlers per tab */
  onTabInteraction?: (tabId: string, event: string) => void;
}

export function TabBar({ onTabInteraction, onClick, onHoverStart, onHoverEnd }: TabBarProps) {
  const [activeTab, setActiveTab] = useState("home");
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);

  const indicatorSpring = useSpring({
    left: `${tabs.findIndex((t) => t.id === activeTab) * 25}%`,
    config: springConfigs.snappy,
  });

  const handleTabClick = (tabId: string) => (e: React.MouseEvent) => {
    setActiveTab(tabId);
    onTabInteraction?.(tabId, "click");
    onClick?.(e);
  };

  const handleTabHoverStart = (tabId: string) => (e: React.MouseEvent) => {
    setHoveredTab(tabId);
    onTabInteraction?.(tabId, "hoverStart");
    onHoverStart?.(e);
  };

  const handleTabHoverEnd = (tabId: string) => (e: React.MouseEvent) => {
    setHoveredTab(null);
    onTabInteraction?.(tabId, "hoverEnd");
    onHoverEnd?.(e);
  };

  return (
    <InteractiveElement
      className="fixed bottom-0 left-0 right-0 flex justify-around items-center h-16 bg-white/80 backdrop-blur-md border-t border-[var(--token-colors-border-default,#e5e5e5)] safe-area-pb"
      onClick={onClick}
      onHoverStart={onHoverStart}
      onHoverEnd={onHoverEnd}
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={motionTransitions.normal}
    >
      <div className="relative w-full max-w-md mx-auto flex">
        {/* Animated indicator — react-spring */}
        <animated.div
          className="absolute bottom-0 h-1 bg-[var(--token-colors-accent-primary,#3b82f6)] rounded-full w-1/4"
          style={{
            left: indicatorSpring.left.to((x) => `${x}%`),
          }}
        />

        {tabs.map((tab) => (
          <InteractiveElement
            key={tab.id}
            className="relative flex-1 flex flex-col items-center justify-center gap-1 py-2 cursor-pointer select-none"
            onClick={handleTabClick(tab.id)}
            onHoverStart={handleTabHoverStart(tab.id)}
            onHoverEnd={handleTabHoverEnd(tab.id)}
          >
            <motion.span
              className="text-xl"
              animate={{
                scale: hoveredTab === tab.id ? 1.15 : 1,
              }}
              transition={motionTransitions.spring}
            >
              {tab.icon}
            </motion.span>
            <motion.span
              className="text-xs font-medium text-[var(--token-colors-foreground-secondary,#737373)]"
              animate={{
                color:
                  activeTab === tab.id
                    ? "var(--token-colors-accent-primary)"
                    : "var(--token-colors-foreground-secondary)",
              }}
              transition={motionTransitions.fast}
            >
              {tab.label}
            </motion.span>
          </InteractiveElement>
        ))}
      </div>
    </InteractiveElement>
  );
}
