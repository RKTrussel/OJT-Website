import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Calendar,
} from "lucide-react";
import logo from "../img/cliberduche_logo.png";
import cbdImg from "../img/CBD_2019.png";
import mdi24Img from "../img/MDI_2024.png";
import mdi25Img from "../img/MDI_2025.png";
import mdi26Img from "../img/MDI_2026.png";
import pierNorthImg from "../img/Pier_NorthHarbour2026.png";
import silangCaviteImg from "../img/SilangCavite2021.png";
import tanzaCaviteImg from "../img/TanzaCavite2021.png";

const projects = [
  {
    title: "CBD Building Project",
    year: "2019",
    location: "Central Business District",
    desc: "Highway and infrastructure development projects enhancing urban connectivity and mobility.",
    tag: "Infrastructure",
    img: cbdImg,
    route: "cbd-2019",
  },
  {
    title: "MDI – Mercator Holdings",
    year: "2024",
    location: "Metro Manila",
    desc: "Comprehensive site preparation and land development services with precision earthworks.",
    tag: "Land Development",
    img: mdi24Img,
    route: "mdi-2024",
  },
  {
    title: "MDI – Mercator Holdings",
    year: "2025",
    location: "Metro Manila",
    desc: "Bridge building and advanced structural engineering solutions for modern transit.",
    tag: "Structural",
    img: mdi25Img,
    route: "mdi-2025",
  },
  {
    title: "MDI – Mercator Holdings",
    year: "2026",
    location: "Metro Manila",
    desc: "Innovative bridge construction showcasing engineering excellence and design integrity.",
    tag: "Bridge Works",
    img: mdi26Img,
    route: "mdi-2026",
  },
  {
    title: "Pier 2 North Harbour",
    year: "2026",
    location: "North Harbour, Manila",
    desc: "Harbour infrastructure and maritime development projects built for durability and scale.",
    tag: "Maritime",
    img: pierNorthImg,
    route: "pier-2-north-harbour-2026",
  },
  {
    title: "Silang, Cavite Project",
    year: "2021",
    location: "Silang, Cavite",
    desc: "Structural engineering and community development initiatives delivering lasting impact.",
    tag: "Community",
    img: silangCaviteImg,
    route: "silang-cavite-2021",
  },
  {
    title: "WDV Phase 4 Tanza",
    year: "2026",
    location: "Tanza, Cavite",
    desc: "Advanced bridge construction with sustainable engineering methods and precision execution.",
    tag: "Bridge Works",
    img: tanzaCaviteImg,
    route: "tanza-cavite-2026",
  },
];

const TAG_COLORS = {
  Infrastructure: "bg-sky-500/20    text-sky-300    border-sky-400/30",
  "Land Development":
    "bg-emerald-500/20 text-emerald-300 border-emerald-400/30",
  Structural: "bg-violet-500/20  text-violet-300  border-violet-400/30",
  "Bridge Works": "bg-amber-500/20   text-amber-300   border-amber-400/30",
  Maritime: "bg-cyan-500/20    text-cyan-300    border-cyan-400/30",
  Community: "bg-rose-500/20    text-rose-300    border-rose-400/30",
};

/* ─── Single Card ─── */
const ProjectCard = ({ project, index, isCarousel }) => {
  const navigate = useNavigate();
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onClick={() => navigate(project.route)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ animationDelay: `${index * 80}ms` }}
      className={[
        "group relative cursor-pointer rounded-xl sm:rounded-2xl overflow-hidden",
        "ring-1 ring-white/10 bg-slate-900/60 backdrop-blur-sm",
        "transition-all duration-500",
        "hover:ring-blue-400/50 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-1 sm:hover:-translate-y-2",
        isCarousel ? "shrink-0 w-[78vw] max-w-75 snap-center" : "w-full",
      ].join(" ")}
    >
      {/* Image */}
      <div className="relative overflow-hidden h-44 sm:h-52 lg:h-60">
        <img
          src={project.img}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/40 to-transparent" />
        <span
          className={`absolute top-2.5 left-2.5 text-[9px] sm:text-[10px] uppercase tracking-widest px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full border font-semibold backdrop-blur-sm ${TAG_COLORS[project.tag] ?? "bg-white/10 text-white border-white/20"}`}
        >
          {project.tag}
        </span>
      </div>

      {/* Content */}
      <div className="p-3.5 sm:p-4 lg:p-5 flex flex-col gap-2 sm:gap-3">
        <div className="flex items-center gap-2 text-[10px] sm:text-xs text-slate-500">
          <span className="flex items-center gap-1 shrink-0">
            <Calendar className="w-3 h-3" /> {project.year}
          </span>
          <span className="w-1 h-1 rounded-full bg-slate-700 shrink-0" />
          <span className="flex items-center gap-1 min-w-0">
            <MapPin className="w-3 h-3 shrink-0" />
            <span className="truncate">{project.location}</span>
          </span>
        </div>

        <h3 className="text-slate-100 font-semibold leading-snug tracking-tight text-sm sm:text-base lg:text-lg group-hover:text-blue-300 transition-colors duration-300">
          {project.title}
        </h3>

        <p className="text-slate-400 leading-relaxed line-clamp-2 text-xs sm:text-sm">
          {project.desc}
        </p>

        <div className="flex items-center justify-between pt-2 sm:pt-3 border-t border-white/5">
          <span className="text-[10px] sm:text-xs text-slate-500 uppercase tracking-widest">
            View Project
          </span>
          <span
            className={`flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full border transition-all duration-300 ${hovered ? "bg-blue-500 border-blue-400 translate-x-1 shadow-lg shadow-blue-500/50" : "bg-blue-500/10 border-blue-400/20"}`}
          >
            <ArrowRight
              className={`w-3.5 h-3.5 transition-colors duration-300 ${hovered ? "text-white" : "text-blue-400"}`}
            />
          </span>
        </div>
      </div>
    </div>
  );
};

/* ─── Main Section ─── */
const Projects = ({ refProp, visible }) => {
  const scrollRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [page, setPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6);

  /* Responsive detection */
  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      const mobile = w < 640;
      setIsMobile(mobile);
      if (!mobile) {
        setItemsPerPage(w >= 1024 ? 3 : 4);
        setPage(1);
      }
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  /* Scroll-spy: update active dot as user swipes */
  useEffect(() => {
    if (!isMobile) return;
    const el = scrollRef.current;
    if (!el) return;
    const onScroll = () => {
      // card width ≈ 78vw, gap ≈ 12px — estimate active index
      const cardW = el.offsetWidth * 0.78 + 12;
      const idx = Math.round(el.scrollLeft / cardW);
      setActiveIndex(Math.min(Math.max(idx, 0), projects.length - 1));
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, [isMobile]);

  /* Programmatically scroll to a card */
  const scrollToCard = (i) => {
    const el = scrollRef.current;
    if (!el) return;
    const cardW = el.offsetWidth * 0.78 + 12;
    el.scrollTo({ left: cardW * i, behavior: "smooth" });
    setActiveIndex(i);
  };

  /* Desktop pagination */
  const totalPages = Math.ceil(projects.length / itemsPerPage);
  const currentCards = projects.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage,
  );

  return (
    <section
      id="projects"
      ref={refProp}
      className="scroll-mt-16 sm:scroll-mt-20 w-full relative overflow-hidden"
    >
      {/* Backgrounds */}
      <div className="absolute inset-0 bg-linear-to-br from-slate-950 via-slate-900 to-slate-950" />
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(59,130,246,0.15) 0%, transparent 60%)",
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.5) 1px,transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div
        className={`relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        {/* Header */}
        <div className="flex flex-col items-center gap-3 sm:gap-4 mb-6 sm:mb-10 lg:mb-14 text-center">
          <span className="inline-flex items-center gap-2 text-[10px] sm:text-[11px] uppercase tracking-[0.25em] sm:tracking-[0.35em] text-blue-300 bg-blue-400/10 border border-blue-300/25 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            Portfolio Highlights
          </span>

          <div className="flex items-center gap-3 sm:gap-4">
            <img
              src={logo}
              alt="Cliberduche Logo"
              className="w-9 h-7 sm:w-12 sm:h-12 lg:w-14 lg:h-14 drop-shadow-lg"
            />
            <h2 className="font-bold text-white tracking-tight text-2xl sm:text-4xl lg:text-5xl">
              Our Projects
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <span className="h-px w-10 sm:w-16 bg-linear-to-r from-transparent to-blue-400/60" />
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
            <span className="h-px w-10 sm:w-16 bg-linear-to-l from-transparent to-blue-400/60" />
          </div>
        </div>

        <p className="text-center mb-8 sm:mb-10 lg:mb-14 max-w-xs sm:max-w-xl lg:max-w-2xl mx-auto text-slate-400 text-sm sm:text-base leading-relaxed">
          Featured work across land development, infrastructure, and complex
          construction — delivered with safety, quality, and speed.
        </p>

        {/* ══ MOBILE: swipe carousel ══ */}
        {isMobile && (
          <>
            <p className="text-center text-[10px] uppercase tracking-widest text-slate-500 mb-3 flex items-center justify-center gap-2">
              <ChevronLeft className="w-3 h-3" /> Swipe to explore{" "}
              <ChevronRight className="w-3 h-3" />
            </p>

            <div
              ref={scrollRef}
              className="flex gap-3 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 -mx-4 px-4"
              style={{
                scrollbarWidth: "none",
                WebkitOverflowScrolling: "touch",
              }}
            >
              {/* Leading space so first card is nicely offset */}
              <div className="shrink-0 w-[5vw]" />
              {projects.map((project, i) => (
                <ProjectCard
                  key={project.route}
                  project={project}
                  index={i}
                  isCarousel
                />
              ))}
              <div className="shrink-0 w-[5vw]" />
            </div>

            {/* Dots + arrows */}
            <div className="flex items-center justify-center gap-3 mt-5">
              <button
                onClick={() => scrollToCard(Math.max(activeIndex - 1, 0))}
                disabled={activeIndex === 0}
                className="flex items-center justify-center w-8 h-8 rounded-full border border-white/10 bg-slate-900/70 text-slate-300 hover:border-blue-400/50 hover:text-blue-300 disabled:opacity-30 transition-all"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-1.5">
                {projects.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => scrollToCard(i)}
                    className={`rounded-full transition-all duration-300 ${
                      activeIndex === i
                        ? "w-6 h-2 bg-blue-500 shadow-md shadow-blue-500/50"
                        : "w-2 h-2 bg-slate-600 hover:bg-slate-400"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={() =>
                  scrollToCard(Math.min(activeIndex + 1, projects.length - 1))
                }
                disabled={activeIndex === projects.length - 1}
                className="flex items-center justify-center w-8 h-8 rounded-full border border-white/10 bg-slate-900/70 text-slate-300 hover:border-blue-400/50 hover:text-blue-300 disabled:opacity-30 transition-all"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <p className="text-center text-[10px] text-slate-500 mt-2 tabular-nums">
              {activeIndex + 1} / {projects.length}
            </p>
          </>
        )}

        {/* ══ TABLET + DESKTOP: paginated grid ══ */}
        {!isMobile && (
          <>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
              {currentCards.map((project, index) => (
                <ProjectCard
                  key={project.route}
                  project={project}
                  index={index}
                  isCarousel={false}
                />
              ))}
            </div>

            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-4 sm:gap-6 mt-10 sm:mt-14">
                <button
                  onClick={() => setPage((p) => Math.max(p - 1, 1))}
                  disabled={page === 1}
                  className="flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full border border-white/10 bg-slate-900/70 text-slate-300 hover:border-blue-400/50 hover:text-blue-300 disabled:opacity-30 disabled:cursor-not-allowed transition-all text-xs sm:text-sm font-medium"
                >
                  <ChevronLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> Previous
                </button>

                <div className="flex items-center gap-1.5 sm:gap-2">
                  {Array.from({ length: totalPages }).map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setPage(i + 1)}
                      className={`rounded-full transition-all duration-300 ${
                        page === i + 1
                          ? "w-6 sm:w-7 h-2 sm:h-2.5 bg-blue-500 shadow-md shadow-blue-500/40"
                          : "w-2 sm:w-2.5 h-2 sm:h-2.5 bg-slate-600 hover:bg-slate-400"
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
                  disabled={page === totalPages}
                  className="flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full border border-white/10 bg-slate-900/70 text-slate-300 hover:border-blue-400/50 hover:text-blue-300 disabled:opacity-30 disabled:cursor-not-allowed transition-all text-xs sm:text-sm font-medium"
                >
                  Next <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default Projects;
