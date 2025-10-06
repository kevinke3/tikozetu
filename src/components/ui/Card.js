import React from "react";

const Card = ({ children, className = "" }) => {
  return (
    <div className={`bg-white rounded-2xl shadow-md p-4 ${className}`}>
      {children}
    </div>
  );
};

export default Card;
