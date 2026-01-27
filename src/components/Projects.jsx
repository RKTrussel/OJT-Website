import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import logo from "../img/cliberduche_logo.png";
import cbdImg from "../img/CBD_2019.png";
import mdi24Img from "../img/MDI_2024.png";
import mdi25Img from "../img/MDI_2025.png";
import mdi26Img from "../img/MDI_2026.png";
import pierNorthImg from "../img/Pier_NorthHarbour2026.png";
import silangCaviteImg from "../img/SilangCavite2021.png";
import tanzaCaviteImg from "../img/TanzaCavite2021.png";

const Projects = ({ refProp, visible }) => {
  const [bgLoaded, setBgLoaded] = useState(false);
  const navigate = useNavigate();

  const projects = [
    {
      title: "CBD BUILDING PROJECT 2019",
      desc: "Highway and infrastructure development projects",
      img: cbdImg,
      route: "cbd-2019",
    },
    {
      title: "MDI - MERCATOR HOLDINGS PROJECT 2024",
      desc: "Site preparation and land development services",
      img: mdi24Img,
      route: "mdi-2024",
    },
    {
      title: "MDI - MERCATOR HOLDINGS PROJECT 2025",
      desc: "Bridge building and structural engineering",
      img: mdi25Img,
      route: "mdi-2025",
    },
    {
      title: "MDI - MERCATOR HOLDINGS PROJECT 2026",
      desc: "Bridge building and structural engineering",
      img: mdi26Img,
      route: "mdi-2026",
    },
    {
      title: "PIER 2 NORTH HARBOUR 2026",
      desc: "Bridge building and structural engineering",
      img: pierNorthImg,
      route: "pier-2-north-harbour-2026",
    },
    {
      title: "SILANG, CAVITE PROJECT 2021",
      desc: "Bridge building and structural engineering",
      img: silangCaviteImg,
      route: "silang-cavite-2021",
    },
    {
      title: "WDV PHASE 4 TANZA, CAVITE 2026",
      desc: "Bridge building and structural engineering",
      img: tanzaCaviteImg,
      route: "tanza-cavite-2026",
    },
  ];

  const ITEMS_PER_PAGE = 6;
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(projects.length / ITEMS_PER_PAGE);
  const startIndex = (page - 1) * ITEMS_PER_PAGE;
  const currentProjects = projects.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE,
  );

  // Calculate invisible placeholders to maintain consistent height
  const placeholders = Array.from(
    { length: ITEMS_PER_PAGE - currentProjects.length },
    (_, i) => i,
  );

  return (
    <div>
      <section
        id="projects"
        ref={refProp}
        className="scroll-mt-18 w-full relative overflow-hidden"
      >
        {/* Background */}
        <div
          className={`absolute inset-0 bg-cinematic ${bgLoaded ? "is-loaded" : ""}`}
        >
          <img
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1920&q=80"
            alt="Project site"
            className="bg-cinematic__image"
            onLoad={() => setBgLoaded(true)}
            onError={() => setBgLoaded(true)}
          />
          <div className="absolute inset-0 bg-linear-to-br from-slate-900/85 via-slate-900/65 to-emerald-900/70" />
        </div>

        <div
          className={`relative z-10 max-w-7xl mx-auto px-6 py-20 ${
            visible ? "is-visible" : ""
          }`}
        >
          {/* Logo + Heading */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <img
              src={logo}
              alt="Cliberduche Logo"
              className="w-16 h-16 object-contain"
            />
            <h2 className="text-3xl font-semibold text-white">Our Projects</h2>
          </div>

          <p className="text-center mb-12 max-w-3xl mx-auto text-slate-200">
            Our expertise spans land development, infrastructure, and complex
            construction projects.
          </p>

          {/* Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {currentProjects.map((project, index) => (
              <div
                key={index}
                onClick={() => navigate(project.route)}
                className="relative group cursor-pointer overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-transform duration-500 hover:-translate-y-2"
              >
                <div className="relative h-64 w-full overflow-hidden">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/40 to-transparent flex flex-col justify-end p-4 transition-opacity duration-500 group-hover:opacity-100">
                    <h3 className="text-white text-lg font-semibold">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-200 line-clamp-2">
                      {project.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* Invisible placeholders */}
            {placeholders.map((_, i) => (
              <div key={`placeholder-${i}`} className="h-64 w-full invisible" />
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-4 mt-12">
              <button
                onClick={() => setPage((p) => Math.max(p - 1, 1))}
                disabled={page === 1}
                className={`flex items-center gap-2 px-4 py-2 rounded-full border transition ${
                  page === 1
                    ? "opacity-40 cursor-not-allowed bg-white/40"
                    : "bg-white hover:bg-green-50"
                }`}
              >
                <ChevronLeft className="w-5 h-5 text-green-600" />
                Prev
              </button>

              <span className="text-white text-sm font-medium">
                Page {page} of {totalPages}
              </span>

              <button
                onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
                disabled={page === totalPages}
                className={`flex items-center gap-2 px-4 py-2 rounded-full border transition ${
                  page === totalPages
                    ? "opacity-40 cursor-not-allowed bg-white/40"
                    : "bg-white hover:bg-green-50"
                }`}
              >
                Next
                <ChevronRight className="w-5 h-5 text-green-600" />
              </button>
            </div>
          )}
        </div>
      </section>

      <div className="h-1 bg-linear-to-r from-green-500 via-blue-500 to-green-500"></div>
    </div>
  );
};

export default Projects;
