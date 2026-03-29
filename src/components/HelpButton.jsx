// ─────────────────────────────────────────────
//  HelpButton.jsx  –  Floating "?" button with help overlay
// ─────────────────────────────────────────────
import React, { useState } from "react";
import { useApp } from "../context/AppContext";

export default function HelpButton() {
  const { screen } = useApp();
  const [open, setOpen] = useState(false);

  // Don't show on welcome screen
  if (screen === "welcome") return null;

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen(o => !o)}
        style={{
          position: "fixed",
          bottom: 24,
          right: 24,
          zIndex: 50,
          width: 48,
          height: 48,
          borderRadius: "50%",
          background: "rgba(99,102,241,0.15)",
          border: "1px solid rgba(99,102,241,0.35)",
          color: "#818cf8",
          fontSize: 20,
          fontWeight: 700,
          cursor: "pointer",
          transition: "all 0.3s",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 0 20px rgba(99,102,241,0.2)",
          fontFamily: "Sora, sans-serif",
        }}
        onMouseEnter={e => {
          e.currentTarget.style.background = "rgba(99,102,241,0.3)";
          e.currentTarget.style.transform = "scale(1.1)";
          e.currentTarget.style.boxShadow = "0 0 30px rgba(99,102,241,0.4)";
        }}
        onMouseLeave={e => {
          e.currentTarget.style.background = "rgba(99,102,241,0.15)";
          e.currentTarget.style.transform = "scale(1)";
          e.currentTarget.style.boxShadow = "0 0 20px rgba(99,102,241,0.2)";
        }}
        title="Help"
      >
        ?
      </button>

      {/* Help overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 150,
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "flex-end",
            padding: 24,
            background: "rgba(0,0,0,0.5)",
            backdropFilter: "blur(8px)",
            animation: "fadeIn 0.2s ease forwards",
          }}
        >
          <div
            onClick={e => e.stopPropagation()}
            style={{
              width: 320,
              borderRadius: 20,
              background: "rgba(8,10,20,0.98)",
              border: "1px solid rgba(99,102,241,0.25)",
              boxShadow: "0 0 60px rgba(99,102,241,0.15)",
              overflow: "hidden",
              animation: "modalIn 0.35s cubic-bezier(0.34,1.56,0.64,1) forwards",
            }}
          >
            {/* Header */}
            <div style={{
              padding: "16px 20px",
              borderBottom: "1px solid rgba(255,255,255,0.06)",
              background: "rgba(99,102,241,0.08)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}>
              <span style={{ fontWeight: 700, color: "white", fontFamily: "Sora, sans-serif" }}>
                💡 How to Use
              </span>
              <button onClick={() => setOpen(false)}
                style={{ background: "none", border: "none", color: "rgba(148,163,184,0.6)", cursor: "pointer", fontSize: 18 }}>
                ✕
              </button>
            </div>

            {/* Tips */}
            <div style={{ padding: "16px 20px" }}>
              {TIPS.map((tip, i) => (
                <div key={i} style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 12,
                  marginBottom: 14,
                }}>
                  <span style={{ fontSize: 20, flexShrink: 0 }}>{tip.icon}</span>
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 600, color: "white", fontFamily: "Sora, sans-serif", marginBottom: 2 }}>
                      {tip.title}
                    </div>
                    <div style={{ fontSize: 12, color: "rgba(100,116,139,0.8)", lineHeight: 1.5 }}>
                      {tip.desc}
                    </div>
                  </div>
                </div>
              ))}

              <div style={{
                marginTop: 16,
                padding: "10px 14px",
                borderRadius: 10,
                background: "rgba(99,102,241,0.08)",
                border: "1px solid rgba(99,102,241,0.15)",
                fontSize: 11,
                color: "rgba(129,140,248,0.7)",
                textAlign: "center",
                fontFamily: "Sora, sans-serif",
              }}>
                Tap anywhere outside to close
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

const TIPS = [
  { icon: "🌐", title: "Select Language", desc: "Choose English, Hindi, or Marathi. You can also speak your language using the mic." },
  { icon: "🎤", title: "Voice Input", desc: "Tap the mic button on any step to speak your answer instead of typing." },
  { icon: "📋", title: "Find Schemes", desc: "Enter your age, income, and occupation to see matching government schemes." },
  { icon: "👆", title: "View Details", desc: "Tap any scheme card to see full details and required documents." },
  { icon: "🖨️", title: "Print / Share", desc: "In the detail popup, tap Print to get a physical copy of the scheme info." },
  { icon: "🔄", title: "Start Over", desc: "Use the 'Start Over' button at the bottom of results to reset the kiosk." },
];
