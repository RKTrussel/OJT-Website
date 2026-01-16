import React, { useState, useMemo } from "react";

const Projects = ({ refProp, visible }) => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeImage, setActiveImage] = useState(0);

  const projects = useMemo(() => [
    {
      title: "Road Construction",
      desc: "Highway and infrastructure development projects",
      img: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop",
      details: `Cliberduche Corporation undertakes road construction projects that include concrete roadworks, pavements, embankment, drainage systems, and slope protection. These projects are executed in compliance with engineering standards, safety protocols, and government regulations.

Example Project:
MDI – Mercator Holdings Projects (2019–2026)
• Road networks and pavement works
• Storm drainage and embankment
• Gabion walls, retaining walls, fencing
• Electrical post lights and landscape works`,
      gallery: [
        "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1590650046871-92c887180603?w=800&h=600&fit=crop",
      ],
      status: "Ongoing / Completed",
    },
    {
      title: "Land Development",
      desc: "Site preparation and land development services",
      img: "https://images.unsplash.com/photo-1590845947670-c009801ffa74?w=400&h=300&fit=crop",
      details: `Our land development services include clearing, cutting and peeling, leveling, compaction, and installation of RCP and PVC pipes. We also supply high-quality backfill materials such as aggregates, mixed soil, and boulders to support various commercial and industrial projects.

Example Projects:
Silang, Cavite Project (2021)
• 18.3-hectare land development
• Leveling and compaction
• Drainage, road networks, riprap, and bridge rectification

Laguna & Cavite Sites
• Over 14 million cubic meters of backfilling materials`,
      gallery: [
        "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1581092334494-1a5a93cdb7b0?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1621905252472-943afaa20e20?w=800&h=600&fit=crop",
      ],
      status: "Completed",
    },
    {
      title: "Bridge Construction",
      desc: "Bridge building and structural engineering",
      img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
      details: `Cliberduche Corporation is involved in bridge construction and rehabilitation projects, including embankment works, ripraps, drainage systems, and structural rectification.

Example Project:
Pier 2 – North Harbour Project (2026)
• Reconstruction of bridge and pavement
• Lagoon embankment
• Drainage, water, and electrical works`,
      gallery: [
        "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1536895058696-a69b1c7ba34f?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
      ],
      status: "Ongoing",
    },
  ], []);

  return (
    <>
      <section
        id="projects"
        ref={refProp}
        className={`scroll-mt-18 w-full bg-green-50 transition-all duration-700 ${
          visible ? "animate-fade-in-up" : "opacity-0"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-semibold mb-10 text-center">
            Our Projects
          </h2>

          <p className="text-center mb-10">
            Cliberduche Corporation handles small, medium, and large commercial and industrial projects. Our expertise includes land clearing, cutting and leveling, drainage installation, road and bridge construction, slope protection, erosion prevention, and soil stabilization works.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((p, i) => (
              <div
                key={i}
                className="bg-white rounded-lg shadow overflow-hidden hover:shadow-xl hover:scale-105 transition duration-300 flex flex-col"
                style={{ willChange: 'transform' }}
              >
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />

                <div className="p-4 flex flex-col grow">
                  <h3 className="font-semibold text-lg text-green-600">
                    {p.title}
                  </h3>
                  <p className="mb-2 text-sm">{p.desc}</p>

                  <button
                    onClick={() => {
                      setSelectedProject(p);
                      setActiveImage(0);
                    }}
                    className="mt-auto bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
                  >
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedProject && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
          <div className="bg-white max-w-2xl w-full max-h-[90vh] overflow-y-auto rounded-lg shadow-xl p-6 relative animate-fade-in-up" style={{ willChange: 'transform, opacity' }}>
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
            >
              ✕
            </button>

            <img
              src={selectedProject.gallery[activeImage]}
              alt="Project"
              className="w-full h-64 object-cover rounded mb-4"
              loading="lazy"
            />

            <div className="flex gap-3 mb-4">
              {selectedProject.gallery.map((img, index) => (
                <img
                  key={index}
                  src={img.replace('w=800&h=600', 'w=80&h=64')}
                  alt="Thumbnail"
                  onClick={() => setActiveImage(index)}
                  className={`w-20 h-16 object-cover rounded cursor-pointer border-2 ${
                    activeImage === index
                      ? "border-green-600"
                      : "border-transparent"
                  }`}
                  loading="lazy"
                />
              ))}
            </div>

            <h3 className="text-2xl font-semibold text-green-600 mb-2">
              {selectedProject.title}
            </h3>

            <p className="text-gray-700 whitespace-pre-line leading-relaxed mb-2">
              {selectedProject.details}
            </p>

            <p className="text-sm text-gray-500 mb-2">
              Project Status: {selectedProject.status}
            </p>

            <button
              onClick={() => setSelectedProject(null)}
              className="mt-6 w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}

      <div className="h-1 w-full bg-gradient-to-r from-green-500 via-blue-500 to-green-500"></div>
    </>
  );
};

export default React.memo(Projects);
