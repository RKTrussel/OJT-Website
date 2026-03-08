import React, { useEffect, useState } from "react";
import heroBg from "../img/main_background.png";

const Hero = ({ parallaxRef, scrollY }) => {
  const [bgLoaded, setBgLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    const handleLoad = () => setBgLoaded(true);
    img.onload = handleLoad;
    img.onerror = handleLoad;
    img.src = heroBg;

    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, []);

  return (
    <div>
      <header className="relative min-h-screen flex items-center justify-center text-white overflow-hidden px-4 sm:px-6">
        <div
          className={`absolute inset-0 bg-cinematic ${
            bgLoaded ? "is-loaded" : ""
          }`}
        >
          <div
            ref={parallaxRef}
            className="absolute inset-0 bg-cover bg-center bg-cinematic__image"
            style={{
              backgroundImage: `url(${heroBg})`,
              "--parallaxY": `${scrollY * 0.5}px`,
            }}
          ></div>

          <div className="absolute inset-0 bg-linear-to-r from-sky-900/70 to-emerald-900/70"></div>
          <div className="absolute inset-0 bg-linear-to-b from-black/45 via-black/10 to-black/65"></div>
          <div className="absolute inset-0 section-noise"></div>
        </div>

        <div className="relative z-10 text-center max-w-4xl">
          <p className="text-[10px] sm:text-xs uppercase tracking-[0.3em] sm:tracking-[0.4em] text-emerald-200/90 mb-3 sm:mb-4">
            Land Development & Construction
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-5 leading-tight">
            Build with precision. Deliver with confidence.
          </h1>

          <p className="text-sm sm:text-base md:text-xl lg:text-2xl text-slate-100/90 mb-6 sm:mb-8 text-center sm:text-justify">
            End-to-end site development, backfill sourcing, and infrastructure
            execution across the Philippines.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full">
            <a
              href="#contact"
              className="focus-ring w-full sm:w-auto inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-6 sm:px-8 rounded-full transition duration-300 shadow-[0_18px_45px_-28px_rgba(16,185,129,0.7)]"
            >
              Start a Project
            </a>

            <a
              href="#projects"
              className="focus-ring w-full sm:w-auto inline-flex items-center justify-center bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-6 sm:px-8 rounded-full border border-white/20 transition duration-300"
            >
              View Projects
            </a>
          </div>

          <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 text-center max-w-md mx-auto">
            {[
              { label: "Since", value: "2018" },
              { label: "Location", value: "Laguna" },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-white/10 border border-white/10 rounded-xl px-4 py-3 backdrop-blur-sm"
              >
                <p className="text-xs text-slate-200/80">{item.label}</p>
                <p className="text-sm sm:text-base font-semibold text-white">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </header>
    </div>
  );
};

export default Hero;
