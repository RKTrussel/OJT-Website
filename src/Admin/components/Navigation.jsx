import I from "../utils/icons";
import { STATUS } from "../data/appointments";

// ─── TABS config ──────────────────────────────────────────
// Add or remove tabs here to update all nav areas at once.
export const TABS = [
  { id: "dashboard", label: "Dashboard", icon: I.grid },
  { id: "appointments", label: "Appointments", icon: I.calendar },
];

// ─── Desktop Sidebar ──────────────────────────────────────
// Props: tab, setTab, sidebar (bool), setSidebar, stats, onLogout
export function Sidebar({ tab, setTab, sidebar, setSidebar, stats, onLogout }) {
  return (
    <aside
      className={`${sidebar ? "w-56" : "w-17"} bg-white/2 border-r border-white/5 flex flex-col py-5 px-2.5 transition-all duration-300 shrink-0`}
    >
      {/* Logo */}
      <div className="flex items-center gap-3 px-2 mb-8">
        <div className="w-9 h-9 bg-linear-to-br from-amber-400 to-amber-600 rounded-xl flex items-center justify-center text-base shrink-0 shadow-md shadow-amber-500/20">
          📋
        </div>
        {sidebar && (
          <span className="font-display text-white font-semibold text-base whitespace-nowrap">
            AppointCo
          </span>
        )}
      </div>

      {/* Nav links */}
      <nav className="space-y-1">
        {TABS.map((t) => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            className={`w-full flex items-center gap-3 px-3 py-3 rounded-xl transition-all text-sm font-medium overflow-hidden
            ${tab === t.id ? "bg-amber-500/10 text-amber-400" : "text-zinc-600 hover:text-zinc-400 hover:bg-white/3"}`}
          >
            <span className="shrink-0">{t.icon}</span>
            {sidebar && <span className="whitespace-nowrap">{t.label}</span>}
          </button>
        ))}
      </nav>

      {/* Footer */}
      <div className="mt-auto space-y-1">
        {sidebar && (
          <div className="px-3 py-2 mb-1">
            <p className="text-[10px] text-zinc-700 uppercase tracking-widest mb-0.5">
              Signed in as
            </p>
            <p className="text-xs text-zinc-500 font-medium">Administrator</p>
          </div>
        )}
        <button
          onClick={onLogout}
          className="w-full flex items-center gap-3 px-3 py-3 rounded-xl text-red-500 hover:bg-red-500/[0.07] transition-all text-sm font-medium overflow-hidden"
        >
          <span className="shrink-0">{I.logout}</span>
          {sidebar && <span className="whitespace-nowrap">Logout</span>}
        </button>
      </div>
    </aside>
  );
}

// ─── Desktop Topbar ───────────────────────────────────────
// Props: tab, sidebar, setSidebar, stats, toast
export function Topbar({ tab, setSidebar, stats, toast }) {
  return (
    <header className="px-7 py-4 border-b border-white/5 flex items-center gap-4 bg-white/1 sticky top-0 z-50 backdrop-blur-xl">
      <button
        onClick={() => setSidebar((p) => !p)}
        className="text-zinc-600 hover:text-zinc-400 transition-colors p-1"
      >
        {I.menu}
      </button>
      <h1 className="font-display text-xl text-white font-medium">
        {tab === "dashboard" ? "Overview" : "Appointments"}
      </h1>
      <div className="ml-auto flex items-center gap-3">
        {toast && (
          <span
            className={`text-sm animate-fade-in ${toast.type === "success" ? "text-emerald-400" : "text-amber-400"}`}
          >
            {toast.msg}
          </span>
        )}
        {stats.pending > 0 && (
          <div className="flex items-center gap-1.5 px-3 py-1.5 bg-amber-500/10 border border-amber-500/20 rounded-full text-amber-400 text-xs font-bold">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            {stats.pending} pending
          </div>
        )}
      </div>
    </header>
  );
}

// ─── Mobile Topbar ────────────────────────────────────────
// Props: stats, onOpenDrawer
export function MobileTopbar({ stats, onOpenDrawer }) {
  return (
    <header className="px-4 py-3.5 border-b border-white/[0.07] flex items-center justify-between bg-[#080810]/95 backdrop-blur-xl sticky top-0 z-50">
      <div className="flex items-center gap-2.5">
        <div className="w-8 h-8 bg-linear-to-br from-amber-400 to-amber-600 rounded-xl flex items-center justify-center text-sm shadow-md shadow-amber-500/20">
          📋
        </div>
        <span className="font-display text-white font-semibold text-base">
          AppointCo
        </span>
      </div>
      <div className="flex items-center gap-2.5">
        {stats.pending > 0 && (
          <div className="flex items-center gap-1 px-2.5 py-1 bg-amber-500/10 border border-amber-500/20 rounded-full text-amber-400 text-xs font-bold">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
            {stats.pending}
          </div>
        )}
        <button onClick={onOpenDrawer} className="text-zinc-500 p-1">
          {I.menu}
        </button>
      </div>
    </header>
  );
}

// ─── Mobile Bottom Nav ────────────────────────────────────
// Props: tab, setTab, stats
export function BottomNav({ tab, setTab, stats }) {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-[#080810]/95 border-t border-white/[0.07] backdrop-blur-xl z-50 flex">
      {TABS.map((t) => (
        <button
          key={t.id}
          onClick={() => setTab(t.id)}
          className={`flex-1 flex flex-col items-center gap-1 py-3 transition-colors ${tab === t.id ? "text-amber-400" : "text-zinc-600"}`}
        >
          <div className="relative">
            {t.icon}
            {t.id === "appointments" && stats.pending > 0 && (
              <span className="absolute -top-1 -right-1.5 w-2 h-2 bg-amber-400 rounded-full border-2 border-[#080810]" />
            )}
          </div>
          <span
            className={`text-[10px] font-bold ${tab === t.id ? "" : "font-medium"}`}
          >
            {t.label}
          </span>
        </button>
      ))}
    </nav>
  );
}

// ─── Mobile Drawer ────────────────────────────────────────
// Slide-in side menu with account info, stats, and logout.
// Props: appts, onLogout, onClose
export function MobileDrawer({ appts, onLogout, onClose }) {
  return (
    <div className="fixed inset-0 z-150" onClick={onClose}>
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      <div
        className="absolute right-0 top-0 bottom-0 w-72 bg-[#0f1117] border-l border-white/8 p-6 flex flex-col sheet-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-7">
          <span className="font-display text-white text-lg font-semibold">
            Menu
          </span>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-xl bg-white/5 text-zinc-500"
          >
            {I.close}
          </button>
        </div>

        {/* Account info */}
        <div className="py-4 border-y border-white/6 mb-5">
          <p className="text-xs text-zinc-600 uppercase tracking-widest mb-1.5">
            Admin Account
          </p>
          <p className="font-semibold text-zinc-200 text-sm mb-0.5">
            Administrator
          </p>
          <p className="text-xs text-zinc-600">admin@company.com</p>
        </div>

        {/* Stats */}
        <div className="mb-5">
          <p className="text-xs text-zinc-600 uppercase tracking-widest mb-3">
            Appointment Stats
          </p>
          <div className="space-y-2">
            {Object.entries(STATUS).map(([key, val]) => (
              <div
                key={key}
                className="flex items-center justify-between py-2.5 border-b border-white/4"
              >
                <span className="text-sm text-zinc-500">{val.label}</span>
                <span
                  className={`px-2.5 py-0.5 rounded-lg text-xs font-bold ${val.badge}`}
                >
                  {appts.filter((a) => a.status === key).length}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Logout */}
        <div className="mt-auto">
          <button
            onClick={() => {
              onLogout();
              onClose();
            }}
            className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 font-semibold text-sm hover:bg-red-500/20 transition-all"
          >
            {I.logout} Sign Out
          </button>
        </div>
      </div>
    </div>
  );
}
