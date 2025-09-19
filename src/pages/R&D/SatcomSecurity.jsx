import React from "react";
import SATCOMImg from "../../assets/SATCOM.avif"
export default function SatcomSecurity() {
  return (
    <section className="bg-[#1a103d] text-white py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left: Text */}
        <div>
          <h2 className="text-green-400 uppercase tracking-wider text-sm font-semibold mb-3">
            R&amp;D → SATCOM Security
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Securing Satellite Communications & Ground Segments
          </h3>
          <p className="text-gray-300 mb-6 leading-relaxed">
            Secure satellite communications are vital for defence, emergency services and national infrastructure.
            Our SATCOM program researches uplink/downlink hardening, secure modem stacks, telemetry protection, and
            resilient link architectures to maintain confidentiality, integrity and availability in contested environments.
          </p>

          <ul className="space-y-3 text-gray-300 mb-6">
            <li>Secure link design & anti-jamming strategies</li>
            <li>Signal authentication and telemetry integrity checks</li>
            <li>Hardening satellite ground station software and firmware</li>
            <li>Threat-informed testing in isolated lab environments</li>
          </ul>

          <div>
            <a
              href="/contact"
              className="inline-block bg-gradient-to-r from-green-400 to-blue-600 text-black px-6 py-3 rounded-full font-semibold shadow-md hover:opacity-95 transition"
            >
              Enquire About SATCOM Research
            </a>
          </div>
        </div>

        {/* Right: Image */}
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <img
            src={SATCOMImg}
            alt="Satellite ground station"
            className="w-full h-[350px] md:h-[450px] object-cover"
          />
        </div>
      </div>
    </section>
  );
}
