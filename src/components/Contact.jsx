import React from "react";
import logo from "../img/cliberduche_logo.png"; 

const Contact = ({ refProp, visible }) => {
  return (
    <section
      id="contact"
      ref={refProp}
      className={`scroll-mt-18 bg-gradient-to-r from-green-200 via-blue-50 to-blue-300 w-full transition-all duration-700 ${
        visible ? "animate-fade-in-up" : "opacity-0"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex items-center justify-center gap-4 mb-10">
          <img
            src={logo}
            alt="Cliberduche Logo"
            className="w-16 h-16 object-contain"
          />
          <h2 className="text-3xl font-semibold text-green-700 text-center">
            Contact Us
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-6 text-green-700">
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
                  <p className="font-semibold text-gray-800">Office Address</p>
                  <p className="text-gray-600">
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
                  <p className="font-semibold text-gray-800">Phone</p>
                  <p className="text-gray-600">
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
                  <p className="font-semibold text-gray-800">Email</p>
                  <p className="text-gray-600">cliberduche.corp@yahoo.com</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <form className="bg-white p-9 rounded-xl shadow-lg border border-green-400">
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
