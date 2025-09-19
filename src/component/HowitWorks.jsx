import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";

const steps = [
  {
    id: "01",
    title: "Comprehensive Assessment",
    desc: "Evaluate the severity of threats, their potential impact on your business, and the likelihood of occurrence. Ensure adherence to industry standards and regulations, such as GDPR, HIPAA, and PCI DSS.",
    color: "bg-green-500",
  },
  {
    id: "02",
    title: "Advanced Threat Detection",
    desc: "Detect and prevent sophisticated cyberattacks. Safeguard sensitive information with strong encryption. Protect web applications from attacks. Monitor network traffic.",
    color: "bg-yellow-500",
  },
  {
    id: "03",
    title: "Incident Response",
    desc: "When a threat is detected, our automated response systems spring into action. We swiftly contain the incident, minimize damage, and restore your systems to normal operation. Our expert security analysts monitor.",
    color: "bg-pink-500",
  },
  {
    id: "04",
    title: "Continuous Monitoring",
    desc: "We maintain 24/7 vigilance over your cloud environment, ensuring ongoing protection. Our security systems are constantly learning and adapting to the ever-evolving threat landscape. We proactively identify.",
    color: "bg-blue-500",
  },
];

const HowitWorks = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.2", "end 0.9"],
  });

  return (
    <section className="bg-[#0b1222] text-white py-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-blue-400 uppercase tracking-wider text-sm font-semibold mb-5">
          How It Works
        </h2>
        <h3 className="font-heading text-3xl md:text-4xl font-bold text-white mb-12">
          Securing Your Digital Future, Step by Step
        </h3>
      </div>

      <div ref={ref} className="relative max-w-4xl mx-auto">
        <div className="absolute left-1/2 transform -translate-x-1/2 top-0 h-full border-r-2 border-dotted border-gray-600"></div>

        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-1/2 transform -translate-x-1/2 top-0 origin-top w-1 bg-gradient-to-b from-blue-400 to-purple-500"
        ></motion.div>


        <div className="space-y-16 relative z-10">
          {steps.map((step, i) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className={`relative flex items-start ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } flex-col`}
            >
              <div className="absolute left-1/2 transform -translate-x-1/2 md:translate-x-0 md:static">
                <div
                  className={`w-12 h-12 flex items-center justify-center rounded-full ${step.color} text-white font-bold shadow-lg`}
                >
                  {step.id}
                </div>
              </div>

              <div
                className={`mt-14 md:mt-0 md:w-1/2 ${
                  i % 2 === 0 ? "md:pl-10" : "md:pr-10 text-right"
                }`}
              >
                <h4 className="text-xl font-semibold mb-2">{step.title}</h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowitWorks;
