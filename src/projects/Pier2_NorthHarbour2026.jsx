import React, { useEffect, useState } from "react";
import { Calendar, ChevronLeft, ChevronRight, X } from "lucide-react";

import Picture41 from "../img/PierNorthHarbour2026_Images/Picture41.png";
import Picture42 from "../img/PierNorthHarbour2026_Images/Picture42.png";
import Picture43 from "../img/PierNorthHarbour2026_Images/Picture43.png";
import Picture44 from "../img/PierNorthHarbour2026_Images/Picture44.png";
import Picture45 from "../img/PierNorthHarbour2026_Images/Picture45.png";
import ProjectDetails from "../components/ProjectDetails";

const GALLERY_IMAGES = [Picture41, Picture42, Picture43, Picture44, Picture45];

const Pier2_NorthHarbour2026 = () => {
  /* ================= HERO ================= */
  const heroImages = GALLERY_IMAGES;
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  /* ================= PREVIEW MODAL ================= */
  const [previewIndex, setPreviewIndex] = useState(null);

  const closePreview = () => setPreviewIndex(null);

  const nextPreview = () =>
    setPreviewIndex((prev) => (prev + 1) % GALLERY_IMAGES.length);

  const prevPreview = () =>
    setPreviewIndex(
      (prev) => (prev - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length,
    );

  useEffect(() => {
    const handleEsc = (e) => e.key === "Escape" && closePreview();
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <div className="w-full min-h-screen surface-b text-slate-100 relative overflow-hidden">
      <div className="absolute inset-0 section-noise" />
      <div className="relative z-10">
      {/* ================= HERO ================= */}
      <section className="relative w-full h-[60vh] sm:h-[65vh] lg:h-[70vh] overflow-hidden">
        {heroImages.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="Pier 2 North Harbour Hero"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === activeIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/80" />

        <div className="relative z-10 h-full flex items-center">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
            <div className="w-full space-y-4 rounded-2xl border border-white/10 bg-white/10 p-5 sm:p-7 backdrop-blur-sm">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-[11px] uppercase tracking-[0.3em] text-white/90">
                Project Highlight
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
                PIER 2 NORTH HARBOUR
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-white/80">
                Modernizing urban infrastructure through durable, safe, and
                sustainable road networks.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-300 mx-auto px-6">
        {/* ================= OVERVIEW ================= */}
        <section className="my-12 md:my-20 grid gap-6 md:grid-cols-3">
          {/* Project Overview */}
          <div className="md:col-span-2 rounded-3xl border border-white/10 card-surface p-6 sm:p-8 shadow-[0_20px_60px_-40px_rgba(2,6,23,0.7)]">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-slate-100">
              Project Overview
            </h2>
            <p className="text-base sm:text-lg leading-relaxed text-slate-300 text-justify">
              The Pier 2 North Harbour project delivered maritime-focused civil
              works, including harbour-side earthworks, quay support, and
              access improvements. It was designed to strengthen port
              operations through safer movement and reinforced coastal
              infrastructure.
            </p>
          </div>

          {/* Key Details */}
          <div className="rounded-3xl border border-white/10 card-surface p-6 sm:p-8 shadow-[0_20px_60px_-40px_rgba(2,6,23,0.7)]">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 text-slate-100">
              Key Details
            </h3>
            <div className="flex items-center gap-3 text-base sm:text-lg">
              <Calendar className="w-5 h-5" />
              <span>2026</span>
            </div>
          </div>
        </section>

        {/* ================= GALLERY ================= */}
        <section className="mb-24">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-100">
              Project Gallery
            </h2>
            <span className="hidden sm:block h-px flex-1 bg-white/10" />
          </div>

          <div
            className="
              flex gap-4 overflow-x-auto pb-4
              snap-x snap-mandatory
              md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-6
              md:overflow-visible
            "
          >
            {GALLERY_IMAGES.map((img, index) => (
              <div
                key={index}
                onClick={() => setPreviewIndex(index)}
                className="
                  group relative cursor-pointer
                  min-w-[80%] sm:min-w-[60%]
                  md:min-w-0
                  snap-center
                  overflow-hidden rounded-2xl shadow-md ring-1 ring-white/10
                  transition-all duration-300 hover:-translate-y-1 hover:shadow-xl
                "
              >
                <img
                  src={img}
                  alt="Gallery"
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
                  <span className="text-white text-sm tracking-wide">
                    Tap to preview
                  </span>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-4 text-sm text-slate-400 md:hidden">
            Swipe left or right to view more photos
          </p>
        </section>

        <ProjectDetails
          scopeText="Harbour-side earthworks, quay support, and access improvements."
          outcomeText="Enhanced port operations with safer access and reinforced coastal works."
        />
      </div>

      {/* ================= PREVIEW MODAL ================= */}
      {previewIndex !== null && (
        <div
          onClick={closePreview}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
        >
          <button
            onClick={closePreview}
            className="absolute top-6 right-6 text-white hover:scale-110 transition"
          >
            <X size={32} />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              prevPreview();
            }}
            className="absolute left-6 text-white hover:scale-110 transition"
          >
            <ChevronLeft size={40} />
          </button>

          <img
            src={GALLERY_IMAGES[previewIndex]}
            alt="Preview"
            onClick={(e) => e.stopPropagation()}
            className="max-w-[90%] max-h-[85vh] object-contain rounded-xl shadow-xl"
          />

          <button
            onClick={(e) => {
              e.stopPropagation();
              nextPreview();
            }}
            className="absolute right-6 text-white hover:scale-110 transition"
          >
            <ChevronRight size={40} />
          </button>
        </div>
      )}
      </div>
    </div>
  );
};

export default Pier2_NorthHarbour2026;
