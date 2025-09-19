import React from "react";

export default function Whitepapers() {
    return (
        <section className="bg-[#1a103d] text-white py-16 px-6 md:px-12 lg:px-20">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Image */}
                <div className="rounded-2xl overflow-hidden shadow-lg">
                    <img
                        src="https://images.unsplash.com/photo-1581092334737-2b7b6e4c5d26?auto=format&fit=crop&w=1400&q=80"
                        alt="Whitepapers"
                        className="w-full h-[350px] md:h-[450px] object-cover"
                    />
                </div>

                {/* Content */}
                <div>
                    <h2 className="text-blue-400 uppercase tracking-wider text-sm font-semibold mb-3">Insights → Whitepapers</h2>
                    <h3 className="text-3xl md:text-4xl font-bold mb-4">In-Depth Cybersecurity Research</h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                        Access our detailed whitepapers covering emerging threats, compliance guidelines, and security frameworks.
                        Learn about advanced mitigation strategies and best practices for your organization.
                    </p>

                    <ul className="space-y-3 text-gray-300 mb-6">
                        <li>Comprehensive threat analysis</li>
                        <li>Industry compliance guidelines</li>
                        <li>Security frameworks & methodologies</li>
                        <li>Practical recommendations & strategies</li>
                    </ul>

                    <a
                        href="/contact"
                        className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full font-semibold shadow-md hover:opacity-95 transition"
                    >
                        Download Whitepapers
                    </a>
                </div>
            </div>
        </section>
    );
}
