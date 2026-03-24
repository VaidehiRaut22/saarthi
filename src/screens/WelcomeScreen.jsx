// ─────────────────────────────────────────────
//  WelcomeScreen.jsx  –  First screen with logo and Start button
// ─────────────────────────────────────────────
import React, { useEffect, useState } from "react";
import { useApp } from "../context/AppContext";

export default function WelcomeScreen() {
  const { navigate } = useApp();
  const [ready, setReady] = useState(false);

  // Trigger entrance animation after mount
  useEffect(() => {
    const t = setTimeout(() => setReady(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="relative z-10 flex flex-col items-center justify-center min-h-screen w-full px-8">

      {/* Logo / Icon */}
      <div
        className="logo-float mb-8"
        style={{ opacity: ready ? 1 : 0, transition: "opacity 0.8s ease", transitionDelay: "0.1s" }}
      >
        <div className="relative">
          {/* Outer glow ring */}
          <div className="absolute inset-0 rounded-full"
            style={{ background: "radial-gradient(circle, rgba(99,102,241,0.4) 0%, transparent 70%)", transform: "scale(1.5)" }} />
          {/* Icon */}
          <div className="relative w-32 h-32 rounded-full flex items-center justify-center text-6xl"
            style={{
              background: "linear-gradient(135deg, rgba(99,102,241,0.3) 0%, rgba(16,185,129,0.3) 100%)",
              border: "2px solid rgba(99,102,241,0.4)",
              boxShadow: "0 0 60px rgba(99,102,241,0.4), inset 0 0 30px rgba(99,102,241,0.1)"
            }}>
            🧭
          </div>
        </div>
      </div>

      {/* App Name */}
      <div
        style={{ opacity: ready ? 1 : 0, transition: "opacity 0.8s ease", transitionDelay: "0.3s" }}
      >
        <h1 className="text-center mb-2" style={{ fontFamily: "Sora, sans-serif" }}>
          <span className="block text-7xl font-extrabold gradient-text" style={{ lineHeight: 1.1 }}>
            Saarthi
          </span>
          <span className="block text-5xl font-bold mt-1" style={{ color: "rgba(129,140,248,0.9)" }}>
            सारथी
          </span>
        </h1>
      </div>

      {/* Tagline */}
      <p
        className="text-center text-lg mt-4 mb-12 max-w-md"
        style={{
          color: "rgba(148,163,184,0.9)",
          opacity: ready ? 1 : 0,
          transition: "opacity 0.8s ease",
          transitionDelay: "0.5s",
          fontFamily: "Sora, sans-serif",
          letterSpacing: "0.02em",
        }}
      >
        Your Smart Guide to Government Schemes
      </p>

      {/* Start Button */}
      <div
        style={{ opacity: ready ? 1 : 0, transition: "opacity 0.8s ease, transform 0.8s ease", transitionDelay: "0.7s",
          transform: ready ? "translateY(0)" : "translateY(20px)" }}
      >
        <button
          onClick={() => navigate("language")}
          className="btn-glow relative group px-20 py-6 rounded-2xl text-2xl font-bold text-white overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #4f46e5 0%, #059669 100%)",
            boxShadow: "0 0 40px rgba(99,102,241,0.5), 0 8px 32px rgba(0,0,0,0.4)",
            fontFamily: "Sora, sans-serif",
            letterSpacing: "0.05em",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={e => {
            e.currentTarget.style.transform = "scale(1.06) translateY(-3px)";
            e.currentTarget.style.boxShadow = "0 0 60px rgba(99,102,241,0.7), 0 16px 48px rgba(0,0,0,0.5)";
          }}
          onMouseLeave={e => {
            e.currentTarget.style.transform = "scale(1) translateY(0)";
            e.currentTarget.style.boxShadow = "0 0 40px rgba(99,102,241,0.5), 0 8px 32px rgba(0,0,0,0.4)";
          }}
        >
          {/* Shimmer overlay */}
          <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{ background: "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.15) 50%, transparent 60%)" }} />
          <span className="relative z-10 flex items-center gap-3">
            <span>Start</span>
            <span className="text-3xl">→</span>
          </span>
        </button>
      </div>

      {/* Bottom tagline in Hindi/Marathi */}
      <p
        className="absolute bottom-8 text-center text-sm"
        style={{
          color: "rgba(100,116,139,0.7)",
          opacity: ready ? 1 : 0,
          transition: "opacity 1s ease",
          transitionDelay: "1s",
          fontFamily: "Noto Sans Devanagari, sans-serif",
        }}
      >
        सरकारी योजनांसाठी तुमचा स्मार्ट मार्गदर्शक &nbsp;·&nbsp; सरकारी योजनाओं के लिए आपका मार्गदर्शक
      </p>
    </div>
  );
}
