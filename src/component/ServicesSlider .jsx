import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import ComputerSecurity from "../assets/services1.png";
import FolderSecurity from "../assets/services2.png";
import FingerPrintSecurity from "../assets/services3.png";
import ServerSecurity from "../assets/services4.png";
import CodeInspection from "../assets/services5.png";
import FileDuplication from "../assets/services6.png";

const services = [
    {
        id: 1,
        title: "Computer Security",
        desc: "Ruis autem vel eum iure repre rui in ea voluptate velit esse ua nihil molestiae....",
        img: ComputerSecurity,
    },
    {
        id: 2,
        title: "Folder Security",
        desc: "Guis autem vel eum iure repre rui in ea voluptate velit esse ua nihil molestiae....",
        img: FolderSecurity,
    },
    {
        id: 3,
        title: "Finger Print Security",
        desc: "Quis autem vel eum iure repre rui in ea voluptate velit esse ua nihil molestiae....",
        img: FingerPrintSecurity,
    },
    {
        id: 3,
        title: "Server Security",
        desc: "Quis autem vel eum iure repre rui in ea voluptate velit esse ua nihil molestiae....",
        img: ServerSecurity,
    },
    {
        id: 3,
        title: "Code Inspection",
        desc: "Quis autem vel eum iure repre rui in ea voluptate velit esse ua nihil molestiae....",
        img: CodeInspection,
    },
    {
        id: 3,
        title: "File Duplication",
        desc: "Quis autem vel eum iure repre rui in ea voluptate velit esse ua nihil molestiae....",
        img: FileDuplication,
    },
];

const ServicesSlider = () => {
    return (
        <section className="bg-[#0b1222] py-16">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <h2 className="text-blue-400 uppercase tracking-wider text-sm font-semibold mb-5">
                    Our Services </h2>
                <h3 className="font-heading text-3xl md:text-4xl font-bold text-white mb-12">Cyber Security Solutions</h3>


                <Swiper
                    modules={[Pagination, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 3000 }}
                    breakpoints={{
                        640: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    className="pb-12"
                >
                    {services.map((service) => (
                        <SwiperSlide key={service.id}>
                            <div
                                className="bg-[#111c34] rounded-2xl shadow-lg p-8 flex flex-col items-center text-center 
  transition-all duration-500 ease-in-out 
  border border-transparent 
  hover:-translate-y-2 
  hover:border-[#51ff4a] 
  hover:shadow-[0_0_25px_rgba(81,255,74,0.6)]"
                            >
                                <img src={service.img} alt={service.title} className="h-28 mb-6" />
                                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                                <p className="text-gray-300 text-sm mb-6">{service.desc}</p>
                                <button className="px-6 py-2 border border-gray-500 rounded-lg text-white 
    hover:bg-gradient-to-r from-[#51ff4a] to-[#562eab]  
    hover:border-transparent transition duration-300">
                                    Read More
                                </button>
                            </div>

                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default ServicesSlider;
