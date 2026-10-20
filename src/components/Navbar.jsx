import { NavLink } from "react-router-dom";
import logo from "../assets/logo.jpg";
import HamburgerMenu from "./HamburgerMenu";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full h-12 bg-slate-900 opacity-95 text-white text-sm font-semibold px-6 flex items-center justify-between shadow-md">
      {/* Logo & Brand Title */}
      <NavLink to="/" className="flex items-center gap-3">
        <img
          src={logo}
          alt="SBK Logo"
          className="h-8 w-auto object-contain rounded-md"
        />
        <h3 className="text-base font-semibold">
          PT. Semesta Building Konstruksi
        </h3>
      </NavLink>

      {/* Desktop Navigation Links */}
      <div className="hidden md:flex gap-6 items-center">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-blue-400 font-bold" : "hover:text-gray-300"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-blue-400 font-bold" : "hover:text-gray-300"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/team"
          className={({ isActive }) =>
            isActive ? "text-blue-400 font-bold" : "hover:text-gray-300"
          }
        >
          Team
        </NavLink>
      </div>

      {/* Mobile Hamburger Menu */}
      <div className="md:hidden">
        <HamburgerMenu />
      </div>
    </nav>
  );
}
