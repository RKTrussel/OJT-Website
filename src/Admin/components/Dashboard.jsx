import { Avatar, Badge } from "./UI";
import I from "../utils/icons";

function PendingRowSkeleton() {
  return (
    <div className="bg-white/[0.02] border border-white/[0.06] rounded-2xl px-5 py-4 flex items-center gap-4 animate-pulse">
      <div className="w-10 h-10 rounded-xl bg-white/[0.05] flex-shrink-0" />
      <div className="flex-1 space-y-2">
        <div className="h-3 bg-white/[0.05] rounded w-32" />
        <div className="h-2 bg-white/[0.04] rounded w-48" />
      </div>
      <div className="flex gap-2">
        <div className="h-7 w-20 bg-white/[0.04] rounded-lg" />
        <div className="h-7 w-16 bg-white/[0.04] rounded-lg" />
      </div>
    </div>
  );
}

export default function Dashboard({
  stats,
  pendingAppts,
  loading,
  error,
  onViewAll,
  openModal,
}) {
  const statCards = [
    {
      label: "Total",
      val: stats.total,
      color: "text-violet-400",
      bg: "bg-violet-500/10",
      icon: "📊",
    },
    {
      label: "Pending",
      val: stats.pending,
      color: "text-amber-400",
      bg: "bg-amber-500/10",
      icon: "⏳",
    },
    {
      label: "Approved",
      val: stats.approved,
      color: "text-emerald-400",
      bg: "bg-emerald-500/10",
      icon: "✅",
    },
    {
      label: "Completed",
      val: stats.completed,
      color: "text-purple-400",
      bg: "bg-purple-500/10",
      icon: "🎯",
    },
    {
      label: "Today",
      val: stats.today,
      color: "text-pink-400",
      bg: "bg-pink-500/10",
      icon: "📅",
    },
  ];

  return (
    <div>
      {/* Error banner */}
      {error && (
        <div className="mb-6 px-4 py-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
          ⚠ {error}
        </div>
      )}

      {/* Stat Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
        {statCards.map((s) => (
          <div
            key={s.label}
            className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-5 hover:border-white/10 transition-colors"
          >
            <div
              className={`w-10 h-10 ${s.bg} rounded-xl flex items-center justify-center text-lg mb-4`}
            >
              {s.icon}
            </div>
            {/* Show skeleton number while loading */}
            {loading ? (
              <div className="h-8 w-8 bg-white/[0.06] rounded animate-pulse mb-1" />
            ) : (
              <p className={`text-3xl font-bold ${s.color} mb-1`}>{s.val}</p>
            )}
            <p className="text-xs text-zinc-600 font-bold uppercase tracking-widest">
              {s.label}
            </p>
          </div>
        ))}
      </div>

      {/* Needs Attention */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-display text-lg text-white font-medium">
          Needs Attention
        </h2>
        <button
          onClick={onViewAll}
          className="text-xs text-zinc-500 hover:text-amber-400 font-semibold transition-colors flex items-center gap-1"
        >
          View all {I.chevron}
        </button>
      </div>

      {/* Pending list skeletons */}
      {loading && (
        <div className="space-y-3">
          {[1, 2, 3].map((n) => (
            <PendingRowSkeleton key={n} />
          ))}
        </div>
      )}

      {/* Empty state */}
      {!loading && !error && pendingAppts.length === 0 && (
        <div className="text-center py-12 text-zinc-600">
          ✨ No pending appointments
        </div>
      )}

      {/* Pending rows */}
      {!loading && (
        <div className="space-y-3">
          {pendingAppts.map((a) => (
            <div
              key={a.id}
              className="bg-white/[0.02] border border-white/[0.06] rounded-2xl px-5 py-4 flex items-center gap-4 hover:border-white/10 transition-colors"
            >
              <Avatar name={a.name} />
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-zinc-100 text-sm mb-1">
                  {a.name}
                </p>
                <div className="flex items-center gap-4 text-xs text-zinc-500">
                  <span className="flex items-center gap-1">
                    {I.clock} {a.date} · {a.time}
                  </span>
                  <span className="flex items-center gap-1">
                    {a.type === "online" ? I.video : I.pin}
                    {a.type === "online" ? "Online" : "Face-to-Face"}
                  </span>
                </div>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => openModal(a, "approve")}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold hover:bg-emerald-500/20 transition-all active:scale-95"
                >
                  {I.check} Approve
                </button>
                <button
                  onClick={() => openModal(a, "reject")}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-bold hover:bg-red-500/20 transition-all active:scale-95"
                >
                  {I.x} Reject
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
