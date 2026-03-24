// ─────────────────────────────────────────────
//  ParticleBg.jsx  –  Floating ambient particles
// ─────────────────────────────────────────────
import React, { useMemo } from "react";

export default function ParticleBg() {
  // Generate 30 random particles once
  const particles = useMemo(() => {
    return Array.from({ length: 30 }, (_, i) => ({
      id: i,
      size: Math.random() * 4 + 1,
      left: Math.random() * 100,
      duration: Math.random() * 15 + 10,
      delay: Math.random() * 15,
      color: ["#6366f1", "#10b981", "#f59e0b", "#818cf8", "#34d399"][Math.floor(Math.random() * 5)],
    }));
  }, []);

  return (
    <div className="particle-bg">
      {/* Ambient orbs */}
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />

      {/* Grid lines */}
      <div className="grid-bg" />

      {/* Scanlines */}
      <div className="scanline" />

      {/* Floating particles */}
      {particles.map(p => (
        <div
          key={p.id}
          className="particle"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.left}%`,
            background: p.color,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            boxShadow: `0 0 ${p.size * 2}px ${p.color}`,
          }}
        />
      ))}
    </div>
  );
}
