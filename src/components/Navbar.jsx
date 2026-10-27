import { NavLink } from "react-router-dom";
import logo2 from "../assets/logo2.jpg";
import HamburgerMenu from "./HamburgerMenu";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full h-12 bg-slate-900 opacity-95 text-white text-sm font-semibold px-6 flex items-center justify-between shadow-md md:px-10">
      {/* Logo & Brand Title */}
      <NavLink to="/" className="flex items-center gap-3">
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
          About Us
        </NavLink>
        <NavLink
          to="/services"
          className={({ isActive }) =>
            isActive ? "text-blue-400" : "hover:text-gray-300"
          }
        >
          Services
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive ? "text-blue-400 font-bold" : "hover:text-gray-300"
          }
        >
          Projects
        </NavLink>
        <NavLink
          to="/clients"
          className={({ isActive }) =>
            isActive ? "text-blue-400 font-bold" : "hover:text-gray-300"
          }
        >
          Clients
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "text-blue-400 font-bold" : "hover:text-gray-300"
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
