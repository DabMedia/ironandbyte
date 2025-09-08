import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import Why from "../assets/why.jpg"
const stats = [
  { value: 5000, suffix: "+", label: "Projects Completed", color: "bg-green-900/80 text-green-300" },
  { value: 150000, suffix: "+", label: "Customers Globally", color: "bg-pink-900/80 text-pink-300" },
  { value: 95, suffix: "%", label: "Client Retention Rate", color: "bg-yellow-900/80 text-yellow-300" },
  { value: 25, suffix: "+", label: "Years Of Experience", color: "bg-purple-900/80 text-purple-300" },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-[#0a0f1c] py-20 px-6 text-white text-center overflow-hidden">
      <h2 className="text-blue-400 uppercase tracking-wider text-sm font-semibold mb-5">Why Choose Us</h2>
      <h3 className="font-heading text-3xl md:text-4xl font-bold text-white mb-12">
        Forging a Path to Cybersecurity Leadership
      </h3>
      <div className="grid md:grid-cols-3 gap-12 items-center max-w-6xl mx-auto">
        <div className="flex flex-col gap-12">
          {stats.slice(0, 2).map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: i * 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-4xl font-extrabold">
                <CountUp end={stat.value} duration={2} separator="," />{stat.suffix}
              </h3>
              <span
                className={`px-3 py-1 mt-2 inline-block rounded-lg text-sm font-medium ${stat.color}`}
              >
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="rounded-2xl border border-transparent p-1 bg-gradient-to-r from-[#51ff4a] to-[#562eab]">
            <img
              src={Why} 
              alt="Cybersecurity"
              className="rounded-xl"
            />
          </div>
        </motion.div>

        <div className="flex flex-col gap-12">
          {stats.slice(2).map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: i * 0.3 + 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-4xl font-extrabold">
                <CountUp end={stat.value} duration={2} />{stat.suffix}
              </h3>
              <span
                className={`px-3 py-1 mt-2 inline-block rounded-lg text-sm font-medium ${stat.color}`}
              >
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
