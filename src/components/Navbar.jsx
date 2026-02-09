import React, { useEffect, useState } from "react";
import {
  Info,
  Briefcase,
  FolderKanban,
  Target,
  Mail,
  Menu,
  X,
} from "lucide-react";
import logo from "../img/cliberduche_logo.png";

const BASE_URL = "/cliberduche-website";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  const links = [
    { name: "Services", href: `${BASE_URL}#services`, icon: Briefcase },
    { name: "Projects", href: `${BASE_URL}#projects`, icon: FolderKanban },
    { name: "About", href: `${BASE_URL}#about`, icon: Info },
    { name: "Mission & Vision", href: `${BASE_URL}#mission`, icon: Target },
    { name: "Contact", href: `${BASE_URL}#contact`, icon: Mail },
  ];

  // lock scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  // auto active section on scroll
  useEffect(() => {
    const sections = links
      .map((link) => document.getElementById(link.href.split("#")[1]))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setSelected(entry.target.id);
          }
        });
      },
      { threshold: 0.3 },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const handleClose = () => setOpen(false);

  return (
    <nav className="fixed top-0 w-full z-50">
      {/* Glass Container */}
      <div className="bg-slate-950/70 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3 text-xl font-semibold tracking-wide text-white">
            <img
              src={logo}
              alt="Cliberduche Logo"
              className="w-15 h-10 object-contain"
            />
            <span className="text-white navbar-font">Cliberduche</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {links.map((link) => {
              const Icon = link.icon;
              const section = link.href.split("#")[1];
              const isActive = selected === section;

              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setSelected(section)}
                  aria-current={isActive ? "page" : undefined}
                  className={`
                    navbar-font group relative flex items-center gap-2 text-sm transition
                    ${
                      isActive
                        ? "text-sky-300"
                        : "text-slate-200 hover:text-sky-200"
                    }
                    after:absolute after:left-0 after:-bottom-1 after:h-0.5
                    after:bg-linear-to-r after:from-sky-400 after:to-emerald-400 after:transition-all after:duration-300
                    ${
                      isActive ? "after:w-full" : "after:w-0 hover:after:w-full"
                    }
                  `}
                >
                  <Icon size={18} className="transition group-hover:text-sky-200" />
                  {link.name}
                </a>
              );
            })}
          </div>

          {/* Mobile Burger Button */}
          <button
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            className="md:hidden w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 transition"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ${
          open
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        <div className="mx-4 mt-2 rounded-2xl bg-slate-950/80 backdrop-blur-xl border border-white/10 shadow-xl">
          <div className="flex flex-col divide-y divide-white/10">
            {links.map((link) => {
              const Icon = link.icon;
              const section = link.href.split("#")[1];
              const isActive = selected === section;

              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => {
                    setSelected(section);
                    handleClose();
                  }}
                  aria-current={isActive ? "page" : undefined}
                  className={`navbar-font flex items-center gap-3 px-6 py-4 text-sm transition
                    ${
                      isActive
                        ? "text-sky-300 bg-white/5"
                        : "text-slate-200 hover:text-sky-200 hover:bg-white/5"
                    }
                  `}
                >
                  <Icon size={18} className="transition" />
                  {link.name}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
