"use client";

import { useEffect, useRef, useState } from "react";

// Persistent off-screen sandbox — created once, never removed.
// Mermaid v10 inserts a hidden working div into document.body during render();
// doing so inside React's managed tree causes a removeChild reconciliation crash
// in React 19 strict mode. Using a pre-existing node that React never touched
// sidesteps the issue entirely.
let _mermaidSandbox: HTMLDivElement | null = null;
function getMermaidSandbox(): HTMLDivElement {
  if (!_mermaidSandbox) {
    _mermaidSandbox = document.createElement("div");
    _mermaidSandbox.setAttribute("aria-hidden", "true");
    _mermaidSandbox.style.cssText =
      "position:fixed;top:-9999px;left:-9999px;width:1px;height:1px;overflow:hidden;pointer-events:none";
    document.body.appendChild(_mermaidSandbox);
  }
  return _mermaidSandbox;
}

interface MermaidDiagramProps {
  source: string;
}

export function MermaidDiagram({ source }: MermaidDiagramProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [error, setError] = useState(false);
  const [rendered, setRendered] = useState(false);

  useEffect(() => {
    if (!containerRef.current || rendered) return;

    // Respect prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let cancelled = false;

    async function render() {
      try {
        const mermaid = (await import("mermaid")).default;

        mermaid.initialize({
          startOnLoad: false,
          theme: "base",
          themeVariables: {
            // Brutalist dark-mode compatible: neutral palette
            primaryColor: "#1a1a1a",
            primaryTextColor: "#f5f5f5",
            primaryBorderColor: "#f5f5f5",
            lineColor: "#f5f5f5",
            secondaryColor: "#2a2a2a",
            secondaryTextColor: "#f5f5f5",
            secondaryBorderColor: "#888",
            tertiaryColor: "#111",
            tertiaryTextColor: "#f5f5f5",
            tertiaryBorderColor: "#666",
            background: "#0d0d0d",
            mainBkg: "#1a1a1a",
            nodeBorder: "#f5f5f5",
            clusterBkg: "#111",
            clusterBorder: "#888",
            titleColor: "#f5f5f5",
            edgeLabelBackground: "#1a1a1a",
            fontFamily: "ui-monospace, 'Cascadia Code', Menlo, monospace",
            fontSize: "14px",
          },
          flowchart: {
            curve: "basis",
            htmlLabels: true,
          },
          suppressErrorRendering: true,
        });

        if (cancelled) return;

        const id = `mermaid-${Math.random().toString(36).slice(2)}`;
        const { svg } = await mermaid.render(id, source, getMermaidSandbox());

        if (cancelled || !containerRef.current) return;

        containerRef.current.innerHTML = svg;

        // Remove any inline width/height to let CSS control sizing
        const svgEl = containerRef.current.querySelector("svg");
        if (svgEl) {
          svgEl.removeAttribute("width");
          svgEl.removeAttribute("height");
          svgEl.style.maxWidth = "100%";
          svgEl.style.height = "auto";
          // Disable CSS animations when prefers-reduced-motion
          if (prefersReducedMotion) {
            svgEl.style.animation = "none";
          }
        }

        setRendered(true);
      } catch {
        if (!cancelled) setError(true);
      }
    }

    render();

    return () => {
      cancelled = true;
    };
  }, [source, rendered]);

  if (error) {
    return (
      <pre className="overflow-x-auto p-4 bg-muted border-2 border-foreground font-mono text-xs text-muted-foreground leading-relaxed">
        {source}
      </pre>
    );
  }

  return (
    <div className="w-full overflow-x-auto" aria-label="Architecture diagram">
      {/* skeleton while loading — kept outside containerRef so React's
          reconciler never tries to removeChild a node that innerHTML already
          replaced */}
      {!rendered && (
        <div className="h-48 bg-muted border-2 border-foreground animate-pulse" />
      )}
      {/* Mermaid writes raw SVG into this div via innerHTML; React must not
          own any children here */}
      <div ref={containerRef} />
    </div>
  );
}
