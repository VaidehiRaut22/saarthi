// ─────────────────────────────────────────────
//  AppContext.jsx  –  Global state for language, profile, screen
// ─────────────────────────────────────────────
import React, { createContext, useContext, useState } from "react";
import translations from "../data/translations";

const AppContext = createContext(null);

export function AppProvider({ children }) {
  // Current screen: 'welcome' | 'language' | 'chat' | 'results'
  const [screen, setScreen] = useState("welcome");

  // Transition state for animation
  const [transitioning, setTransitioning] = useState(false);

  // Selected language: 'en' | 'hi' | 'mr'
  const [language, setLanguage] = useState("en");

  // User profile collected in chat
  const [profile, setProfile] = useState({ name: "", state: "", age: "", income: "", occupation: "" });

  // Derived: current translation object
  const t = translations[language];

  // Navigate with exit animation
  function navigate(to) {
    setTransitioning(true);
    setTimeout(() => {
      setScreen(to);
      setTransitioning(false);
    }, 350);
  }

  return (
    <AppContext.Provider value={{
      screen, navigate, transitioning,
      language, setLanguage,
      profile, setProfile,
      t,
    }}>
      {children}
    </AppContext.Provider>
  );
}

// Custom hook for easy access
export function useApp() {
  return useContext(AppContext);
}
