// ─────────────────────────────────────────────
//  App.jsx  –  Root component, screen router + all overlays
// ─────────────────────────────────────────────
import React from "react";
import { AppProvider, useApp } from "./context/AppContext";
import ParticleBg from "./components/ParticleBg";
import SplashTransition from "./components/SplashTransition";
import IdleRestart from "./components/IdleRestart";
import HelpButton from "./components/HelpButton";
import WelcomeScreen from "./screens/WelcomeScreen";
import LanguageScreen from "./screens/LanguageScreen";
import ChatScreen from "./screens/ChatScreen";
import ResultsScreen from "./screens/ResultsScreen";

// Inner router reads context
function Router() {
  const { screen, transitioning } = useApp();

  const screenMap = {
    welcome:  <WelcomeScreen />,
    language: <LanguageScreen />,
    chat:     <ChatScreen />,
    results:  <ResultsScreen />,
  };

  return (
    <>
      {/* Animated page content */}
      <div
        className={transitioning ? "screen-exit" : ""}
        style={{ width: "100%", minHeight: "100vh" }}
      >
        {screenMap[screen] || <WelcomeScreen />}
      </div>

      {/* Splash loader shown during transitions */}
      <SplashTransition visible={transitioning} />

      {/* Idle timeout warning + auto-reset (90s) */}
      <IdleRestart />

      {/* Floating "?" help button */}
      <HelpButton />
    </>
  );
}

export default function App() {
  return (
    <AppProvider>
      {/* Full-screen kiosk layout */}
      <div
        className="relative min-h-screen w-full"
        style={{
          background: "#020408",
          fontFamily: "Sora, 'Noto Sans Devanagari', sans-serif",
          overflowX: "hidden",
        }}
      >
        {/* Animated particle / orb background */}
        <ParticleBg />

        {/* All screens + overlays */}
        <Router />
      </div>
    </AppProvider>
  );
}
