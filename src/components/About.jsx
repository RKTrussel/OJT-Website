import React, { useState } from "react";
import logo from "../img/cliberduche_logo.png";
const About = ({ refProp, visible }) => {
  const [bgLoaded, setBgLoaded] = useState(false);
  const cardBase =
    "rounded-2xl border border-white/10 bg-white/10 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300";

  return (
    <div>
      <section
        id="about"
        ref={refProp}
        className="scroll-mt-18 w-full relative overflow-hidden"
      >
        <div
          className={`absolute inset-0 bg-cinematic ${
            bgLoaded ? "is-loaded" : ""
          }`}
        >
          <img
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
            alt="Construction site"
            className="bg-cinematic__image"
            onLoad={() => setBgLoaded(true)}
            onError={() => setBgLoaded(true)}
          />
          <div className="absolute inset-0 bg-linear-to-br from-slate-900/80 via-slate-900/60 to-emerald-900/70"></div>
        </div>
        <div
          className={`relative z-10 max-w-7xl mx-auto px-6 py-20 reveal-clip ${
            visible ? "is-visible" : ""
          }`}
        >
          {/* Hero Header */}
          <div className="text-center mb-16 relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md px-8 py-12 shadow-2xl overflow-hidden">
            <div className="absolute inset-0 bg-linear-to-r from-emerald-500/15 via-sky-500/10 to-emerald-500/15"></div>
            <div className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-emerald-400/15 blur-3xl"></div>
            <div className="absolute -bottom-24 -left-24 h-48 w-48 rounded-full bg-blue-400/15 blur-3xl"></div>

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/15 text-emerald-100 text-xs uppercase tracking-[0.35em] mb-6">
                Company Profile
              </div>
              <div className="flex items-center justify-center gap-4 mb-6">
                <img
                  src={logo}
                  alt="Cliberduche Logo"
                  className="w-24 h-24 object-contain drop-shadow-xl"
                />
                <h2 className="text-5xl font-bold text-white drop-shadow-lg">
                  About Us
                </h2>
              </div>
              <p className="text-xl text-slate-200 max-w-3xl mx-auto mb-10 leading-relaxed">
                Embark on our journey of excellence, from humble beginnings to
                industry leadership in land development and construction.
              </p>
              <div className="flex flex-wrap justify-center gap-6 text-center">
                <div
                  className={`${cardBase} p-4 hover:scale-105 cursor-pointer bg-white/85`}
                >
                  <div className="text-3xl font-bold text-green-600 animate-pulse">
                    2018
                  </div>
                  <div className="text-sm text-gray-600">Founded</div>
                </div>

                <div
                  className={`${cardBase} p-4 hover:scale-105 cursor-pointer bg-white/85`}
                >
                  <div className="text-3xl font-bold text-green-600 animate-pulse">
                    2
                  </div>
                  <div className="text-sm text-gray-600">Locations</div>
                </div>
              </div>
            </div>
          </div>

          {/* Storytelling Sections */}
          <div className="space-y-16">
            {/* Our Beginning */}
            <div
              className="relative overflow-hidden rounded-3xl shadow-2xl border border-white/10 animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="absolute inset-0 bg-linear-to-r from-slate-900/90 via-emerald-900/70 to-blue-900/80"></div>
              <div className="relative z-10 p-16 text-white">
                <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
                  <div className="max-w-2xl">
                    <h3 className="text-4xl font-bold mb-6 flex items-center gap-4">
                      <span className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-2xl">
                        🌱
                      </span>
                      Our Beginning
                    </h3>
                    <p className="text-lg leading-relaxed mb-8 text-justify">
                      Established in 2018, Cliberduche Corporation emerged with a
                      clear vision: to provide unparalleled land development and
                      construction services across the Philippines. Officially
                      registered with the Securities and Exchange Commission on
                      November 28, 2018, we began our journey with unwavering
                      commitment to quality and integrity.
                    </p>
                    <blockquote
                      className="text-xl italic border-l-4 border-white/50 pl-6 mb-6 animate-fade-in-up"
                      style={{ animationDelay: "1s" }}
                    >
                      "From the ground up, we build not just structures, but
                      legacies of trust and excellence."
                    </blockquote>
                  </div>
                  <div className="relative group">
                    <div className="absolute -inset-4 rounded-3xl bg-emerald-400/20 blur-2xl"></div>
                    <div className="absolute inset-0 rounded-3xl bg-linear-to-t from-black/45 via-black/10 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
                    <div className="absolute inset-0 rounded-3xl card-media-shine"></div>
                    <img
                      src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                      alt="Early construction planning"
                      className="relative w-full h-64 md:h-80 object-cover rounded-3xl border border-white/20 shadow-2xl card-media-float transition-transform duration-700 ease-out group-hover:scale-[1.04] group-hover:rotate-[0.4deg]"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Our Commitment */}
            <div
              className="relative overflow-hidden rounded-3xl shadow-2xl border border-white/10 animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              <div className="absolute inset-0 bg-linear-to-l from-slate-900/90 via-blue-900/70 to-emerald-900/80"></div>
              <div className="relative z-10 p-16 text-white">
                <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
                  <div className="order-2 lg:order-1">
                    <div className="relative group">
                      <div className="absolute -inset-4 rounded-3xl bg-sky-400/20 blur-2xl"></div>
                      <div className="absolute inset-0 rounded-3xl bg-linear-to-t from-black/45 via-black/10 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
                      <div className="absolute inset-0 rounded-3xl card-media-shine"></div>
                      <img
                        src="https://images.unsplash.com/photo-1489515217757-5fd1be406fef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                        alt="Quality materials on site"
                        className="relative w-full h-64 md:h-80 object-cover rounded-3xl border border-white/20 shadow-2xl card-media-float transition-transform duration-700 ease-out group-hover:scale-[1.04] group-hover:-rotate-[0.4deg]"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="max-w-2xl ml-auto order-1 lg:order-2">
                    <h3 className="text-4xl font-bold mb-6 flex items-center gap-4">
                      <span className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-2xl">
                        ⚡
                      </span>
                      Our Commitment
                    </h3>
                    <p className="text-lg leading-relaxed mb-8 text-justify">
                      We are dedicated to delivering premium backfill materials
                      including sub-base, aggregates, and boulders. Our extensive
                      land development sites in Laguna and Cavite boast over 14
                      million cubic meters of high-quality materials, ensuring we
                      meet the demands of the rapidly growing construction
                      industry.
                    </p>
                    <div
                      className={`${cardBase} p-6 ml-auto`}
                      style={{ width: "fit-content" }}
                    >
                      <p className="text-sm font-semibold mb-2">
                        Quality Standards
                      </p>
                      <p className="text-xs opacity-90">
                        Exceeding industry expectations since day one
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Our Impact */}
            <div
              className="relative overflow-hidden rounded-3xl shadow-2xl border border-white/10 animate-fade-in-up"
              style={{ animationDelay: "0.6s" }}
            >
              <div className="absolute inset-0 bg-linear-to-r from-slate-900/90 via-emerald-900/70 to-blue-900/80"></div>
              <div className="relative z-10 p-16 text-white">
                <div className="max-w-4xl mx-auto text-center">
                  <h3 className="text-4xl font-bold mb-6 flex items-center justify-center gap-4">
                    <span className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-2xl">
                      🌍
                    </span>
                    Our Impact
                  </h3>
                  <p className="text-lg leading-relaxed mb-10 text-justify">
                    Beyond construction, we're shaping the future of Philippine
                    infrastructure. Our sustainable practices and commitment to
                    environmental regulations ensure that every project
                    contributes positively to our communities and economy.
                  </p>
                  <div className="grid md:grid-cols-3 gap-8">
                    <div
                      className={`${cardBase} p-6 hover:bg-white/20 transition-colors duration-300`}
                    >
                      <div className="text-2xl mb-3">🏗️</div>
                      <div className="font-semibold mb-1">Infrastructure</div>
                      <div className="text-sm opacity-90">
                        Building tomorrow's foundations
                      </div>
                    </div>
                    <div
                      className={`${cardBase} p-6 hover:bg-white/20 transition-colors duration-300`}
                    >
                      <div className="text-2xl mb-3">👥</div>
                      <div className="font-semibold mb-1">Employment</div>
                      <div className="text-sm opacity-90">
                        Creating opportunities for Filipinos
                      </div>
                    </div>
                    <div
                      className={`${cardBase} p-6 hover:bg-white/20 transition-colors duration-300`}
                    >
                      <div className="text-2xl mb-3">🌱</div>
                      <div className="font-semibold mb-1">Sustainability</div>
                      <div className="text-sm opacity-90">
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
      <div className="h-1 bg-linear-to-r from-green-500 via-blue-500 to-green-500"></div>
    </div>
  );
};

export default About;
