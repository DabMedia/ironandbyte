import React from "react";

export default function CorporatesEnterprises() {
  return (
    <section className="bg-[#1a103d] text-white py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Content */}
        <div>
          <h2 className="text-blue-400 uppercase tracking-wider text-sm font-semibold mb-3">
            Industries → Corporates & Enterprises
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-4">Enterprise Security & Cloud Resilience</h3>
          <p className="text-gray-300 mb-6 leading-relaxed">
            We help large organisations secure complex estates: cloud workloads, SaaS, identity, networks and employee
            endpoints — plus training programmes to raise security maturity across teams.
          </p>

          <ul className="space-y-3 text-gray-300 mb-6">
            <li>Cloud-native security & secure architecture reviews</li>
            <li>Application security programmes (SAST/DAST/VAPT)</li>
            <li>Identity & access management, privileged access controls</li>
            <li>Security operations, SIEM tuning and managed detection</li>
          </ul>

          <a
            href="/contact"
            className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full font-semibold shadow-md hover:opacity-95 transition"
          >
            Talk Enterprise Security
          </a>
        </div>

        {/* Image */}
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1542223616-5f1b3bde7a9b?auto=format&fit=crop&w=1400&q=80"
            alt="Corporates & Enterprise Security"
            className="w-full h-[350px] md:h-[450px] object-cover"
          />
        </div>
      </div>
    </section>
  );
}
