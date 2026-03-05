// App.jsx
import { useState, useEffect, useCallback } from "react";

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

import {
  getAllAppointments,
  approveAppointment,
  rejectAppointment,
  completeAppointment,
  cancelAppointment,
} from "./services/appointmentService";

// ─── App ──────────────────────────────────────────────────
export default function App() {
  const isMobile = useIsMobile();

  // ── Auth ───────────────────────────────────────────────
  const [loggedIn, setLoggedIn] = useState(false);

  // ── Appointments (sourced from API) ────────────────────
  const [appts, setAppts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // ── Navigation ─────────────────────────────────────────
  const [tab, setTab] = useState("dashboard");
  const [sidebar, setSidebar] = useState(false); // desktop sidebar expand
  const [drawer, setDrawer] = useState(false); // mobile side drawer

  // ── Modal ──────────────────────────────────────────────
  const [sel, setSel] = useState(null);
  const [mType, setMType] = useState(null);
  const [link, setLink] = useState("");
  const [reason, setReason] = useState("");
  // ── Toast ──────────────────────────────────────────────
  const [toast, setToast] = useState(null);
  const flash = (msg, type = "success") => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 3000);
  };

  // ── Fetch all appointments ─────────────────────────────
  const fetchAppointments = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getAllAppointments();
      setAppts(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (loggedIn) fetchAppointments();
  }, [loggedIn, fetchAppointments]);

  // ── Derived stats ──────────────────────────────────────
  const today = new Date().toISOString().split("T")[0];
  const stats = {
    total: appts.length,
    pending: appts.filter((a) => a.status === "pending").length,
    approved: appts.filter((a) => a.status === "approved").length,
    completed: appts.filter((a) => a.status === "completed").length,
    today: appts.filter((a) => a.date === today).length,
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

  // ── Optimistic update ──────────────────────────────────
  const withOptimistic = async (newStatus, apiFn, successMsg) => {
    const prev = appts;
    setAppts((p) =>
      p.map((a) => (a.id === sel.id ? { ...a, status: newStatus } : a)),
    );
    closeModal();
    try {
      await apiFn();
      flash(successMsg);
      fetchAppointments(); // sync with server
    } catch (err) {
      setAppts(prev); // revert on failure
      flash(err.message, "warning");
    }
  };

  // ── Actions ────────────────────────────────────────────
  const approve = () => {
    if (sel.type === "online" && !link.trim()) return;
    withOptimistic(
      "approved",
      () => approveAppointment(sel.id, link),
      "Appointment approved!",
    );
  };
  const reject = () =>
    withOptimistic(
      "rejected",
      () => rejectAppointment(sel.id, reason),
      "Appointment rejected.",
    );
  const complete = () =>
    withOptimistic(
      "completed",
      () => completeAppointment(sel.id),
      "Marked as completed!",
    );
  const cancel = () =>
    withOptimistic(
      "cancelled",
      () => cancelAppointment(sel.id, reason),
      "Appointment cancelled.",
    );

  // ── Auth gate ──────────────────────────────────────────
  if (!loggedIn) return <Login onLogin={() => setLoggedIn(true)} />;

  //  DESKTOP LAYOUT
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
                  loading={loading}
                  error={error}
                  onViewAll={() => setTab("appointments")}
                  openModal={openModal}
                />
              )}
              {tab === "appointments" && (
                <AppointmentsDesktop
                  appts={appts}
                  loading={loading}
                  error={error}
                  openModal={openModal}
                />
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

  //  MOBILE LAYOUT
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

              {/* Mobile stat cards */}
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
                    className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-4"
                  >
                    <div className="text-xl mb-3">{s.icon}</div>
                    {loading ? (
                      <div className="h-7 w-8 bg-white/[0.06] rounded animate-pulse mb-1" />
                    ) : (
                      <p className={`text-2xl font-bold ${s.color} mb-1`}>
                        {s.val}
                      </p>
                    )}
                    <p className="text-xs text-zinc-600 font-bold uppercase tracking-widest">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>

              {/* Needs Attention header */}
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

              {/* Pending cards */}
              <AppointmentsMobile
                appts={pendingAppts}
                loading={loading}
                error={error}
                openModal={openModal}
              />
            </>
          )}

          {tab === "appointments" && (
            <AppointmentsMobile
              appts={appts}
              loading={loading}
              error={error}
              openModal={openModal}
            />
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
