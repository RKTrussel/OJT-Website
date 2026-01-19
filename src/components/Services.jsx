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

  const renderServices = (servicesArray) =>
    servicesArray.map((s, i) => (
      <div
        key={i}
        className="bg-white p-6 rounded-2xl shadow text-center hover:shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer shadow-lg border border-gray-300"
      >
        <img src={s.icon} alt={s.title} className="mx-auto mb-4 w-16 h-16" />
        <h3 className="text-xl font-semibold mb-4">{s.title}</h3>
        <p className="text-gray-600">{s.desc}</p>
      </div>
    ));

  return (
    <>
      <section
        id="services"
        ref={refProp}
        className={`scroll-mt-18 bg-gradient-to-br from-gray to-blue-200 py-16 transition-all duration-700 ${
          visible ? "animate-fade-in-up" : "opacity-0"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-center gap-4 mb-10">
            <img
              src={logo}
              alt="Cliberduche Logo"
              className="w-16 h-16 object-contain"
            />
            <h2 className="text-3xl font-semibold text-green-900 text-center">
              Our Services
            </h2>
          </div>

          {/* Primary Services */}
          <h3 className="text-2xl font-semibold mb-6 text-blue-1000 text-center">
            Primary Functions
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {renderServices(primaryServices)}
          </div>

          {/* Secondary Services */}
          <h3 className="text-2xl font-semibold mb-6 text-blue-1000 text-center">
            Secondary Functions
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
            {renderServices(secondaryServices)}
          </div>
        </div>
      </section>

      {/* Section Separator */}
      <div className="h-1 bg-gradient-to-r from-blue-500 via-green-500 to-blue-500"></div>
    </>
  );
};

export default Services;
