import React from "react";
import logo from "../img/cliberduche_logo.png";

const About = ({ refProp, visible }) => {
  const cardBase =
    "rounded-2xl card-surface hover-lift transition-all duration-300";

  return (
    <div>
      <section
        id="about"
        ref={refProp}
        className="scroll-mt-6 w-full relative overflow-hidden"
      >
        <div className="absolute inset-0 surface-a gradient-slow"></div>
        <div className="absolute inset-0 section-noise"></div>

        <div
          className={`relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20 reveal-clip ${
            visible ? "is-visible" : ""
          }`}
        >
          {/* Hero Header */}
          <div className="relative overflow-hidden rounded-3xl card-surface hover-lift px-5 sm:px-8 py-8 sm:py-12 mb-14 sm:mb-16">
            <div className="absolute inset-0 bg-linear-to-br from-slate-900 via-slate-900/80 to-emerald-900/30"></div>

            <div className="absolute -top-28 right-10 h-40 sm:h-56 w-40 sm:w-56 rounded-full bg-emerald-200/40 blur-3xl"></div>
            <div className="absolute -bottom-28 left-10 h-40 sm:h-56 w-40 sm:w-56 rounded-full bg-sky-200/40 blur-3xl"></div>

            <div className="relative z-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/15 text-sky-200 text-[10px] sm:text-xs uppercase tracking-[0.35em] mb-5 sm:mb-6">
                  Company Profile
                </div>

                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-5">
                  <img
                    src={logo}
                    alt="Cliberduche Logo"
                    className="w-10 h-10 sm:w-14 sm:h-14 object-contain drop-shadow-xl"
                  />

                  <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-slate-100">
                    About Cliberduche
                  </h2>
                </div>

                <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed text-justify">
                  From a focused local team to a trusted construction partner,
                  we deliver land development, site preparation, and
                  infrastructure works with discipline, safety, and speed.
                </p>
              </div>

              <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-3">
                {[
                  { value: "2018", label: "Founded" },
                  { value: "14M+", label: "Cubic meters sourced" },
                  { value: "24–48h", label: "Response time" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl bg-white/10 border border-white/15 px-4 py-4 text-center"
                  >
                    <div className="text-xl sm:text-2xl font-bold text-emerald-300">
                      {item.value}
                    </div>
                    <div className="text-xs sm:text-sm text-slate-300">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Story Sections */}
          <div className="space-y-14 sm:space-y-16">
            {/* Beginning */}
            <div className="relative overflow-hidden rounded-3xl card-surface hover-lift">
              <div className="absolute inset-0 bg-linear-to-r from-slate-900 via-slate-900/80 to-emerald-900/30"></div>

              <div className="relative z-10 p-6 sm:p-10 lg:p-16 text-slate-100">
                <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
                  <div className="max-w-2xl">
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 flex items-center gap-4">
                      <span className="w-10 h-10 sm:w-12 sm:h-12 bg-emerald-100 rounded-full flex items-center justify-center text-xl sm:text-2xl">
                        🌱
                      </span>
                      Our Beginning
                    </h3>

                    <p className="text-base sm:text-lg leading-relaxed mb-6 text-justify text-slate-300">
                      Established in 2018, Cliberduche Corporation emerged with
                      a clear vision: to provide unparalleled land development
                      and construction services across the Philippines.
                    </p>

                    <ul className="space-y-3 text-slate-300">
                      {[
                        "Backfill sourcing and supply",
                        "Land development & site preparation",
                        "Infrastructure and civil works",
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <span className="mt-1 h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="relative group">
                    <img
                      src="https://images.unsplash.com/photo-1503387762-592deb58ef4e"
                      className="w-full h-56 sm:h-64 md:h-80 object-cover rounded-3xl border border-slate-200 shadow-2xl"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Commitment */}
            <div className="relative overflow-hidden rounded-3xl card-surface hover-lift">
              <div className="absolute inset-0 bg-linear-to-l from-slate-900 via-slate-900/80 to-emerald-900/30"></div>

              <div className="relative z-10 p-6 sm:p-10 lg:p-16 text-slate-100">
                <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
                  <div className="order-2 lg:order-1">
                    <img
                      src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5"
                      className="w-full h-56 sm:h-64 md:h-80 object-cover rounded-3xl border border-slate-200 shadow-2xl"
                      alt=""
                    />
                  </div>

                  <div className="order-1 lg:order-2 max-w-2xl">
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 flex items-center gap-4">
                      <span className="w-10 h-10 sm:w-12 sm:h-12 bg-sky-100 rounded-full flex items-center justify-center text-xl sm:text-2xl">
                        ⚡
                      </span>
                      Our Commitment
                    </h3>

                    <p className="text-base sm:text-lg leading-relaxed mb-6 text-justify text-slate-300">
                      We are dedicated to delivering premium backfill materials
                      including sub-base, aggregates, and boulders.
                    </p>

                    <div className="grid gap-4 sm:grid-cols-2">
                      {[
                        { title: "Safety-first", desc: "On-site protocols" },
                        {
                          title: "Quality control",
                          desc: "Material standards",
                        },
                        { title: "Transparency", desc: "Clear reporting" },
                        { title: "Speed", desc: "Reliable timelines" },
                      ].map((item) => (
                        <div
                          key={item.title}
                          className="rounded-xl border border-white/10 bg-white/5 px-4 py-3"
                        >
                          <p className="text-sm font-semibold text-slate-100">
                            {item.title}
                          </p>
                          <p className="text-xs text-slate-300">{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Impact */}
            <div className="relative overflow-hidden rounded-3xl card-surface hover-lift">
              <div className="absolute inset-0 bg-linear-to-r from-slate-900 via-slate-900/80 to-emerald-900/30"></div>

              <div className="relative z-10 p-6 sm:p-10 lg:p-16 text-slate-100">
                <div className="max-w-4xl mx-auto text-center">
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 flex items-center justify-center gap-4">
                    🌍 Our Impact
                  </h3>

                  <p className="text-base sm:text-lg leading-relaxed mb-10 text-justify text-slate-300">
                    Beyond construction, we're shaping the future of Philippine
                    infrastructure.
                  </p>

                  <div className="grid gap-6 md:grid-cols-3">
                    {[
                      {
                        icon: "🏗️",
                        title: "Infrastructure",
                        desc: "Building tomorrow's foundations",
                      },
                      {
                        icon: "👥",
                        title: "Employment",
                        desc: "Creating opportunities for Filipinos",
                      },
                      {
                        icon: "🌱",
                        title: "Sustainability",
                        desc: "Environmental responsibility",
                      },
                    ].map((item) => (
                      <div
                        key={item.title}
                        className={`${cardBase} p-6 hover:bg-white/5`}
                      >
                        <div className="text-2xl mb-3">{item.icon}</div>
                        <div className="font-semibold mb-1 text-slate-100">
                          {item.title}
                        </div>
                        <div className="text-sm text-slate-300">
                          {item.desc}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
