import { useState } from "react";
import { NavLink } from "react-router-dom";
import hamburgerIcon from "../assets/hamburger.png";

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <div className="relative">
      {/* Toggle Button */}
      <button
        onClick={toggleMenu}
        aria-label="Toggle navigation menu"
        className="p-1 focus:outline-none flex items-center"
      >
        <img
          src={hamburgerIcon}
          alt="Menu"
          className="h-6 w-6 object-contain filter invert cursor-pointer"
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-slate-800 rounded-md shadow-lg py-2 z-50 border border-slate-700">
          <NavLink
            to="/"
            onClick={closeMenu}
            className={({ isActive }) =>
              `block px-4 py-2 text-sm hover:bg-slate-700 ${
                isActive ? "text-white font-bold" : "text-white"
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            onClick={closeMenu}
            className={({ isActive }) =>
              `block px-4 py-2 text-sm hover:bg-slate-700 ${
                isActive ? "text-blue-400 font-bold" : "text-white"
              }`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/team"
            onClick={closeMenu}
            className={({ isActive }) =>
              `block px-4 py-2 text-sm hover:bg-slate-700 ${
                isActive ? "text-blue-400 font-bold" : "text-white"
              }`
            }
          >
            Team
          </NavLink>
        </div>
      )}
    </div>
  );
}
