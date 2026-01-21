import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../img/cliberduche_logo.png";

const Projects = ({ refProp, visible }) => {
  const [bgLoaded, setBgLoaded] = useState(false);
  const [current, setCurrent] = useState(0);

  const projects = [
    {
      title: "Road Construction",
      desc: "Highway and infrastructure development projects",
      img: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=900&q=80",
      route: "road-construction",
    },
    {
      title: "Land Development",
      desc: "Site preparation and land development services",
      img: "https://images.unsplash.com/photo-1590845947670-c009801ffa74?auto=format&fit=crop&w=900&q=80",
      route: "land-development",
    },
    {
      title: "Bridge Construction",
      desc: "Bridge building and structural engineering",
      img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=900&q=80",
      route: "bridge-construction",
    },
  ];

  const total = projects.length;

  const prev = () => setCurrent((prevIndex) => (prevIndex - 1 + total) % total);
  const next = () => setCurrent((prevIndex) => (prevIndex + 1) % total);
  const getIndex = (offset) => (current + offset + total) % total;

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [current]);

  return (
    <div>
      <section
        id="projects"
        ref={refProp}
        className="scroll-mt-18 w-full relative overflow-hidden"
      >
        {/* BACKGROUND */}
        <div
          className={`absolute inset-0 bg-cinematic ${
            bgLoaded ? "is-loaded" : ""
          }`}
        >
          <img
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
            alt="Project site"
            className="bg-cinematic__image"
            onLoad={() => setBgLoaded(true)}
            onError={() => setBgLoaded(true)}
          />
          <div className="absolute inset-0 bg-linear-to-br from-slate-900/85 via-slate-900/65 to-emerald-900/70" />
        </div>

        <div
          className={`relative z-10 max-w-6xl mx-auto px-6 py-20 reveal-clip ${
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
            <h2 className="text-3xl font-semibold text-center text-white">
              Our Projects
            </h2>
          </div>

          <p className="text-center mb-12 max-w-3xl mx-auto text-slate-200">
            Our expertise spans land development, infrastructure, and complex
            construction projects.
          </p>

          {/* CARD DECK */}
          <div className="relative h-110 flex items-center justify-center">
            {/* LEFT ARROW */}
            <button
              onClick={prev}
              className="absolute left-0 sm:left-2 md:left-4 z-40 bg-white/70 hover:bg-white shadow rounded-full p-3 sm:p-4 transition"
            >
              <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7 text-green-600" />
            </button>

            {/* RIGHT ARROW */}
            <button
              onClick={next}
              className="absolute right-0 sm:right-2 md:right-4 z-40 bg-white/70 hover:bg-white shadow rounded-full p-3 sm:p-4 transition"
            >
              <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7 text-green-600" />
            </button>

            {/* CARDS */}
            {projects.map((proj, i) => {
              // Determine position relative to current
              let pos = "right";
              if (i === current) pos = "center";
              else if (i === getIndex(-1)) pos = "left";

              return (
                <DeckCard
                  key={i}
                  project={proj}
                  position={pos}
                  active={pos === "center"}
                  onClick={
                    pos === "left" ? prev : pos === "right" ? next : undefined
                  }
                />
              );
            })}
          </div>
        </div>
      </section>
      <div className="h-1 bg-linear-to-r from-green-500 via-blue-500 to-green-500"></div>
    </div>
  );
};

const DeckCard = ({ project, position, onClick, active }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    if (project?.route) navigate(project.route);
  };

  const base =
    "absolute rounded-2xl overflow-hidden shadow-xl transition-all duration-700 ease-in-out transform hover:translate-y-[-5px] hover:shadow-2xl cursor-pointer";

  const styles = {
    center: "z-30 scale-105 md:scale-110 rotate-0 opacity-100",
    left: `
      z-10
      -translate-x-16 sm:-translate-x-20 md:-translate-x-48
      scale-90 sm:scale-95
      -rotate-3 sm:-rotate-4 md:-rotate-6
      opacity-50
    `,
    right: `
      z-10
      translate-x-16 sm:translate-x-20 md:translate-x-48
      scale-90 sm:scale-95
      rotate-3 sm:rotate-4 md:rotate-6
      opacity-50
    `,
  };

  const widthClass = "w-60 sm:w-72 md:w-80";

  return (
    <div
      className={`${base} ${styles[position]} ${widthClass}`}
      onClick={!active ? onClick : undefined}
    >
      {/* IMAGE */}
      <div className="relative h-48 sm:h-52 overflow-hidden">
        <img
          src={project.img}
          alt={project.title}
          className={`w-full h-full object-cover transition-transform duration-500 ${
            active ? "hover:scale-110" : ""
          }`}
        />

        {/* EDGE BLUR */}
        {!active && (
          <>
            <div className="absolute inset-y-0 left-0 w-1/3 bg-linear-to-r from-white/70 to-transparent backdrop-blur-sm" />
            <div className="absolute inset-y-0 right-0 w-1/3 bg-linear-to-l from-white/70 to-transparent backdrop-blur-sm" />
          </>
        )}

        {/* CLICK OVERLAY */}
        {active && (
          <Link to={project.route} className="absolute inset-0 z-40" />
        )}
      </div>

      <div className="p-4 sm:p-5 bg-white relative z-50">
        <h3 className="font-semibold text-lg text-green-600">
          {project.title}
        </h3>
        <p className="text-sm text-gray-600 mt-2">{project.desc}</p>

        {active && (
          <button
            onClick={handleNavigate}
            className="mt-4 w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
          >
            Learn More
          </button>
        )}
      </div>
    </div>
  );
};

export default Projects;
