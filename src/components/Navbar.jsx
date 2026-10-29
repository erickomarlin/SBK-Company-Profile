import { NavLink } from "react-router-dom";
import logo2 from "../assets/logo2.jpg";
import HamburgerMenu from "./HamburgerMenu";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full h-16 bg-main opacity-95 text-white text-sm font-semibold px-6 flex items-center justify-between shadow-md md:px-10">
      {/* Logo & Brand Title */}
      <NavLink
        to="/"
        className="flex items-center gap-3 hover:transition-all hover:scale-105 active:scale-100"
      >
        <img
          src={logo2}
          alt="SBK Logo"
          className="h-8 w-auto object-contain rounded-full"
        />
      </NavLink>

      {/* Desktop Navigation Links */}
      <div className="hidden md:flex gap-6 items-center">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-blue-400 font-bold active:scale-95"
              : "hover:text-gray-300 active:scale-95"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "text-blue-400 font-bold active:scale-95"
              : "hover:text-gray-300 active:scale-95"
          }
        >
          About Us
        </NavLink>
        <NavLink
          to="/services"
          className={({ isActive }) =>
            isActive
              ? "text-blue-400 active:scale-95"
              : "hover:text-gray-300 active:scale-95"
          }
        >
          Services
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive
              ? "text-blue-400 font-bold active:scale-95"
              : "hover:text-gray-300 active:scale-95"
          }
        >
          Projects
        </NavLink>
        <NavLink
          to="/clients"
          className={({ isActive }) =>
            isActive
              ? "text-blue-400 font-bold active:scale-95"
              : "hover:text-gray-300 active:scale-95"
          }
        >
          Clients
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? "text-blue-400 font-bold active:scale-95"
              : "hover:text-gray-300 active:scale-95"
          }
        >
          Contact Us
        </NavLink>
      </div>

      {/* Mobile Hamburger Menu */}
      <div className="md:hidden">
        <HamburgerMenu />
      </div>
    </nav>
  );
}
