import { useIsMobile } from "../hooks/useIsMobile";
import { Avatar, Badge } from "./UI";
import I from "../utils/icons";

export default function Modal({
  appt,
  type,
  link,
  setLink,
  reason,
  setReason,
  onClose,
  onApprove,
  onReject,
  onComplete,
  onCancel,
}) {
  const isMobile = useIsMobile();
  if (!appt) return null;

  const inputCls =
    "w-full px-4 py-3 bg-white/[0.04] border border-white/[0.08] rounded-xl text-white text-sm placeholder-zinc-600 outline-none focus:border-amber-500/40 focus:bg-white/[0.06] transition-all";
  const labelCls =
    "block text-xs font-bold text-zinc-500 uppercase tracking-widest mb-2";

  const titles = {
    view: "Appointment Details",
    approve: "Approve Appointment",
    reject: "Reject Appointment",
    cancel: "Cancel Appointment",
    complete: "Mark as Completed",
  };

  const boxClass = isMobile
    ? "fixed bottom-0 left-0 right-0 bg-[#0f1117] border border-white/10 rounded-t-3xl p-6 max-h-[90vh] overflow-y-auto sheet-up z-[300]"
    : "bg-[#0f1117] border border-white/10 rounded-2xl w-[500px] max-w-[94vw] max-h-[88vh] overflow-y-auto p-8 z-[300] animate-slide-up";

  return (
    <div
      className={`fixed inset-0 bg-black/70 backdrop-blur-sm flex ${isMobile ? "items-end" : "items-center"} justify-center z-200`}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className={boxClass}>
        {/* Drag handle (mobile only) */}
        {isMobile && (
          <div className="w-10 h-1 bg-white/15 rounded-full mx-auto mb-6" />
        )}

        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-display text-xl text-white font-semibold">
            {titles[type]}
          </h2>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-xl bg-white/5 hover:bg-white/10 text-zinc-400 transition-all"
          >
            {I.close}
          </button>
        </div>

        {/* ── VIEW ── */}
        {type === "view" && (
          <>
            <div className="flex flex-col items-center mb-6 text-center">
              <Avatar name={appt.name} size="lg" />
              <h3 className="font-semibold text-zinc-100 text-lg mt-3 mb-1">
                {appt.name}
              </h3>
              <p className="text-zinc-600 text-xs font-mono mb-3">{appt.ref}</p>
              <Badge status={appt.status} />
            </div>
            <div className="space-y-0 divide-y divide-white/5">
              {[
                { label: "Email", val: appt.email },
                { label: "Phone", val: appt.phone },
                { label: "Date", val: appt.date },
                { label: "Time", val: appt.time },
                {
                  label: "Type",
                  val:
                    appt.type === "online"
                      ? "Online Consultation"
                      : "Face-to-Face",
                },
                ...(appt.link
                  ? [{ label: "Meeting Link", val: appt.link }]
                  : []),
                ...(appt.notes ? [{ label: "Notes", val: appt.notes }] : []),
                ...(appt.reason ? [{ label: "Reason", val: appt.reason }] : []),
              ].map(({ label, val }) => (
                <div key={label} className="py-3">
                  <p className="text-xs text-zinc-600 font-bold uppercase tracking-widest mb-1">
                    {label}
                  </p>
                  <p className="text-sm text-zinc-200 break-all">{val}</p>
                </div>
              ))}
            </div>
            <button
              onClick={onClose}
              className="w-full mt-6 py-3 rounded-xl bg-white/5 border border-white/8 text-zinc-400 font-semibold text-sm hover:bg-white/8 transition-all"
            >
              Close
            </button>
          </>
        )}

        {/* ── APPROVE ── */}
        {type === "approve" && (
          <>
            <div className="bg-emerald-500/[0.07] border border-emerald-500/20 rounded-xl p-4 mb-5">
              <p className="font-semibold text-zinc-200 text-sm">{appt.name}</p>
              <p className="text-zinc-500 text-xs mt-1">
                {appt.date} at {appt.time} ·{" "}
                {appt.type === "online" ? "Online" : "Face-to-Face"}
              </p>
            </div>
            {appt.type === "online" && (
              <div className="mb-5">
                <label className={labelCls}>
                  Meeting Link{" "}
                  <span className="text-red-400 normal-case tracking-normal font-normal">
                    *required for online
                  </span>
                </label>
                <input
                  className={inputCls}
                  placeholder="https://meet.google.com/…"
                  value={link}
                  onChange={(e) => setLink(e.target.value)}
                />
              </div>
            )}
            <div className="flex gap-3">
              <button
                onClick={onClose}
                className="flex-1 py-3 rounded-xl bg-white/5 border border-white/8 text-zinc-400 font-semibold text-sm transition-all hover:bg-white/8"
              >
                Cancel
              </button>
              <button
                onClick={onApprove}
                className="flex-2 py-3 rounded-xl bg-linear-to-r from-emerald-500 to-emerald-600 text-white font-bold text-sm hover:from-emerald-400 hover:to-emerald-500 transition-all shadow-lg shadow-emerald-500/20 active:scale-[.99]"
              >
                ✓ Approve
              </button>
            </div>
          </>
        )}

        {/* ── REJECT / CANCEL ── */}
        {(type === "reject" || type === "cancel") && (
          <>
            <div className="bg-red-500/[0.07] border border-red-500/20 rounded-xl p-4 mb-5">
              <p className="font-semibold text-zinc-200 text-sm">{appt.name}</p>
              <p className="text-zinc-500 text-xs mt-1">
                {appt.date} at {appt.time}
              </p>
            </div>
            <div className="mb-5">
              <label className={labelCls}>
                Reason{" "}
                <span className="text-zinc-600 normal-case tracking-normal font-normal">
                  (optional)
                </span>
              </label>
              <textarea
                className={`${inputCls} resize-none min-h-22.5`}
                placeholder="Enter reason…"
                value={reason}
                onChange={(e) => setReason(e.target.value)}
              />
            </div>
            <div className="flex gap-3">
              <button
                onClick={onClose}
                className="flex-1 py-3 rounded-xl bg-white/5 border border-white/8 text-zinc-400 font-semibold text-sm transition-all hover:bg-white/8"
              >
                Back
              </button>
              <button
                onClick={type === "reject" ? onReject : onCancel}
                className="flex-2 py-3 rounded-xl bg-red-500/15 border border-red-500/30 text-red-400 font-bold text-sm hover:bg-red-500/25 transition-all active:scale-[.99]"
              >
                {type === "reject" ? "Reject" : "Cancel Appointment"}
              </button>
            </div>
          </>
        )}

        {/* ── COMPLETE ── */}
        {type === "complete" && (
          <>
            <p className="text-zinc-400 text-sm mb-6">
              Mark <strong className="text-zinc-200">{appt.name}</strong>'s
              appointment as completed?
            </p>
            <div className="flex gap-3">
              <button
                onClick={onClose}
                className="flex-1 py-3 rounded-xl bg-white/5 border border-white/8 text-zinc-400 font-semibold text-sm transition-all hover:bg-white/8"
              >
                Cancel
              </button>
              <button
                onClick={onComplete}
                className="flex-2 py-3 rounded-xl bg-linear-to-r from-violet-500 to-violet-600 text-white font-bold text-sm hover:from-violet-400 hover:to-violet-500 transition-all shadow-lg shadow-violet-500/20 active:scale-[.99]"
              >
                Mark Completed
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
