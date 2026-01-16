import React from "react";

const Mission = ({ refProp, visible }) => {
  return (
    <>
      <section
        id="mission"
        ref={refProp}
        className={`scroll-mt-18 bg-linear-to-br from-gray-50 to-gray-100 py-16 transition-all duration-700 ${
          visible ? "animate-fade-in-up" : "opacity-0"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-12 text-center text-green-600">
            Mission & Vision
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
              <div className="text-center mb-6">
                <img
                  src="https://img.icons8.com/ios-filled/50/22c55e/handshake.png"
                  alt="Mission"
                  className="w-12 h-12 mx-auto mb-2"
                />
                <h3 className="text-2xl font-semibold text-green-600">
                  Our Mission
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed text-justify">
                  “We are a responsible land development company that provides high-quality backfill materials for land development projects and other
                  infrastructures, including but not limited to sub-base materials like
                  aggregates, mixed soil, and boulders. We support sustainable land
                  development by adhering to the existing environmental regulations of
                  the Philippines. We provide jobs for fellow Filipinos, which significantly
                  contributes to boosting our country's economy. We are also keen to
                  deliver excellent value to our partner communities, investors, employees,
                  and other stakeholders.”
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
              <div className="text-center mb-6">
                <img
                  src="https://img.icons8.com/ios-filled/50/3b82f6/binoculars.png"
                  alt="Vision"
                  className="w-12 h-12 mx-auto mb-2"
                />
                <h3 className="text-2xl font-semibold text-blue-600">
                  Our Vision
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed text-justify">
                 “Our vision is to be a highly respected, world-class natural resource land
                    development company committed to adhering to international
                    standards in land development operations and environmental
                    conservation, sustainable projects that cover converting land
                    development sites into other useful and economic projects in the future,
                    thus converting land development projects to future commercial and
                    housing projects.”
              </p>
            </div>
          </div>
          <div className="mt-12 bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
            <div className="text-center mb-6">
              <img
                src="https://img.icons8.com/ios-filled/50/f59e0b/diamond.png"
                alt="Core Values"
                className="w-12 h-12 mx-auto mb-2"
              />
              <h3 className="text-2xl font-semibold text-amber-600">
                Our Core Values
              </h3>
            </div>
            <p className="text-gray-700 leading-relaxed text-justify">
                Taking pride, we believe that there is an intelligent Creator who made us, and our purpose is to help one another and be truthful in all our transactions, and thus CLIBERDUCHE CORPORATION takes pride in being able to offer its services at the most competitive prices, taking into consideration QUALITY, SAFETY, AND INTEGRITY.
            </p>
            <div className="mt-4 space-y-4">
              <div className="flex items-start">
                <img
                  src="https://img.icons8.com/ios-filled/50/f59e0b/star.png"
                  alt="Quality"
                  className="w-8 h-8 mr-4 mt-1 flex-shrink-0"
                />
                <p className="text-gray-700 leading-relaxed text-justify">
                  <strong>Quality</strong> – ensures projects are of high Quality and pair with local standards to be able to be competitive in the National and Local Market scene.
                </p>
              </div>
              <div className="flex items-start">
                <img
                  src="https://img.icons8.com/ios-filled/50/f59e0b/shield.png"
                  alt="Safety"
                  className="w-8 h-8 mr-4 mt-1 flex-shrink-0"
                />
                <p className="text-gray-700 leading-relaxed text-justify">
                  <strong>Safety</strong> – ensures safety at work site, safety of projects and safety of personnel and thus we ensure safety practices which is the pinnacle, before and after execution of projects.
                </p>
              </div>
              <div className="flex items-start">
                <img
                  src="https://img.icons8.com/ios-filled/50/f59e0b/certificate.png"
                  alt="Integrity"
                  className="w-8 h-8 mr-4 mt-1 flex-shrink-0"
                />
                <p className="text-gray-700 leading-relaxed text-justify">
                  <strong>Integrity</strong> – ensure compliance with existing laws covering the construction industry, reliable workforce and our timely delivery of projects.
                </p>
              </div>
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
