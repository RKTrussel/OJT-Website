import { useState } from "react";

// Data
import { APPOINTMENTS } from "./data/appointments";

// Hooks
import { useIsMobile } from "./hooks/useIsMobile";

// Shared UI
import { FontLoader, Toast } from "./components/UI";

// Feature components
import Login from "./components/Login";
import Modal from "./components/Modal";
import Dashboard from "./components/Dashboard";
import {
  AppointmentsDesktop,
  AppointmentsMobile,
} from "./components/Appointments";
import {
  Sidebar,
  Topbar,
  MobileTopbar,
  BottomNav,
  MobileDrawer,
} from "./components/Navigation";

// ─── App ─────────────────────────────────────────────────
export default function App() {
  const isMobile = useIsMobile();

  // Auth
  const [loggedIn, setLoggedIn] = useState(false);

  // Appointments state
  const [appts, setAppts] = useState(APPOINTMENTS);

  // Navigation
  const [tab, setTab] = useState("dashboard");
  const [sidebar, setSidebar] = useState(false); // desktop sidebar expand
  const [drawer, setDrawer] = useState(false); // mobile drawer

  // Modal state
  const [sel, setSel] = useState(null);
  const [mType, setMType] = useState(null);
  const [link, setLink] = useState("");
  const [reason, setReason] = useState("");

  // Toast
  const [toast, setToast] = useState(null);
  const flash = (msg, type = "success") => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 3000);
  };

  // ── Derived stats ──────────────────────────────────────
  const stats = {
    total: appts.length,
    pending: appts.filter((a) => a.status === "pending").length,
    approved: appts.filter((a) => a.status === "approved").length,
    completed: appts.filter((a) => a.status === "completed").length,
    today: appts.filter((a) => a.date === "2025-03-05").length,
  };
  const pendingAppts = appts.filter((a) => a.status === "pending");

  // ── Modal helpers ──────────────────────────────────────
  const openModal = (a, t) => {
    setSel(a);
    setMType(t);
    setLink(a.link || "");
    setReason("");
  };
  const closeModal = () => {
    setSel(null);
    setMType(null);
  };

  // ── Actions ────────────────────────────────────────────
  const approve = () => {
    if (sel.type === "online" && !link.trim()) return;
    setAppts((p) =>
      p.map((a) => (a.id === sel.id ? { ...a, status: "approved", link } : a)),
    );
    flash("Appointment approved!");
    closeModal();
  };
  const reject = () => {
    setAppts((p) =>
      p.map((a) =>
        a.id === sel.id ? { ...a, status: "rejected", reason } : a,
      ),
    );
    flash("Appointment rejected.", "warning");
    closeModal();
  };
  const complete = () => {
    setAppts((p) =>
      p.map((a) => (a.id === sel.id ? { ...a, status: "completed" } : a)),
    );
    flash("Marked as completed!");
    closeModal();
  };
  const cancel = () => {
    setAppts((p) =>
      p.map((a) =>
        a.id === sel.id ? { ...a, status: "cancelled", reason } : a,
      ),
    );
    flash("Appointment cancelled.", "warning");
    closeModal();
  };

  // ── Auth gate ──────────────────────────────────────────
  if (!loggedIn) return <Login onLogin={() => setLoggedIn(true)} />;

  // ══════════════════════════════════════════════════════
  //  DESKTOP LAYOUT
  // ══════════════════════════════════════════════════════
  if (!isMobile) {
    return (
      <div className="min-h-screen bg-[#080810] text-zinc-200">
        <FontLoader />
        <div className="flex min-h-screen">
          <Sidebar
            tab={tab}
            setTab={setTab}
            sidebar={sidebar}
            setSidebar={setSidebar}
            stats={stats}
            onLogout={() => setLoggedIn(false)}
          />
          <div className="flex-1 flex flex-col overflow-hidden">
            <Topbar
              tab={tab}
              setSidebar={setSidebar}
              stats={stats}
              toast={toast}
            />
            <main className="flex-1 overflow-y-auto p-7">
              {tab === "dashboard" && (
                <Dashboard
                  stats={stats}
                  pendingAppts={pendingAppts}
                  onViewAll={() => setTab("appointments")}
                  openModal={openModal}
                />
              )}
              {tab === "appointments" && (
                <AppointmentsDesktop appts={appts} openModal={openModal} />
              )}
            </main>
          </div>
        </div>

        <Modal
          appt={sel}
          type={mType}
          link={link}
          setLink={setLink}
          reason={reason}
          setReason={setReason}
          onClose={closeModal}
          onApprove={approve}
          onReject={reject}
          onComplete={complete}
          onCancel={cancel}
        />
        <Toast toast={toast} isMobile={false} />
      </div>
    );
  }

  // ══════════════════════════════════════════════════════
  //  MOBILE LAYOUT
  // ══════════════════════════════════════════════════════
  return (
    <div className="min-h-screen bg-[#080810] text-zinc-200">
      <FontLoader />
      <div className="flex flex-col min-h-screen">
        <MobileTopbar stats={stats} onOpenDrawer={() => setDrawer(true)} />

        <main className="flex-1 overflow-y-auto px-4 pt-5 pb-24">
          {tab === "dashboard" && (
            <>
              <h2 className="font-display text-2xl text-white font-medium mb-5">
                Overview
              </h2>
              {/* Mobile stat cards (4-up grid) */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                {[
                  {
                    label: "Total",
                    val: stats.total,
                    color: "text-violet-400",
                    icon: "📊",
                  },
                  {
                    label: "Pending",
                    val: stats.pending,
                    color: "text-amber-400",
                    icon: "⏳",
                  },
                  {
                    label: "Approved",
                    val: stats.approved,
                    color: "text-emerald-400",
                    icon: "✅",
                  },
                  {
                    label: "Completed",
                    val: stats.completed,
                    color: "text-purple-400",
                    icon: "🎯",
                  },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="bg-white/3 border border-white/6 rounded-2xl p-4"
                  >
                    <div className="text-xl mb-3">{s.icon}</div>
                    <p className={`text-2xl font-bold ${s.color} mb-1`}>
                      {s.val}
                    </p>
                    <p className="text-xs text-zinc-600 font-bold uppercase tracking-widest">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between mb-4">
                <h3 className="font-display text-lg text-white font-medium">
                  Needs Attention
                </h3>
                <button
                  onClick={() => setTab("appointments")}
                  className="text-xs text-zinc-500 hover:text-amber-400 transition-colors font-semibold"
                >
                  All →
                </button>
              </div>

              {pendingAppts.length === 0 && (
                <p className="text-center py-10 text-zinc-600 text-sm">
                  ✨ No pending appointments
                </p>
              )}
              {/* Reuse mobile Appointments cards for pending items */}
              <AppointmentsMobile appts={pendingAppts} openModal={openModal} />
            </>
          )}

          {tab === "appointments" && (
            <AppointmentsMobile appts={appts} openModal={openModal} />
          )}
        </main>

        <BottomNav tab={tab} setTab={setTab} stats={stats} />

        {drawer && (
          <MobileDrawer
            appts={appts}
            onLogout={() => setLoggedIn(false)}
            onClose={() => setDrawer(false)}
          />
        )}
      </div>

      <Modal
        appt={sel}
        type={mType}
        link={link}
        setLink={setLink}
        reason={reason}
        setReason={setReason}
        onClose={closeModal}
        onApprove={approve}
        onReject={reject}
        onComplete={complete}
        onCancel={cancel}
      />
      <Toast toast={toast} isMobile={true} />
    </div>
  );
}
