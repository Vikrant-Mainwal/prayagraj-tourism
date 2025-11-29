import { useState } from "react";
import { Menu, X } from "lucide-react";
import NavLink from "../components/NavLink.jsx";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/places", label: "Attractions" },
    { href: "/heritage", label: "Heritage" },
    { href: "/gallery", label: "Gallery" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white shadow-md h-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-[#bd6628e6]">Prayagraj</div>
            <span className="hidden sm:inline text-sm text-[#e48c4ee6]">
              Heritage & Culture
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.href}
                href={link.href}
                className="px-4 py-2 rounded-md text-gray-700 hover:text-[#bd6628e6] hover:bg-gray-100 transition"
                activeClassName="text-[#bd6628e6] font-bold"
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="flex md:hidden p-2 rounded hover:bg-gray-100"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="flex md:hidden pb-4 animate-slide-up">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 rounded-md text-gray-700 hover:text-[#bd6628e6] hover:bg-gray-100 transition"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
