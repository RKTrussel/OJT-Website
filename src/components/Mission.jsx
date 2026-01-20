import React, { useState } from "react";
import logo from "../img/cliberduche_logo.png";
const Mission = ({ refProp, visible = true }) => {
  const [bgLoaded, setBgLoaded] = useState(false);
  return (
    <>
      <section
        id="mission"
        ref={refProp}
        className="scroll-mt-18 relative overflow-hidden py-20"
      >
        <div
          className={`absolute inset-0 bg-cinematic ${
            bgLoaded ? "is-loaded" : ""
          }`}
        >
          <img
            src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
            alt="Landscape"
            className="bg-cinematic__image"
            onLoad={() => setBgLoaded(true)}
            onError={() => setBgLoaded(true)}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/60 to-emerald-900/70"></div>
        </div>
        <div
          className={`relative z-10 max-w-6xl mx-auto px-6 reveal-clip ${
            visible ? "is-visible" : ""
          }`}
        >
          <div className="flex items-center justify-center gap-4 mb-12">
            <img
              src={logo}
              alt="Cliberduche Logo"
              className="w-16 h-16 object-contain"
            />
            <h2 className="text-3xl font-semibold text-white text-center">
              Mission & Vision
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white/90 p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300 backdrop-blur">
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
                “We are a responsible land development company that provides
                high-quality backfill materials for land development projects
                and other infrastructures, including but not limited to sub-base
                materials like aggregates, mixed soil, and boulders. We support
                sustainable land development by adhering to the existing
                environmental regulations of the Philippines. We provide jobs
                for fellow Filipinos, which significantly contributes to
                boosting our country's economy. We are also keen to deliver
                excellent value to our partner communities, investors,
                employees, and other stakeholders.”
              </p>
            </div>

            <div className="bg-white/90 p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300 backdrop-blur">
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
                “Our vision is to be a highly respected, world-class natural
                resource land development company committed to adhering to
                international standards in land development operations and
                environmental conservation, sustainable projects that cover
                converting land development sites into other useful and economic
                projects in the future, thus converting land development
                projects to future commercial and housing projects.”
              </p>
            </div>
          </div>

          <div className="mt-12 bg-white/90 p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300 backdrop-blur">
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
              Taking pride, we believe that there is an intelligent Creator who
              made us, and our purpose is to help one another and be truthful in
              all our transactions, and thus CLIBERDUCHE CORPORATION takes pride
              in being able to offer its services at the most competitive
              prices, taking into consideration QUALITY, SAFETY, AND INTEGRITY.
            </p>
            <div className="mt-4 space-y-4">
              <div className="flex items-start">
                <img
                  src="https://img.icons8.com/ios-filled/50/f59e0b/star.png"
                  alt="Quality"
                  className="w-8 h-8 mr-4 mt-1 shrink-0"
                />
                <p className="text-gray-700 leading-relaxed text-justify">
                  <strong>Quality</strong> – ensures projects are of high
                  Quality and pair with local standards to be able to be
                  competitive in the National and Local Market scene.
                </p>
              </div>
              <div className="flex items-start">
                <img
                  src="https://img.icons8.com/ios-filled/50/f59e0b/shield.png"
                  alt="Safety"
                  className="w-8 h-8 mr-4 mt-1 shrink-0"
                />
                <p className="text-gray-700 leading-relaxed text-justify">
                  <strong>Safety</strong> – ensures safety at work site, safety
                  of projects and safety of personnel and thus we ensure safety
                  practices which is the pinnacle, before and after execution of
                  projects.
                </p>
              </div>
              <div className="flex items-start">
                <img
                  src="https://img.icons8.com/ios-filled/50/f59e0b/certificate.png"
                  alt="Integrity"
                  className="w-8 h-8 mr-4 mt-1 shrink-0"
                />
                <p className="text-gray-700 leading-relaxed text-justify">
                  <strong>Integrity</strong> – ensure compliance with existing
                  laws covering the construction industry, reliable workforce
                  and our timely delivery of projects.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default Mission;
