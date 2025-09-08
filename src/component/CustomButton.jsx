import React from "react";

const CustomButton = ({ text = "Submit Now", onClick, type = "button" }) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className="px-6  py-2 
      bg-gradient-to-r from-[#51ff4a] to-[#562eab] 
      rounded-lg text-white font-sm-semibold text-lg shadow-lg 
      hover:shadow-[0_0_20px_rgba(200,66,250,0.6)] 
      transition-all duration-300 ease-in-out
      hover:scale-105 active:scale-95"
        >
            {text}
        </button>
    );
};

export default CustomButton;
