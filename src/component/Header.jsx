import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import Logo from "../assets/iblogo.png";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null); // track which dropdown is open
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== "/") {
      navigate("/", { replace: true });
    }
  }, []);

  const navItems = [
    { name: "About Us", path: "/about" },
    {
      name: "Services",
      dropdown: [
        { name: "Offensive Security Solutions", path: "/services/offensive-security" },
        { name: "Red Team Services", path: "/services/red-team" },
        { name: "Manual Pentesting (VAPT)", path: "/services/pentesting" },
        { name: "SAST & DAST", path: "/services/sast-dast" },
        { name: "Digital Warfare & State Advisory", path: "/services/state-advisory" },
        { name: "VIP & Personal Digital Security", path: "/services/vip-security" },
        { name: "Incident Response", path: "/services/incident" },
      ],
    },
    {
      name: "R&D",
      dropdown: [
        { name: "SCADA Security", path: "/rd/scada-security" },
        { name: "SATCOM Security", path: "/rd/satcom-security" },
        { name: "Cyber Weapons Design", path: "/rd/cyber-design" },
        { name: "Defense Technology Partnerships", path: "/rd/defens-partnerships" },
      ],
    },
    {
      name: "Industries",
      dropdown: [
        { name: "Government & State", path: "/industries/government-state" },
        { name: "Corporates & Enterprises", path: "/industries/corporates-enterprises" },
        { name: "High-Profile Individuals (Politicians, HNIs, Influencers)", path: "/industries/high-profileind-ividuals" },
        { name: "Defense & Critical Infrastructure", path: "/industries/defense-critical-infrastructure" },
        { name: "Startups & Fintech", path: "/industries/startups-fintech" },
      ],
    },
    {
      name: "Association",
      dropdown: [
        { name: "AIACDS (All India Association for Cyber & Digital Security)", path: "/association/aiacds" },
        { name: "Membership & Partnerships", path: "/association/membershippartnerships" },
        { name: "Research & Policy Papers", path: "/association/researchpolicypapers" },
      ],
    },
    {
      name: "insights",
      dropdown: [
        { name: "Blog", path: "/insights/blog" },
        { name: "Case Studies", path: "/insights/casestudies" },
        { name: "Whitepapers", path: "/insights/whitepapers" },
      ],
    },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#562eab] text-white shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-10 flex justify-between items-center py-3 font-body">
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
        <nav className="hidden lg:flex items-center space-x-6">
          {navItems.map((item) =>
            item.dropdown ? (
              <div
                key={item.name}
                className="relative group"
                onMouseEnter={() => setDropdownOpen(item.name)}
                onMouseLeave={() => setDropdownOpen(null)}
              >
                <button className="flex items-center gap-1 text-[16px]">
                  {item.name}
                  <ChevronDown size={16} />
                </button>

                {/* Animated Dropdown */}
                <AnimatePresence>
                  {dropdownOpen === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2, ease: "easeInOut" }}
                      className="absolute left-0 mt-2 bg-white text-black rounded-sm shadow-lg py-2 w-56"
                    >
                      {item.dropdown.map((sub) => (
                        <Link
                          key={sub.name}
                          to={sub.path}
                          className="block px-4 py-2 hover:bg-gray-100"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={item.name}
                to={item.path}
                className="relative text-[16px] text-white px-2 py-3 overflow-hidden rounded-md"
              >
                {item.name}
              </Link>
            )
          )}

          <button className="px-6 py-2 bg-gradient-to-r from-[#51ff4a] to-[#562eab] hover:opacity-90 hover:shadow-lg hover:shadow-[#51ff4a]/50 rounded-sm text-md font-small transition duration-300">
            Get Started
          </button>
        </nav>

        {/* Mobile Hamburger */}
        <div className="lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="lg:hidden bg-gray-800 px-6 py-4 space-y-4">
          {navItems.map((item) =>
            item.dropdown ? (
              <div key={item.name}>
                <button
                  className="flex justify-between items-center w-full text-lg font-medium hover:text-gray-300"
                  onClick={() =>
                    setDropdownOpen(dropdownOpen === item.name ? null : item.name)
                  }
                >
                  {item.name} <ChevronDown size={18} />
                </button>

                {/* Animated Mobile Dropdown */}
                <AnimatePresence>
                  {dropdownOpen === item.name && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="pl-4 mt-2 space-y-2 overflow-hidden"
                    >
                      {item.dropdown.map((sub) => (
                        <Link
                          key={sub.name}
                          to={sub.path}
                          className="block text-white hover:text-gray-300"
                          onClick={() => setIsOpen(false)}
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={item.name}
                to={item.path}
                className="block text-white text-lg font-medium hover:text-gray-300"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            )
          )}

          <button className="px-6 py-2 bg-gradient-to-r from-[#c842fa] to-[#3ca9f5] hover:opacity-90 hover:shadow-lg hover:shadow-[#c842fa]/50 rounded-md text-lg font-medium transition duration-300">
            Get Started
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
