import React from "react";
import { ShieldCheck, Award, UserCheck } from "lucide-react";
import AboutImg from "../assets/about1.webp";

const About = () => {
  return (
    <section className="bg-[#0f0a26] text-white py-16 px-6 md:px-12 lg:px-20">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* LEFT IMAGE */}
        <div className="relative">
          <img
            src={AboutImg}
            alt="Cyber Warfare"
            className="w-full h-[350px] md:h-[450px] object-cover rounded-2xl shadow-lg"
          />
          <div className="absolute bottom-6 right-6 bg-gradient-to-r from-[#51ff4a] to-[#562eab] text-center rounded-xl p-4 shadow-lg">
            <h2 className="text-4xl font-bold">24/7</h2>
            <p className="text-sm text-gray-200">Cyber Ops Center</p>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div>
          <h2 className="text-blue-400 uppercase tracking-wider text-sm font-semibold mb-3">
            ABOUT US
          </h2>
          <h3 className="font-heading text-3xl md:text-4xl font-bold mb-6">
            Who We Are
          </h3>
          <p className="text-gray-300 mb-6 leading-relaxed">
            Iron & Byte is a next-generation cybersecurity company specializing
            in offensive-first strategies, trusted government advisory, and
            personalized VIP digital protection. Our mission is to safeguard the
            future by blending intelligence, technology, and resilience.
          </p>

          {/* Mission & Vision */}
          <div className="mb-6">
            <h4 className="text-xl font-semibold text-white mb-2">
              Mission & Vision
            </h4>
            <p className="text-gray-300">
              Our vision is to create a secure digital world where individuals,
              businesses, and governments can thrive. Our mission is to deliver
              proactive, intelligence-driven solutions to combat evolving cyber
              threats.
            </p>
          </div>

          {/* Leadership */}
          <div className="mb-6">
            <h4 className="text-xl font-semibold text-white mb-2">
              Leadership
            </h4>
            <p className="text-gray-300">
              Guided by industry veterans and trusted advisors, Iron & Byte
              brings decades of combined experience in cybersecurity, military
              intelligence, and state-level advisory.
            </p>
          </div>

          {/* Why Iron & Byte (3 boxes) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
            <div className="bg-[#1a103d] p-6 rounded-xl shadow-md flex flex-col items-center text-center">
              <ShieldCheck className="text-green-400 mb-3" size={32} />
              <h5 className="font-semibold">Offensive-first</h5>
              <p className="text-sm text-gray-400 mt-2">
                Proactive attack simulations before hackers strike.
              </p>
            </div>

            <div className="bg-[#1a103d] p-6 rounded-xl shadow-md flex flex-col items-center text-center">
              <Award className="text-purple-400 mb-3" size={32} />
              <h5 className="font-semibold">Govt Trusted</h5>
              <p className="text-sm text-gray-400 mt-2">
                Advisory partner for government & state security.
              </p>
            </div>

            <div className="bg-[#1a103d] p-6 rounded-xl shadow-md flex flex-col items-center text-center">
              <UserCheck className="text-blue-400 mb-3" size={32} />
              <h5 className="font-semibold">VIP Protection</h5>
              <p className="text-sm text-gray-400 mt-2">
                Elite digital protection for high-profile individuals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
