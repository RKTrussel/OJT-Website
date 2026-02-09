import React from "react";
import logo from "../img/cliberduche_logo.png";

const Services = ({ refProp, visible }) => {
  const primaryServices = [
    {
      title: "Backfill Sourcing / Land Sourcing",
      desc: "Reliable sourcing and supply of premium backfill and land materials",
      icon: "https://img.icons8.com/ios-filled/64/000000/soil.png",
    },
    {
      title: "Land Development",
      desc: "Comprehensive land preparation and development services",
      icon: "https://img.icons8.com/ios-filled/64/000000/bulldozer.png",
    },
    {
      title: "Site Management",
      desc: "Professional site management and coordination for efficient operations",
      icon: "https://img.icons8.com/ios-filled/64/000000/helmet.png",
    },
    {
      title: "Equipment Leasing",
      desc: "Heavy equipment leasing and rental services for all projects",
      icon: "https://img.icons8.com/ios-filled/64/000000/truck.png",
    },
  ];

  const secondaryServices = [
    {
      title: "Land Development",
      desc: "Supporting additional land development needs",
      icon: "https://img.icons8.com/?size=100&id=cS1YQzGas7pb&format=png&color=000000",
    },
    {
      title: "Project Management Consultation",
      desc: "Expert consultation to ensure project success from start to finish",
      icon: "https://img.icons8.com/ios-filled/64/000000/project.png",
    },
  ];

  const serviceImages = [
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", // Backfill Sourcing
    "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", // Land Development
    "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", // Site Management
    "https://images.unsplash.com/photo-1581092160607-ee22621dd758?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", // Equipment Leasing
    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", // Land Development (secondary)
    "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", // Project Management Consultation
  ];

  const renderServices = (servicesArray) =>
    servicesArray.map((s, i) => (
      <div
        key={i}
        className="card-surface hover-lift p-6 rounded-2xl text-center transition-transform duration-300 cursor-pointer relative overflow-hidden group"
      >
        <div className="absolute inset-0 bg-linear-to-br from-slate-900/80 via-sky-900/60 to-emerald-900/60 opacity-90 gradient-slow"></div>
        <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <img
            src={serviceImages[i]}
            alt="Service"
            className="w-full h-full object-cover opacity-80"
          />
        </div>
        <div className="relative z-10">
          <img
            src={s.icon}
            alt={s.title}
            className="mx-auto mb-4 w-16 h-16 transition-transform duration-300 group-hover:scale-110 group-hover:brightness-125"
          />
          <h3 className="text-xl font-semibold mb-4 text-slate-100 group-hover:text-white transition-colors duration-300">
            {s.title}
          </h3>
          <p className="text-slate-300 group-hover:text-white transition-colors duration-300">
            {s.desc}
          </p>
        </div>
      </div>
    ));

  return (
    <div>
      <section
        id="services"
        ref={refProp}
        className="scroll-mt-18 relative overflow-hidden py-20"
      >
        <div className="absolute inset-0 surface-a gradient-slow"></div>
        <div className="absolute inset-0 section-noise"></div>
        <div
          className={`relative z-10 max-w-6xl mx-auto px-6 reveal-clip ${
            visible ? "is-visible" : ""
          }`}
        >
          <div className="flex flex-col items-center justify-center gap-2 mb-10 text-center">
            <span className="text-[11px] uppercase tracking-[0.35em] text-amber-200 bg-amber-400/10 border border-amber-300/30 px-4 py-2 rounded-full">
              Capabilities
            </span>
            <div className="flex items-center justify-center gap-4">
            <img
              src={logo}
              alt="Cliberduche Logo"
              className="w-16 h-16 object-contain"
            />
            <h2 className="text-3xl font-semibold text-slate-100 text-center">
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
            {renderServices(primaryServices)}
          </div>

          {/* Secondary Services */}
          <h3 className="text-2xl font-semibold mb-6 text-slate-200 text-center">
            Secondary Functions
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
            {renderServices(secondaryServices)}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
