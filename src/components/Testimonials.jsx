import React from "react";
import logo from "../img/cliberduche_logo.png";

const Testimonials = ({ refProp, visible }) => {
  const testimonials = [
    {
      quote:
        "Cliberduche delivered ahead of schedule with excellent site management and clear reporting.",
      name: "Project Manager",
      company: "Industrial Client",
    },
    {
      quote:
        "The team handled land development efficiently and maintained high safety standards throughout.",
      name: "Operations Director",
      company: "Infrastructure Partner",
    },
    {
      quote:
        "Reliable partner for backfill sourcing and equipment coordination. Smooth collaboration.",
      name: "Construction Lead",
      company: "Private Developer",
    },
  ];

  return (
    <div>
      <section
        id="testimonials"
        ref={refProp}
        className="scroll-mt-18 relative overflow-hidden py-20"
      >
        <div className="absolute inset-0 surface-a gradient-slow" />
        <div className="absolute inset-0 section-noise" />

        <div
          className={`relative z-10 max-w-6xl mx-auto px-6 reveal-clip ${
            visible ? "is-visible" : ""
          }`}
        >
          <div className="flex flex-col items-center justify-center gap-2 mb-12 text-center">
            <span className="text-[11px] uppercase tracking-[0.35em] text-amber-600 bg-amber-50 border border-amber-200 px-4 py-2 rounded-full">
              Testimonials
            </span>
            <div className="flex items-center justify-center gap-4">
              <img
                src={logo}
                alt="Cliberduche Logo"
                className="w-16 h-16 object-contain"
              />
              <h2 className="text-3xl font-semibold text-slate-900 text-center">
                Trusted by partners
              </h2>
            </div>
            <p className="text-slate-700 max-w-3xl">
              Consistent delivery, safety-first execution, and dependable
              coordination across every project phase.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((item, index) => (
              <div
                key={index}
                className="card-surface hover-lift rounded-2xl p-6 transition duration-300"
              >
                <p className="text-slate-700 leading-relaxed">“{item.quote}”</p>
                <div className="mt-5 border-t border-slate-200 pt-4">
                  <p className="text-slate-900 font-semibold">{item.name}</p>
                  <p className="text-slate-500 text-sm">{item.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
