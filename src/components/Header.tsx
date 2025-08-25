import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  const menuItems = [
    { path: "/", label: "Home" },
    { path: "/features", label: "Features" },
    { path: "/about", label: "About Us" },
    { path: "/contact", label: "Contact" },
    { path: "/demo", label: "Demo" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 animate-fade-down ${
        isHome
          ? "bg-transparent border-transparent"
          : "bg-white/95 dark:bg-gray-900/95 border-b border-gray-200 dark:border-gray-700 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo (Only Text, no icon) */}
          <Link
            to="/"
            className={`font-bold text-xl hover:scale-105 transition-transform duration-300 ${
              isHome
                ? "text-white drop-shadow"
                : "text-[#00296b] dark:text-blue-400"
            }`}
          >
            Focus{" "}
            <span className="text-gray-800 dark:text-white">Lifetime</span>
          </Link>

          {/* Desktop Navigation - Aligned to Right */}
          <nav className="hidden md:flex items-center space-x-8 ml-auto">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors duration-200 ${
                  location.pathname === item.path
                    ? isHome
                      ? "text-white"
                      : "text-[#00296b] dark:text-blue-400"
                    : isHome
                    ? "text-white/90 hover:text-white"
                    : "text-gray-600 dark:text-gray-300 hover:text-[#00296b] dark:hover:text-blue-400"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          } overflow-hidden`}
        >
          <nav className="py-4 space-y-2">
            {menuItems.map((item, index) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block w-full text-left px-4 py-2 rounded-lg transition-colors duration-200 ${
                  location.pathname === item.path
                    ? isHome
                      ? "text-white"
                      : "text-[#00296b] dark:text-blue-400"
                    : isHome
                    ? "text-white/90 hover:text-white"
                    : "text-gray-600 dark:text-gray-300 hover:text-[#00296b] dark:hover:text-blue-400"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
