import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import logo1 from "../img/logo_1.png";
import logo2 from "../img/logo_2.png";
import logo3 from "../img/logo_3.png";
import logo4 from "../img/logo_4.png";
import logo5 from "../img/logo_5.jpg";

const Footer = () => {
  const certificates = [
    { src: logo1, alt: "Certificate 1" },
    { src: logo2, alt: "Certificate 2" },
    { src: logo3, alt: "Certificate 3" },
    { src: logo4, alt: "Certificate 4" },
    { src: logo5, alt: "Certificate 5" },
  ];

  return (
    <footer className="bg-gray-900 text-white pt-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-green-500 mb-4">
              Cliberduche Corporation
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Building the future with quality and reliability since 2018.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3 text-gray-300">
              {[
                { name: "About", href: "#about" },
                { name: "Services", href: "#services" },
                { name: "Projects", href: "#projects" },
                { name: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-green-400 transition"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Info</h4>

            <div className="space-y-4 text-gray-300">
              <div className="flex items-start gap-3">
                <MapPin size={38} className="text-green-400 mt-1" />
                <p>
                  Lot 3739 National Highway, 3/F CBD Building, Brgy. Pulo,
                  Cabuyao City, Laguna, Philippines
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={18} className="text-green-400" />
                <p>+63 49 546-6107 / 0967-302-6643</p>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={18} className="text-green-400" />
                <p>cliberduche.corp@yahoo.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications Section */}
        <div className="mt-12">
          <h4 className="font-semibold text-lg mb-6 text-center">
            Certifications
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 justify-items-center">
            {certificates.map((cert) => (
              <img
                key={cert.alt}
                src={cert.src}
                alt={cert.alt}
                className="w-32 h-32 object-contain"
              />
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 py-6 text-center text-gray-400 text-sm">
          © 2018–2026 Cliberduche Corporation. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
