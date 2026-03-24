// ─────────────────────────────────────────────
//  ResultsScreen.jsx  –  Matched scheme cards grid
// ─────────────────────────────────────────────
import React, { useState, useEffect, useRef } from "react";
import { useApp } from "../context/AppContext";
import schemes, { getMatchScore } from "../data/schemes";
import SchemeModal from "../components/SchemeModal";

export default function ResultsScreen() {
  const { navigate, profile, t, language } = useApp();
  const [selectedScheme, setSelectedScheme] = useState(null);
  const [visible, setVisible] = useState(false);

  // Animate in on mount
  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Score & sort all schemes
  const scored = schemes
    .map(s => ({ ...s, score: getMatchScore(s, profile) }))
    .sort((a, b) => b.score - a.score);

  const bestScore = scored[0]?.score || 0;

  return (
    <div className="relative z-10 min-h-screen w-full flex flex-col px-6 py-8 screen-enter" style={{ overflowY: "auto" }}>

      {/* Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full mb-4"
          style={{ background: "rgba(16,185,129,0.1)", border: "1px solid rgba(16,185,129,0.3)" }}>
          <span className="text-green-400 text-sm font-semibold tracking-widest uppercase">
            {scored.length} {t.schemes}
          </span>
        </div>
        <h1 className="text-4xl font-extrabold text-white mb-2" style={{ fontFamily: "Sora, sans-serif" }}>
          <span className="gradient-text">{t.results}</span>
        </h1>
        <p className="text-base" style={{ color: "rgba(100,116,139,0.8)", fontFamily: "Noto Sans Devanagari, sans-serif" }}>
          {t.resultsSub}
        </p>

        {/* Profile summary pills */}
        <div className="flex items-center justify-center gap-3 mt-4 flex-wrap">
          <Pill icon="🎂" text={`Age ${profile.age}`} color="#6366f1" />
          <Pill icon="💰" text={profile.income === "low" ? "Low Income" : profile.income === "medium" ? "Medium Income" : "High Income"} color="#10b981" />
          <Pill icon="👤" text={profile.occupation} color="#f59e0b" />
        </div>
      </div>

      {/* Scheme grid */}
      {scored.length === 0 ? (
        <div className="flex-1 flex items-center justify-center">
          <p className="text-xl" style={{ color: "rgba(100,116,139,0.7)" }}>{t.noSchemes}</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 max-w-7xl mx-auto w-full stagger">
          {scored.map((scheme, idx) => (
            <SchemeCard
              key={scheme.id}
              scheme={scheme}
              language={language}
              t={t}
              isBest={scheme.score === bestScore && scheme.score > 0}
              delay={idx * 0.06}
              onClick={() => setSelectedScheme(scheme)}
            />
          ))}
        </div>
      )}

      {/* Bottom bar */}
      <div className="mt-8 flex items-center justify-center">
        <button
          onClick={() => navigate("welcome")}
          className="flex items-center gap-2 px-8 py-4 rounded-2xl font-semibold transition-all duration-300"
          style={{
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.08)",
            color: "rgba(148,163,184,0.8)",
            fontFamily: "Sora, sans-serif",
          }}
          onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,0.08)"; e.currentTarget.style.color = "white"; }}
          onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.04)"; e.currentTarget.style.color = "rgba(148,163,184,0.8)"; }}
        >
          🔄 {t.restart}
        </button>
      </div>

      {/* Scheme detail modal */}
      {selectedScheme && (
        <SchemeModal scheme={selectedScheme} onClose={() => setSelectedScheme(null)} />
      )}
    </div>
  );
}

// ── Scheme Card ──────────────────────────────
function SchemeCard({ scheme, language, t, isBest, delay, onClick }) {
  const name = scheme.name[language];
  const eligibility = scheme.eligibility[language];
  const benefits = scheme.benefits[language];
  const pct = scheme.score;

  return (
    <div
      className={`card-hover flex flex-col rounded-3xl overflow-hidden ${isBest ? "best-match-card" : ""}`}
      style={{
        background: "rgba(255,255,255,0.03)",
        border: isBest ? "2px solid rgba(16,185,129,0.5)" : "1px solid rgba(255,255,255,0.07)",
        animationDelay: `${delay}s`,
        cursor: "pointer",
      }}
      onClick={onClick}
      onMouseMove={e => {
        const rect = e.currentTarget.getBoundingClientRect();
        const mx = ((e.clientX - rect.left) / rect.width) * 100;
        const my = ((e.clientY - rect.top) / rect.height) * 100;
        e.currentTarget.style.setProperty("--mx", `${mx}%`);
        e.currentTarget.style.setProperty("--my", `${my}%`);
      }}
    >
      {/* Card top */}
      <div className="px-5 pt-5 pb-4">
        {/* Best match badge */}
        {isBest && (
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold mb-3"
            style={{ background: "linear-gradient(135deg, rgba(16,185,129,0.25) 0%, rgba(16,185,129,0.1) 100%)", border: "1px solid rgba(16,185,129,0.5)", color: "#34d399" }}>
            ⭐ {t.bestMatch}
          </div>
        )}

        {/* Icon + name */}
        <div className="flex items-start gap-3 mb-4">
          <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
            style={{ background: `${scheme.color}18`, border: `1px solid ${scheme.color}30` }}>
            {scheme.icon}
          </div>
          <h3 className="text-base font-bold leading-tight text-white" style={{ fontFamily: "Noto Sans Devanagari, sans-serif" }}>
            {name}
          </h3>
        </div>

        {/* Match % */}
        <div className="mb-4">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "rgba(100,116,139,0.7)" }}>
              {t.matchLabel}
            </span>
            <span className="text-sm font-extrabold" style={{ color: pct >= 66 ? "#34d399" : pct >= 33 ? "#fbbf24" : "#f87171" }}>
              {pct}%
            </span>
          </div>
          <div className="h-1.5 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.06)" }}>
            <div
              className="match-bar h-full rounded-full"
              style={{
                "--target-width": `${pct}%`,
                background: pct >= 66
                  ? "linear-gradient(90deg, #10b981, #34d399)"
                  : pct >= 33
                  ? "linear-gradient(90deg, #f59e0b, #fbbf24)"
                  : "linear-gradient(90deg, #ef4444, #f87171)",
                boxShadow: `0 0 8px ${pct >= 66 ? "rgba(52,211,153,0.5)" : pct >= 33 ? "rgba(251,191,36,0.5)" : "rgba(248,113,113,0.5)"}`,
              }}
            />
          </div>
        </div>

        {/* Eligibility */}
        <div className="mb-3">
          <p className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: "#34d399" }}>
            ✅ {t.eligibility}
          </p>
          <p className="text-xs leading-relaxed line-clamp-2" style={{ color: "rgba(148,163,184,0.7)", fontFamily: "Noto Sans Devanagari, sans-serif" }}>
            {eligibility}
          </p>
        </div>

        {/* Benefits */}
        <div>
          <p className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: "#818cf8" }}>
            🎁 {t.benefits}
          </p>
          <p className="text-xs leading-relaxed line-clamp-2" style={{ color: "rgba(148,163,184,0.7)", fontFamily: "Noto Sans Devanagari, sans-serif" }}>
            {benefits}
          </p>
        </div>
      </div>

      {/* View details button */}
      <div className="mt-auto px-5 pb-5">
        <div className="w-full py-3 rounded-xl text-center text-sm font-bold transition-all duration-300"
          style={{
            background: `${scheme.color}15`,
            border: `1px solid ${scheme.color}30`,
            color: scheme.color,
          }}>
          {t.viewDetails} →
        </div>
      </div>
    </div>
  );
}

// ── Small pill component ─────────────────────
function Pill({ icon, text, color }) {
  return (
    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold"
      style={{ background: `${color}15`, border: `1px solid ${color}30`, color }}>
      {icon} {text}
    </span>
  );
}
