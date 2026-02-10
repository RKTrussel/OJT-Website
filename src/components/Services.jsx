import React from "react";
import logo from "../img/cliberduche_logo.png";

// Service images
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
    },
    {
      title: "Land Development",
      desc: "Comprehensive land preparation and development services",
      icon: "https://img.icons8.com/ios-filled/64/ffffff/bulldozer.png",
    },
    {
      title: "Site Management",
      desc: "Professional site management and coordination for efficient operations",
      icon: "https://img.icons8.com/ios-filled/64/ffffff/helmet.png",
    },
    {
      title: "Equipment Leasing",
      desc: "Heavy equipment leasing and rental services for all projects",
      icon: "https://img.icons8.com/ios-filled/64/ffffff/truck.png",
    },
  ];

  const secondaryServices = [
    {
      title: "Land Development Support",
      desc: "Supporting additional land development needs",
      icon: "https://img.icons8.com/ios-filled/64/ffffff/road.png",
    },
    {
      title: "Project Management Consultation",
      desc: "Expert consultation to ensure project success from start to finish",
      icon: "https://img.icons8.com/ios-filled/64/ffffff/project.png",
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

  const renderServices = (servicesArray, startIndex = 0) =>
    servicesArray.map((s, i) => (
      <div
        key={i}
        className="group relative overflow-hidden rounded-3xl bg-white/10 backdrop-blur-xl
                   border border-white/15 shadow-lg transition-all duration-500
                  "
      >
        {/* Image */}
        <div className="relative h-48 sm:h-56 overflow-hidden">
          <img
            src={serviceImages[startIndex + i]}
            alt={s.title}
            className="w-full h-full object-cover transition-transform duration-700
                       "
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent" />

          {/* Icon */}
          <div className="absolute bottom-4 left-4 bg-emerald-600 p-3 rounded-2xl shadow-xl">
            <img src={s.icon} alt={s.title} className="w-7 h-7" />
          </div>
        </div>

        {/* Content */}
        <div className="p-6 text-center">
          <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
            {s.title}
          </h3>
          <p className="text-slate-300 text-sm leading-relaxed">{s.desc}</p>
        </div>
      </div>
    ));

  return (
    <section
      id="services"
      ref={refProp}
      className="scroll-mt-18 relative overflow-hidden py-20"
    >
      {/* Background */}
      <div className="absolute inset-0 surface-a gradient-slow"></div>
      <div className="absolute inset-0 section-noise"></div>

      {/* ===== RESERVE FOR SUBTLE RADIENT DESIGN ===== */}
      {/* <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900 to-emerald-900" />
      <div className="absolute inset-0 section-noise" /> */}
      {/* Content */}
      <div
        className={`relative z-10 max-w-6xl mx-auto px-6 reveal-clip ${
          visible ? "is-visible" : ""
        }`}
      >
        {/* Header */}
        <div className="flex flex-col items-center justify-center gap-2 mb-10 text-center">
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
        </div>

        {/* Primary Services */}
        <h3 className="text-2xl font-semibold mb-6 text-slate-200 text-center">
          Primary Functions
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {renderServices(primaryServices, 0)}
        </div>

        {/* Secondary Services */}
        <h3 className="text-2xl font-semibold mb-6 text-slate-200 text-center">
          Secondary Functions
        </h3>
        <div className="grid md:grid-cols-2 gap-8">
          {renderServices(secondaryServices, 4)}
        </div>
      </div>
    </section>
  );
};

export default Services;
