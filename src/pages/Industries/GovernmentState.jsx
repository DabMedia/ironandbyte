import React from "react";

export default function GovernmentState() {
    return (
        <section className="bg-[#1a103d] text-white py-16 px-6 md:px-12 lg:px-20">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Image */}
                <div className="rounded-2xl overflow-hidden shadow-lg">
                    <img
                        src="https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=1400&q=80"
                        alt="Government & State Cybersecurity"
                        className="w-full h-[350px] md:h-[450px] object-cover"
                    />
                </div>

                {/* Content */}
                <div>
                    <h2 className="text-blue-400 uppercase tracking-wider text-sm font-semibold mb-3">
                        Industries → Government & State
                    </h2>
                    <h3 className="text-3xl md:text-4xl font-bold mb-4">Secure National Infrastructure & Policy Advisory</h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                        We provide advisory, secure operations, crisis support and capability building for government bodies,
                        defense agencies and national critical infrastructure operators. Work is delivered with rigorous governance
                        and classified-handling practices.
                    </p>

                    <ul className="space-y-3 text-gray-300 mb-6">
                        <li>National-level threat intelligence & policy input</li>
                        <li>Secure operations centres & SOC enablement</li>
                        <li>Critical infrastructure protection & OT hardening</li>
                        <li>Incident coordination & cross-agency exercises</li>
                    </ul>

                    <a
                        href="/contact"
                        className="inline-block bg-gradient-to-r from-green-400 to-blue-600 text-black px-6 py-3 rounded-full font-semibold shadow-md hover:opacity-95 transition"
                    >
                        Engage Our Government Team
                    </a>
                </div>
            </div>
        </section>
    );
}
