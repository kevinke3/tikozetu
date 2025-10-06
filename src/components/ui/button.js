import React from "react";

const Button = ({ children, onClick, className = '', type = 'button' }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-[#00BFA6] hover:bg-[#00a98f] text-white px-4 py-2 rounded-xl transition ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
