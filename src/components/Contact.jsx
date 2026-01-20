import React, { useState } from "react";
import logo from "../img/cliberduche_logo.png"; 

const Contact = ({ refProp, visible }) => {
  const [bgLoaded, setBgLoaded] = useState(false);
  return (
    <section
      id="contact"
      ref={refProp}
      className="scroll-mt-18 w-full relative overflow-hidden"
    >
      <div
        className={`absolute inset-0 bg-cinematic ${
          bgLoaded ? "is-loaded" : ""
        }`}
      >
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
          alt="Office"
          className="bg-cinematic__image"
          onLoad={() => setBgLoaded(true)}
          onError={() => setBgLoaded(true)}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/85 via-slate-900/60 to-emerald-900/70"></div>
      </div>
      <div
        className={`relative z-10 max-w-6xl mx-auto px-6 py-20 reveal-clip ${
          visible ? "is-visible" : ""
        }`}
      >
        <div className="flex items-center justify-center gap-4 mb-10">
          <img
            src={logo}
            alt="Cliberduche Logo"
            className="w-16 h-16 object-contain"
          />
          <h2 className="text-3xl font-semibold text-white text-center">
            Contact Us
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-6 text-emerald-200">
              Get In Touch
            </h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <img
                  src="https://img.icons8.com/ios-filled/24/22c55e/marker.png"
                  alt="Address"
                  className="mt-1 mr-3"
                />
                <div>
                  <p className="font-semibold text-white">Office Address</p>
                  <p className="text-slate-200">
                    Lot 3739 National Highway, 3/F CBD Building, Brgy. Pulo,
                    Cabuyao City, Laguna, Philippines
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <img
                  src="https://img.icons8.com/ios-filled/24/22c55e/phone.png"
                  alt="Phone"
                  className="mr-3"
                />
                <div>
                  <p className="font-semibold text-white">Phone</p>
                  <p className="text-slate-200">
                    +63 49 546-6107 / 0967-302-6643
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <img
                  src="https://img.icons8.com/ios-filled/24/22c55e/email.png"
                  alt="Email"
                  className="mr-3"
                />
                <div>
                  <p className="font-semibold text-white">Email</p>
                  <p className="text-slate-200">cliberduche.corp@yahoo.com</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <form className="bg-white/95 p-9 rounded-xl shadow-lg border border-white/20 backdrop-blur">
              <h4 className="text-lg font-semibold mb-6 text-gray-800">
                Send us a Message
              </h4>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2 font-medium">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-200"
                  placeholder="Your Name"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2 font-medium">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-200"
                  placeholder="your@email.com"
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 mb-2 font-medium">
                  Message
                </label>
                <textarea
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-200 h-32 resize-none"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 shadow-md hover:shadow-lg"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
