// ─────────────────────────────────────────────
//  SchemeModal.jsx  –  Full details modal with Print
// ─────────────────────────────────────────────
import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { useApp } from "../context/AppContext";



export default function SchemeModal({ scheme, onClose }) {
  const { t, language } = useApp();
  const printRef = useRef(null);

  // react-to-print hook
  const handlePrint = useReactToPrint({
    content: () => printRef.current,
    documentTitle: scheme.name?.[language] || scheme.name || "Government Scheme",
  });

  const name = scheme.name?.[language] || scheme.name || "Government Scheme";
  const eligibility = scheme.eligibility?.[language] || scheme.eligibility || "Check portal for details.";
  const benefits = scheme.benefits?.[language] || scheme.benefits || "Assistance provided.";
  const documents = scheme.documents?.[language] || scheme.documents_required || scheme.documents || [];

  return (
    <div
      className="modal-backdrop fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.8)", backdropFilter: "blur(12px)" }}
      onClick={e => e.target === e.currentTarget && onClose()}
    >
      <div
        className="modal-content w-full max-w-2xl rounded-3xl overflow-hidden"
        style={{
          background: "rgba(8,10,20,0.98)",
          border: "1px solid rgba(99,102,241,0.3)",
          boxShadow: "0 0 80px rgba(99,102,241,0.2), 0 40px 80px rgba(0,0,0,0.6)",
          maxHeight: "90vh",
          overflowY: "auto",
        }}
      >
        {/* Header */}
        <div className="relative px-8 pt-8 pb-6"
          style={{ background: "linear-gradient(135deg, rgba(99,102,241,0.15) 0%, rgba(16,185,129,0.1) 100%)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl"
                style={{ background: `${scheme.color || '#4f46e5'}22`, border: `1px solid ${scheme.color || '#4f46e5'}44`, boxShadow: `0 0 20px ${scheme.color || '#4f46e5'}33` }}>
                {scheme.icon || '🏛️'}
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: "rgba(99,102,241,0.8)" }}>
                  {t.schemeDetails}
                </p>
                <h2 className="text-2xl font-extrabold text-white leading-tight"
                  style={{ fontFamily: "Noto Sans Devanagari, sans-serif" }}>{name}</h2>
              </div>
            </div>
            <button
              onClick={onClose}
              className="no-print flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-xl transition-all duration-200"
              style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", color: "rgba(148,163,184,0.7)" }}
              onMouseEnter={e => { e.currentTarget.style.background = "rgba(239,68,68,0.2)"; e.currentTarget.style.color = "#f87171"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.06)"; e.currentTarget.style.color = "rgba(148,163,184,0.7)"; }}
            >
              ✕
            </button>
          </div>
        </div>

        {/* Printable Content */}
        <div ref={printRef} className="print-area px-8 py-6">
          <div className="print-header" style={{ display: "none" }}>
            <h1>Saarthi – सारथी</h1>
            <h2>{name}</h2>
            <hr />
          </div>

          {/* Section: Eligibility */}
          <InfoSection icon="✅" label={t.eligibility} text={eligibility} color="#10b981" />

          {/* Section: Benefits */}
          <InfoSection icon="🎁" label={t.benefits} text={benefits} color="#6366f1" />

          {/* Section: Documents */}
          <div className="mb-6">
            <SectionHeader icon="📋" label={t.documents} color="#f59e0b" />
            <ul className="print-checklist mt-3 space-y-2">
              {documents.map((doc, i) => (
                <li key={i} className="flex items-center gap-3 px-4 py-3 rounded-xl"
                  style={{ background: "rgba(245,158,11,0.06)", border: "1px solid rgba(245,158,11,0.12)" }}>
                  <span className="w-5 h-5 rounded flex items-center justify-center text-xs flex-shrink-0"
                    style={{ background: "rgba(245,158,11,0.2)", border: "1px solid rgba(245,158,11,0.4)", color: "#fbbf24" }}>
                    ☐
                  </span>
                  <span className="text-sm font-medium" style={{ color: "rgba(226,232,240,0.9)", fontFamily: "Noto Sans Devanagari, sans-serif" }}>
                    {doc}
                  </span>
                </li>
              ))}
            </ul>
          </div>


        </div>

        {/* Action Buttons */}
        <div className="no-print px-8 pb-8 flex gap-4">
          <button
            onClick={handlePrint}
            className="flex-1 flex items-center justify-center gap-2 py-4 rounded-2xl font-bold text-white transition-all duration-300"
            style={{
              background: "linear-gradient(135deg, rgba(99,102,241,0.3) 0%, rgba(99,102,241,0.15) 100%)",
              border: "1px solid rgba(99,102,241,0.4)",
              fontFamily: "Sora, sans-serif",
            }}
            onMouseEnter={e => { e.currentTarget.style.background = "linear-gradient(135deg, rgba(99,102,241,0.5) 0%, rgba(99,102,241,0.3) 100%)"; e.currentTarget.style.boxShadow = "0 0 30px rgba(99,102,241,0.3)"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "linear-gradient(135deg, rgba(99,102,241,0.3) 0%, rgba(99,102,241,0.15) 100%)"; e.currentTarget.style.boxShadow = "none"; }}
          >
            🖨 {t.print}
          </button>
          <button
            onClick={onClose}
            className="flex-1 flex items-center justify-center gap-2 py-4 rounded-2xl font-bold transition-all duration-300"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
              color: "rgba(148,163,184,0.8)",
              fontFamily: "Sora, sans-serif",
            }}
            onMouseEnter={e => e.currentTarget.style.background = "rgba(255,255,255,0.08)"}
            onMouseLeave={e => e.currentTarget.style.background = "rgba(255,255,255,0.04)"}
          >
            ✕ {t.close}
          </button>
        </div>
      </div>
    </div>
  );
}

function SectionHeader({ icon, label, color }) {
  return (
    <div className="flex items-center gap-2 mb-1">
      <span>{icon}</span>
      <span className="text-xs font-bold uppercase tracking-widest" style={{ color }}>{label}</span>
    </div>
  );
}

function InfoSection({ icon, label, text, color }) {
  return (
    <div className="mb-5 p-5 rounded-2xl" style={{ background: `${color}08`, border: `1px solid ${color}18` }}>
      <SectionHeader icon={icon} label={label} color={color} />
      <p className="text-base mt-2 leading-relaxed" style={{ color: "rgba(226,232,240,0.9)", fontFamily: "Noto Sans Devanagari, sans-serif" }}>
        {text}
      </p>
    </div>
  );
}
