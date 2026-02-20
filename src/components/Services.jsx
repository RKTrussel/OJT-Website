import React from "react";
import logo from "../img/cliberduche_logo.png";

import Picture10 from "../img/MDI2024_Images/Picture10.png";
import Picture14 from "../img/SilangCavite2021_Images/Picture14.png";
import Picture45 from "../img/PierNorthHarbour2026_Images/Picture45.png";
import Picture25 from "../img/MDI2025_Images/Picture25.png";
import Picture40 from "../img/MDI2026_Images/Picture40.png";
import mainbackgroundmission from "../img/main_background-mission.png";

const Services = ({ refProp, visible }) => {
  const primaryServices = [
    {
      title: "Backfill Sourcing / Land Sourcing",
      desc: "Reliable sourcing and supply of premium backfill and land materials",
      icon: "https://img.icons8.com/ios-filled/64/ffffff/soil.png",
      tag: "Sourcing",
    },
    {
      title: "Land Development",
      desc: "Comprehensive land preparation and development services",
      icon: "https://img.icons8.com/ios-filled/64/ffffff/bulldozer.png",
      tag: "Development",
    },
    {
      title: "Site Management",
      desc: "Professional site management and coordination for efficient operations",
      icon: "https://img.icons8.com/ios-filled/64/ffffff/helmet.png",
      tag: "Operations",
    },
    {
      title: "Equipment Leasing",
      desc: "Heavy equipment leasing and rental services for all projects",
      icon: "https://img.icons8.com/ios-filled/64/ffffff/truck.png",
      tag: "Leasing",
    },
  ];

  const secondaryServices = [
    {
      title: "Land Development Support",
      desc: "Supporting additional land development needs with expert-level backing and resource coordination.",
      icon: "https://img.icons8.com/ios-filled/64/ffffff/road.png",
      tag: "Support",
    },
    {
      title: "Project Management Consultation",
      desc: "Expert consultation to ensure project success from start to finish.",
      icon: "https://img.icons8.com/ios-filled/64/ffffff/project.png",
      tag: "Consultation",
    },
  ];

  const serviceImages = [
    Picture10,
    Picture14,
    Picture45,
    Picture25,
    Picture40,
    mainbackgroundmission,
  ];

  const ServiceCard = ({ s, imgSrc, index }) => (
    <div
      className="group relative overflow-hidden rounded-2xl border border-white/10
                 bg-white/5 backdrop-blur-md shadow-md
                 transition-all duration-500 hover:border-emerald-400/40
                 hover:shadow-emerald-900/40 hover:shadow-xl cursor-default"
      style={{ minHeight: "260px" }}
    >
      {/* --- Background image: hidden by default, fades in on hover --- */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100
                   transition-opacity duration-700 ease-in-out"
      >
        <img
          src={imgSrc}
          alt=""
          className="w-full h-full object-cover scale-105 group-hover:scale-100
                     transition-transform duration-700 ease-in-out"
        />
        {/* gradient overlay so text stays readable over image */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30" />
      </div>

      {/* --- Default state: subtle dark background + faint grid pattern --- */}
      <div
        className="absolute inset-0 opacity-100 group-hover:opacity-0
                   transition-opacity duration-500"
        style={{
          background:
            "radial-gradient(ellipse at 30% 20%, rgba(16,185,129,0.06) 0%, transparent 70%)",
        }}
      />

      {/* --- Card content --- */}
      <div className="relative z-10 flex flex-col justify-between h-full p-6 gap-4">
        {/* Top row: tag + icon */}
        <div className="flex items-start justify-between">
          <span
            className="text-[10px] uppercase tracking-[0.3em] text-emerald-300/80
                          bg-emerald-400/10 border border-emerald-400/20
                          px-3 py-1 rounded-full"
          >
            {s.tag}
          </span>
          <div
            className="bg-emerald-700/60 group-hover:bg-emerald-500/80
                          p-2.5 rounded-xl transition-colors duration-300 shadow"
          >
            <img src={s.icon} alt={s.title} className="w-5 h-5" />
          </div>
        </div>

        {/* Middle: title + desc */}
        <div className="flex-1 flex flex-col justify-end gap-2 pt-4">
          {/* Thin accent line */}
          <div
            className="w-8 h-0.5 bg-emerald-400/50 group-hover:w-16
                          transition-all duration-500 rounded-full mb-1"
          />
          <h3
            className="text-lg sm:text-xl font-semibold text-white
                          leading-snug tracking-tight"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            {s.title}
          </h3>
          <p className="text-slate-400 group-hover:text-slate-200 text-sm leading-relaxed transition-colors duration-300">
            {s.desc}
          </p>
        </div>

        {/* Bottom: hover hint */}
        <div
          className="flex items-center gap-1.5 opacity-0 group-hover:opacity-100
                        transition-opacity duration-500 pt-2"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[10px] uppercase tracking-widest text-emerald-300/70">
            Project Reference
          </span>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Import Google Font */}
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;600;700&display=swap');`}</style>

      <section
        id="services"
        ref={refProp}
        className="scroll-mt-18 relative overflow-hidden py-20"
      >
        {/* Background */}
        <div className="absolute inset-0 surface-a gradient-slow" />
        <div className="absolute inset-0 section-noise" />

        <div
          className={`relative z-10 max-w-6xl mx-auto px-6 reveal-clip ${
            visible ? "is-visible" : ""
          }`}
        >
          {/* Header */}
          <div className="flex flex-col items-center justify-center gap-2 mb-12 text-center">
            <span
              className="text-[11px] uppercase tracking-[0.35em] text-amber-200
                             bg-amber-400/10 border border-amber-300/30
                             px-4 py-2 rounded-full"
            >
              Capabilities
            </span>

            <div className="flex items-center justify-center gap-4">
              <img
                src={logo}
                alt="Cliberduche Logo"
                className="w-16 h-16 object-contain"
              />
              <h2 className="text-3xl font-semibold text-slate-100">
                Our Services
              </h2>
            </div>

            <p className="text-slate-300 max-w-3xl">
              Reliable execution from sourcing to site management, tailored to
              infrastructure and land development needs.
            </p>

            {/* Hover hint */}
            <p className="text-[11px] text-slate-500 tracking-wider uppercase mt-1">
              ✦ Hover a card to reveal project imagery
            </p>
          </div>

          {/* Primary Services */}
          <h3 className="text-xs uppercase tracking-[0.3em] text-slate-400 mb-5 text-center">
            Primary Functions
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
            {primaryServices.map((s, i) => (
              <ServiceCard key={i} s={s} imgSrc={serviceImages[i]} index={i} />
            ))}
          </div>

          {/* Secondary Services */}
          <h3 className="text-xs uppercase tracking-[0.3em] text-slate-400 mb-5 text-center">
            Secondary Functions
          </h3>
          <div className="grid md:grid-cols-2 gap-5">
            {secondaryServices.map((s, i) => (
              <ServiceCard
                key={i}
                s={s}
                imgSrc={serviceImages[4 + i]}
                index={4 + i}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
