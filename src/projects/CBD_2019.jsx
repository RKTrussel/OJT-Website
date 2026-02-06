import React, { useEffect, useState } from "react";
import { Calendar, ChevronLeft, ChevronRight, X } from "lucide-react";

import Picture17 from "../img/CBD2019_Images/Picture17.png";
import Picture18 from "../img/CBD2019_Images/Picture18.png";
import Picture19 from "../img/CBD2019_Images/Picture19.png";
import Picture20 from "../img/CBD2019_Images/Picture20.png";
import Picture21 from "../img/CBD2019_Images/Picture21.png";
import Picture22 from "../img/CBD2019_Images/Picture22.png";
import ProjectDetails from "../components/ProjectDetails";

const GALLERY_IMAGES = [
  Picture17,
  Picture18,
  Picture19,
  Picture20,
  Picture21,
  Picture22,
];

const CBD_2019 = () => {
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
    <div className="w-full bg-white">
      {/* ================= HERO (RESPONSIVE – MOBILE FRIENDLY) ================= */}
      <section className="relative w-full h-[60vh] sm:h-[65vh] lg:h-[70vh] overflow-hidden">
        {heroImages.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="Road Construction Hero"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === activeIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative z-10 h-full flex items-center">
          <div
            className="
        w-full max-w-7xl mx-auto
        px-4 sm:px-6 lg:px-8
        text-center md:text-left
      "
          >
            <div className="max-w-xl mx-auto md:mx-0 text-white">
              <h1
                className="
            font-bold mb-4
            text-3xl sm:text-4xl md:text-5xl lg:text-6xl
            leading-tight
          "
              >
                CBD BUILDING PROJECT
              </h1>

              <p
                className="
            text-base sm:text-lg md:text-xl
            leading-relaxed
            text-gray-200
          "
              >
                Modernizing urban infrastructure through durable, safe, and
                sustainable road networks.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-300 mx-auto px-6">
        {/* ================= OVERVIEW (MOBILE RESPONSIVE) ================= */}
        <section className="my-12 md:my-20 grid gap-6 md:grid-cols-3">
          {/* Project Overview */}
          <div className="md:col-span-2 bg-gray-50 rounded-2xl p-6 sm:p-8 shadow-sm">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
              Project Overview
            </h2>
            <p className="text-base sm:text-lg leading-relaxed text-gray-700">
              This project focuses on the planning, construction, and delivery
              of high-quality road infrastructure designed to improve traffic
              flow, safety, and long-term durability.
            </p>
          </div>

          {/* Key Details */}
          <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 shadow-sm">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
              Key Details
            </h3>
            <div className="flex items-center gap-3 text-base sm:text-lg">
              <Calendar className="w-5 h-5" />
              <span>2019</span>
            </div>
          </div>
        </section>

        {/* ================= GALLERY (RESPONSIVE) ================= */}
        <section className="mb-24">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold text-center md:text-left">
              Project Gallery
            </h2>
          </div>

          {/* Mobile: Swipe | Desktop: Grid */}
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
                  overflow-hidden rounded-xl shadow-md
                "
              >
                <img
                  src={img}
                  alt="Gallery"
                  className="
                    w-full h-64 object-cover
                    transition-transform duration-500
                    group-hover:scale-110
                  "
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
                  <span className="text-white text-sm tracking-wide">
                    Tap to preview
                  </span>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-4 text-sm text-gray-500 md:hidden">
            Swipe left or right to view more photos
          </p>
        </section>

        <ProjectDetails />
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
  );
};

export default CBD_2019;
