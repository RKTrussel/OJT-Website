import React, { useState } from "react";
import { ListChecks, Settings, CheckCircle } from "lucide-react";

const ProjectDetails = () => {
  const [showAllSteps, setShowAllSteps] = useState(false);

  return (
    <div>
      {/* ================= PROJECT DETAILS ================= */}
      <section className="mb-16 md:mb-28">
        <div className="flex flex-wrap items-center gap-3 mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-100">
            Project Details
          </h2>
          <span className="hidden sm:block h-px flex-1 bg-white/10" />
        </div>

        <div className="grid gap-6 md:grid-cols-3 items-start">
          {/* Scope */}
          <div className="rounded-3xl border border-emerald-400/25 bg-slate-900/60 p-6 sm:p-8 shadow-[0_20px_60px_-40px_rgba(2,6,23,0.7)]">
            <div className="flex flex-col items-center gap-3 text-center md:flex-row md:items-start md:text-left">
              <ListChecks className="w-6 h-6 sm:w-8 sm:h-8 text-emerald-300 drop-shadow-[0_0_12px_rgba(52,211,153,0.35)]" />
              <div>
                <p className="text-[11px] uppercase tracking-[0.3em] text-emerald-200/80">
                  Scope
                </p>
                <h3 className="text-lg sm:text-xl font-semibold text-slate-100">
                  Project Coverage
                </h3>
              </div>
            </div>
            <p className="mt-4 text-base sm:text-lg text-slate-300 text-center md:text-left">
              (3-STOREY BUILDING)
            </p>
          </div>

          {/* MQP Process */}
          <div className="rounded-3xl border border-sky-400/25 bg-slate-900/60 p-6 sm:p-8 shadow-[0_20px_60px_-40px_rgba(2,6,23,0.7)]">
            <div className="flex flex-col items-center gap-3 text-center md:flex-row md:items-start md:text-left">
              <Settings className="w-6 h-6 sm:w-8 sm:h-8 text-sky-300 drop-shadow-[0_0_12px_rgba(56,189,248,0.35)]" />
              <div>
                <p className="text-[11px] uppercase tracking-[0.3em] text-sky-200/80">
                  Process
                </p>
                <h3 className="text-lg sm:text-xl font-semibold text-slate-100">
                  Manufacturing Quality Plan (MQP)
                </h3>
              </div>
            </div>

            <div className="relative mt-6">
              <div
                className={`relative ml-4 ${
                  showAllSteps ? "" : "max-h-[420px] overflow-hidden"
                }`}
              >
                <div className="absolute left-3 top-0 h-full border-l border-dashed border-white/15"></div>

              {[
                {
                  step: "1",
                  title: "Specific Order of Materials & P.O.",
                  desc: "Place orders according to production plan to ensure proper material availability.",
                  color: "bg-rose-500/20 text-rose-200",
                },
                {
                  step: "2",
                  title: "Source – Site of Materials",
                  desc: "Identify and secure the source of materials needed for production.",
                  color: "bg-emerald-500/20 text-emerald-200",
                },
                {
                  step: "3",
                  title: "Sampling and Laboratory Test",
                  desc: "Perform quality checks through sampling and lab testing to ensure standards.",
                  color: "bg-sky-500/20 text-sky-200",
                },
                {
                  step: "4",
                  title: "Forecasting & Scheduling / Survey of Site",
                  desc: "Plan timelines, forecast material needs, and survey the site for readiness.",
                  color: "bg-emerald-500/20 text-emerald-200",
                },
                {
                  step: "5",
                  title: "Loading – Volume Check & Delivery",
                  desc: "Check volumes during loading and ensure delivery matches the order.",
                  color: "bg-sky-500/20 text-sky-200",
                },
                {
                  step: "6",
                  title: "Site Dumping – Spreading & Compaction",
                  desc: "Distribute and compact materials properly on site.",
                  color: "bg-emerald-500/20 text-emerald-200",
                },
                {
                  step: "7",
                  title: "Final Checking",
                  desc: "Perform final inspection to validate material quality and placement.",
                  color: "bg-rose-500/20 text-rose-200",
                },
              ].map((item, i) => (
                <div key={i} className="mb-8 relative pl-10">
                  <div
                    className={`absolute left-0 top-0 w-6 h-6 rounded-full flex items-center justify-center ${item.color} font-semibold ring-1 ring-white/10`}
                  >
                    {item.step}
                  </div>
                  <h4 className="font-semibold text-sm sm:text-base mb-1 text-slate-100">
                    {item.title}
                  </h4>
                  <p className="text-slate-300 text-xs sm:text-sm">
                    {item.desc}
                  </p>
                </div>
              ))}
                {!showAllSteps && (
                  <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-slate-900/95 to-transparent" />
                )}
              </div>
              <div className="mt-4 flex justify-center">
                <button
                  type="button"
                  onClick={() => setShowAllSteps((prev) => !prev)}
                  className="text-xs uppercase tracking-[0.25em] text-sky-200/80 hover:text-sky-200 transition"
                >
                  {showAllSteps ? "Show less" : "View full process"}
                </button>
              </div>
            </div>
          </div>

          {/* Result */}
          <div className="rounded-3xl border border-emerald-400/25 bg-slate-900/60 p-6 sm:p-8 shadow-[0_20px_60px_-40px_rgba(2,6,23,0.7)]">
            <div className="flex flex-col items-center gap-3 text-center md:flex-row md:items-start md:text-left">
              <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8 text-emerald-300 drop-shadow-[0_0_12px_rgba(52,211,153,0.35)]" />
              <div>
                <p className="text-[11px] uppercase tracking-[0.3em] text-emerald-200/80">
                  Outcome
                </p>
                <h3 className="text-lg sm:text-xl font-semibold text-slate-100">
                  Result Summary
                </h3>
              </div>
            </div>
            <p className="mt-4 text-base sm:text-lg text-slate-300 text-center md:text-left">
              Delivered a durable, safer roadway with improved traffic flow and
              reduced maintenance requirements.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetails;
