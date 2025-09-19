import React from "react";

export default function HighProfileIndividuals() {
  return (
    <section className="bg-[#1a103d] text-white py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1520975918643-6f6d8b9b0a66?auto=format&fit=crop&w=1400&q=80"
            alt="VIP Personal Security"
            className="w-full h-[350px] md:h-[450px] object-cover"
          />
        </div>

        {/* Content */}
        <div>
          <h2 className="text-blue-400 uppercase tracking-wider text-sm font-semibold mb-3">
            Industries → High-Profile Individuals
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-4">Personal Digital Protection for VIPs & Leaders</h3>
          <p className="text-gray-300 mb-6 leading-relaxed">
            Our VIP protection program combines proactive monitoring, secure comms, device hardening and privacy risk
            reduction to protect public figures, executives, influencers and high-net-worth individuals.
          </p>

          <ul className="space-y-3 text-gray-300 mb-6">
            <li>Threat modelling for public personas & families</li>
            <li>Device hygiene, encrypted communications & secure travel support</li>
            <li>Digital footprint minimisation & doxxing prevention</li>
            <li>Rapid incident response & reputation protection</li>
          </ul>

          <a
            href="/contact"
            className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full font-semibold shadow-md hover:opacity-95 transition"
          >
            Secure a VIP Assessment
          </a>
        </div>
      </div>
    </section>
  );
}
