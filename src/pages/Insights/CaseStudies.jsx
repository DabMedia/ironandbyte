import React from "react";

export default function CaseStudies() {
    return (
        <section className="bg-[#1a103d] text-white py-16 px-6 md:px-12 lg:px-20">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Content */}
                <div>
                    <h2 className="text-blue-400 uppercase tracking-wider text-sm font-semibold mb-3">Insights → Case Studies</h2>
                    <h3 className="text-3xl md:text-4xl font-bold mb-4">Real-World Cybersecurity Success Stories</h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                        Explore case studies demonstrating our approach to solving complex cybersecurity challenges. See how we
                        protect organizations, governments, and high-profile clients from digital threats.
                    </p>

                    <ul className="space-y-3 text-gray-300 mb-6">
                        <li>Enterprise & government security implementations</li>
                        <li>Incident response & mitigation success stories</li>
                        <li>Proactive threat detection and prevention</li>
                        <li>Customized solutions and frameworks</li>
                    </ul>

                    <a
                        href="/contact"
                        className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full font-semibold shadow-md hover:opacity-95 transition"
                    >
                        View Case Studies
                    </a>
                </div>

                {/* Image */}
                <div className="rounded-2xl overflow-hidden shadow-lg">
                    <img
                        src="https://images.unsplash.com/photo-1581092440078-f7b16b2f3147?auto=format&fit=crop&w=1400&q=80"
                        alt="Case Studies"
                        className="w-full h-[350px] md:h-[450px] object-cover"
                    />
                </div>
            </div>
        </section>
    );
}
