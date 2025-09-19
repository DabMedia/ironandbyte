import React from 'react';
import { Link } from "react-router-dom";
// import BannerVideo from "../assets/herosection.mp4";
import cyberimg from "../assets/cyber-img.png";

const Banner = () => {
    return (
        <section className="relative h-screen w-full overflow-hidden">
            {/* Background Image */}
            <img
                src={cyberimg}
                alt="Cyber Security Background"
                className="absolute inset-0 w-full h-full object-cover"
            />

            {/* If you want video instead, uncomment this and remove the <img> above */}
            {/* <video
                src={BannerVideo}
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
            /> */}

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50"></div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
                <h1 className="text-5xl md:text-5xl font-bold mb-4">
                    Welcome to Iron & Byte
                </h1>
                <p className="text-lg md:text-xl mb-6 max-w-2xl">
                    Cybersecurity & Technology Solutions for the Future
                </p>

                {/* Buttons */}
                <div className="flex gap-4">
                    {/* Get Started Button */}
                    <Link
                        to="/services"
                        className="px-6 py-2 bg-gradient-to-r from-[#51ff4a] to-[#562eab] 
              hover:opacity-90 hover:shadow-lg hover:shadow-[#51ff4a]/50 
              rounded-md text-md font-medium transition duration-300"
                    >
                        Get Started
                    </Link>

                    {/* Contact Us Button */}
                    <Link
                        to="/contact"
                        className="relative px-6 py-2 rounded-md text-md font-medium 
              text-white border-2 border-white 
              overflow-hidden transition duration-300 group"
                    >
                        <span className="absolute inset-0 rounded-md bg-gradient-to-r from-[#51ff4a] to-[#562eab]  
              transform -translate-x-full group-hover:translate-x-0 
              transition-transform duration-500 ease-out z-0"></span>
                        <span className="relative z-10">Contact Us</span>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Banner;
