import React from "react";
import scadaImg from "../../assets/scada.avif"
export default function ScadaSecurity() {
  return (
    <section className="bg-[#1a103d] text-white py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left: Image */}
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <img
            src={scadaImg}
            alt="SCADA Control Room"
            className="w-full h-[350px] md:h-[450px] object-cover"
          />
        </div>

        {/* Right: Content */}
        <div>
          <h2 className="text-green-400 uppercase tracking-wider text-sm font-semibold mb-3">
            R&amp;D → SCADA Security
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Securing Industrial Control Systems & Operational Technology (OT)
          </h3>
          <p className="text-gray-300 mb-6 leading-relaxed">
            SCADA and ICS environments power critical national infrastructure — energy, water, transport and manufacturing.
            Our SCADA Security program focuses on threat modelling, secure architecture, safe vulnerability research, and
            resilient incident playbooks tailored to OT constraints.
          </p>

          <ul className="space-y-3 text-gray-300 mb-6">
            <li>Risk mapping for legacy control systems and PLCs</li>
            <li>Safe testbeds & simulation environments for OT research</li>
            <li>Secure network segmentation and protocol hardening (Modbus, DNP3, IEC-62443 alignment)</li>
            <li>Incident response playbooks customized for OT safety requirements</li>
          </ul>

          <div>
            <a
              href="/contact"
              className="inline-block bg-gradient-to-r from-green-400 to-blue-600 text-black px-6 py-3 rounded-full font-semibold shadow-md hover:opacity-95 transition"
            >
              Discuss SCADA Partnership
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
