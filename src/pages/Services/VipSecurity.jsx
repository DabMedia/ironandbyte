import React from "react";
import vipsecurityImg from "../../assets/vipsecurity.jpg"
const VipSecurity = () => {
  return (
    <section className="bg-[#0a0f1f] text-white py-16 px-6 md:px-12 lg:px-20">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Section: Image */}
        <div className="relative order-2 lg:order-1">
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src={vipsecurityImg}
              alt="VIP & Personal Digital Security"
              className="w-full h-[350px] object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-purple-500 to-green-400 p-6 rounded-xl shadow-xl">
            <h4 className="text-xl font-bold">Discreet & Reliable</h4>
            <p className="text-sm text-gray-100">Tailored protection for executives & high-profile clients</p>
          </div>
        </div>

        {/* Right Section: Text */}
        <div className="order-1 lg:order-2">
          <h2 className="text-purple-400 uppercase tracking-wider text-sm font-semibold mb-4">
            Services → VIP & Personal Security
          </h2>
          <h3 className="font-heading text-3xl md:text-4xl font-bold mb-6">
            VIP & Personal Digital Security
          </h3>
          <p className="text-gray-300 mb-6">
            High-profile individuals such as executives, celebrities, and political leaders 
            face elevated digital threats ranging from cyberstalking to financial fraud. 
            Our VIP & Personal Digital Security services ensure your personal and professional 
            digital assets remain protected at all times — with complete discretion.
          </p>

          {/* Security Benefits */}
          <div className="space-y-4">
            {[
              "Exclusive digital monitoring for executives & VIPs",
              "Protection against identity theft and cyberstalking",
              "Secure communications & encrypted data transfers",
              "Threat intelligence tailored to personal risk profiles",
              "24/7 monitoring with rapid response to suspicious activity",
            ].map((item, i) => (
              <p key={i} className="flex items-center gap-3 text-gray-300">
                <span className="w-2.5 h-2.5 rounded-full bg-purple-400"></span>
                {item}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VipSecurity;
