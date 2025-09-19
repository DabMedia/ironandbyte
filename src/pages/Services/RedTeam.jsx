import React from "react";
import redteamImg from "../../assets/redteam.avif"
const RedTeam = () => {
  return (
    <section className="bg-[#1a103d] text-white py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left: Content */}
        <div>
          <h2 className="text-green-400 uppercase tracking-wider text-sm font-semibold mb-3">
            Services → Red Team
          </h2>

          <h3 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
            Red Team Services — Realistic Adversary Emulation
          </h3>

          <p className="text-gray-300 leading-relaxed mb-6">
            Our Red Team simulates sophisticated threat actors — including tactics,
            techniques and procedures used by nation-state and advanced criminal groups —
            to evaluate your organisation’s detection, response and resilience under real attack conditions.
          </p>

          {/* Outcomes */}
          <div className="mb-6">
            <h4 className="text-white font-semibold mb-3">Key Outcomes</h4>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-3">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-green-400 text-black font-bold">1</span>
                <div>
                  <div className="font-medium">Reveal blind spots</div>
                  <div className="text-sm text-gray-400">Expose gaps across people, process and technology.</div>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-green-400 text-black font-bold">2</span>
                <div>
                  <div className="font-medium">Improve detection & response</div>
                  <div className="text-sm text-gray-400">Validate SOC processes, playbooks and tooling under pressure.</div>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-green-400 text-black font-bold">3</span>
                <div>
                  <div className="font-medium">Strengthen controls</div>
                  <div className="text-sm text-gray-400">Prioritised remediation roadmap aligned to business risk.</div>
                </div>
              </li>
            </ul>
          </div>

          {/* Red Team Process */}
          <div className="bg-[#0f0b2a] p-6 rounded-2xl shadow-md mb-6">
            <h5 className="text-white font-semibold mb-2">Red Team Process</h5>
            <ol className="list-decimal list-inside space-y-2 text-gray-300">
              <li><strong>Intelligence & Recon:</strong> Target profiling and supply-chain mapping.</li>
              <li><strong>Initial Access:</strong> Phishing, credential-stuffing, or exploiting weak services.</li>
              <li><strong>Lateral Movement:</strong> Privilege escalation and persistence to reach objectives.</li>
              <li><strong>Exfiltration & Reporting:</strong> Controlled data extraction, clean-up and detailed deliverables.</li>
            </ol>
          </div>

          {/* CTA */}
          <div>
            <a
              href="/contact"
              className="inline-block bg-gradient-to-r from-green-400 to-blue-600 text-black px-6 py-3 rounded-full font-semibold shadow-md hover:opacity-95 transition"
              aria-label="Contact us about Red Team services"
            >
              Request a Red Team Engagement
            </a>
          </div>
        </div>

        {/* Right: Illustration / Image */}
        <div className="relative">
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src={redteamImg}
              alt="Red team simulation"
              className="w-full h-[350px] md:h-[450px] object-cover"
            />
          </div>

          <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-green-400 to-purple-600 p-4 rounded-xl shadow-xl">
            <h4 className="text-md font-bold text-black">Adversary Emulation</h4>
            <p className="text-sm text-black/80">Mimicking real attackers to harden your defences</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RedTeam;
