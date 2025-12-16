"use client";

import * as React from "react";

type Ripple = { id: number; x: number; y: number };

export default function InteractiveBg({ children }: { children: React.ReactNode }) {
  const [ripples, setRipples] = React.useState<Ripple[]>([]);

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    // only primary mouse click
    if (e.pointerType === "mouse" && e.button !== 0) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const id = Date.now() + Math.random();
    setRipples((prev) => [...prev, { id, x, y }]);

    window.setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== id));
    }, 650);
  };

  return (
    <div className="relative min-h-dvh" onPointerDown={onPointerDown}>
      {/* Background layer */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-background" />
        <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_50%_0%,rgba(255,255,255,0.06),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(140%_100%_at_50%_110%,rgba(0,0,0,0.70),transparent_55%)]" />

        {/* subtle dots */}
        <div className="absolute inset-0 opacity-[0.07]">
          <div className="h-full w-full bg-[radial-gradient(hsl(0_0%_100%/0.35)_1px,transparent_1px)] [background-size:22px_22px]" />
        </div>
      </div>

      {/* Ripple layer (ABOVE bg, BELOW content) */}
      <div className="pointer-events-none fixed inset-0 z-0">
        {ripples.map((r) => (
          <span
            key={r.id}
            className="absolute block h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full
                       bg-[radial-gradient(circle,rgba(99,102,241,0.35),transparent_65%)]
                       animate-[bg-ripple_650ms_ease-out_forwards]"
            style={{ left: r.x, top: r.y }}
          />
        ))}
      </div>

      {/* Content must be above the ripple */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
