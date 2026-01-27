import React, { useEffect, useState } from "react";
import {
  Calendar,
  User,
  Briefcase,
  ListChecks,
  Settings,
  CheckCircle,
  MapPinned,
  DraftingCompass,
  HardHat,
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import heroImg from "../img/main_background-contact.jpg";
import gallery1 from "../img/main_background-mission.png";
import gallery2 from "../img/main_background-projects.png";
import gallery3 from "../img/main_background-services.png";

// Add all projects images here
const GALLERY_IMAGES = [
  gallery1,
  gallery2,
  gallery3,
  gallery1,
  gallery2,
  gallery3,
  gallery1,
  gallery2,
  gallery3,
  gallery1,
  gallery2,
];

const MDI_2025 = () => {
  const heroImages = [heroImg, gallery1, gallery2, gallery3];
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  const IMAGES_PER_PAGE = 8;
  const [page, setPage] = useState(0);

  const totalPages = Math.ceil(GALLERY_IMAGES.length / IMAGES_PER_PAGE);

  const startIndex = page * IMAGES_PER_PAGE;
  const currentImages = GALLERY_IMAGES.slice(
    startIndex,
    startIndex + IMAGES_PER_PAGE,
  );

  const nextPage = () => {
    if (page < totalPages - 1) setPage((prev) => prev + 1);
  };

  const prevPage = () => {
    if (page > 0) setPage((prev) => prev - 1);
  };

  return (
    <div className="w-full">
      <section className="relative w-full h-[70vh] overflow-hidden">
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

        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 mt-10 max-w-300 mx-auto h-full flex items-center px-6">
          <div className="max-w-xl text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Road Construction Project
            </h1>
            <p className="text-lg md:text-xl leading-relaxed">
              Modernizing urban infrastructure through durable, safe, and
              sustainable road networks.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-300 mx-auto px-6">
        {/* Project Overview */}
        <section className="grid md:grid-cols-3 gap-8 my-20">
          <div className="md:col-span-2">
            <h2 className="text-3xl font-bold mb-4">Project Overview</h2>
            <p className="text-lg leading-relaxed">
              This project focuses on the planning, construction, and delivery
              of high-quality road infrastructure designed to improve traffic
              flow, safety, and long-term durability.
            </p>
          </div>

          <div className="border-l border-gray-300 pl-6">
            <h3 className="text-2xl font-semibold mb-4">Key Details</h3>
            <ul className="space-y-3 text-lg">
              <li className="flex items-center gap-2">
                <Calendar className="w-5 h-5" /> Jan 2026
              </li>
              <li className="flex items-center gap-2">
                <Briefcase className="w-5 h-5" /> Metro City
              </li>
            </ul>
          </div>
        </section>

        {/* PROJECT GALLERY */}
        <section className="mb-20 relative">
          <h2 className="text-3xl font-bold mb-6">Project Gallery</h2>

          <div className="relative">
            {/* LEFT ARROW */}
            {page > 0 && (
              <button
                onClick={prevPage}
                className="absolute -left-8 top-1/2 -translate-y-1/2 z-10 bg-gray-400 backdrop-blur-md p-4 rounded-full shadow-lg hover:bg-black hover:text-white transition-all duration-300"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
            )}

            {/* RIGHT ARROW */}
            {page < totalPages - 1 && (
              <button
                onClick={nextPage}
                className="absolute -right-8 top-1/2 -translate-y-1/2 z-10 bg-gray-400 backdrop-blur-md p-4 rounded-full shadow-lg hover:bg-black hover:text-white transition-all duration-300"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            )}

            {/* Gallery Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-500 px-10">
              {currentImages.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Gallery ${index}`}
                  className="w-full h-56 object-cover rounded-lg hover:scale-105 transition-transform duration-300 shadow-md"
                />
              ))}

              {/* Invisible placeholders */}
              {Array.from({
                length: IMAGES_PER_PAGE - currentImages.length,
              }).map((_, index) => (
                <div
                  key={`placeholder-${index}`}
                  className="w-full h-56 invisible"
                ></div>
              ))}
            </div>
          </div>

          {totalPages > 1 && (
            <p className="text-center mt-4 text-gray-500">
              Page {page + 1} of {totalPages}
            </p>
          )}
        </section>

        {/* PROJECT DETAILS */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold mb-12">Project Details</h2>

          <div className="grid md:grid-cols-3 gap-10">
            <div>
              <ListChecks className="w-8 h-8 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Scope</h3>
              <p className="text-lg leading-relaxed">(3-STOREY BUILDING)</p>
            </div>

            <div>
              <Settings className="w-8 h-8 mb-4" />
              <h3 className="text-xl font-semibold mb-6">Process</h3>

              <div className="space-y-6 relative">
                <div className="flex gap-4 items-start">
                  <MapPinned className="w-6 h-6 text-black" />
                  <div>
                    <h4 className="font-semibold text-lg">Site Assessment</h4>
                    <p className="text-gray-600">
                      Field surveys, traffic analysis, and environmental
                      evaluation.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <DraftingCompass className="w-6 h-6 text-black" />
                  <div>
                    <h4 className="font-semibold text-lg">
                      Engineering Design
                    </h4>
                    <p className="text-gray-600">
                      Structural planning, drainage layout, and material
                      specification.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <HardHat className="w-6 h-6 text-black" />
                  <div>
                    <h4 className="font-semibold text-lg">
                      Phased Construction
                    </h4>
                    <p className="text-gray-600">
                      Controlled execution to minimize disruption and ensure
                      safety.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <ShieldCheck className="w-6 h-6 text-black" />
                  <div>
                    <h4 className="font-semibold text-lg">
                      Quality & Safety Control
                    </h4>
                    <p className="text-gray-600">
                      Continuous inspection, compliance checks, and final
                      validation.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <CheckCircle className="w-8 h-8 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Result</h3>
              <p className="text-lg leading-relaxed">
                Delivered a durable, safer roadway with improved traffic flow
                and reduced maintenance requirements.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MDI_2025;
