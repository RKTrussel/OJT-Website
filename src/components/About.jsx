import React from "react";
import logo from "../img/cliberduche_logo.png"; 
const About = ({ refProp, visible }) => {
  return (
    <>
      <section
        id="about"
        ref={refProp}
        className={`scroll-mt-18 w-full bg-gradient-to-r from-green-200 via-blue-50 to-blue-300 transition-all duration-700 ${
          visible ? "animate-fade-in-up" : "opacity-0"
        }`}
      >
        <div className="h-1 bg-gradient-to-r from-green-400 via-blue-400 to-green-400"></div>
        <div className="max-w-7xl mx-auto px-6 py-16">
          {/* Hero Header */}
          <div className="text-center mb-16 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-green-100/30 via-blue-100/30 to-green-100/30 rounded-3xl -z-10"></div>
            <div className="flex items-center justify-center gap-4 mb-6">
              <img
                src={logo}
                alt="Cliberduche Logo"
                className="w-24 h-24 object-contain"
              />
              <h2 className="text-5xl font-bold text-green-800">
                About Us
              </h2>
            </div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
              Embark on our journey of excellence, from humble beginnings to industry leadership in land development and construction.
            </p>
            <div className="flex justify-center gap-8 text-center">
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer">
                <div className="text-3xl font-bold text-green-600 animate-pulse">2018</div>
                <div className="text-sm text-gray-600">Founded</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer">
                <div className="text-3xl font-bold text-blue-600 animate-pulse">14M+</div>
                <div className="text-sm text-gray-600">Cubic Meters</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer">
                <div className="text-3xl font-bold text-green-600 animate-pulse">2</div>
                <div className="text-sm text-gray-600">Locations</div>
              </div>
            </div>
          </div>

          {/* Storytelling Sections */}
          <div className="space-y-16">
            {/* Our Beginning */}
            <div className="relative overflow-hidden rounded-3xl shadow-2xl animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="absolute inset-0">
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                  alt="Company Beginning"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 to-blue-900/80"></div>
              </div>
              <div className="relative z-10 p-16 text-white">
                <div className="max-w-2xl">
                  <h3 className="text-4xl font-bold mb-6 flex items-center gap-4">
                    <span className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-2xl">🌱</span>
                    Our Beginning
                  </h3>
                  <p className="text-lg leading-relaxed mb-8 text-justify">
                    Established in 2018, Cliberduche Corporation emerged with a clear vision: to provide unparalleled land development and construction services across the Philippines. Officially registered with the Securities and Exchange Commission on November 28, 2018, we began our journey with unwavering commitment to quality and integrity.
                  </p>
                  <blockquote className="text-xl italic border-l-4 border-white/50 pl-6 mb-6 animate-fade-in-up" style={{ animationDelay: '1s' }}>
                    "From the ground up, we build not just structures, but legacies of trust and excellence."
                  </blockquote>
                </div>
              </div>
            </div>

            {/* Our Commitment */}
            <div className="relative overflow-hidden rounded-3xl shadow-2xl animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <div className="absolute inset-0">
                <img
                  src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                  alt="Our Commitment"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-blue-900/80 to-green-900/80"></div>
              </div>
              <div className="relative z-10 p-16 text-white">
                <div className="max-w-2xl ml-auto">
                  <h3 className="text-4xl font-bold mb-6 flex items-center gap-4">
                    <span className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-2xl">⚡</span>
                    Our Commitment
                  </h3>
                  <p className="text-lg leading-relaxed mb-8 text-justify">
                    We are dedicated to delivering premium backfill materials including sub-base, aggregates, and boulders. Our extensive land development sites in Laguna and Cavite boast over 14 million cubic meters of high-quality materials, ensuring we meet the demands of the rapidly growing construction industry.
                  </p>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 ml-auto" style={{ width: 'fit-content' }}>
                    <p className="text-sm font-semibold mb-2">Quality Standards</p>
                    <p className="text-xs opacity-90">Exceeding industry expectations since day one</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Our Impact */}
            <div className="relative overflow-hidden rounded-3xl shadow-2xl animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              <div className="absolute inset-0">
                <img
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                  alt="Our Impact"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-green-900/60 to-blue-900/80"></div>
              </div>
              <div className="relative z-10 p-16 text-white">
                <div className="max-w-4xl mx-auto text-center">
                  <h3 className="text-4xl font-bold mb-6 flex items-center justify-center gap-4">
                    <span className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-2xl">🌍</span>
                    Our Impact
                  </h3>
                  <p className="text-lg leading-relaxed mb-10 text-justify">
                    Beyond construction, we're shaping the future of Philippine infrastructure. Our sustainable practices and commitment to environmental regulations ensure that every project contributes positively to our communities and economy.
                  </p>
                  <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-colors duration-300">
                      <div className="text-2xl mb-3">🏗️</div>
                      <div className="font-semibold mb-1">Infrastructure</div>
                      <div className="text-sm opacity-90">Building tomorrow's foundations</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-colors duration-300">
                      <div className="text-2xl mb-3">👥</div>
                      <div className="font-semibold mb-1">Employment</div>
                      <div className="text-sm opacity-90">Creating opportunities for Filipinos</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-colors duration-300">
                      <div className="text-2xl mb-3">🌱</div>
                      <div className="font-semibold mb-1">Sustainability</div>
                      <div className="text-sm opacity-90">Environmental responsibility</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="h-1 bg-gradient-to-r from-green-400 via-blue-400 to-green-400"></div>
    </>
  );
};

export default About;
