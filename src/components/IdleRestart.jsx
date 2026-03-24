// ─────────────────────────────────────────────
//  IdleRestart.jsx  –  Auto-resets kiosk after 90s of inactivity
//  Shows a countdown warning before resetting
// ─────────────────────────────────────────────
import React, { useEffect, useState, useRef, useCallback } from "react";
import { useApp } from "../context/AppContext";

const IDLE_LIMIT = 90;   // seconds before warning
const WARNING_TIME = 15; // seconds to count down before reset

export default function IdleRestart() {
  const { screen, navigate, setProfile, setLanguage } = useApp();
  const [countdown, setCountdown] = useState(null); // null = not warning
  const idleTimer = useRef(null);
  const countdownTimer = useRef(null);

  // Full reset
  const doReset = useCallback(() => {
    setCountdown(null);
    setProfile({ age: "", income: "", occupation: "" });
    setLanguage("en");
    navigate("welcome");
  }, [navigate, setProfile, setLanguage]);

  // Start countdown warning
  const startCountdown = useCallback(() => {
    let remaining = WARNING_TIME;
    setCountdown(remaining);
    countdownTimer.current = setInterval(() => {
      remaining -= 1;
      setCountdown(remaining);
      if (remaining <= 0) {
        clearInterval(countdownTimer.current);
        doReset();
      }
    }, 1000);
  }, [doReset]);

  // Reset idle timer on any user activity
  const resetIdle = useCallback(() => {
    // If warning is showing and user interacts → cancel it
    if (countdown !== null) {
      clearInterval(countdownTimer.current);
      setCountdown(null);
    }
    clearTimeout(idleTimer.current);
    // Don't run idle on welcome screen
    if (screen === "welcome") return;
    idleTimer.current = setTimeout(startCountdown, IDLE_LIMIT * 1000);
  }, [countdown, screen, startCountdown]);

  // Attach activity listeners
  useEffect(() => {
    const events = ["mousemove", "mousedown", "keydown", "touchstart", "scroll"];
    events.forEach(e => window.addEventListener(e, resetIdle, { passive: true }));
    resetIdle(); // kick off
    return () => {
      events.forEach(e => window.removeEventListener(e, resetIdle));
      clearTimeout(idleTimer.current);
      clearInterval(countdownTimer.current);
    };
  }, [resetIdle]);

  if (countdown === null) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 200,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "rgba(2,4,8,0.88)",
        backdropFilter: "blur(20px)",
        animation: "fadeIn 0.3s ease forwards",
      }}
    >
      <div style={{
        textAlign: "center",
        padding: "48px 56px",
        borderRadius: 28,
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(239,68,68,0.3)",
        boxShadow: "0 0 80px rgba(239,68,68,0.15)",
        maxWidth: 420,
      }}>
        {/* Warning icon */}
        <div style={{ fontSize: 56, marginBottom: 16 }}>⏱️</div>

        {/* Countdown ring */}
        <div style={{
          width: 100,
          height: 100,
          borderRadius: "50%",
          margin: "0 auto 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 36,
          fontWeight: 900,
          color: countdown <= 5 ? "#f87171" : "#fbbf24",
          background: countdown <= 5 ? "rgba(239,68,68,0.1)" : "rgba(245,158,11,0.1)",
          border: `3px solid ${countdown <= 5 ? "rgba(239,68,68,0.5)" : "rgba(245,158,11,0.4)"}`,
          boxShadow: `0 0 30px ${countdown <= 5 ? "rgba(239,68,68,0.3)" : "rgba(245,158,11,0.2)"}`,
          fontFamily: "Sora, sans-serif",
          transition: "all 0.3s",
        }}>
          {countdown}
        </div>

        <h2 style={{
          fontSize: 22,
          fontWeight: 700,
          color: "white",
          marginBottom: 10,
          fontFamily: "Sora, sans-serif",
        }}>
          Are you still there?
        </h2>
        <p style={{
          fontSize: 14,
          color: "rgba(148,163,184,0.7)",
          marginBottom: 28,
          fontFamily: "Sora, sans-serif",
          lineHeight: 1.6,
        }}>
          The kiosk will reset in <strong style={{ color: "#fbbf24" }}>{countdown} seconds</strong> due to inactivity.
        </p>

        {/* Buttons */}
        <div style={{ display: "flex", gap: 12 }}>
          <button
            onClick={resetIdle}
            style={{
              flex: 2,
              padding: "14px 0",
              borderRadius: 14,
              background: "linear-gradient(135deg, #4f46e5, #059669)",
              border: "none",
              color: "white",
              fontSize: 16,
              fontWeight: 700,
              cursor: "pointer",
              fontFamily: "Sora, sans-serif",
              boxShadow: "0 0 30px rgba(99,102,241,0.4)",
              transition: "all 0.2s",
            }}
            onMouseEnter={e => e.currentTarget.style.transform = "scale(1.04)"}
            onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
          >
            ✋ I'm Still Here
          </button>
          <button
            onClick={doReset}
            style={{
              flex: 1,
              padding: "14px 0",
              borderRadius: 14,
              background: "rgba(239,68,68,0.12)",
              border: "1px solid rgba(239,68,68,0.3)",
              color: "#f87171",
              fontSize: 14,
              fontWeight: 600,
              cursor: "pointer",
              fontFamily: "Sora, sans-serif",
              transition: "all 0.2s",
            }}
            onMouseEnter={e => e.currentTarget.style.background = "rgba(239,68,68,0.22)"}
            onMouseLeave={e => e.currentTarget.style.background = "rgba(239,68,68,0.12)"}
          >
            🔄 Reset
          </button>
        </div>
      </div>
    </div>
  );
}
