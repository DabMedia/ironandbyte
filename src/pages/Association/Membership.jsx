import React from "react";

export default function Membership() {
  return (
    <section className="bg-[#1a103d] text-white py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Content */}
        <div>
          <h2 className="text-blue-400 uppercase tracking-wider text-sm font-semibold mb-3">
            Association → Membership & Partnerships
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-4">Become a Member or Partner</h3>
          <p className="text-gray-300 mb-6 leading-relaxed">
            Membership provides access to exclusive industry insights, networking events, and collaboration opportunities
            with top cyber experts and organizations. Partnerships enable organizations to jointly conduct research,
            training, and awareness campaigns.
          </p>

          <ul className="space-y-3 text-gray-300 mb-6">
            <li>Exclusive access to reports & whitepapers</li>
            <li>Invitation to seminars & webinars</li>
            <li>Collaborative projects & policy inputs</li>
            <li>Recognition in AIACDS network</li>
          </ul>

          <a
            href="/contact"
            className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full font-semibold shadow-md hover:opacity-95 transition"
          >
            Join Membership
          </a>
        </div>

        {/* Image */}
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1573497161008-3fc7f2c5f64a?auto=format&fit=crop&w=1400&q=80"
            alt="Membership & Partnerships"
            className="w-full h-[350px] md:h-[450px] object-cover"
          />
        </div>
      </div>
    </section>
  );
}
