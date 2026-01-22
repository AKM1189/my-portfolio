import React, { useState } from "react";

const Navbar = ({onNavClick}) => {
  const [open, setOpen] = useState(false);
  const menus = ["Home", "About", "Skills", "Services", "Projects", "Contact"];

  return (
    <div className="nav h-20 mb-20 transition-all duration-500">
      <nav className="hidden md:flex justify-end items-center me-10 pt-5">
        <ul className="flex gap-5 me-10 text-lg *:p-3">
          <nav className="flex gap-10 p-5">
            {menus.map((item, index) => 
              <button className="hover:text-primary transition-colors duration-200 cursor-pointer" key={index} onClick={() => onNavClick(item.toLocaleLowerCase())}>{item}</button>
            )}
        </nav>
        </ul>
      </nav>

      {/* Hamburger for mobile */}
      <div className="md:hidden text-right me-12 pt-10">
        <i
          className="fa-solid fa-bars text-2xl cursor-pointer"
          onClick={() => setOpen(true)}
        ></i>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="res-navigation fixed top-0 left-0 w-full h-full bg-gray-600 bg-opacity-90 z-20 text-center text-white font-semibold pt-5 overflow-auto">
          <div
            className="close text-right me-10 text-5xl cursor-pointer"
            onClick={() => setOpen(false)}
          >
            &times;
          </div>
          <ul className="gap-5 me-10 text-2xl">
            {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
              <li className="p-5" key={item}>
                <a className="nav-menu" href={`#${item.toLowerCase()}`} onClick={() => setOpen(false)}>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
