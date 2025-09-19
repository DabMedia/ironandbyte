import React from "react";

export default function DefenseCriticalInfrastructure() {
  return (
    <section className="bg-[#1a103d] text-white py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Content */}
        <div>
          <h2 className="text-blue-400 uppercase tracking-wider text-sm font-semibold mb-3">
            Industries → Defense & Critical Infrastructure
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-4">Protecting Defence & Critical National Systems</h3>
          <p className="text-gray-300 mb-6 leading-relaxed">
            We provide bespoke cyber protection for defence contractors, transport networks, utilities and other
            critical infrastructure, with an emphasis on resilience, secure supply-chains and OT/ICS safety.
          </p>

          <ul className="space-y-3 text-gray-300 mb-6">
            <li>OT & ICS security assessments and safe testing</li>
            <li>Supply-chain security and vendor risk programs</li>
            <li>Secure procurement advisory & assurance</li>
            <li>Tabletop exercises & full-scale resilience drills</li>
          </ul>

          <a
            href="/contact"
            className="inline-block bg-gradient-to-r from-green-400 to-blue-600 text-black px-6 py-3 rounded-full font-semibold shadow-md hover:opacity-95 transition"
          >
            Discuss Defense Programs
          </a>
        </div>

        {/* Image */}
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=1400&q=80"
            alt="Defense & Critical Infrastructure"
            className="w-full h-[350px] md:h-[450px] object-cover"
          />
        </div>
      </div>
    </section>
  );
}
