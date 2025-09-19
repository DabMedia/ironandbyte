import React from "react";

const SastDast = () => {
  return (
    <section className="bg-[#1a103d] text-white py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-blue-400 uppercase tracking-wider text-sm font-semibold mb-3">
          SAST & DAST
        </h2>
        <h3 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
          Application Security Testing Made Simple
        </h3>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Combine <span className="text-purple-400 font-semibold">SAST</span> (Static Analysis) 
          and <span className="text-purple-400 font-semibold">DAST</span> (Dynamic Analysis) 
          to protect your applications both at the code level and in runtime.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* SAST */}
        <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">
            🔍 Static Application Security Testing (SAST)
          </h2>
          <p className="text-gray-700 mb-4">
            SAST analyzes source code, bytecode, or binaries for security
            vulnerabilities <strong>before execution</strong>. It helps
            developers fix issues early in the development cycle.
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Detects flaws in source code</li>
            <li>Shift-left security approach</li>
            <li>Integrates into CI/CD pipelines</li>
            <li>Provides detailed remediation guidance</li>
          </ul>
        </div>

        {/* DAST */}
        <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
          <h2 className="text-2xl font-bold text-green-700 mb-4">
            🌐 Dynamic Application Security Testing (DAST)
          </h2>
          <p className="text-gray-700 mb-4">
            DAST simulates real-world attacks by testing running applications
            externally. It identifies runtime vulnerabilities that attackers may
            exploit.
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Finds issues in runtime environment</li>
            <li>Validates authentication & authorization flaws</li>
            <li>Detects SQLi, XSS, CSRF, and more</li>
            <li>Complements penetration testing</li>
          </ul>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center mt-16">
        <h3 className="text-2xl font-bold text-white mb-4">
          Secure Your Applications with SAST & DAST
        </h3>
        <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
          Protect your business-critical applications by integrating automated
          testing into your development lifecycle. Stay ahead of attackers with
          proactive security.
        </p>
        <a
          href="/contact"
          className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full shadow-md hover:opacity-90 transition"
        >
          Talk to Our Security Experts
        </a>
      </div>
    </section>
  );
};

export default SastDast;
