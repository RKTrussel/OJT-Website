import { useState } from "react";
import { FontLoader } from "./UI";

// ─── Login ────────────────────────────────────────────────
// Full-page login screen.
// Props: onLogin (fn) — called when credentials are correct.
//
// Default credentials: admin@company.com / admin123
// To change: update the check inside `submit()`.
export default function Login({ onLogin }) {
  const [email, setEmail] = useState("admin@company.com");
  const [pass, setPass] = useState("admin123");
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");

  const submit = () => {
    if (!email || !pass) {
      setErr("Please fill all fields.");
      return;
    }
    setLoading(true);
    setErr("");
    setTimeout(
      () =>
        email === "admin@company.com" && pass === "admin123"
          ? onLogin()
          : (setErr("Invalid credentials."), setLoading(false)),
      800,
    );
  };

  return (
    <div className="min-h-screen bg-[#080810] flex items-center justify-center p-5 relative overflow-hidden">
      <FontLoader />

      {/* Ambient orbs */}
      <div className="absolute -top-25 -right-25 w-125 h-125 rounded-full bg-amber-500/8 blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-15 -left-15 w-100 h-100 rounded-full bg-violet-600/8 blur-[100px] pointer-events-none" />

      <div className="w-full max-w-md relative z-10 animate-fade-in">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="w-16 h-16 bg-linear-to-br from-amber-400 to-amber-600 rounded-2xl flex items-center justify-center text-2xl mx-auto mb-5 shadow-lg shadow-amber-500/20">
            📋
          </div>
          <h1 className="font-display text-3xl text-white font-semibold mb-2">
            Admin Portal
          </h1>
          <p className="text-zinc-500 text-sm">Appointment Management System</p>
        </div>

        {/* Card */}
        <div className="bg-white/3 border border-white/[0.07] rounded-2xl p-8">
          {err && (
            <div className="bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3 text-red-400 text-sm mb-5">
              {err}
            </div>
          )}

          {[
            {
              label: "Email Address",
              type: "email",
              val: email,
              set: setEmail,
              ph: "admin@company.com",
            },
            {
              label: "Password",
              type: "password",
              val: pass,
              set: setPass,
              ph: "Enter password",
            },
          ].map((f) => (
            <div key={f.label} className="mb-4">
              <label className="block text-xs font-semibold text-zinc-500 uppercase tracking-widest mb-2">
                {f.label}
              </label>
              <input
                type={f.type}
                value={f.val}
                onChange={(e) => f.set(e.target.value)}
                placeholder={f.ph}
                onKeyDown={(e) => e.key === "Enter" && submit()}
                className="w-full px-4 py-3.5 bg-white/4 border border-white/8 rounded-xl text-white text-sm placeholder-zinc-600 outline-none focus:border-amber-500/50 focus:bg-white/6 transition-all"
              />
            </div>
          ))}

          <button
            onClick={submit}
            disabled={loading}
            className="w-full mt-2 py-4 bg-linear-to-r from-amber-400 to-amber-600 hover:from-amber-300 hover:to-amber-500 rounded-xl text-[#0a0a0a] font-bold text-base transition-all active:scale-[.98] shadow-lg shadow-amber-500/20"
          >
            {loading ? "Signing in…" : "Sign In →"}
          </button>

          <p className="text-center text-zinc-600 text-xs mt-4">
            admin@company.com / admin123
          </p>
        </div>
      </div>
    </div>
  );
}
