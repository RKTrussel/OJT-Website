import React from "react";

const Projects = ({ refProp, visible }) => {
  const projects = [
    {
      title: "Road Construction",
      desc: "Highway and infrastructure development projects",
      img: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    },
    {
      title: "Land Development",
      desc: "Site preparation and land development services",
      img: "https://images.unsplash.com/photo-1590845947670-c009801ffa74?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    },
    {
      title: "Bridge Construction",
      desc: "Bridge building and structural engineering",
      img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    },
  ];

  return (
    <>
      <section
        id="projects"
        ref={refProp}
        className={`scroll-mt-18 bg-green-50 max-w-6xl mx-auto px-6 py-16 transition-all duration-700 ${
          visible ? "animate-fade-in-up" : "opacity-0"
        }`}
      >
        <h2 className="text-3xl font-semibold mb-10 text-center">
          Our Projects
        </h2>
        <p className="text-center mb-10">
          Cliberduche Corporation handles small, medium, and large commercial
          and industrial projects. Our expertise includes land clearing, cutting
          and leveling, drainage installation, road and bridge construction,
          slope protection, erosion prevention, and soil stabilization works.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <div
              key={i}
              className="bg-white rounded-lg shadow overflow-hidden hover:shadow-xl hover:scale-105 transition duration-300 cursor-pointer flex flex-col justify-between"
            >
              <img
                src={p.img}
                alt={p.title}
                className="w-full h-48 object-cover"
                // i removed this to make consistent hover "hover:scale-110 transition duration-300"
              />
              <div className="p-4 flex flex-col grow">
                <h3 className="font-semibold text-lg text-green-600">
                  {p.title}
                </h3>
                <p className="mb-4">{p.desc}</p>
                <button className="mt-auto bg-green-600 text-white text-center py-2 rounded hover:bg-green-700 transition">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section Separator */}
      <div className="h-1 bg-linear-to-r from-green-500 via-blue-500 to-green-500"></div>
    </>
  );
};

export default Projects;
