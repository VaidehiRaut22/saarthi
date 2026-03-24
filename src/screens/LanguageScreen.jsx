// ─────────────────────────────────────────────
//  LanguageScreen.jsx  –  Language selection with voice input
// ─────────────────────────────────────────────
import React, { useState, useEffect } from "react";
import { useApp } from "../context/AppContext";

const LANGUAGES = [
  { code: "en", label: "English", sublabel: "English", flag: "🇬🇧", voiceKeywords: ["english"] },
  { code: "hi", label: "हिंदी", sublabel: "Hindi", flag: "🇮🇳", voiceKeywords: ["hindi", "हिंदी"] },
  { code: "mr", label: "मराठी", sublabel: "Marathi", flag: "🟢", voiceKeywords: ["marathi", "मराठी"] },
];

export default function LanguageScreen() {
  const { navigate, setLanguage } = useApp();
  const [selected, setSelected] = useState(null);
  const [listening, setListening] = useState(false);
  const [hint, setHint] = useState("");

  // Handle language selection and navigate
  function choose(code) {
    setSelected(code);
    setLanguage(code);
    // Speak greeting after selection
    speakGreeting(code);
    setTimeout(() => navigate("chat"), 600);
  }

  // Speak greeting using SpeechSynthesis
  function speakGreeting(code) {
    if (!window.speechSynthesis) return;
    const greetings = {
      en: "How can I help you?",
      hi: "मैं आपकी कैसे मदद कर सकता हूँ?",
      mr: "मी तुमची कशी मदत करू शकतो?",
    };
    const utter = new SpeechSynthesisUtterance(greetings[code]);
    utter.lang = code === "en" ? "en-IN" : code === "hi" ? "hi-IN" : "mr-IN";
    utter.rate = 0.9;
    window.speechSynthesis.speak(utter);
  }

  // Voice recognition for language selection
  function startVoiceSelect() {
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SR) { setHint("Voice not supported on this browser."); return; }
    const recognition = new SR();
    recognition.lang = "en-IN";
    recognition.interimResults = false;
    recognition.maxAlternatives = 3;

    setListening(true);
    setHint("Say: English, Hindi, or Marathi");
    recognition.start();

    recognition.onresult = (e) => {
      const said = e.results[0][0].transcript.toLowerCase();
      setListening(false);
      const found = LANGUAGES.find(l => l.voiceKeywords.some(k => said.includes(k)));
      if (found) {
        setHint(`Detected: ${found.sublabel}`);
        choose(found.code);
      } else {
        setHint("Language not recognized. Please tap a button.");
      }
    };

    recognition.onerror = () => {
      setListening(false);
      setHint("Could not hear. Please tap a button.");
    };

    recognition.onend = () => setListening(false);
  }

  return (
    <div className="relative z-10 flex flex-col items-center justify-center min-h-screen w-full px-8 screen-enter">

      {/* Heading */}
      <div className="text-center mb-12 stagger">
        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full mb-6"
          style={{ background: "rgba(99,102,241,0.1)", border: "1px solid rgba(99,102,241,0.3)" }}>
          <span className="text-indigo-400 text-sm font-semibold tracking-widest uppercase">Step 1 of 3</span>
        </div>

        <h1 className="text-5xl font-extrabold mb-3" style={{ fontFamily: "Sora, sans-serif" }}>
          <span className="gradient-text">Select Your Language</span>
        </h1>
        <p className="text-2xl font-semibold" style={{ color: "rgba(129,140,248,0.8)", fontFamily: "Noto Sans Devanagari, sans-serif" }}>
          आपली भाषा निवडा
        </p>
        <p className="text-base mt-3" style={{ color: "rgba(100,116,139,0.8)", fontFamily: "Sora, sans-serif" }}>
          Choose your preferred language to continue
        </p>
      </div>

      {/* Language Buttons */}
      <div className="flex flex-col gap-5 w-full max-w-lg stagger">
        {LANGUAGES.map((lang) => (
          <button
            key={lang.code}
            onClick={() => choose(lang.code)}
            className="card-hover w-full flex items-center gap-6 px-8 py-6 rounded-2xl text-left"
            style={{
              background: selected === lang.code
                ? "linear-gradient(135deg, rgba(99,102,241,0.3) 0%, rgba(16,185,129,0.2) 100%)"
                : "rgba(255,255,255,0.04)",
              border: selected === lang.code
                ? "2px solid rgba(99,102,241,0.7)"
                : "1px solid rgba(255,255,255,0.08)",
              boxShadow: selected === lang.code ? "0 0 30px rgba(99,102,241,0.3)" : "none",
              transition: "all 0.3s ease",
            }}
          >
            <span className="text-4xl">{lang.flag}</span>
            <div>
              <div className="text-2xl font-bold text-white" style={{ fontFamily: "Noto Sans Devanagari, sans-serif" }}>
                {lang.label}
              </div>
              <div className="text-sm mt-0.5" style={{ color: "rgba(148,163,184,0.7)" }}>
                {lang.sublabel}
              </div>
            </div>
            {selected === lang.code && (
              <div className="ml-auto text-green-400 text-3xl">✓</div>
            )}
          </button>
        ))}
      </div>

      {/* Voice Button */}
      <div className="mt-10 flex flex-col items-center gap-3">
        <button
          onClick={startVoiceSelect}
          className={`flex items-center gap-3 px-6 py-4 rounded-full font-semibold transition-all duration-300 ${listening ? "mic-pulse" : ""}`}
          style={{
            background: listening ? "rgba(239,68,68,0.2)" : "rgba(255,255,255,0.05)",
            border: listening ? "2px solid rgba(239,68,68,0.6)" : "1px solid rgba(255,255,255,0.1)",
            color: listening ? "#f87171" : "rgba(148,163,184,0.8)",
            fontFamily: "Sora, sans-serif",
          }}
        >
          <span className="text-2xl">{listening ? "🔴" : "🎤"}</span>
          <span>{listening ? "Listening..." : "Tap to speak your language"}</span>
        </button>
        {hint && (
          <p className="text-sm text-center px-4 py-2 rounded-xl"
            style={{ color: "rgba(99,102,241,0.9)", background: "rgba(99,102,241,0.08)", border: "1px solid rgba(99,102,241,0.2)" }}>
            {hint}
          </p>
        )}
      </div>
    </div>
  );
}
