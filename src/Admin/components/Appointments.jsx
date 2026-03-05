import { useState } from "react";
import { STATUS } from "../data/appointments";
import { Avatar, Badge } from "./UI";
import I from "../utils/icons";

// ─── Shared select class ──────────────────────────────────
const selCls =
  "bg-white/[0.04] border border-white/[0.08] rounded-xl text-zinc-400 px-3 py-2.5 text-sm outline-none cursor-pointer focus:border-amber-500/30 transition-all";

// ─── ApptCard (Mobile) ────────────────────────────────────
// Renders a single appointment as a card for mobile screens.
// Props: a (appointment object), onAction fn(appt, type)
export function ApptCard({ a, onAction }) {
  return (
    <div className="bg-white/3 border border-white/[0.07] rounded-2xl p-4 mb-3 animate-fade-in">
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
          { icon: I.clock, val: `${a.date} ${a.time}` },
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
            <span className="shrink-0 text-zinc-600">{item.icon}</span>
            <span className="truncate">{item.val}</span>
          </div>
        ))}
      </div>

      {a.notes && (
        <div className="text-xs text-zinc-500 bg-white/2 rounded-lg px-3 py-2 mb-3 border border-white/4">
          💬 {a.notes}
        </div>
      )}

      <div className="flex gap-2 flex-wrap">
        <button
          onClick={() => onAction(a, "view")}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/8 text-zinc-400 text-xs font-semibold hover:bg-white/8 transition-all active:scale-95"
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

// ─── Appointments (Desktop) ───────────────────────────────
// Full appointments tab with search, filters, and data table.
// Props: appts (array), openModal fn(appt, type)
export function AppointmentsDesktop({ appts, openModal }) {
  const [fStatus, setFStatus] = useState("all");
  const [fType, setFType] = useState("all");
  const [fDate, setFDate] = useState("");
  const [search, setSearch] = useState("");

  const filtered = appts.filter((a) => {
    if (fStatus !== "all" && a.status !== fStatus) return false;
    if (fType !== "all" && a.type !== fType) return false;
    if (fDate && a.date !== fDate) return false;
    if (
      search &&
      ![a.name, a.ref, a.email].some((v) =>
        v.toLowerCase().includes(search.toLowerCase()),
      )
    )
      return false;
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
      {/* Filters */}
      <div className="flex flex-wrap gap-2.5 mb-5 items-center">
        <div className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-600">
            {I.search}
          </span>
          <input
            className="pl-9 pr-4 py-2.5 bg-white/4 border border-white/8 rounded-xl text-zinc-300 text-sm placeholder-zinc-600 outline-none focus:border-amber-500/30 transition-all w-56"
            placeholder="Search…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {[
          {
            val: fStatus,
            set: setFStatus,
            opts: [
              ["all", "All Status"],
              ...Object.entries(STATUS).map(([k, v]) => [k, v.label]),
            ],
          },
          {
            val: fType,
            set: setFType,
            opts: [
              ["all", "All Types"],
              ["online", "Online"],
              ["face_to_face", "Face-to-Face"],
            ],
          },
        ].map((f, i) => (
          <select
            key={i}
            className={selCls}
            value={f.val}
            onChange={(e) => f.set(e.target.value)}
          >
            {f.opts.map(([v, l]) => (
              <option key={v} value={v}>
                {l}
              </option>
            ))}
          </select>
        ))}

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
          {filtered.length} record{filtered.length !== 1 ? "s" : ""}
        </span>
      </div>

      {/* Table */}
      <div className="bg-white/2 border border-white/6 rounded-2xl overflow-hidden">
        {/* Table header */}
        <div className="grid grid-cols-[1fr_1.6fr_1.2fr_0.9fr_0.9fr_1.8fr] px-5 py-3 bg-white/2 border-b border-white/6">
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

        {filtered.length === 0 && (
          <div className="text-center py-16 text-zinc-600">
            No appointments found
          </div>
        )}

        {filtered.map((a, i) => (
          <div
            key={a.id}
            className={`grid grid-cols-[1fr_1.6fr_1.2fr_0.9fr_0.9fr_1.8fr] px-5 py-4 items-center border-b border-white/4 hover:bg-white/2 transition-colors ${i === filtered.length - 1 ? "border-b-0" : ""}`}
          >
            <span className="text-xs text-zinc-600 font-mono">{a.ref}</span>

            <div className="flex items-center gap-3">
              <Avatar name={a.name} size="sm" />
              <div className="min-w-0">
                <p className="text-sm font-semibold text-zinc-200 truncate">
                  {a.name}
                </p>
                <p className="text-xs text-zinc-600 truncate">{a.email}</p>
              </div>
            </div>

            <div>
              <p className="text-xs text-zinc-400">{a.date}</p>
              <p className="text-xs text-zinc-600 flex items-center gap-1 mt-0.5">
                {I.clock} {a.time}
              </p>
            </div>

            <div
              className={`flex items-center gap-1 text-xs font-medium ${a.type === "online" ? "text-violet-400" : "text-emerald-400"}`}
            >
              {a.type === "online" ? I.video : I.pin}
              {a.type === "online" ? "Online" : "F2F"}
            </div>

            <div>
              <Badge status={a.status} />
            </div>

            <div className="flex gap-1.5 flex-wrap">
              <button
                onClick={() => openModal(a, "view")}
                className="p-1.5 rounded-lg bg-white/5 border border-white/8 text-zinc-500 hover:text-zinc-300 transition-all"
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

// ─── Appointments (Mobile) ────────────────────────────────
// Mobile view: search bar + filter panel + card list.
// Props: appts (array), openModal fn(appt, type)
export function AppointmentsMobile({ appts, openModal }) {
  const [fStatus, setFStatus] = useState("all");
  const [fType, setFType] = useState("all");
  const [fDate, setFDate] = useState("");
  const [search, setSearch] = useState("");
  const [showF, setShowF] = useState(false);

  const filtered = appts.filter((a) => {
    if (fStatus !== "all" && a.status !== fStatus) return false;
    if (fType !== "all" && a.type !== fType) return false;
    if (fDate && a.date !== fDate) return false;
    if (
      search &&
      ![a.name, a.ref, a.email].some((v) =>
        v.toLowerCase().includes(search.toLowerCase()),
      )
    )
      return false;
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
          ${hasFilter ? "bg-amber-500/10 border-amber-500/20 text-amber-400" : "bg-white/5 border-white/8 text-zinc-500"}`}
        >
          {I.filter} {hasFilter ? "● " : ""}Filter
        </button>
      </div>

      {/* Search */}
      <div className="relative mb-3">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-600">
          {I.search}
        </span>
        <input
          className="w-full pl-9 pr-4 py-3 bg-white/4 border border-white/8 rounded-xl text-zinc-300 text-sm placeholder-zinc-600 outline-none focus:border-amber-500/30 transition-all"
          placeholder="Search name, email, ref…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Filter panel */}
      {showF && (
        <div className="bg-white/2 border border-white/6 rounded-2xl p-4 mb-4 animate-slide-up space-y-3">
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
        {filtered.length} result{filtered.length !== 1 ? "s" : ""}
      </p>

      {filtered.length === 0 && (
        <p className="text-center py-12 text-zinc-600 text-sm">
          No appointments found
        </p>
      )}

      {filtered.map((a) => (
        <ApptCard key={a.id} a={a} onAction={openModal} />
      ))}
    </div>
  );
}
