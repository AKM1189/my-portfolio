import React, { useState } from "react";
import { IoClose } from "react-icons/io5";

const Navbar = ({ onNavClick, scrolled, activeSection }) => {
  const [open, setOpen] = useState(false);
  const menus = ["Home", "About", "Education", "Skills", "Services", "Projects", "Contact"];

  const handleNavClick = (item) => {
    const section = item.toLowerCase();
    if (section === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      onNavClick(section);
    }
    setOpen(false);
  };

  return (
    <nav className="h-16 md:h-20 flex justify-end items-center px-6 md:px-12 lg:px-20">
      <ul className="hidden md:flex items-center gap-1">
        {menus.map((item) => (
          <li key={item}>
            {(() => {
              const key = item.toLowerCase() === "home" ? "hero" : item.toLowerCase();
              const isActive = key === activeSection;
              return (
            <button
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 border-b-2 ${
              isActive
                    ? "text-teal-200 border-teal-200 bg-white/10"
                    : "text-slate-200 border-transparent hover:text-white hover:bg-white/10"
              }`}
              onClick={() => handleNavClick(item)}
            >
              {item}
            </button>
              );
            })()}
          </li>
        ))}
      </ul>

      {/* Hamburger for mobile */}
      <button
        className={`md:hidden p-2 -mr-2 rounded-lg transition-colors ${
          scrolled
            ? "text-slate-700 hover:bg-slate-100"
            : "text-white hover:bg-white/10"
        }`}
        onClick={() => setOpen(true)}
        aria-label="Open menu"
      >
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Mobile Menu */}
      {open && (
        <div className="fixed inset-0 z-50 bg-slate-900/95 backdrop-blur-sm">
          <div className="flex flex-col items-center justify-center min-h-screen gap-6 p-8">
            <button
              className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors text-2xl"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
            >
              <IoClose color="white" size={24} />
            </button>
            {menus.map((item) => (
              <button
                key={item}
                className={`text-2xl font-semibold transition-colors py-2 ${
                  (item.toLowerCase() === "home" ? "hero" : item.toLowerCase()) === activeSection
                    ? "text-primary"
                    : "text-white hover:text-primary"
                }`}
                onClick={() => handleNavClick(item)}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
