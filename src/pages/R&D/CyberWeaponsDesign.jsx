import React from "react";

export default function CyberWeaponsDesign() {
  return (
    <section className="bg-[#1a103d] text-white py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left: Image */}
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=80"
            alt="Cyber research"
            className="w-full h-[350px] md:h-[450px] object-cover"
          />
        </div>

        {/* Right: Content */}
        <div>
          <h2 className="text-green-400 uppercase tracking-wider text-sm font-semibold mb-3">
            R&amp;D → Cyber Weapons Design
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-4">Defensive Research in Offensive Capabilities</h3>
          <p className="text-gray-300 mb-6 leading-relaxed">
            We conduct responsible research into offensive cyber tooling to better defend against similar capabilities.
            Work is ethically governed, safety-first, and focused on detection, mitigation, and developing countermeasures
            for national defence use-cases.
          </p>

          <ul className="space-y-3 text-gray-300 mb-6">
            <li>Safe lab emulation of advanced adversary tooling</li>
            <li>Detection signatures and defensive signatures development</li>
            <li>Red-teaming tool analysis for SOC maturity</li>
            <li>Policy & ethics advisory to ensure responsible research governance</li>
          </ul>

          <div>
            <a
              href="/contact"
              className="inline-block bg-gradient-to-r from-green-400 to-blue-600 text-black px-6 py-3 rounded-full font-semibold shadow-md hover:opacity-95 transition"
            >
              Discuss Responsible Research
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
