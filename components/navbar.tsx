import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed w-full z-50 bg-opacity-90 backdrop-blur-md shadow-lg">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-white">
          <a href="#home">RedAakash</a>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-8 text-lg font-medium">
          {links.map((link, index) => (
            <li key={index}>
              <a
                href={link.href}
                className="relative text-gray-300 hover:text-green-400 transition-colors duration-300"
              >
                {link.name}
                {/* Hover Underline */}
                <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-green-400 transition-all duration-300 hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <div
          className="md:hidden cursor-pointer text-green-400"
          onClick={() => setIsOpen(!isOpen)}
        >
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-8 h-8"
            animate={{ rotate: isOpen ? 90 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
          </motion.svg>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black bg-opacity-95 text-white border-t border-gray-700"
          >
            <ul className="flex flex-col items-center space-y-4 py-6 text-lg font-medium">
              {links.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-gray-300 hover:text-green-400 transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
