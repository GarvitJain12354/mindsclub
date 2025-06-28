import React from 'react';

const Button = ({ children, primary = true, onClick }) => {
  const baseClasses = "px-4 py-2 rounded-lg text-lg font-semibold transition duration-300";
  const primaryClasses = "bg-yellow-400 hover:bg-yellow-500 text-black";
  const secondaryClasses = "border border-white hover:bg-white hover:text-black text-white";
  
  return (
    <button
      className={`${baseClasses} ${primary ? primaryClasses : secondaryClasses}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;