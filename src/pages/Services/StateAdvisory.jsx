import React from "react";
import stateAdvisoryImg from "../../assets/stateAdvisory.jpg"
const StateAdvisory = () => {
  return (
    <section className="bg-[#0d1324] text-white py-16 px-6 md:px-12 lg:px-20">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Section: Text */}
        <div className="order-2 lg:order-1">
          <h2 className="text-green-400 uppercase tracking-wider text-sm font-semibold mb-4">
            Services → Digital Warfare & State Advisory
          </h2>
          <h3 className="font-heading text-3xl md:text-4xl font-bold mb-6">
            Digital Warfare & State Advisory
          </h3>
          <p className="text-gray-300 mb-6">
            Nation-states, government agencies, and critical infrastructure operators 
            are prime targets for advanced cyber warfare campaigns. Our **State Advisory 
            division** provides governments and defense organizations with proactive 
            intelligence, strategy, and operational support to safeguard digital sovereignty.
          </p>

          {/* Core Capabilities */}
          <div className="space-y-4">
            {[
              "Cyber threat intelligence for state-level adversaries",
              "Defensive and offensive digital warfare strategies",
              "Protection of critical national infrastructure",
              "Policy advisory and compliance alignment",
              "Incident coordination & war-room strategy support",
            ].map((point, i) => (
              <p key={i} className="flex items-center gap-3 text-gray-300">
                <span className="w-2.5 h-2.5 rounded-full bg-green-400"></span>
                {point}
              </p>
            ))}
          </div>
        </div>

        {/* Right Section: Image */}
        <div className="relative order-1 lg:order-2">
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src={stateAdvisoryImg}
              alt="Digital Warfare & State Advisory"
              className="w-full h-[350px] object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-green-500 to-blue-600 p-6 rounded-xl shadow-xl">
            <h4 className="text-xl font-bold">Govt Trusted</h4>
            <p className="text-sm text-gray-100">Trusted partner for national defense & digital security</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StateAdvisory;
