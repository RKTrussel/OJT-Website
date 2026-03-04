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
          className={`relative z-10 max-w-7xl mx-auto px-6 py-20 reveal-clip ${visible ? "is-visible" : ""
            }`}
        >
          {/* Hero Header */}
          <div className="relative overflow-hidden rounded-3xl card-surface hover-lift px-8 py-12 mb-16">
            <div className="absolute inset-0 bg-linear-to-br from-slate-900 via-slate-900/80 to-emerald-900/30"></div>
            <div className="absolute -top-28 right-10 h-56 w-56 rounded-full bg-emerald-200/40 blur-3xl"></div>
            <div className="absolute -bottom-28 left-10 h-56 w-56 rounded-full bg-sky-200/40 blur-3xl"></div>

            <div className="relative z-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/15 text-sky-200 text-xs uppercase tracking-[0.35em] mb-6">
                  Company Profile
                </div>
                <div className="flex items-center gap-4 mb-5">
                  <img
                    src={logo}
                    alt="Cliberduche Logo"
                    className="w-20 h-20 object-contain drop-shadow-xl"
                  />
                  <h2 className="text-4xl md:text-5xl font-bold text-slate-100">
                    About Cliberduche
                  </h2>
                </div>
                <p className="text-lg text-slate-300 max-w-2xl leading-relaxed">
                  From a focused local team to a trusted construction partner,
                  we deliver land development, site preparation, and
                  infrastructure works with discipline, safety, and speed.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { value: "2018", label: "Founded" },
                  { value: "14M+", label: "Cubic meters sourced" },
                  { value: "2", label: "Key locations" },
                  { value: "24–48h", label: "Response time" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl bg-white/10 border border-white/15 px-5 py-4"
                  >
                    <div className="text-2xl font-bold text-emerald-300">
                      {item.value}
                    </div>
                    <div className="text-sm text-slate-300">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Storytelling Sections */}
          <div className="space-y-16">
            {/* Our Beginning */}
            <div
              className="relative overflow-hidden rounded-3xl card-surface hover-lift animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="absolute inset-0 bg-linear-to-r from-slate-900 via-slate-900/80 to-emerald-900/30 gradient-slow"></div>
              <div className="relative z-10 p-16 text-slate-100">
                <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
                  <div className="max-w-2xl">
                    <h3 className="text-4xl font-bold mb-6 flex items-center gap-4">
                      <span className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-2xl">
                        🌱
                      </span>
                      Our Beginning
                    </h3>
                    <p className="text-lg leading-relaxed mb-6 text-justify text-slate-300">
                      Established in 2018, Cliberduche Corporation emerged with a
                      clear vision: to provide unparalleled land development and
                      construction services across the Philippines. Officially
                      registered with the Securities and Exchange Commission on
                      November 28, 2018, we began our journey with unwavering
                      commitment to quality and integrity.
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
                    <blockquote
                      className="text-xl italic border-l-4 border-emerald-400/60 pl-6 mb-6 animate-fade-in-up text-slate-300"
                      style={{ animationDelay: "1s" }}
                    >
                      "From the ground up, we build not just structures, but
                      legacies of trust and excellence."
                    </blockquote>
                  </div>
                  <div className="relative group">
                    <div className="absolute -inset-4 rounded-3xl bg-emerald-200/40 blur-2xl"></div>
                    <div className="absolute inset-0 rounded-3xl bg-linear-to-t from-black/45 via-black/10 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
                    <div className="absolute inset-0 rounded-3xl card-media-shine"></div>
                    <img
                      src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                      alt="Early construction planning"
                      className="relative w-full h-64 md:h-80 object-cover rounded-3xl border border-slate-200 shadow-2xl card-media-float transition-transform duration-700 ease-out group-hover:scale-[1.04] group-hover:rotate-[0.4deg]"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Our Commitment */}
            <div
              className="relative overflow-hidden rounded-3xl card-surface hover-lift animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              <div className="absolute inset-0 bg-linear-to-l from-slate-900 via-slate-900/80 to-emerald-900/30 gradient-slow"></div>
              <div className="relative z-10 p-16 text-slate-100">
                <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
                  <div className="order-2 lg:order-1">
                    <div className="relative group">
                      <div className="absolute -inset-4 rounded-3xl bg-sky-200/40 blur-2xl"></div>
                      <div className="absolute inset-0 rounded-3xl bg-linear-to-t from-black/45 via-black/10 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
                      <div className="absolute inset-0 rounded-3xl card-media-shine"></div>
                      <img
                        src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                        alt="Construction materials and site operations"
                        className="relative w-full h-64 md:h-80 object-cover rounded-3xl border border-slate-200 shadow-2xl card-media-float transition-transform duration-700 ease-out group-hover:scale-[1.04] group-hover:-rotate-[0.4deg]"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="max-w-2xl ml-auto order-1 lg:order-2">
                    <h3 className="text-4xl font-bold mb-6 flex items-center gap-4">
                      <span className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center text-2xl">
                        ⚡
                      </span>
                      Our Commitment
                    </h3>
                    <p className="text-lg leading-relaxed mb-6 text-justify text-slate-300">
                      We are dedicated to delivering premium backfill materials
                      including sub-base, aggregates, and boulders. Our extensive
                      land development sites in Laguna and Cavite boast over 14
                      million cubic meters of high-quality materials, ensuring we
                      meet the demands of the rapidly growing construction
                      industry.
                    </p>
                    <div className="grid gap-4 sm:grid-cols-2">
                      {[
                        { title: "Safety-first", desc: "On-site protocols" },
                        { title: "Quality control", desc: "Material standards" },
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

            {/* Our Impact */}
            <div
              className="relative overflow-hidden rounded-3xl card-surface hover-lift animate-fade-in-up"
              style={{ animationDelay: "0.6s" }}
            >
              <div className="absolute inset-0 bg-linear-to-r from-slate-900 via-slate-900/80 to-emerald-900/30 gradient-slow"></div>
              <div className="relative z-10 p-16 text-slate-100">
                <div className="max-w-4xl mx-auto text-center">
                  <h3 className="text-4xl font-bold mb-6 flex items-center justify-center gap-4">
                    <span className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-2xl">
                      🌍
                    </span>
                    Our Impact
                  </h3>
                  <p className="text-lg leading-relaxed mb-10 text-justify text-slate-300">
                    Beyond construction, we're shaping the future of Philippine
                    infrastructure. Our sustainable practices and commitment to
                    environmental regulations ensure that every project
                    contributes positively to our communities and economy.
                  </p>
                  <div className="grid md:grid-cols-3 gap-8">
                    <div
                      className={`${cardBase} p-6 hover:bg-white/5 transition-colors duration-300`}
                    >
                      <div className="text-2xl mb-3">🏗️</div>
                      <div className="font-semibold mb-1 text-slate-100">
                        Infrastructure
                      </div>
                      <div className="text-sm text-slate-300">
                        Building tomorrow's foundations
                      </div>
                    </div>
                    <div
                      className={`${cardBase} p-6 hover:bg-white/5 transition-colors duration-300`}
                    >
                      <div className="text-2xl mb-3">👥</div>
                      <div className="font-semibold mb-1 text-slate-100">
                        Employment
                      </div>
                      <div className="text-sm text-slate-300">
                        Creating opportunities for Filipinos
                      </div>
                    </div>
                    <div
                      className={`${cardBase} p-6 hover:bg-white/5 transition-colors duration-300`}
                    >
                      <div className="text-2xl mb-3">🌱</div>
                      <div className="font-semibold mb-1 text-slate-100">
                        Sustainability
                      </div>
                      <div className="text-sm text-slate-300">
                        Environmental responsibility
                      </div>
                    </div>
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
