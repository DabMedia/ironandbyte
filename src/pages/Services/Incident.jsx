import React from "react";
import rapidImg from "../../assets/rapid.avif"
const Incident = () => {
  return (
    <section className="bg-[#0f0a1f] text-white py-16 px-6 md:px-12 lg:px-20">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Section: Text */}
        <div>
          <h2 className="text-green-400 uppercase tracking-wider text-sm font-semibold mb-4">
            Services → Incident Response
          </h2>
          <h3 className="font-heading text-3xl md:text-4xl font-bold mb-6">
            Rapid Incident Response & Cyber Crisis Management
          </h3>
          <p className="text-gray-300 mb-6">
            When a cyber attack strikes, every second counts. Our Incident Response 
            team operates 24/7 to identify, contain, and eradicate threats before 
            they cause lasting damage. We combine threat intelligence, forensic 
            expertise, and battle-tested playbooks to help you recover with 
            confidence and resilience.
          </p>

          {/* Key Outcomes */}
          <div className="space-y-4">
            {[
              "Immediate detection and containment of live threats",
              "Root-cause analysis and digital forensics",
              "Secure system recovery and remediation",
              "Post-incident reporting & compliance guidance",
              "Strategies to prevent future breaches",
            ].map((item, i) => (
              <p key={i} className="flex items-center gap-3 text-gray-300">
                <span className="w-2.5 h-2.5 rounded-full bg-green-400 mt-1"></span>
                {item}
              </p>
            ))}
          </div>
        </div>

        {/* Right Section: Image / Illustration */}
        <div className="relative">
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src={rapidImg}
              className="w-full h-[350px] md:h-[450px] object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-green-400 to-purple-600 p-6 rounded-xl shadow-xl">
            <h4 className="text-xl font-bold">24/7 Response</h4>
            <p className="text-sm text-gray-100">Always on guard against cyber threats</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Incident;
