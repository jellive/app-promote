"use client";

import { useState } from "react";
import { Gamepad2, X } from "lucide-react";

/**
 * Inline iframe embed of arcade.jell.kr. Renders only on the jell-arcade
 * project detail page (caller decides via project.id check). Toggles a
 * full-viewport overlay with the live game when "Play here" is clicked.
 *
 * Requires arcade.jell.kr to allow CSP frame-ancestors of app.jell.kr,
 * which is configured in jell-server nginx_service site-conf.
 */
export function ArcadeEmbed() {
  const [playing, setPlaying] = useState(false);

  if (playing) {
    return (
      <div className="fixed inset-4 z-50 flex flex-col rounded-lg border-2 border-foreground bg-background shadow-2xl">
        <div className="flex items-center justify-between border-b-2 border-foreground bg-muted px-4 py-2">
          <span className="font-mono text-sm font-bold">
            🕹️ Jell Arcade — inline play
          </span>
          <button
            type="button"
            onClick={() => setPlaying(false)}
            className="inline-flex items-center gap-1 rounded border border-foreground bg-background px-3 py-1 text-xs font-bold hover:bg-muted"
          >
            <X className="h-3 w-3" /> close
          </button>
        </div>
        <iframe
          src="https://arcade.jell.kr/"
          title="Jell Arcade"
          className="flex-1 rounded-b-md border-0"
          allow="autoplay; gamepad; fullscreen"
        />
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      className="inline-flex items-center gap-2 border-2 border-foreground bg-orange-500 px-6 py-3 font-bold font-mono text-white brutal-shadow hover-brutal transition-all"
    >
      <Gamepad2 className="h-4 w-4" />▶ Play here
    </button>
  );
}
