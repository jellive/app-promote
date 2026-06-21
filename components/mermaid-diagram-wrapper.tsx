"use client";

import dynamic from "next/dynamic";

const MermaidDiagram = dynamic(
  () => import("@/components/mermaid-diagram").then((m) => m.MermaidDiagram),
  { ssr: false },
);

export function MermaidDiagramWrapper({ source }: { source: string }) {
  return <MermaidDiagram source={source} />;
}
