import { useState, useEffect } from "react";
import {  Moon, Sun } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const storedDarkMode = localStorage.getItem("darkMode") === "true";
  const [darkMode, setDarkMode] = useState(storedDarkMode);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  return (
    <nav className="sticky top-0 left-0 w-full bg-white dark:bg-gray-900 shadow-md z-50">
      <div className="container mx-auto px-6 py-2 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-900 dark:text-white">
          <Link to="/">Portfolio</Link>
        </div>

        {/* Navigation */}
        <div className="flex items-center space-x-6">
          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-6">
            <Link
              to="/"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition duration-300 cursor-pointer"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition duration-300 cursor-pointer"
            >
              About
            </Link>
            <Link
              to="/projects"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition duration-300 cursor-pointer"
            >
              Projects
            </Link>
            <Link
              to="/CertificationsAchievements"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition duration-300 cursor-pointer"
            >
              Certifications & Achievements
            </Link>
            <Link
              to="/contact"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition duration-300 cursor-pointer"
            >
              Contact
            </Link>
          </div>

          {/* Dark Mode Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="hidden md:block text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition"
          >
            {darkMode ? <Sun size={24} /> : <Moon size={24} />}
          </button>

          {/* Hamburger Menu */}
          <button className="md:hidden" onClick={toggleMenu}>
            <div className="w-6 h-1 bg-gray-700 dark:bg-gray-200 mb-1"></div>
            <div className="w-6 h-1 bg-gray-700 dark:bg-gray-200 mb-1"></div>
            <div className="w-6 h-1 bg-gray-700 dark:bg-gray-200"></div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div>
          <div className="fixed inset-0 bg-black opacity-50 backdrop-blur-md z-40" onClick={toggleMenu}></div>
          <div className="fixed top-0 right-0 w-3/5 sm:w-2/5 bg-blue-600 text-white z-50 shadow-xl h-full">
            <button className="text-white text-2xl font-bold w-full text-right p-3" onClick={toggleMenu}>✖️</button>
            <div className="space-y-4">
              <Link
                to="/"
                className="pl-3 text-xl font-semibold text-gray-200 cursor-pointer"
              >
                Home
              </Link>
              <hr className="my-2 border-gray-400" />
              <Link
                to="/home"
                className="pl-3 text-xl font-semibold text-gray-200 cursor-pointer"
              >
                About
              </Link>
              <hr className="my-2 border-gray-400" />
              <Link
                to="/projects"
                className="pl-3 text-xl font-semibold text-gray-200 cursor-pointer"
              >
                Projects
              </Link>
              <hr className="my-2 border-gray-400" />
              <Link
                to="/CertificationsAchievements"
                className="pl-3 text-xl font-semibold text-gray-200 cursor-pointer"
              >
                Certifications & v
              </Link>
              <hr className="my-2 border-gray-400" />
              <Link
                to="/contact"
                className="pl-3 text-xl font-semibold text-gray-200 cursor-pointer"
              >
                Contact
              </Link>
              <hr className="my-2 border-gray-400" />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
