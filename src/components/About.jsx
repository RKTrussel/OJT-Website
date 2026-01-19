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
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={logo}
                  alt="Cliberduche Logo"
                  className="w-16 h-16 object-contain"
                />
                <h2 className="text-3xl font-semibold text-green-600">
                  About Us
                </h2>
              </div>

              <p className="mb-4">
                Established in 2018, Cliberduche Corporation was founded with
                the vision of providing high-quality land development and
                construction services in the Philippines. The company was
                officially registered with the Securities and Exchange
                Commission on November 28, 2018.
              </p>
              <p>
                We provide premium backfill materials such as sub-base,
                aggregates, and boulders. Our land development sites in Laguna
                and Cavite contain over 14 million cubic meters of backfilling
                materials to support the growing construction industry.
              </p>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                alt="Construction Equipment"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="h-1 bg-gradient-to-r from-green-400 via-blue-400 to-green-400"></div>
    </>
  );
};

export default About;
