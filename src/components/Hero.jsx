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
      <header className="relative h-screen flex items-center justify-center text-white overflow-hidden">
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

        <div className="relative z-10 text-center px-6 max-w-4xl">
          <p className="text-xs uppercase tracking-[0.4em] text-emerald-200/90 mb-4">
            Land Development & Construction
          </p>
          <h1 className="text-5xl md:text-7xl font-bold mb-5">
            Build with precision. Deliver with confidence.
          </h1>
          <p className="text-lg md:text-2xl text-slate-100/90 mb-8">
            End-to-end site development, backfill sourcing, and infrastructure
            execution across the Philippines.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="focus-ring inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-8 rounded-full transition duration-300 shadow-[0_18px_45px_-28px_rgba(16,185,129,0.7)]"
            >
              Start a Project
            </a>
            <a
              href="#projects"
              className="focus-ring inline-flex items-center justify-center bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-8 rounded-full border border-white/20 transition duration-300"
            >
              View Projects
            </a>
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 text-center max-w-md mx-auto">
            {[
              { label: "Since", value: "2018" },
              { label: "Locations", value: "Laguna" },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-white/10 border border-white/10 rounded-xl px-4 py-3 backdrop-blur-sm"
              >
                <p className="text-xs text-slate-200/80">{item.label}</p>
                <p className="text-base font-semibold text-white">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </header>
    </div>
  );
};

export default Hero;
