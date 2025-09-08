import React from "react";
import { CheckCircle, Star, PlayCircle } from "lucide-react";
import CustomButton from "../component/CustomButton";
import AboutImg from "../assets/about1.webp";
import AboutImg2 from "../assets/about-2.webp"

const About = () => {
  return (
    <section className="bg-[#1a103d] text-white py-16 px-6 md:px-12 lg:px-20">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="relative flex flex-col gap-6">
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src={AboutImg}
              alt="Cyber Security"
              className="w-full h-[300px] object-cover"
            />
          </div>
          <div className="absolute -bottom-10 -right-30 bg-gradient-to-r from-[#51ff4a] to-[#562eab] text-center rounded-xl p-6 shadow-lg">
            <span className="bg-white/20 text-white text-sm font-samibold px-3 py-1 rounded-full">
              Top Company
            </span>
            <h2 className="text-5xl font-bold mt-3">4.9</h2>
            <div className="flex justify-center items-center gap-1 text-yellow-300 my-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} fill="currentColor" size={20} />
              ))}
            </div>
            <p className="text-gray-200 text-sm">Client Ratings</p>
          </div>

        </div>

        <div>
          <h2 className="text-blue-400 uppercase tracking-wider text-sm font-semibold mb-5">ABOUT US</h2>
          <h3 className="font-heading text-3xl md:text-4xl font-bold text-white mb-12">
            24/7 Cyber Security Operation Center
          </h3>
          <p className="text-gray-300 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
            luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper
            mattis, pulvinar dapibus leo.
          </p>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 bg-[#2a1b4a] p-6 rounded-2xl shadow-md">
            {[
              "Lorem ipsum dolor sit amet",
              "Pulvinar dapibus leo. Lorem",
              "Luctus nec ullamcorper mattis",
              "Pulvinar dapibus leo. Lorem",
              "Pulvinar dapibus leo. Lorem ipsum",
              "Lorem ipsum dolor sit amet",
            ].map((feature, i) => (
              <p key={i} className="flex items-center gap-2 text-gray-300">
                <CheckCircle className="text-purple-400" size={18} />
                {feature}
              </p>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-4 mt-8">
            <CustomButton text="READ MORE →" />

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
