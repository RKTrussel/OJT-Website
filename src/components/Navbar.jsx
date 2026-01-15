import React from "react";

const Navbar = ({ activeSection }) => {
  const links = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Mission & Vision", href: "#mission" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="bg-gray-900/80 backdrop-blur-md text-white flex justify-between items-center px-6 py-4 fixed top-0 w-full z-20 border-b border-white/10">
      <div className="text-2xl font-bold text-green-500">Cliberduche</div>
      <div className="flex gap-8">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={`hover:text-green-400 transition duration-300 ${
              activeSection === link.href.slice(1)
                ? "text-green-400 font-semibold"
                : ""
            }`}
          >
            {link.name}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
