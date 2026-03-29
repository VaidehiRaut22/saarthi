// ─────────────────────────────────────────────
//  ChatScreen.jsx  –  Step-by-step profile collection
//  Steps: Age → Income → Occupation
// ─────────────────────────────────────────────
import React, { useState, useRef, useEffect } from "react";
import { useApp } from "../context/AppContext";

const TOTAL_STEPS = 5;

export default function ChatScreen() {
  const { navigate, profile, setProfile, t, language } = useApp();

  const [step, setStep] = useState(1); // 1=name, 2=state, 3=age, 4=income, 5=occupation
  const [nameVal, setNameVal] = useState(profile.name || "");
  const [stateVal, setStateVal] = useState(profile.state || "");
  const [ageVal, setAgeVal] = useState(profile.age || "");
  const [incomeVal, setIncomeVal] = useState(profile.income || "");
  const [occupationVal, setOccupationVal] = useState(profile.occupation || "");
  const [otherOccupation, setOtherOccupation] = useState("");
  const [error, setError] = useState("");
  const [listening, setListening] = useState(false);

  const nameRef = useRef(null);
  const ageRef = useRef(null);
  const otherRef = useRef(null);

  // Auto-focus logic and speech reading
  useEffect(() => {
    if (step === 1 && nameRef.current) nameRef.current.focus();
    if (step === 3 && ageRef.current) ageRef.current.focus();

    // Robot talks the question out loud
    if (window.speechSynthesis) {
        let textToSpeak = "";
        if(step === 1) textToSpeak = t.name;
        if(step === 2) textToSpeak = t.state;
        if(step === 3) textToSpeak = t.age;
        if(step === 4) textToSpeak = t.income;
        if(step === 5) textToSpeak = t.occupation;

        if (textToSpeak) {
            const utter = new SpeechSynthesisUtterance(textToSpeak);
            
            // Fallback for Marathi if not supported by OS
            let targetLang = language === "en" ? "en-IN" : language === "hi" ? "hi-IN" : "mr-IN";
            utter.lang = targetLang;
            
            // Check if mr-IN voice exists
            if (language === "mr") {
                const voices = window.speechSynthesis.getVoices();
                const hasMarathi = voices.some(v => v.lang.includes("mr"));
                if (!hasMarathi) utter.lang = "hi-IN"; // fallback to Hindi voice reading Marathi text
            }
            
            utter.rate = 0.95;
            
            // Store globally to prevent garbage collection bug in Chromium
            window._currentUtterance = utter;
            
            window.speechSynthesis.cancel(); // stop current speech
            window.speechSynthesis.speak(utter);
        }
    }
  }, [step, t, language]);

  // Auto-focus "other" input when shown
  useEffect(() => {
    if (occupationVal === "Other" && otherRef.current) otherRef.current.focus();
  }, [occupationVal]);

  // ── Voice input ──────────────────────────
  function startVoice() {
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SR) { setError("Voice not supported."); return; }

    const langMap = { en: "en-IN", hi: "hi-IN", mr: "mr-IN" };
    const recognition = new SR();
    recognition.lang = langMap[language] || "en-IN";
    recognition.interimResults = false;

    setListening(true);
    recognition.start();

    recognition.onresult = (e) => {
      const text = e.results[0][0].transcript;
      setListening(false);
      setError("");

      if (step === 1) {
        setNameVal(text);
      } else if (step === 2) {
        // Match spoken state
        const spoken = text.toLowerCase();
        const match = t.states.find(s => spoken.includes(s.toLowerCase()));
        if (match) setStateVal(match);
        else setError(`Heard: "${text}". Please tap an option.`);
      } else if (step === 3) {
        // Extract number from speech
        const num = text.match(/\d+/);
        if (num) setAgeVal(num[0]);
        else setError("Could not detect a number. Try again.");
      } else if (step === 5) {
        // Match spoken occupation
        const spoken = text.toLowerCase();
        const opts = t.occupationOptions;
        const match = opts.find(o => spoken.includes(o.toLowerCase()));
        if (match) setOccupationVal(match);
        else setError(`Heard: "${text}". Please tap an option.`);
      }
    };

    recognition.onerror = () => {
      setListening(false);
      setError("Voice error. Please tap an option.");
    };
    recognition.onend = () => setListening(false);
  }

  // ── Validation & navigation ───────────────
  function handleNext() {
    setError("");

    if (step === 1) {
      if (!nameVal.trim()) {
        setError("Please enter your name.");
        return;
      }
      setProfile(p => ({ ...p, name: nameVal }));
      setStep(2);
    } else if (step === 2) {
      if (!stateVal) {
        setError("Please select your State.");
        return;
      }
      setProfile(p => ({ ...p, state: stateVal }));
      setStep(3);
    } else if (step === 3) {
      const num = parseInt(ageVal, 10);
      if (isNaN(num) || num < 1 || num > 120) {
        setError(t.ageError);
        return;
      }
      setProfile(p => ({ ...p, age: ageVal }));
      setStep(4);
    } else if (step === 4) {
      if (!incomeVal) {
        setError(t.incomeNote);
        return;
      }
      setProfile(p => ({ ...p, income: incomeVal }));
      setStep(5);
    } else if (step === 5) {
      if (!occupationVal) {
        setError("Please select or type your occupation.");
        return;
      }
      const finalOcc = occupationVal === "Other" ? otherOccupation || "Other" : occupationVal;
      if (occupationVal === "Other" && !otherOccupation.trim()) {
        setError(t.otherOccupation);
        return;
      }
      setProfile(p => ({ ...p, occupation: finalOcc }));
      navigate("results");
    }
  }

  function handleBack() {
    setError("");
    window.speechSynthesis.cancel();
    if (step > 1) setStep(step - 1);
    else navigate("language");
  }

  // Progress %
  const progress = Math.round((step / TOTAL_STEPS) * 100);

  return (
    <div className="relative z-10 flex flex-col items-center justify-center min-h-screen w-full px-6 screen-enter">
      <div className="w-full max-w-xl">

        {/* Progress bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-semibold" style={{ color: "rgba(99,102,241,0.9)", fontFamily: "Sora, sans-serif" }}>
              {t.step} {step} {t.of} {TOTAL_STEPS}
            </span>
            <span className="text-sm" style={{ color: "rgba(100,116,139,0.7)" }}>{progress}%</span>
          </div>
          <div className="w-full h-2 rounded-full" style={{ background: "rgba(255,255,255,0.06)" }}>
            <div className="progress-fill h-2 rounded-full" style={{ width: `${progress}%` }} />
          </div>
        </div>

        {/* Card */}
        <div className="rounded-3xl p-8"
          style={{
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.08)",
            backdropFilter: "blur(20px)",
            boxShadow: "0 0 80px rgba(0,0,0,0.4)",
          }}>

          {/* ── STEP 1: NAME ── */}
          {step === 1 && (
            <div className="stagger">
              <StepIcon icon="👋" color="#3b82f6" />
              <h2 className="text-3xl font-bold text-white mb-2 mt-5" style={{ fontFamily: "Sora, sans-serif" }}>{t.name}</h2>
              <p className="text-sm mb-6" style={{ color: "rgba(100,116,139,0.7)" }}>Let's get to know you</p>
              <div className="flex gap-3 items-center">
                <input
                  ref={nameRef}
                  type="text"
                  className="kiosk-input flex-1 rounded-2xl px-5 py-4 text-2xl font-semibold"
                  placeholder={t.namePlaceholder}
                  value={nameVal}
                  onChange={e => { setNameVal(e.target.value); setError(""); }}
                  onKeyDown={e => e.key === "Enter" && handleNext()}
                />
                <MicButton listening={listening} onClick={startVoice} />
              </div>
            </div>
          )}

          {/* ── STEP 2: STATE ── */}
          {step === 2 && (
            <div className="stagger">
              <StepIcon icon="🗺️" color="#ec4899" />
              <h2 className="text-3xl font-bold text-white mb-2 mt-5" style={{ fontFamily: "Sora, sans-serif" }}>{t.state}</h2>
              <div className="flex flex-col gap-3">
                {t.states.map(stateName => (
                  <button
                    key={stateName}
                    onClick={() => { setStateVal(stateName); setError(""); }}
                    className="card-hover w-full flex items-center gap-4 px-6 py-4 rounded-2xl text-left transition-all"
                    style={{
                      background: stateVal === stateName
                        ? "linear-gradient(135deg, rgba(236,72,153,0.25) 0%, rgba(99,102,241,0.2) 100%)"
                        : "rgba(255,255,255,0.04)",
                      border: stateVal === stateName
                        ? "2px solid rgba(236,72,153,0.6)"
                        : "1px solid rgba(255,255,255,0.07)",
                    }}
                  >
                    <span className="text-lg font-semibold text-white" style={{ fontFamily: "Noto Sans Devanagari, sans-serif" }}>
                      {stateName}
                    </span>
                    {stateVal === stateName && <span className="ml-auto text-pink-400 text-xl">✓</span>}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* ── STEP 3: AGE ── */}
          {step === 3 && (
            <div className="stagger">
              <StepIcon icon="🎂" color="#6366f1" />
              <h2 className="text-3xl font-bold text-white mb-2 mt-5" style={{ fontFamily: "Sora, sans-serif" }}>{t.age}</h2>
              <p className="text-sm mb-6" style={{ color: "rgba(100,116,139,0.7)" }}>Enter your age in years</p>
              <div className="flex gap-3 items-center">
                <input
                  ref={ageRef}
                  type="number"
                  className="kiosk-input flex-1 rounded-2xl px-5 py-4 text-2xl font-semibold"
                  placeholder={t.agePlaceholder}
                  value={ageVal}
                  onChange={e => { setAgeVal(e.target.value); setError(""); }}
                  onKeyDown={e => e.key === "Enter" && handleNext()}
                  min={1} max={120}
                />
                <MicButton listening={listening} onClick={startVoice} />
              </div>
            </div>
          )}

          {/* ── STEP 4: INCOME ── */}
          {step === 4 && (
            <div className="stagger">
              <StepIcon icon="💰" color="#10b981" />
              <h2 className="text-3xl font-bold text-white mb-2 mt-5" style={{ fontFamily: "Sora, sans-serif" }}>{t.income}</h2>
              <p className="text-sm mb-6" style={{ color: "rgba(100,116,139,0.7)" }}>{t.incomeNote}</p>
              <div className="flex flex-col gap-3">
                {t.incomeOptions.map(opt => (
                  <button
                    key={opt.value}
                    onClick={() => { setIncomeVal(opt.value); setError(""); }}
                    className="card-hover w-full flex items-center gap-4 px-6 py-5 rounded-2xl text-left transition-all"
                    style={{
                      background: incomeVal === opt.value
                        ? "linear-gradient(135deg, rgba(16,185,129,0.25) 0%, rgba(99,102,241,0.2) 100%)"
                        : "rgba(255,255,255,0.04)",
                      border: incomeVal === opt.value
                        ? "2px solid rgba(16,185,129,0.6)"
                        : "1px solid rgba(255,255,255,0.07)",
                    }}
                  >
                    <span className="text-2xl">
                      {opt.value === "low" ? "🟢" : opt.value === "medium" ? "🟡" : "🔴"}
                    </span>
                    <span className="text-lg font-semibold text-white" style={{ fontFamily: "Noto Sans Devanagari, sans-serif" }}>
                      {opt.label}
                    </span>
                    {incomeVal === opt.value && <span className="ml-auto text-green-400 text-xl">✓</span>}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* ── STEP 5: OCCUPATION ── */}
          {step === 5 && (
            <div className="stagger">
              <StepIcon icon="👤" color="#f59e0b" />
              <h2 className="text-3xl font-bold text-white mb-2 mt-5" style={{ fontFamily: "Sora, sans-serif" }}>{t.occupation}</h2>
              <div className="flex items-center justify-between mb-4">
                <p className="text-sm" style={{ color: "rgba(100,116,139,0.7)" }}>Select one option</p>
                <MicButton listening={listening} onClick={startVoice} small />
              </div>
              <div className="grid grid-cols-2 gap-3">
                {t.occupationOptions.map((occ, i) => (
                  <button
                    key={i}
                    onClick={() => { setOccupationVal(occ); setError(""); }}
                    className="card-hover flex items-center gap-3 px-4 py-4 rounded-2xl text-left"
                    style={{
                      background: occupationVal === occ
                        ? "linear-gradient(135deg, rgba(245,158,11,0.25) 0%, rgba(99,102,241,0.2) 100%)"
                        : "rgba(255,255,255,0.04)",
                      border: occupationVal === occ
                        ? "2px solid rgba(245,158,11,0.6)"
                        : "1px solid rgba(255,255,255,0.07)",
                    }}
                  >
                    <span className="text-lg">{OCC_ICONS[i]}</span>
                    <span className="text-sm font-semibold text-white leading-tight" style={{ fontFamily: "Noto Sans Devanagari, sans-serif" }}>
                      {occ}
                    </span>
                    {occupationVal === occ && <span className="ml-auto text-yellow-400 text-sm">✓</span>}
                  </button>
                ))}
              </div>

              {/* "Other" custom input */}
              {occupationVal === (t.occupationOptions[6]) && (
                <div className="mt-4">
                  <input
                    ref={otherRef}
                    type="text"
                    className="kiosk-input w-full rounded-2xl px-5 py-4 text-lg font-semibold"
                    placeholder={t.otherPlaceholder}
                    value={otherOccupation}
                    onChange={e => { setOtherOccupation(e.target.value); setError(""); }}
                    onKeyDown={e => e.key === "Enter" && handleNext()}
                  />
                </div>
              )}
            </div>
          )}

          {/* Error message */}
          {error && (
            <div className="mt-4 px-4 py-3 rounded-xl text-sm font-medium"
              style={{ background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.3)", color: "#f87171" }}>
              ⚠ {error}
            </div>
          )}
        </div>

        {/* Navigation buttons */}
        <div className="flex gap-4 mt-6">
          <button
            onClick={handleBack}
            className="flex-1 py-4 rounded-2xl text-lg font-semibold transition-all duration-300"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.1)",
              color: "rgba(148,163,184,0.8)",
              fontFamily: "Sora, sans-serif",
            }}
            onMouseEnter={e => e.currentTarget.style.background = "rgba(255,255,255,0.08)"}
            onMouseLeave={e => e.currentTarget.style.background = "rgba(255,255,255,0.04)"}
          >
            ← {t.back}
          </button>

          <button
            onClick={handleNext}
            className="flex-2 px-10 py-4 rounded-2xl text-lg font-bold text-white transition-all duration-300"
            style={{
              flex: 2,
              background: "linear-gradient(135deg, #4f46e5 0%, #059669 100%)",
              boxShadow: "0 0 30px rgba(99,102,241,0.4)",
              fontFamily: "Sora, sans-serif",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 0 50px rgba(99,102,241,0.6)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 0 30px rgba(99,102,241,0.4)";
            }}
          >
            {step === TOTAL_STEPS ? `🔍 ${t.submit}` : `${t.next} →`}
          </button>
        </div>
      </div>
    </div>
  );
}

// ── Helper sub-components ────────────────────

function StepIcon({ icon, color }) {
  return (
    <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl"
      style={{
        background: `${color}22`,
        border: `1px solid ${color}44`,
        boxShadow: `0 0 20px ${color}33`,
      }}>
      {icon}
    </div>
  );
}

function MicButton({ listening, onClick, small }) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center rounded-full transition-all duration-300 ${listening ? "mic-pulse" : ""} ${small ? "w-10 h-10 text-lg" : "w-14 h-14 text-2xl"}`}
      style={{
        background: listening ? "rgba(239,68,68,0.2)" : "rgba(255,255,255,0.06)",
        border: listening ? "2px solid rgba(239,68,68,0.6)" : "1px solid rgba(255,255,255,0.1)",
        flexShrink: 0,
      }}
      title="Voice input"
    >
      {listening ? "🔴" : "🎤"}
    </button>
  );
}

// Icons for each occupation
const OCC_ICONS = ["🌾", "🎓", "💼", "🏛️", "🏢", "🙁", "✏️"];
