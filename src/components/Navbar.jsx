import React, { useEffect, useRef, useState, useMemo } from "react";
import { Menu, X } from "lucide-react";
import NavLink from "./NavLink.jsx";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const [pathName, setPathName] = useState("/");

  useEffect(() => {
    setPathName(window.location.pathname);
  }, []);

  const navLinks = useMemo(
    () => [
      { href: "/", label: "Home" },
      { href: "/about", label: "About" },
      { href: "/places", label: "Attractions" },
      { href: "/heritage", label: "Heritage" },
      { href: "/gallery", label: "Gallery" },
      { href: "/contact", label: "Contact" },
    ],
    []
  );


  // Click outside to close mobile menu
  useEffect(() => {
    function handleClickOutside(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    }

    if (isOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);
  
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <nav className="w-full h-[90px] fixed top-0 z-50 bg-white shadow-md">
      <div
        className={`w-full h-[90px] bg-white transition-transform duration-1000 ease-out
        flex items-center`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center w-full px-6">

          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <span className="text-2xl font-extrabold text-[#bd6628]">Prayagraj</span>
            <span className="hidden sm:block text-sm text-[#e48c4e]">
              Heritage & Culture
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-[1rem] rounded-md text-gray-700 hover:text-[#bd6628] hover:bg-gray-100 transition"
                activeClassName={
                  pathName === link.href
                    ? "text-[#bd6628] font-bold bg-gray-100"
                    : ""
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="flex md:hidden p-2 rounded hover:bg-gray-100"
            onClick={() => setIsOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
  <div className="fixed inset-0 bg-black/50 z-40 md:hidden">
    <div
      ref={menuRef}
      className="absolute top-0 right-0 bg-white w-[80vw] max-w-[300px] h-screen shadow-xl
                 p-6 flex flex-col animate-slide-left"
    >
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <span className="text-2xl font-bold text-[#bd6628]">Menu</span>
        <button onClick={() => setIsOpen(false)}>
          <X className="h-7 w-7" />
        </button>
      </div>

      {/* Menu list */}
      <div className="flex-1 overflow-y-auto p-5">
        <ul className="flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`text-[17px] px-2 py-2 rounded-md transition 
                ${
                  pathName === link.href
                    ? "text-[#bd6628] bg-gray-100 font-semibold"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
            >
              {link.label}
            </a>
          ))}
        </ul>
      </div>

      {/* Footer sticks at bottom */}
      <div className="mt-6 text-center text-xs text-gray-500">
        © 2025 Prayagraj Tourism
      </div>
    </div>
  </div>
)}

    </nav>
  );
}
