import React from "react";
import {
    FaFacebookF,
    FaTwitter,
    FaLinkedinIn,
    FaInstagram,
    FaChevronRight,
} from "react-icons/fa";
import { motion } from "framer-motion";
import Logo from "../assets/iblogo.png"; 
import BackToTop from "./BackToTop";

const listItemVariants = {
    hidden: { opacity: 0, x: -15 },
    visible: (i) => ({
        opacity: 1,
        x: 0,
        transition: { delay: i * 0.15, duration: 0.4 },
    }),
};

// Animation for logo
const logoVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Footer = () => {
    const companyLinks = ["Home", "About Us", "Our Team", "Projects", "Contact Us"];
    const servicesLinks = [
        "Growth Marketing",
        "Cyber Security",
        "Penetration Testing",
        "Vulnerability Assessment",
        "Firewall Management",
    ];
    const resourcesLinks = ["Blog", "FAQ", "Help & Support", "Case Study", "Sitemap"];

    return (
        <footer className="bg-[#0e041a] text-gray-300 pt-16 relative">
            <div className="container mx-auto px-6 md:px-12">
                <div className="bg-[#1a0b2e] rounded-2xl p-8 mb-14 flex flex-col md:flex-row items-center justify-between gap-6">
                    {/* Left Side */}
                    <div className="text-center md:text-left">
                        <h2 className="text-2xl md:text-3xl font-heading text-white font-bold mb-2">
                            Subscribe To Newsletter
                        </h2>
                        <p className="text-gray-400 text-sm">
                            Stay updated with our latest news, tips and cybersecurity updates.
                        </p>
                    </div>

                    {/* Right Side - Input & Button */}
                    <form className="flex w-full md:w-auto max-w-lg">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-grow px-4 py-3 rounded-l-xl bg-[#111c34] text-white 
              placeholder-gray-400 border border-transparent 
              focus:border-[#51ff4a] focus:ring-2 focus:ring-[#51ff4a] 
              outline-none transition-all duration-300"
                        />
                        <button
                            type="submit"
                            className="px-6 py-3 bg-gradient-to-r from-[#51ff4a] to-[#562eab] 
              rounded-r-xl text-white font-semibold shadow-lg 
              hover:shadow-[0_0_15px_rgba(200,66,250,0.6)] 
              transition-all duration-300 ease-in-out"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>

                {/* 🔹 Footer Top Section */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
                    {/* Logo/About */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={logoVariants}
                    >
                        <img src={Logo} alt="IronandByte Logo" className="h-12 mb-4" />
                        <p className="text-sm text-gray-400 leading-relaxed">
                            IronandByte provides modern cybersecurity and IT solutions
                            to help businesses grow securely worldwide.
                        </p>
                    </motion.div>

                    {/* Company */}
                    <div>
                        <h3 className="text-[20px] font-heading text-white font-semibold mb-4">
                            Company
                        </h3>
                        <ul className="space-y-2">
                            {companyLinks.map((link, i) => (
                                <motion.li
                                    key={i}
                                    custom={i}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    variants={listItemVariants}
                                    className="flex items-center space-x-2"
                                >
                                    <FaChevronRight className="text-[#51ff4a] text-sm" />
                                    <a href="#" className="hover:text-purple-400">{link}</a>
                                </motion.li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-[20px] font-heading text-white font-semibold mb-4">
                            Services
                        </h3>
                        <ul className="space-y-2">
                            {servicesLinks.map((link, i) => (
                                <motion.li
                                    key={i}
                                    custom={i}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    variants={listItemVariants}
                                    className="flex items-center space-x-2"
                                >
                                    <FaChevronRight className="text-[#51ff4a] text-sm" />
                                    <a href="#" className="hover:text-purple-400">{link}</a>
                                </motion.li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h3 className="text-[20px] font-heading text-white font-semibold mb-4">
                            Resources
                        </h3>
                        <ul className="space-y-2">
                            {resourcesLinks.map((link, i) => (
                                <motion.li
                                    key={i}
                                    custom={i}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    variants={listItemVariants}
                                    className="flex items-center space-x-2"
                                >
                                    <FaChevronRight className="text-[#51ff4a] text-sm" />
                                    <a href="#" className="hover:text-purple-400">{link}</a>
                                </motion.li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="mt-12 mb-5 border-t border-gray-700 pt-6 flex flex-col md:flex-row items-center justify-between">
                    <p className="text-sm text-center md:text-left">
                        Copyright © 2025{" "}
                        <span className="text-purple-400">IronandByte</span>. All Rights Reserved
                    </p>

                    <div className="flex items-center space-x-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-purple-400">Terms & Conditions</a>
                        <a href="#" className="hover:text-purple-400">Privacy Policy</a>
                    </div>
                </div>
            </div>
            <BackToTop />
        </footer>
    );
};

export default Footer;
