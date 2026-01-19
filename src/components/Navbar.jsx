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

const Navbar = ({ activeSection }) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  const links = [
    { name: "About", href: "#about", icon: Info },
    { name: "Services", href: "#services", icon: Briefcase },
    { name: "Projects", href: "#projects", icon: FolderKanban },
    { name: "Mission & Vision", href: "#mission", icon: Target },
    { name: "Contact", href: "#contact", icon: Mail },
  ];

  const handleClick = () => setOpen(false);

  return (
    <nav className="fixed top-0 w-full z-50">
      {/* Glass Container */}
      <div className="bg-gray-900/60 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center gap-3 text-xl font-semibold tracking-wide text-white">
            <img src={logo} alt="Cliberduche Logo" className="w-15 h-10 object-contain" />
            <span className="text-white">Cliberduche</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {links.map((link) => {
              const Icon = link.icon;
              const isActive = selected === link.href.slice(1);

              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setSelected(link.href.slice(1))}
                  className={`
                    relative flex items-center gap-2 text-sm transition
                    ${
                      isActive
                        ? "text-green-400"
                        : "text-gray-300 hover:text-white"
                    }
                    after:absolute after:left-0 after:-bottom-1 after:h-0.5
                    after:bg-green-400 after:transition-all after:duration-300
                    ${
                      isActive ? "after:w-full" : "after:w-0 hover:after:w-full"
                    }
                  `}
                >
                  <Icon size={18} />
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
        <div className="mx-4 mt-2 rounded-2xl bg-gray-900/80 backdrop-blur-xl border border-white/10 shadow-xl">
          <div className="flex flex-col divide-y divide-white/10">
            {links.map((link) => {
              const Icon = link.icon;
              const isActive = selected === link.href.slice(1);

              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => {
                    setSelected(link.href.slice(1));
                    handleClick(); // close menu
                  }}
                  className={`flex items-center gap-3 px-6 py-4 text-sm transition
                    ${
                      isActive
                        ? "text-green-400 bg-white/5"
                        : "text-gray-300 hover:text-white hover:bg-white/5"
                    }
                  `}
                >
                  <Icon size={18} />
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
