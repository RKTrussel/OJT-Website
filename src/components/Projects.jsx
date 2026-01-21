import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../img/cliberduche_logo.png";
import projectsBg from "../img/main_background-projects.png";

const Projects = ({ refProp, visible }) => {
  const [bgLoaded, setBgLoaded] = useState(false);
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const projects = [
    {
      title: "Road Construction",
      desc: "Highway and infrastructure development projects",
      img: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=900&q=80",
      route: "/cliberduche-website/sample-project/",
    },
    {
      title: "Land Development",
      desc: "Site preparation and land development services",
      img: "https://images.unsplash.com/photo-1590845947670-c009801ffa74?auto=format&fit=crop&w=900&q=80",
      route: "/projects/land-development",
    },
    {
      title: "Bridge Construction",
      desc: "Bridge building and structural engineering",
      img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=900&q=80",
      route: "/projects/bridge-construction",
    },
  ];

  const total = projects.length;

  const slide = (dir) => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    setDirection(dir);

    setCurrent((prev) =>
      dir === "next" ? (prev + 1) % total : (prev - 1 + total) % total
    );

    setTimeout(() => {
      setIsTransitioning(false);
      setDirection(null);
    }, 500); 
  };

  const getIndex = (offset) => (current + offset + total) % total;

  return (
    <section
      id="projects"
      ref={refProp}
      className="scroll-mt-18 w-full relative overflow-hidden"
    >
      <div className="absolute inset-0">
        <img
          src={projectsBg}
          className="absolute inset-0 w-full h-full object-cover"
          onLoad={() => setBgLoaded(true)}
          onError={() => setBgLoaded(true)}
          alt="Projects Background"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/85 via-slate-900/65 to-emerald-900/70" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
        <div className="flex items-center justify-center gap-4 mb-6">
          <img src={logo} alt="Cliberduche Logo" className="w-16 h-16" />
          <h2 className="text-3xl font-semibold text-white">Our Projects</h2>
        </div>

        <p className="text-center mb-12 max-w-3xl mx-auto text-slate-200">
          Our expertise spans land development, infrastructure, and complex
          construction projects.
        </p>

        <div className="relative h-[420px] flex items-center justify-center perspective-[1200px]">
          <button
            onClick={() => slide("prev")}
            className="absolute left-4 z-40 bg-white/70 hover:bg-white p-4 rounded-full shadow hover:scale-110 transition"
          >
            <ChevronLeft className="w-7 h-7 text-green-600" />
          </button>

          <button
            onClick={() => slide("next")}
            className="absolute right-4 z-40 bg-white/70 hover:bg-white p-4 rounded-full shadow hover:scale-110 transition"
          >
            <ChevronRight className="w-7 h-7 text-green-600" />
          </button>

          <DeckCard
            project={projects[getIndex(-1)]}
            position="left"
            direction={direction}
          />
          <DeckCard
            project={projects[current]}
            position="center"
            active
            direction={direction}
          />
          <DeckCard
            project={projects[getIndex(1)]}
            position="right"
            direction={direction}
          />
        </div>
      </div>
    </section>
  );
};

const DeckCard = ({ project, position, active, direction }) => {
  const base =
    "absolute w-60 sm:w-72 md:w-80 rounded-2xl overflow-hidden shadow-xl transform transition-all duration-500 ease-out bg-white border border-gray-200";

  const tumble =
    direction === "prev"
      ? "rotate-[10deg] translate-x-8"
      : direction === "next"
      ? "-rotate-[10deg] -translate-x-8"
      : "";

  const styles = {
    center: `z-30 scale-105 rotate-0 opacity-100 ${tumble} animate-[float_4s_ease-in-out_infinite]`,
    left: "z-10 -translate-x-52 scale-90 -rotate-12 opacity-40 blur-sm",
    right: "z-10 translate-x-52 scale-90 rotate-12 opacity-40 blur-sm",
  };

  return (
    <div className={`${base} ${styles[position]}`}>
      <div className="h-52 overflow-hidden relative">
        <img
          src={project.img}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          alt={project.title}
        />
        {active && <Link to={project.route} className="absolute inset-0 z-40" />}
      </div>

      <div className="p-5 bg-white">
        <h3 className="text-lg font-semibold text-green-600">{project.title}</h3>
        <p className="text-sm text-gray-600 mt-2">{project.desc}</p>
        {active && (
          <button className="mt-4 w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition">
            Learn More
          </button>
        )}
      </div>
    </div>
  );
};

export default Projects;
