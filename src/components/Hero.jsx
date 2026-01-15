import React from "react";

const Hero = ({ parallaxRef, scrollY }) => {
  return (
    <header className="relative h-screen flex items-center justify-center text-white overflow-hidden">
      <div
        ref={parallaxRef}
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80)",
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-green-900/70"></div>
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Cliberduche Corporation
        </h1>
        <p className="text-xl md:text-2xl mb-8">
          Foundations • Site Development • Full-scale Construction Works • Trust
          & Reliability
        </p>
        <a
          href="#about"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 shadow-lg"
        >
          Learn More
        </a>
      </div>
    </header>
  );
};

export default Hero;
