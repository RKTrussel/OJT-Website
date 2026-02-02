import React, { useEffect, useState } from "react";
import {
  Calendar,
  ListChecks,
  Settings,
  CheckCircle,
  MapPinned,
  DraftingCompass,
  HardHat,
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";

import Picture17 from "../img/CBD2019_Images/Picture17.png";
import Picture18 from "../img/CBD2019_Images/Picture18.png";
import Picture19 from "../img/CBD2019_Images/Picture19.png";
import Picture20 from "../img/CBD2019_Images/Picture20.png";
import Picture21 from "../img/CBD2019_Images/Picture21.png";
import Picture22 from "../img/CBD2019_Images/Picture22.png";

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

        {/* ================= PROJECT DETAILS (MOBILE RESPONSIVE) ================= */}
        <section className="mb-16 md:mb-28">
          <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold mb-8 text-center md:text-left">
            Project Details
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            {/* Scope */}
            <div className="bg-gray-50 p-6 sm:p-8 rounded-2xl shadow-sm text-center md:text-left">
              <ListChecks className="w-6 h-6 sm:w-8 sm:h-8 mb-2 sm:mb-4 mx-auto" />
              <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2 text-center">
                Scope
              </h3>
              <p className="text-base sm:text-lg text-gray-700 text-center">
                (3-STOREY BUILDING)
              </p>
            </div>

            {/* MQP Process - Timeline */}
            <div className="bg-gray-50 p-6 sm:p-8 rounded-2xl shadow-sm">
              <Settings className="w-6 h-6 sm:w-8 sm:h-8 mb-3 sm:mb-6 mx-auto text-blue-600" />
              <h3 className="text-lg sm:text-xl font-semibold mb-6 text-center">
                Manufacturing Quality Plan (MQP) Process
              </h3>

              <div className="relative ml-4">
                {/* Vertical Line */}
                <div className="absolute left-3 top-0 h-full border-l-2 border-gray-300"></div>

                {[
                  {
                    step: "1",
                    title: "Specific Order of Materials & P.O.",
                    desc: "Place orders according to production plan to ensure proper material availability.",
                    color: "bg-red-100 text-red-700",
                  },
                  {
                    step: "2",
                    title: "Source – Site of Materials",
                    desc: "Identify and secure the source of materials needed for production.",
                    color: "bg-green-100 text-green-700",
                  },
                  {
                    step: "3",
                    title: "Sampling and Laboratory Test",
                    desc: "Perform quality checks through sampling and lab testing to ensure standards.",
                    color: "bg-blue-100 text-blue-700",
                  },
                  {
                    step: "4",
                    title: "Forecasting & Scheduling / Survey of Site",
                    desc: "Plan timelines, forecast material needs, and survey the site for readiness.",
                    color: "bg-green-100 text-green-700",
                  },
                  {
                    step: "5",
                    title: "Loading – Volume Check & Delivery",
                    desc: "Check volumes during loading and ensure delivery matches the order.",
                    color: "bg-blue-100 text-blue-700",
                  },
                  {
                    step: "6",
                    title: "Site Dumping – Spreading & Compaction",
                    desc: "Distribute and compact materials properly on site.",
                    color: "bg-green-100 text-green-700",
                  },
                  {
                    step: "7",
                    title: "Final Checking",
                    desc: "Perform final inspection to validate material quality and placement.",
                    color: "bg-red-100 text-red-700",
                  },
                ].map((item, i) => (
                  <div key={i} className="mb-8 relative pl-10">
                    <div
                      className={`absolute left-0 top-0 w-6 h-6 rounded-full flex items-center justify-center ${item.color} font-semibold`}
                    >
                      {item.step}
                    </div>
                    <h4 className="font-semibold text-base sm:text-sm mb-1">
                      {item.title}
                    </h4>
                    <p className="text-gray-700 text-sm sm:text-xs">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Result */}
            <div className="bg-gray-50 p-6 sm:p-8 rounded-2xl shadow-sm text-center md:text-left">
              <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8 mb-2 sm:mb-4 mx-auto " />
              <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2 text-center">
                Result
              </h3>
              <p className="text-base sm:text-lg text-gray-700 text-center">
                Delivered a durable, safer roadway with improved traffic flow
                and reduced maintenance requirements.
              </p>
            </div>
          </div>
        </section>
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
