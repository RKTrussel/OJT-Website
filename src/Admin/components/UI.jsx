import { STATUS } from "../data/appointments";

// ─── Google Fonts & Global Styles ────────────────────────
export function FontLoader() {
  return (
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Lora:ital,wght@0,400;0,600;1,400&display=swap');
      *{font-family:'Plus Jakarta Sans',sans-serif;}
      .font-display{font-family:'Lora',serif;}
      @keyframes slideUp{from{transform:translateY(16px);opacity:0}to{transform:translateY(0);opacity:1}}
      @keyframes fadeIn{from{opacity:0}to{opacity:1}}
      @keyframes shimmer{0%{background-position:-200% 0}100%{background-position:200% 0}}
      .animate-slide-up{animation:slideUp .25s ease}
      .animate-fade-in{animation:fadeIn .2s ease}
      .sheet-up{animation:slideUp .3s cubic-bezier(.16,1,.3,1)}
      select option{background:#0f1117;}
      ::-webkit-scrollbar{width:4px;height:4px}
      ::-webkit-scrollbar-track{background:transparent}
      ::-webkit-scrollbar-thumb{background:#2a2a3a;border-radius:2px}
      input[type=date]::-webkit-calendar-picker-indicator{filter:invert(0.4)}
    `}</style>
  );
}

// ─── Avatar ───────────────────────────────────────────────
// Displays colored initials for a given name.
// Props: name (string), size ("sm" | "md" | "lg")
export function Avatar({ name, size = "md" }) {
  const initials = name
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

  const palettes = [
    "bg-violet-500/20 text-violet-400 ring-violet-500/30",
    "bg-amber-500/20 text-amber-400 ring-amber-500/30",
    "bg-emerald-500/20 text-emerald-400 ring-emerald-500/30",
    "bg-pink-500/20 text-pink-400 ring-pink-500/30",
    "bg-sky-500/20 text-sky-400 ring-sky-500/30",
    "bg-orange-500/20 text-orange-400 ring-orange-500/30",
  ];
  const color = palettes[name.charCodeAt(0) % palettes.length];
  const dim =
    size === "lg"
      ? "w-14 h-14 text-lg rounded-2xl"
      : size === "sm"
        ? "w-8 h-8 text-xs rounded-xl"
        : "w-10 h-10 text-sm rounded-xl";

  return (
    <div
      className={`${dim} ${color} ring-1 flex items-center justify-center font-bold shrink-0`}
    >
      {initials}
    </div>
  );
}

// ─── Badge ────────────────────────────────────────────────
// Displays a colored status badge.
// Props: status (keyof STATUS)
export function Badge({ status }) {
  const s = STATUS[status];
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-bold uppercase tracking-wider ${s.badge}`}
    >
      <span className={`w-1.5 h-1.5 rounded-full ${s.dot}`} />
      {s.label}
    </span>
  );
}

// ─── Toast ────────────────────────────────────────────────
// Floating notification. Auto-dismissed by parent via setToast(null).
// Props: toast ({ msg, type }), isMobile (bool)
export function Toast({ toast, isMobile }) {
  if (!toast) return null;
  const isSuccess = toast.type === "success";
  return (
    <div
      className={`fixed z-400 animate-slide-up ${isMobile ? "bottom-20 left-4 right-4 text-center" : "bottom-7 right-7"} px-5 py-3 rounded-xl border text-sm font-semibold backdrop-blur-sm
      ${isSuccess ? "bg-emerald-500/15 border-emerald-500/30 text-emerald-400" : "bg-amber-500/15 border-amber-500/30 text-amber-400"}`}
    >
      {isSuccess ? "✓" : "⚠"} {toast.msg}
    </div>
  );
}
