// ─────────────────────────────────────────────
//  ResultsScreen.jsx – FINAL CLEAN VERSION
// ─────────────────────────────────────────────
import React, { useState, useEffect } from "react";
import { useApp } from "../context/AppContext";
import schemes, { getMatchScore } from "../data/schemes";
import SchemeModal from "../components/SchemeModal";
import { Button } from "../components/ui/Button";

export default function ResultsScreen() {
  const { navigate, profile, t, language } = useApp();

  const [selectedScheme, setSelectedScheme] = useState(null);

  useEffect(() => {}, []);

  // 🔥 Score & filter
  const scored = schemes
    .map((s) => ({ ...s, score: getMatchScore(s, profile) }))
    .filter((s) => s.score > 0);

  const bestScore = scored[0]?.score || 0;

  // 🖨️ PRINT FUNCTION (THERMAL READY)
  const handlePrint = (scheme) => {
    const win = window.open("", "", "width=300,height=600");

    const content = `
      <html>
      <body style="font-family: monospace; width:260px; padding:10px;">
        <h3 style="text-align:center;">🇮🇳 Saarthi</h3>
        <hr/>

        <b>${scheme.name?.[language] || scheme.name}</b>

        <hr/>
        Age: ${scheme.age || "N/A"}<br/>
        Income: ${scheme.income_eligibility || "N/A"}<br/>
        Occupation: ${scheme.occupation || "N/A"}

        <hr/>
        ${scheme.benefits?.[language] || scheme.benefits || ""}

        <hr/>
        ${(scheme.documents_required || []).join(", ")}

        <hr/>
        Thank You 🙏
      </body>
      </html>
    `;

    win.document.write(content);
    win.document.close();
    win.print();
  };

  return (
    <div className="h-screen w-full px-6 py-8 overflow-y-auto pb-24">

      {/* HEADER */}
      <div className="text-center mb-10 relative">
        <button
            onClick={() => navigate("chat")}
            className="absolute left-0 top-0 mt-2 px-4 py-2 text-sm text-gray-400 hover:text-white bg-white/5 rounded-lg border border-white/10"
        >
            ← {t.back}
        </button>
        <h2 className="text-2xl font-bold text-indigo-400 mb-2" style={{ fontFamily: "Sora, sans-serif" }}>
          Welcome, {profile.name || "User"}!
        </h2>
        <h1 className="text-5xl font-extrabold text-white mb-3" style={{ fontFamily: "Sora, sans-serif" }}>
          {t.results}
        </h1>
        <p className="text-lg text-gray-400">{t.resultsSub}</p>
      </div>

      {/* EMPTY */}
      {scored.length === 0 ? (
        <div className="text-center text-gray-400">
          {t.noSchemes}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {scored.map((scheme, idx) => (
            <SchemeCard
              key={scheme.id}
              scheme={scheme}
              language={language}
              t={t}
              isBest={scheme.score === bestScore}
              delay={idx * 0.1}
              onClick={() => setSelectedScheme(scheme)}
              onPrint={() => handlePrint(scheme)}
            />
          ))}

        </div>
      )}

      {/* RESTART */}
      <div className="mt-8 text-center">
        <button
          onClick={() => navigate("welcome")}
          className="px-6 py-3 bg-white/10 text-white rounded-lg hover:bg-white/20"
        >
          🔄 {t.restart}
        </button>
      </div>

      {/* MODAL */}
      {selectedScheme && (
        <SchemeModal
          scheme={selectedScheme}
          onClose={() => setSelectedScheme(null)}
        />
      )}
    </div>
  );
}

// ─────────────────────────────────────────────
// SCHEME CARD
// ─────────────────────────────────────────────
function SchemeCard({ scheme, language, t, isBest, delay, onClick, onPrint }) {
  const name = scheme.name?.[language] || scheme.name;
  const eligibility = scheme.eligibility?.[language] || "";
  const benefits = scheme.benefits?.[language] || "";
  const pct = scheme.score || 0;

  return (
    <div
      onClick={onClick}
      className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:shadow-2xl hover:border-indigo-500/50 hover:-translate-y-2 transition-all duration-300 cursor-pointer flex flex-col"
      style={{ animationDelay: `${delay}s`, boxShadow: "0 8px 32px rgba(0,0,0,0.2)" }}
    >

      {/* BEST */}
      {isBest && (
        <span className="text-green-400 text-xs mb-2">
          ⭐ {t.bestMatch}
        </span>
      )}

      <h2 className="text-xl font-bold text-white mb-3 leading-snug">
        {name}
      </h2>

      {/* MATCH */}
      <p className="text-sm font-semibold text-green-400 mb-4 bg-green-400/10 w-max px-3 py-1 rounded-full">
        {pct}% Match
      </p>

      {/* ELIGIBILITY */}
      <p className="text-sm text-gray-300 mb-3 leading-relaxed">
        <span className="text-indigo-300 font-semibold">{t.eligibility}:</span> {eligibility}
      </p>

      {/* BENEFITS */}
      <p className="text-sm text-gray-400 mb-6 leading-relaxed flex-grow">
        <span className="text-indigo-300 font-semibold">{t.benefits}:</span> {benefits}
      </p>

      {/* BUTTONS */}
      <div className="mt-auto flex gap-2">

        {/* VIEW */}
        <Button 
          variant="mono"
          size="lg" 
          className="flex-1 bg-indigo-600 hover:bg-indigo-500 dark:bg-indigo-600 dark:hover:bg-indigo-500 text-white rounded-xl shadow-[0_0_20px_rgba(79,70,229,0.3)] hover:shadow-[0_0_30px_rgba(79,70,229,0.5)] h-auto py-3 transition-all duration-300"
        >
          {t.viewDetails}
        </Button>

        {/* PRINT */}
        <Button
          variant="outline"
          size="icon"
          onClick={(e) => {
            e.stopPropagation();
            onPrint && onPrint();
          }}
          className="rounded-xl bg-gray-700/50 hover:bg-gray-600 border-white/10 text-white w-14 h-auto flex items-center justify-center transition-all duration-300 shadow-md"
        >
          🖨️
        </Button>

      </div>
    </div>
  );
}