import { useState } from "react";
import { STATUS } from "../data/appointments";
import { Avatar, Badge } from "./UI";
import I from "../utils/icons";

// ─── Shared select class ──────────────────────────────────
const selCls =
  "bg-white/[0.04] border border-white/[0.08] rounded-xl text-zinc-400 px-3 py-2.5 text-sm outline-none cursor-pointer focus:border-amber-500/30 transition-all";

function TableRowSkeleton() {
  return (
    <div className="grid grid-cols-[1fr_1.6fr_1.2fr_0.9fr_0.9fr_1.8fr] px-5 py-4 items-center border-b border-white/[0.04] animate-pulse">
      <div className="h-3 bg-white/[0.05] rounded w-16" />
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-xl bg-white/[0.05] flex-shrink-0" />
        <div className="space-y-1.5">
          <div className="h-3 bg-white/[0.05] rounded w-24" />
          <div className="h-2 bg-white/[0.04] rounded w-32" />
        </div>
      </div>
      <div className="space-y-1.5">
        <div className="h-3 bg-white/[0.05] rounded w-20" />
        <div className="h-2 bg-white/[0.04] rounded w-12" />
      </div>
      <div className="h-3 bg-white/[0.05] rounded w-12" />
      <div className="h-6 bg-white/[0.05] rounded-lg w-20" />
      <div className="flex gap-1.5">
        {[1, 2, 3].map((n) => (
          <div key={n} className="w-7 h-7 bg-white/[0.04] rounded-lg" />
        ))}
      </div>
    </div>
  );
}

// ─── Card skeleton (mobile) ───────────────────────────────
function CardSkeleton() {
  return (
    <div className="bg-white/[0.03] border border-white/[0.07] rounded-2xl p-4 mb-3 animate-pulse">
      <div className="flex items-start gap-3 mb-3">
        <div className="w-10 h-10 rounded-xl bg-white/[0.05] flex-shrink-0" />
        <div className="flex-1 space-y-2">
          <div className="h-3 bg-white/[0.05] rounded w-32" />
          <div className="h-2 bg-white/[0.04] rounded w-20" />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2">
        {[1, 2, 3, 4].map((n) => (
          <div key={n} className="h-2 bg-white/[0.04] rounded" />
        ))}
      </div>
    </div>
  );
}

export function ApptCard({ a, onAction }) {
  return (
    <div className="bg-white/[0.03] border border-white/[0.07] rounded-2xl p-4 mb-3 animate-fade-in">
      <div className="flex items-start gap-3 mb-3">
        <Avatar name={a.name} />
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-2 mb-1">
            <span className="font-semibold text-zinc-100 text-sm truncate">
              {a.name}
            </span>
            <Badge status={a.status} />
          </div>
          <span className="text-xs text-zinc-600 font-mono">{a.ref}</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2 mb-3">
        {[
          { icon: I.clock, val: `${a.date} · ${a.time}` },
          {
            icon: a.type === "online" ? I.video : I.pin,
            val: a.type === "online" ? "Online" : "Face-to-Face",
          },
          { icon: I.mail, val: a.email },
          { icon: I.phone, val: a.phone },
        ].map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-1.5 text-zinc-500 text-xs overflow-hidden"
          >
            <span className="flex-shrink-0 text-zinc-600">{item.icon}</span>
            <span className="truncate">{item.val}</span>
          </div>
        ))}
      </div>

      {a.notes && (
        <div className="text-xs text-zinc-500 bg-white/[0.02] rounded-lg px-3 py-2 mb-3 border border-white/[0.04]">
          💬 {a.notes}
        </div>
      )}

      <div className="flex gap-2 flex-wrap">
        <button
          onClick={() => onAction(a, "view")}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.05] border border-white/[0.08] text-zinc-400 text-xs font-semibold hover:bg-white/[0.08] transition-all active:scale-95"
        >
          {I.eye} View
        </button>
        {a.status === "pending" && (
          <>
            <button
              onClick={() => onAction(a, "approve")}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold hover:bg-emerald-500/20 transition-all active:scale-95"
            >
              {I.check} Approve
            </button>
            <button
              onClick={() => onAction(a, "reject")}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-semibold hover:bg-red-500/20 transition-all active:scale-95"
            >
              {I.x} Reject
            </button>
          </>
        )}
        {a.status === "approved" && (
          <button
            onClick={() => onAction(a, "complete")}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-semibold hover:bg-violet-500/20 transition-all active:scale-95"
          >
            {I.flag} Complete
          </button>
        )}
        {["pending", "approved"].includes(a.status) && (
          <button
            onClick={() => onAction(a, "cancel")}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-500/10 border border-zinc-500/20 text-zinc-500 text-xs font-semibold hover:bg-zinc-500/20 transition-all active:scale-95"
          >
            {I.trash}
          </button>
        )}
      </div>
    </div>
  );
}

export function AppointmentsDesktop({ appts, loading, error, openModal }) {
  const [fStatus, setFStatus] = useState("all");
  const [fType, setFType] = useState("all");
  const [fDate, setFDate] = useState("");
  const [search, setSearch] = useState("");

  const filtered = appts.filter((a) => {
    if (fStatus !== "all" && a.status !== fStatus) return false;

    // Matches both the alias ("online") and raw DB value ("online"/"face_to_face")
    if (fType !== "all" && a.type !== fType) return false;
    if (fDate && a.date !== fDate) return false;
    if (search) {
      const q = search.toLowerCase();
      if (![a.name, a.ref, a.email].some((v) => v.toLowerCase().includes(q)))
        return false;
    }
    return true;
  });

  const hasFilter = fStatus !== "all" || fType !== "all" || fDate || search;
  const clearFilters = () => {
    setFStatus("all");
    setFType("all");
    setFDate("");
    setSearch("");
  };

  return (
    <div>
      {/* Error banner */}
      {error && (
        <div className="mb-5 px-4 py-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
          ⚠ {error}
        </div>
      )}

      {/* Filters */}
      <div className="flex flex-wrap gap-2.5 mb-5 items-center">
        <div className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-600">
            {I.search}
          </span>
          <input
            className="pl-9 pr-4 py-2.5 bg-white/[0.04] border border-white/[0.08] rounded-xl text-zinc-300 text-sm placeholder-zinc-600 outline-none focus:border-amber-500/30 transition-all w-56"
            placeholder="Search name, email, ref…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Status filter */}
        <select
          className={selCls}
          value={fStatus}
          onChange={(e) => setFStatus(e.target.value)}
        >
          <option value="all">All Status</option>
          {Object.entries(STATUS).map(([k, v]) => (
            <option key={k} value={k}>
              {v.label}
            </option>
          ))}
        </select>

        {/* Type filter — values match consultation_type DB values */}
        <select
          className={selCls}
          value={fType}
          onChange={(e) => setFType(e.target.value)}
        >
          <option value="all">All Types</option>
          <option value="online">Online</option>
          <option value="face_to_face">Face-to-Face</option>
        </select>

        {/* Date filter */}
        <input
          type="date"
          className={selCls}
          value={fDate}
          onChange={(e) => setFDate(e.target.value)}
        />

        {hasFilter && (
          <button
            onClick={clearFilters}
            className="px-3 py-2 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-bold hover:bg-red-500/20 transition-all"
          >
            Clear ×
          </button>
        )}

        <span className="ml-auto text-xs text-zinc-600 font-medium">
          {loading
            ? "Loading…"
            : `${filtered.length} record${filtered.length !== 1 ? "s" : ""}`}
        </span>
      </div>

      {/* Table */}
      <div className="bg-white/[0.02] border border-white/[0.06] rounded-2xl overflow-hidden">
        {/* Header */}
        <div className="grid grid-cols-[1fr_1.6fr_1.2fr_0.9fr_0.9fr_1.8fr] px-5 py-3 bg-white/[0.02] border-b border-white/[0.06]">
          {["REF", "NAME", "DATE & TIME", "TYPE", "STATUS", "ACTIONS"].map(
            (h) => (
              <span
                key={h}
                className="text-[10px] font-bold text-zinc-600 uppercase tracking-widest"
              >
                {h}
              </span>
            ),
          )}
        </div>

        {/* Skeleton rows */}
        {loading && [1, 2, 3, 4, 5].map((n) => <TableRowSkeleton key={n} />)}

        {/* Empty state */}
        {!loading && filtered.length === 0 && (
          <div className="text-center py-16 text-zinc-600">
            {appts.length === 0
              ? "No appointments yet"
              : "No appointments match your filters"}
          </div>
        )}

        {/* Data rows */}
        {!loading &&
          filtered.map((a, i) => (
            <div
              key={a.id}
              className={`grid grid-cols-[1fr_1.6fr_1.2fr_0.9fr_0.9fr_1.8fr] px-5 py-4 items-center border-b border-white/[0.04] hover:bg-white/[0.02] transition-colors ${i === filtered.length - 1 ? "border-b-0" : ""}`}
            >
              {/* REF */}
              <span className="text-xs text-zinc-600 font-mono">{a.ref}</span>

              {/* NAME */}
              <div className="flex items-center gap-3">
                <Avatar name={a.name} size="sm" />
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-zinc-200 truncate">
                    {a.name}
                  </p>
                  <p className="text-xs text-zinc-600 truncate">{a.email}</p>
                </div>
              </div>

              {/* DATE & TIME */}
              <div>
                <p className="text-xs text-zinc-400">{a.date}</p>
                <p className="text-xs text-zinc-600 flex items-center gap-1 mt-0.5">
                  {I.clock} {a.time}
                </p>
              </div>

              {/* TYPE */}
              <div
                className={`flex items-center gap-1 text-xs font-medium ${a.type === "online" ? "text-violet-400" : "text-emerald-400"}`}
              >
                {a.type === "online" ? I.video : I.pin}
                {a.type === "online" ? "Online" : "F2F"}
              </div>

              {/* STATUS */}
              <div>
                <Badge status={a.status} />
              </div>

              {/* ACTIONS */}
              <div className="flex gap-1.5 flex-wrap">
                <button
                  onClick={() => openModal(a, "view")}
                  className="p-1.5 rounded-lg bg-white/[0.05] border border-white/[0.08] text-zinc-500 hover:text-zinc-300 transition-all"
                  title="View"
                >
                  {I.eye}
                </button>
                {a.status === "pending" && (
                  <>
                    <button
                      onClick={() => openModal(a, "approve")}
                      className="p-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 hover:bg-emerald-500/20 transition-all"
                      title="Approve"
                    >
                      {I.check}
                    </button>
                    <button
                      onClick={() => openModal(a, "reject")}
                      className="p-1.5 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 hover:bg-red-500/20 transition-all"
                      title="Reject"
                    >
                      {I.x}
                    </button>
                  </>
                )}
                {a.status === "approved" && (
                  <button
                    onClick={() => openModal(a, "complete")}
                    className="p-1.5 rounded-lg bg-violet-500/10 border border-violet-500/20 text-violet-400 hover:bg-violet-500/20 transition-all"
                    title="Complete"
                  >
                    {I.flag}
                  </button>
                )}
                {["pending", "approved"].includes(a.status) && (
                  <button
                    onClick={() => openModal(a, "cancel")}
                    className="p-1.5 rounded-lg bg-zinc-500/10 border border-zinc-500/20 text-zinc-500 hover:bg-zinc-500/20 transition-all"
                    title="Cancel"
                  >
                    {I.trash}
                  </button>
                )}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export function AppointmentsMobile({ appts, loading, error, openModal }) {
  const [fStatus, setFStatus] = useState("all");
  const [fType, setFType] = useState("all");
  const [fDate, setFDate] = useState("");
  const [search, setSearch] = useState("");
  const [showF, setShowF] = useState(false);

  const filtered = appts.filter((a) => {
    if (fStatus !== "all" && a.status !== fStatus) return false;
    if (fType !== "all" && a.type !== fType) return false;
    if (fDate && a.date !== fDate) return false;
    if (search) {
      const q = search.toLowerCase();
      if (![a.name, a.ref, a.email].some((v) => v.toLowerCase().includes(q)))
        return false;
    }
    return true;
  });

  const hasFilter = fStatus !== "all" || fType !== "all" || fDate || search;
  const clearFilters = () => {
    setFStatus("all");
    setFType("all");
    setFDate("");
    setSearch("");
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-display text-2xl text-white font-medium">
          Appointments
        </h2>
        <button
          onClick={() => setShowF((p) => !p)}
          className={`flex items-center gap-1.5 px-3 py-2 rounded-xl border text-xs font-bold transition-all
          ${hasFilter ? "bg-amber-500/10 border-amber-500/20 text-amber-400" : "bg-white/[0.05] border-white/[0.08] text-zinc-500"}`}
        >
          {I.filter} {hasFilter ? "● " : ""}Filter
        </button>
      </div>

      {/* Error banner */}
      {error && (
        <div className="mb-3 px-4 py-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
          ⚠ {error}
        </div>
      )}

      {/* Search */}
      <div className="relative mb-3">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-600">
          {I.search}
        </span>
        <input
          className="w-full pl-9 pr-4 py-3 bg-white/[0.04] border border-white/[0.08] rounded-xl text-zinc-300 text-sm placeholder-zinc-600 outline-none focus:border-amber-500/30 transition-all"
          placeholder="Search name, email, ref…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Filter panel */}
      {showF && (
        <div className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-4 mb-4 animate-slide-up space-y-3">
          <div className="grid grid-cols-2 gap-2.5">
            <select
              className={selCls}
              value={fStatus}
              onChange={(e) => setFStatus(e.target.value)}
            >
              <option value="all">All Status</option>
              {Object.entries(STATUS).map(([k, v]) => (
                <option key={k} value={k}>
                  {v.label}
                </option>
              ))}
            </select>
            <select
              className={selCls}
              value={fType}
              onChange={(e) => setFType(e.target.value)}
            >
              <option value="all">All Types</option>
              <option value="online">Online</option>
              <option value="face_to_face">Face-to-Face</option>
            </select>
          </div>
          <input
            type="date"
            className={`${selCls} w-full`}
            value={fDate}
            onChange={(e) => setFDate(e.target.value)}
          />
          {hasFilter && (
            <button
              onClick={clearFilters}
              className="w-full py-2 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-bold"
            >
              Clear Filters
            </button>
          )}
        </div>
      )}

      <p className="text-xs text-zinc-600 mb-3 font-medium">
        {loading
          ? "Loading…"
          : `${filtered.length} result${filtered.length !== 1 ? "s" : ""}`}
      </p>

      {/* Skeleton cards */}
      {loading && [1, 2, 3].map((n) => <CardSkeleton key={n} />)}

      {/* Empty state */}
      {!loading && filtered.length === 0 && (
        <p className="text-center py-12 text-zinc-600 text-sm">
          {appts.length === 0
            ? "No appointments yet"
            : "No appointments match your filters"}
        </p>
      )}

      {/* Cards */}
      {!loading &&
        filtered.map((a) => <ApptCard key={a.id} a={a} onAction={openModal} />)}
    </div>
  );
}
