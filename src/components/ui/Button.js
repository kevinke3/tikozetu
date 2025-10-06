import React from 'react';

const Button = ({ children, onClick, className = '', type = 'button' }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-all ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
