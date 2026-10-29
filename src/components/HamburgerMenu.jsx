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
        <div className="absolute right-0 mt-2 w-35 bg-slate-800 rounded-md shadow-lg py-2 z-50 border border-slate-700">
          <NavLink
            to="/"
            onClick={closeMenu}
            className={({ isActive }) =>
              `block px-4 py-2 text-sm hover:bg-slate-700 ${
                isActive
                  ? "text-white font-bold active:scale-95"
                  : "text-white active:scale-95"
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
                isActive
                  ? "text-blue-400 font-bold active:scale-95"
                  : "text-white active:scale-95"
              }`
            }
          >
            About Us
          </NavLink>
          <NavLink
            to="/services"
            onClick={closeMenu}
            className={({ isActive }) =>
              `block px-4 py-2 text-sm hover:bg-slate-700 ${
                isActive
                  ? "text-blue-400 font-bold active:scale-95"
                  : "text-white active:scale-95"
              }`
            }
          >
            Services
          </NavLink>
          <NavLink
            to="/projects"
            onClick={closeMenu}
            className={({ isActive }) =>
              `block px-4 py-2 text-sm hover:bg-slate-700 ${
                isActive
                  ? "text-blue-400 font-bold active:scale-95"
                  : "text-white active:scale-95"
              }`
            }
          >
            Projects
          </NavLink>
          <NavLink
            to="/clients"
            onClick={closeMenu}
            className={({ isActive }) =>
              `block px-4 py-2 text-sm hover:bg-slate-700 ${
                isActive
                  ? "text-blue-400 font-bold active:scale-95"
                  : "text-white active:scale-95"
              }`
            }
          >
            Clients
          </NavLink>
          <NavLink
            to="/contact"
            onClick={closeMenu}
            className={({ isActive }) =>
              `block px-4 py-2 text-sm hover:bg-slate-700 ${
                isActive
                  ? "text-blue-400 font-bold active:scale-95"
                  : "text-white active:scale-95"
              }`
            }
          >
            Contact Us
          </NavLink>
        </div>
      )}
    </div>
  );
}
