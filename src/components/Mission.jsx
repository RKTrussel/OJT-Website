import React from "react";
import logo from "../img/cliberduche_logo.png";

const Mission = ({ refProp, visible = true }) => {
  return (
    <div>
      <section
        id="mission"
        ref={refProp}
        className="scroll-mt-6 relative overflow-hidden py-12 sm:py-16 md:py-20"
      >
        <div className="absolute inset-0 surface-b gradient-slow"></div>
        <div className="absolute inset-0 section-noise"></div>

        <div
          className={`relative z-10 max-w-6xl mx-auto px-4 sm:px-6 reveal-clip ${
            visible ? "is-visible" : ""
          }`}
        >
          {/* Header */}
          <div className="flex flex-col items-center justify-center gap-2 mb-8 sm:mb-12">
            <span className="text-[11px] uppercase tracking-[0.35em] text-amber-200 bg-amber-400/10 border border-amber-300/30 px-4 py-2 rounded-full">
              Our purpose
            </span>
            <div className="flex items-center justify-center gap-3 sm:gap-4">
              <img
                src={logo}
                alt="Cliberduche Logo"
                className="w-10 h-10 sm:w-14 sm:h-14 object-contain drop-shadow-lg"
              />
              <h2 className="text-2xl sm:text-3xl font-semibold text-slate-100 text-center cinematic-title">
                Mission & Vision
              </h2>
            </div>
          </div>

          {/* Mission & Vision — stack on mobile */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
            {/* Mission */}
            <div className="card-surface hover-lift p-5 sm:p-8 rounded-2xl transition duration-300">
              <div className="text-center mb-4 sm:mb-6">
                <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-3 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center">
                  <img
                    src="https://img.icons8.com/ios-filled/50/22c55e/handshake.png"
                    alt="Mission"
                    className="w-7 h-7 sm:w-8 sm:h-8"
                  />
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold text-emerald-300 tracking-wide">
                  Our Mission
                </h3>
              </div>
              <p className="text-slate-300 leading-relaxed text-justify text-sm sm:text-base max-w-prose mx-auto">
                "We are a responsible land development company that provides
                high-quality backfill materials for land development projects
                and other infrastructures, including but not limited to sub-base
                materials like aggregates, mixed soil, and boulders. We support
                sustainable land development by adhering to the existing
                environmental regulations of the Philippines. We provide jobs
                for fellow Filipinos, which significantly contributes to
                boosting our country's economy. We are also keen to deliver
                excellent value to our partner communities, investors,
                employees, and other stakeholders."
              </p>
            </div>

            {/* Vision */}
            <div className="card-surface hover-lift p-5 sm:p-8 rounded-2xl transition duration-300">
              <div className="text-center mb-4 sm:mb-6">
                <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-3 rounded-full bg-sky-50 border border-sky-200 flex items-center justify-center">
                  <img
                    src="https://img.icons8.com/ios-filled/50/3b82f6/binoculars.png"
                    alt="Vision"
                    className="w-7 h-7 sm:w-8 sm:h-8"
                  />
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold text-sky-300 tracking-wide">
                  Our Vision
                </h3>
              </div>
              <p className="text-slate-300 leading-relaxed text-justify text-sm sm:text-base max-w-prose mx-auto">
                "Our vision is to be a highly respected, world-class natural
                resource land development company committed to adhering to
                international standards in land development operations and
                environmental conservation, sustainable projects that cover
                converting land development sites into other useful and economic
                projects in the future, thus converting land development
                projects to future commercial and housing projects."
              </p>
            </div>
          </div>

          {/* Core Values */}
          <div className="mt-6 sm:mt-8 md:mt-12 card-surface hover-lift p-5 sm:p-8 rounded-2xl transition duration-300">
            <div className="text-center mb-4 sm:mb-6">
              <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-3 rounded-full bg-amber-50 border border-amber-200 flex items-center justify-center">
                <img
                  src="https://img.icons8.com/ios-filled/50/f59e0b/diamond.png"
                  alt="Core Values"
                  className="w-7 h-7 sm:w-8 sm:h-8"
                />
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-amber-300 tracking-wide">
                Our Core Values
              </h3>
            </div>
            <p className="text-slate-300 leading-relaxed text-justify text-sm sm:text-base max-w-3xl mx-auto">
              Taking pride, we believe that there is an intelligent Creator who
              made us, and our purpose is to help one another and be truthful in
              all our transactions, and thus CLIBERDUCHE CORPORATION takes pride
              in being able to offer its services at the most competitive
              prices, taking into consideration QUALITY, SAFETY, AND INTEGRITY.
            </p>

            {/* Quality / Safety / Integrity — single col on mobile, 3-col on md */}
            <div className="mt-5 sm:mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
              {/* Quality */}
              <div className="card-surface hover-lift rounded-xl p-4 sm:p-5">
                <div className="flex items-center gap-3 mb-2 sm:mb-3">
                  <img
                    src="https://img.icons8.com/ios-filled/50/f59e0b/star.png"
                    alt="Quality"
                    className="w-6 h-6 sm:w-7 sm:h-7 shrink-0"
                  />
                  <h4 className="text-base sm:text-lg font-semibold text-amber-300">
                    Quality
                  </h4>
                </div>
                <p className="text-slate-300 leading-relaxed text-justify text-sm">
                  Ensures projects are of high Quality and pair with local
                  standards to be able to be competitive in the National and
                  Local Market scene.
                </p>
              </div>

              {/* Safety */}
              <div className="card-surface hover-lift rounded-xl p-4 sm:p-5">
                <div className="flex items-center gap-3 mb-2 sm:mb-3">
                  <img
                    src="https://img.icons8.com/ios-filled/50/f59e0b/shield.png"
                    alt="Safety"
                    className="w-6 h-6 sm:w-7 sm:h-7 shrink-0"
                  />
                  <h4 className="text-base sm:text-lg font-semibold text-amber-300">
                    Safety
                  </h4>
                </div>
                <p className="text-slate-300 leading-relaxed text-justify text-sm">
                  Ensures safety at work site, safety of projects and safety of
                  personnel and thus we ensure safety practices which is the
                  pinnacle, before and after execution of projects.
                </p>
              </div>

              {/* Integrity */}
              <div className="card-surface hover-lift rounded-xl p-4 sm:p-5">
                <div className="flex items-center gap-3 mb-2 sm:mb-3">
                  <img
                    src="https://img.icons8.com/ios-filled/50/f59e0b/certificate.png"
                    alt="Integrity"
                    className="w-6 h-6 sm:w-7 sm:h-7 shrink-0"
                  />
                  <h4 className="text-base sm:text-lg font-semibold text-amber-300">
                    Integrity
                  </h4>
                </div>
                <p className="text-slate-300 leading-relaxed text-justify text-sm">
                  Ensure compliance with existing laws covering the construction
                  industry, reliable workforce and our timely delivery of
                  projects.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Mission;
