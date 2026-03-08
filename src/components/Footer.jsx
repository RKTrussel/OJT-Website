import React from "react";
import { MapPin, Phone, Mail, FileText, Download } from "lucide-react";
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
    <footer className="bg-slate-950 text-white pt-10 sm:pt-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* CTA Banner */}
        <div className="mb-8 sm:mb-12 rounded-2xl border border-white/10 bg-white/5 px-5 sm:px-6 py-6 sm:py-8 text-center backdrop-blur">
          <h3 className="text-xl sm:text-2xl font-semibold text-white">
            Ready to start your next build?
          </h3>
          <p className="text-slate-300 mt-2 text-sm sm:text-base">
            Share your scope and timeline—our team responds within 24–48 hours.
          </p>
          <a
            href="#contact"
            className="focus-ring mt-5 sm:mt-6 inline-flex items-center justify-center rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-500"
          >
            Start a Project
          </a>
        </div>

        {/* 3-column grid — stacks on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10">
          {/* Company Info */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-green-500 mb-3 sm:mb-4">
              Cliberduche Corporation
            </h3>
            <p className="text-gray-300 leading-relaxed mb-4 text-sm sm:text-base text-justify">
              Building the future with quality and reliability since 2018.
            </p>
            <a
              href="https://drive.google.com/uc?export=download&id=1NojO4TMZRm3ej_KeTEBSFfRS1YPwOsIG"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-green-600 px-4 sm:px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-green-500"
            >
              <FileText size={15} />
              Download Company Profile
              <Download size={15} />
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-green-400 mb-3 sm:mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 sm:space-y-3 text-gray-300 text-sm sm:text-base">
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

          {/* Contact Info — full width on mobile when odd column */}
          <div className="sm:col-span-2 md:col-span-1">
            <h4 className="font-semibold text-green-400 mb-3 sm:mb-4">
              Contact Info
            </h4>
            <div className="space-y-3 sm:space-y-4 text-gray-300 text-sm sm:text-base">
              <div className="flex items-start gap-3">
                <MapPin size={20} className="text-green-400 mt-0.5 shrink-0" />
                <p>
                  Lot 3739 National Highway, 3/F CBD Building, Brgy. Pulo,
                  Cabuyao City, Laguna, Philippines
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={17} className="text-green-400 shrink-0" />
                <p>+63 49 546-6107 / 0967-302-6643</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={17} className="text-green-400 shrink-0" />
                <p className="break-all">cliberduche.corp@yahoo.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-10 sm:mt-12">
          <h4 className="font-semibold text-green-400 mb-4 text-center text-sm sm:text-base">
            Certifications
          </h4>

          {/* Scrollable row on mobile, 5-col grid on md+ */}
          <div
            className="flex overflow-x-auto gap-4 py-3 px-1 scrollbar-hide
                          md:grid md:grid-cols-5 md:gap-4 md:overflow-visible md:px-0"
          >
            {certificates.map((cert) => (
              <img
                key={cert.alt}
                src={cert.src}
                alt={cert.alt}
                loading="lazy"
                className="w-24 h-24 sm:w-28 sm:h-28 md:w-full md:h-32 object-contain shrink-0
                           transform transition duration-300
                           hover:scale-110 hover:shadow-[0_18px_40px_-26px_rgba(14,165,233,0.6)] cursor-pointer"
              />
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-700 mt-8 sm:mt-12 py-5 sm:py-6 text-center text-gray-400 text-xs sm:text-sm">
          © 2018–2026 Cliberduche Corporation. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
