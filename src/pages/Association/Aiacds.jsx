import React from "react";

export default function AIACDS() {
  return (
    <section className="bg-[#1a103d] text-white py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1581092795366-4c6de5a8c0d6?auto=format&fit=crop&w=1400&q=80"
            alt="AIACDS"
            className="w-full h-[350px] md:h-[450px] object-cover"
          />
        </div>

        {/* Content */}
        <div>
          <h2 className="text-blue-400 uppercase tracking-wider text-sm font-semibold mb-3">
            Association → AIACDS
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-4">All India Association for Cyber & Digital Security</h3>
          <p className="text-gray-300 mb-6 leading-relaxed">
            AIACDS connects cybersecurity professionals across India to share insights, establish best practices, and
            contribute to national cyber policy development. We organize events, seminars, and collaboration programs
            for members.
          </p>

          <ul className="space-y-3 text-gray-300 mb-6">
            <li>Networking with cybersecurity experts</li>
            <li>Workshops & skill development programs</li>
            <li>Policy shaping and advisory participation</li>
            <li>Cyber awareness campaigns</li>
          </ul>

          <a
            href="/contact"
            className="inline-block bg-gradient-to-r from-green-400 to-blue-600 text-black px-6 py-3 rounded-full font-semibold shadow-md hover:opacity-95 transition"
          >
            Join AIACDS
          </a>
        </div>
      </div>
    </section>
  );
}
