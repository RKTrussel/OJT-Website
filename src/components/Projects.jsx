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

  const ITEMS_PER_PAGE = 3;
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
        <div className="absolute inset-0 surface-b gradient-slow" />
        <div className="absolute inset-0 section-noise" />

        <div
          className={`relative z-10 max-w-7xl mx-auto px-6 py-20 ${
            visible ? "is-visible" : ""
          }`}
        >
          {/* Logo + Heading */}
          <div className="flex flex-col items-center justify-center gap-3 mb-8 text-center">
            <span className="text-[11px] uppercase tracking-[0.35em] text-amber-200 bg-amber-400/10 border border-amber-300/30 px-4 py-2 rounded-full shadow-sm">
              Highlights
            </span>
            <div className="flex items-center justify-center gap-4">
              <img
                src={logo}
                alt="Cliberduche Logo"
                className="w-16 h-16 object-contain"
              />
              <h2 className="text-3xl sm:text-4xl font-semibold text-slate-100 tracking-wide">
                Our Projects
              </h2>
            </div>
          </div>

          <p className="text-center mb-12 max-w-3xl mx-auto text-slate-300">
            Featured work across land development, infrastructure, and complex
            construction—built with safety, quality, and speed.
          </p>

          {/* Projects Grid / Scroll */}
          <div className="flex sm:grid gap-6 overflow-x-auto sm:overflow-visible snap-x snap-mandatory sm:snap-none pb-4 sm:pb-0 sm:grid-cols-2 lg:grid-cols-3 scrollbar-hide">
            {currentProjects.map((project, index) => (
              <div
                key={index}
                onClick={() => navigate(project.route)}
                className="relative group cursor-pointer overflow-hidden rounded-2xl card-surface hover-lift transition-transform duration-500 ring-1 ring-white/10"
              >
                <div className="relative h-96 sm:h-72 lg:h-80 w-full">
                  <img
                    src={project.img}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-slate-950/90 via-slate-950/40 to-transparent flex flex-col justify-end p-4 sm:p-5">
                    <h3 className="text-slate-100 text-lg sm:text-xl font-semibold leading-snug">
                      {project.title}
                    </h3>
                    <p className="text-slate-300 text-sm sm:text-base line-clamp-3 mt-1">
                      {project.desc}
                    </p>
                    <button className="focus-ring mt-3 px-4 py-2 text-sm sm:text-base font-medium text-white bg-sky-600/90 border border-sky-400/30 rounded-full transition-all duration-300 group-hover:bg-sky-500 hover:scale-105">
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
            <div className="flex justify-center items-center gap-4 mt-12">
              <button
                onClick={() => setPage((p) => Math.max(p - 1, 1))}
                disabled={page === 1}
                className={`focus-ring flex items-center gap-2 px-4 py-2 rounded-full border transition ${
                  page === 1
                    ? "opacity-40 cursor-not-allowed bg-slate-900/60 text-slate-400 border-slate-700/60"
                    : "bg-slate-900/60 text-slate-200 border-slate-700/60 hover:bg-slate-800/70"
                }`}
              >
                <ChevronLeft className="w-5 h-5 text-sky-300" />
                Prev
              </button>

              <span className="text-slate-300 text-sm font-medium">
                Page {page} of {totalPages}
              </span>

              <button
                onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
                disabled={page === totalPages}
                className={`focus-ring flex items-center gap-2 px-4 py-2 rounded-full border transition ${
                  page === totalPages
                    ? "opacity-40 cursor-not-allowed bg-slate-900/60 text-slate-400 border-slate-700/60"
                    : "bg-slate-900/60 text-slate-200 border-slate-700/60 hover:bg-slate-800/70"
                }`}
              >
                Next
                <ChevronRight className="w-5 h-5 text-sky-300" />
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Projects;
