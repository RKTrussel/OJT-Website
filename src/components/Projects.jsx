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
      desc: "Highway and infrastructure development projects enhancing connectivity.",
      img: cbdImg,
      route: "cbd-2019",
    },
    {
      title: "MDI - MERCATOR HOLDINGS PROJECT 2024",
      desc: "Comprehensive site preparation and land development services.",
      img: mdi24Img,
      route: "mdi-2024",
    },
    {
      title: "MDI - MERCATOR HOLDINGS PROJECT 2025",
      desc: "Bridge building and advanced structural engineering solutions.",
      img: mdi25Img,
      route: "mdi-2025",
    },
    {
      title: "MDI - MERCATOR HOLDINGS PROJECT 2026",
      desc: "Innovative bridge construction and engineering excellence.",
      img: mdi26Img,
      route: "mdi-2026",
    },
    {
      title: "PIER 2 NORTH HARBOUR 2026",
      desc: "Harbour infrastructure and maritime development projects.",
      img: pierNorthImg,
      route: "pier-2-north-harbour-2026",
    },
    {
      title: "SILANG, CAVITE PROJECT 2021",
      desc: "Structural engineering and community development initiatives.",
      img: silangCaviteImg,
      route: "silang-cavite-2021",
    },
    {
      title: "WDV PHASE 4 TANZA, CAVITE 2026",
      desc: "Advanced bridge construction with sustainable engineering methods.",
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

  return (
    <div>
      <section
        id="projects"
        ref={refProp}
        className="scroll-mt-18 w-full relative overflow-hidden"
      >
        {/* Background */}
        <div
          className={`absolute inset-0 ${bgLoaded ? "opacity-100" : "opacity-0"} transition-opacity duration-700`}
        >
          <img
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1920&q=80"
            alt="Project site"
            className="w-full h-full object-cover"
            onLoad={() => setBgLoaded(true)}
            onError={() => setBgLoaded(true)}
          />
          <div className="absolute inset-0 bg-linear-to-br from-slate-900/95 via-slate-900/80 to-emerald-900/70" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
          {/* Header */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 text-center sm:text-left">
            <img src={logo} alt="Logo" className="w-16 h-10 sm:w-20 sm:h-12" />
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-wide">
              Our Projects
            </h2>
          </div>

          <p className="text-center mb-12 max-w-3xl mx-auto text-slate-200 text-sm sm:text-base leading-relaxed">
            We specialize in delivering high-quality infrastructure, land
            development, and structural projects. Our work reflects expertise,
            innovation, and sustainable engineering practices.
          </p>

          {/* Projects Grid / Scroll */}
          <div className="flex sm:grid gap-6 overflow-x-auto sm:overflow-visible snap-x snap-mandatory sm:snap-none pb-4 sm:pb-0 sm:grid-cols-2 lg:grid-cols-3 scrollbar-hide">
            {currentProjects.map((project, index) => (
              <div
                key={index}
                onClick={() => navigate(project.route)}
                className="relative group cursor-pointer overflow-hidden rounded-xl shadow-xl hover:shadow-2xl transition-transform duration-300 transform active:scale-[0.97] min-w-[70%] sm:min-w-0 snap-center"
              >
                <div className="relative h-96 sm:h-72 lg:h-80 w-full">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-4 sm:p-5">
                    <h3 className="text-white text-lg sm:text-xl font-semibold leading-snug">
                      {project.title}
                    </h3>
                    <p className="text-gray-200 text-sm sm:text-base line-clamp-3 mt-1">
                      {project.desc}
                    </p>
                    <button className="mt-3 px-4 py-2 text-sm sm:text-base font-medium text-white bg-green-600 rounded-full transition-all duration-300 group-hover:bg-green-500 hover:scale-105">
                      View Project →
                    </button>
                  </div>
                </div>
              </div>
            ))}

            {/* Desktop placeholders */}
            {Array.from({
              length: ITEMS_PER_PAGE - currentProjects.length,
            }).map((_, i) => (
              <div
                key={`placeholder-${i}`}
                className="hidden sm:block invisible rounded-xl h-96 sm:h-72 lg:h-80"
              />
            ))}
          </div>

          {/* Pagination (Desktop Only) */}
          {totalPages > 1 && (
            <div className="hidden sm:flex flex-col items-center gap-5 mt-14">
              <div className="flex gap-3">
                {Array.from({ length: totalPages }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setPage(i + 1)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      page === i + 1
                        ? "bg-green-500 scale-125 shadow-lg shadow-green-500/50"
                        : "bg-white/40 hover:bg-white/70"
                    }`}
                  />
                ))}
              </div>

              <div className="flex items-center gap-6">
                <button
                  onClick={() => setPage((p) => Math.max(p - 1, 1))}
                  disabled={page === 1}
                  className={`group flex items-center gap-2 px-5 py-2.5 rounded-full font-medium text-sm transition-all duration-300 border backdrop-blur-md ${
                    page === 1
                      ? "opacity-30 cursor-not-allowed bg-white/20"
                      : "bg-linear-to-r from-green-500 to-emerald-600 text-white hover:scale-105 hover:shadow-lg hover:shadow-green-500/40"
                  }`}
                >
                  <ChevronLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
                  Prev
                </button>

                <span className="text-white text-sm font-semibold tracking-wide">
                  {page} / {totalPages}
                </span>

                <button
                  onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
                  disabled={page === totalPages}
                  className={`group flex items-center gap-2 px-5 py-2.5 rounded-full font-medium text-sm transition-all duration-300 border backdrop-blur-md ${
                    page === totalPages
                      ? "opacity-30 cursor-not-allowed bg-white/20"
                      : "bg-linear-to-r from-emerald-600 to-green-500 text-white hover:scale-105 hover:shadow-lg hover:shadow-green-500/40"
                  }`}
                >
                  Next
                  <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      <div className="h-1 bg-linear-to-r from-green-500 via-blue-500 to-green-500"></div>
    </div>
  );
};

export default Projects;
