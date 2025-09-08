import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; 
import Logo from "../assets/iblogo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-gray-900 text-white shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-10 flex justify-between items-center py-3 font-body">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Link to="/">
            <img
              src={Logo}
              alt="Iron & Byte Logo"
              className="h-10 w-auto sm:h-12"
            />
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6">
          {[
            { name: "Home", path: "/" },
            { name: "About Us", path: "/about" },
            { name: "Services", path: "/services" },
            { name: "Contact Us", path: "/contact" },
          ].map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="relative text-[16px] text-white 
              px-2 py-3 overflow-hidden group rounded-md"
            >
              <span className="relative z-10 transition-colors duration-300 group-hover:text-black">
                {item.name}
              </span>
              <span
                className="absolute inset-0 bg-white scale-y-0 origin-bottom 
                transition-transform duration-300 group-hover:scale-y-100 rounded-md"
              ></span>
            </Link>
          ))}

          <button className="px-6 py-2 bg-gradient-to-r from-[#51ff4a] to-[#562eab] 
            hover:opacity-90 hover:shadow-lg hover:shadow-[#51ff4a]/50 
            rounded-md text-lg font-medium transition duration-300">
            Get Started
          </button>
        </nav>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 px-6 py-4 space-y-4">
          {[
            { name: "Home", path: "/" },
            { name: "About Us", path: "/about" },
            { name: "Services", path: "/services" },
            { name: "Contact Us", path: "/contact" },
          ].map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="block text-white text-lg font-medium hover:text-gray-300"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}

          <button className="px-6 py-2 bg-gradient-to-r from-[#c842fa] to-[#3ca9f5] 
            hover:opacity-90 hover:shadow-lg hover:shadow-[#c842fa]/50 
            rounded-md text-lg font-medium transition duration-300">
            Get Started
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
