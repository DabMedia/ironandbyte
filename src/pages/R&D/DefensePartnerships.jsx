import React from "react";

export default function DefensePartnerships() {
  return (
    <section className="bg-[#1a103d] text-white py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left: Text */}
        <div>
          <h2 className="text-green-400 uppercase tracking-wider text-sm font-semibold mb-3">
            R&amp;D → Defense Technology Partnerships
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-4">Collaborative Programs with Defense & Critical Infrastructure</h3>
          <p className="text-gray-300 mb-6 leading-relaxed">
            We partner with government labs, defence primes and critical infrastructure operators to co-develop resilient
            technology, perform joint exercises, and transfer knowledge for long-term capability growth.
          </p>

          <ul className="space-y-3 text-gray-300 mb-6">
            <li>Joint R&amp;D programs & capability transfer</li>
            <li>Coordinated exercises, war-gaming and operational validation</li>
            <li>Secure procurement advisory and technology evaluation</li>
            <li>Training & workforce development for defence cyber roles</li>
          </ul>

          <div>
            <a
              href="/contact"
              className="inline-block bg-gradient-to-r from-green-400 to-blue-600 text-black px-6 py-3 rounded-full font-semibold shadow-md hover:opacity-95 transition"
            >
              Explore Partnership Opportunities
            </a>
          </div>
        </div>

        {/* Right: Image */}
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=1400&q=80"
            alt="Defense partnership"
            className="w-full h-[350px] md:h-[450px] object-cover"
          />
        </div>
      </div>
    </section>
  );
}
