// ─────────────────────────────────────────────
//  ResultsScreen.jsx – FINAL CLEAN VERSION
// ─────────────────────────────────────────────
import React, { useState, useEffect } from "react";
import { useApp } from "../context/AppContext";
import schemes, { getMatchScore } from "../data/schemes";
import SchemeModal from "../components/SchemeModal";

export default function ResultsScreen() {
  const { navigate, profile, t, language } = useApp();

  const [selectedScheme, setSelectedScheme] = useState(null);

  useEffect(() => {}, []);

  // 🔥 Score & sort
  const scored = schemes
    .map((s) => ({ ...s, score: getMatchScore(s, profile) }))
    .sort((a, b) => b.score - a.score);

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
    <div className="min-h-screen w-full px-6 py-8">

      {/* HEADER */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-white">
          {t.results}
        </h1>
        <p className="text-gray-400">{t.resultsSub}</p>
      </div>

      {/* EMPTY */}
      {scored.length === 0 ? (
        <div className="text-center text-gray-400">
          {t.noSchemes}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

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
      className="p-5 rounded-xl bg-white/5 border border-white/10 hover:scale-105 transition cursor-pointer flex flex-col"
      style={{ animationDelay: `${delay}s` }}
    >

      {/* BEST */}
      {isBest && (
        <span className="text-green-400 text-xs mb-2">
          ⭐ {t.bestMatch}
        </span>
      )}

      {/* TITLE */}
      <h2 className="text-lg font-bold text-white mb-2">
        {name}
      </h2>

      {/* MATCH */}
      <p className="text-sm text-green-400 mb-2">
        {pct}% Match
      </p>

      {/* ELIGIBILITY */}
      <p className="text-xs text-gray-400 mb-2">
        {eligibility}
      </p>

      {/* BENEFITS */}
      <p className="text-xs text-gray-400 mb-4">
        {benefits}
      </p>

      {/* BUTTONS */}
      <div className="mt-auto flex gap-2">

        {/* VIEW */}
        <button className="flex-1 bg-blue-500 text-white py-2 rounded">
          {t.viewDetails}
        </button>

        {/* PRINT */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onPrint && onPrint();
          }}
          className="px-3 bg-indigo-600 text-white rounded"
        >
          🖨️
        </button>

      </div>
    </div>
  );
}