import React from "react";
import OffensiveImg from "../../assets/Offensive.avif"
const OffensiveSecurity = () => {
  return (
    <section className="bg-[#0c0f1a] text-white py-16 px-6 md:px-12 lg:px-20">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Section: Text */}
        <div className="order-2 lg:order-1">
          <h2 className="text-blue-400 uppercase tracking-wider text-sm font-semibold mb-4">
            Services → Offensive Security Solutions
          </h2>
          <h3 className="font-heading text-3xl md:text-4xl font-bold mb-6">
            Offensive Security Solutions
          </h3>
          <p className="text-gray-300 mb-6">
            Cyber defense begins with understanding how attackers think. Our 
            <span className="text-white font-semibold"> Offensive Security Solutions </span> 
            simulate real-world adversaries to identify vulnerabilities before 
            they can be exploited. We empower organizations to strengthen their 
            defenses against advanced threats.
          </p>

          {/* Core Capabilities */}
          <div className="space-y-4">
            {[
              "Advanced penetration testing & vulnerability discovery",
              "Red team simulations & adversary emulation",
              "Exploitation of web, mobile & cloud environments",
              "Threat modeling and attack surface analysis",
              "Customized reports with prioritized remediation steps",
            ].map((point, i) => (
              <p key={i} className="flex items-center gap-3 text-gray-300">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-400"></span>
                {point}
              </p>
            ))}
          </div>
        </div>

        {/* Right Section: Image */}
        <div className="relative order-1 lg:order-2">
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src={OffensiveImg}
              alt="Offensive Security Solutions"
              className="w-full h-[350px] object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-blue-500 to-purple-600 p-6 rounded-xl shadow-xl">
            <h4 className="text-xl font-bold">Proactive Defense</h4>
            <p className="text-sm text-gray-100">
              Stay ahead of attackers with real-world attack simulations
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OffensiveSecurity;
