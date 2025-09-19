import React from "react";

export default function StartupsFintech() {
  return (
    <section className="bg-[#1a103d] text-white py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1508385082359-f2f0f3c7b45f?auto=format&fit=crop&w=1400&q=80"
            alt="Startups & Fintech Security"
            className="w-full h-[350px] md:h-[450px] object-cover"
          />
        </div>

        {/* Content */}
        <div>
          <h2 className="text-blue-400 uppercase tracking-wider text-sm font-semibold mb-3">
            Industries → Startups & Fintech
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-4">Secure-by-Design for Fast-moving Teams</h3>
          <p className="text-gray-300 mb-6 leading-relaxed">
            We help startups and fintechs build security into their products from day one — secure architecture, DevSecOps,
            and pragmatic compliance to enable fast iteration without compromising safety.
          </p>

          <ul className="space-y-3 text-gray-300 mb-6">
            <li>Threat modelling & secure design reviews</li>
            <li>CI/CD integration for SAST/DAST & automated checks</li>
            <li>Payment & data compliance (PCI, GDPR) advisory</li>
            <li>Security coaching for engineering teams</li>
          </ul>

          <a
            href="/contact"
            className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full font-semibold shadow-md hover:opacity-95 transition"
          >
            Get Startups Security Help
          </a>
        </div>
      </div>
    </section>
  );
}
