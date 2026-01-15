import React from "react";

const Mission = ({ refProp, visible }) => {
  return (
    <>
      <section
        id="mission"
        ref={refProp}
        className={`bg-linear-to-br from-gray-50 to-gray-100 py-16 transition-all duration-700 ${
          visible ? "animate-fade-in-up" : "opacity-0"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-12 text-center text-green-600">
            Mission & Vision
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
              <div className="flex items-center mb-6">
                <img
                  src="https://img.icons8.com/ios-filled/50/22c55e/handshake.png"
                  alt="Mission"
                  className="w-12 h-12 mr-4"
                />
                <h3 className="text-2xl font-semibold text-green-600">
                  Our Mission
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                To provide high-quality backfill materials and land development
                services while adhering to environmental regulations, promoting
                sustainable development, creating jobs for Filipinos, and
                delivering value to communities, investors, employees, and
                stakeholders.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
              <div className="flex items-center mb-6">
                <img
                  src="https://img.icons8.com/ios-filled/50/3b82f6/binoculars.png"
                  alt="Vision"
                  className="w-12 h-12 mr-4"
                />
                <h3 className="text-2xl font-semibold text-blue-600">
                  Our Vision
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                To be a highly respected, world-class land development company
                committed to international standards, environmental
                conservation, and sustainable projects that contribute to future
                commercial and housing developments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Separator */}
      <div className="h-1 bg-linear-to-r from-blue-500 via-green-500 to-blue-500"></div>
    </>
  );
};

export default Mission;
