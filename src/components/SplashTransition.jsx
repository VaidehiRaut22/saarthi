// ─────────────────────────────────────────────
//  SplashTransition.jsx  –  Animated loader shown during navigation
// ─────────────────────────────────────────────
import React from "react";

export default function SplashTransition({ visible }) {
  if (!visible) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "rgba(2,4,8,0.85)",
        backdropFilter: "blur(16px)",
        animation: "fadeIn 0.2s ease forwards",
      }}
    >
      {/* Spinning ring */}
      <div style={{ position: "relative", width: 80, height: 80 }}>
        <div style={{
          position: "absolute",
          inset: 0,
          borderRadius: "50%",
          border: "3px solid transparent",
          borderTopColor: "#6366f1",
          borderRightColor: "#10b981",
          animation: "spin 0.8s linear infinite",
        }} />
        <div style={{
          position: "absolute",
          inset: 8,
          borderRadius: "50%",
          border: "2px solid transparent",
          borderTopColor: "#f59e0b",
          animation: "spin 1.2s linear infinite reverse",
        }} />
        {/* Center dot */}
        <div style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 24,
        }}>
          🧭
        </div>
      </div>
    </div>
  );
}
