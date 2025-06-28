import React from "react";

const Button = ({ title, onClick, className, icon }) => {
  return (
    <button
      className={`bg-[#FFFE81] text-black text-base py-2 px-5 rounded-full ${className}`}
      onClick={onClick}
    >
      {title}
      {icon}
    </button>
  );
};

export default Button;
