import React from "react";

const Services = ({ refProp, visible }) => {
  const services = [
    {
      title: "Land Development",
      desc: "Comprehensive land preparation and development services",
      icon: "https://img.icons8.com/ios-filled/64/000000/bulldozer.png",
    },
    {
      title: "Site Management",
      desc: "Professional site management and coordination",
      icon: "https://img.icons8.com/ios-filled/64/000000/helmet.png",
    },
    {
      title: "Backfill Materials",
      desc: "Premium backfill sourcing and supply",
      icon: "https://img.icons8.com/ios-filled/64/000000/soil.png",
    },
    {
      title: "Equipment Leasing",
      desc: "Heavy equipment leasing and rental services",
      icon: "https://img.icons8.com/ios-filled/64/000000/truck.png",
    },
  ];

  return (
    <section
      id="services"
      ref={refProp}
      className={`bg-gray-50 py-16 transition-all duration-700 ${
        visible ? "animate-fade-in-up" : "opacity-0"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-semibold mb-10 text-center">
          Our Services
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-2xl shadow text-center hover:shadow-lg transition duration-300"
            >
              <img
                src={s.icon}
                alt={s.title}
                className="mx-auto mb-4 w-16 h-16"
              />
              <h3 className="text-xl font-semibold mb-4">{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
