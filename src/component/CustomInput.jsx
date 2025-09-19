import React from "react";

const CustomInput = ({ 
  type = "text",
  placeholder, 
  ...props 
}) => {
  const allowedTypes = ["text", "number", "email", "password"];
  const inputType = allowedTypes.includes(type) ? type : "text";

  return (
    <input
      type={inputType}
      placeholder={placeholder}
      className="w-full px-4 py-3 rounded-xl 
      bg-[#111c34] text-white placeholder-gray-400
      border border-transparent
      focus:border-[#3ca9f5] focus:ring-2 focus:ring-[#3ca9f5] 
      outline-none transition-all duration-300
      shadow-md hover:shadow-lg hover:shadow-[#3ca9f5]/30"
      {...props}
    />
  );
};

export default CustomInput;
