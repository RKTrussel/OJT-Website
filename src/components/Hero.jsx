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

          <div className="absolute inset-0 bg-linear-to-r from-blue-900/70 to-green-900/70"></div>
          <div className="absolute inset-0 bg-linear-to-b from-black/40 via-black/10 to-black/60"></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Cliberduche Corporation
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Foundations • Site Development • Full-scale Construction Works •
            Trust & Reliability
          </p>
          <a
            href="#about"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 shadow-lg"
          >
            Learn More
          </a>
        </div>
      </header>
      <div className="h-1 bg-linear-to-r from-green-500 via-blue-500 to-green-500"></div>
    </div>
  );
};

export default Hero;
