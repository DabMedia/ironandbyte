import React from "react";

export default function Blog() {
    return (
        <section className="bg-[#1a103d] text-white py-16 px-6 md:px-12 lg:px-20">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Image */}
                <div className="rounded-2xl overflow-hidden shadow-lg">
                    <img
                        src="https://images.unsplash.com/photo-1581091215366-2d3d6a9c01ef?auto=format&fit=crop&w=1400&q=80"
                        alt="Cybersecurity Blog"
                        className="w-full h-[350px] md:h-[450px] object-cover"
                    />
                </div>

                {/* Content */}
                <div>
                    <h2 className="text-blue-400 uppercase tracking-wider text-sm font-semibold mb-3">Insights → Blog</h2>
                    <h3 className="text-3xl md:text-4xl font-bold mb-4">Stay Updated with Cybersecurity Trends</h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                        Read our blogs to gain insights on emerging threats, security tools, and industry best practices. Our content is
                        curated to help professionals and organizations stay ahead of cyber risks.
                    </p>

                    <ul className="space-y-3 text-gray-300 mb-6">
                        <li>Latest cybersecurity news & trends</li>
                        <li>Expert analysis & commentary</li>
                        <li>Tips & tutorials for security teams</li>
                        <li>Threat intelligence & mitigation strategies</li>
                    </ul>

                    <a
                        href="/contact"
                        className="inline-block bg-gradient-to-r from-green-400 to-blue-600 text-black px-6 py-3 rounded-full font-semibold shadow-md hover:opacity-95 transition"
                    >
                        Read More Blogs
                    </a>
                </div>
            </div>
        </section>
    );
}
