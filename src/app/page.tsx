"use client";

import { TabBar } from "@/components/TabBar/TabBar";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center pb-24">
      <h1 className="text-2xl font-semibold text-[var(--token-colors-foreground-default)] mb-2">
        Tab Bar 1
      </h1>
      <p className="text-[var(--token-colors-foreground-secondary)] text-sm">
        Motion prototype · Interaction handlers ready for MCP
      </p>
      <TabBar
        onTabInteraction={(tabId, event) => {
          console.log(`Tab ${tabId}: ${event}`);
        }}
      />
    </main>
  );
}
