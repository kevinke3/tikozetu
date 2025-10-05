// src/components/Navbar.js
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-[#2C3531] text-[#D1E8E2] px-6 py-4 flex justify-between items-center shadow-md">
      <div className="text-2xl font-bold text-[#FFCB9A] tracking-wide">
        Tikozetu
      </div>
      <ul className="hidden md:flex space-x-8">
        <li className="hover:text-[#D9B08C] cursor-pointer">Home</li>
        <li className="hover:text-[#D9B08C] cursor-pointer">Events</li>
        <li className="hover:text-[#D9B08C] cursor-pointer">Book</li>
        <li className="hover:text-[#D9B08C] cursor-pointer">Admin</li>
      </ul>
      <button className="bg-[#116466] text-[#D1E8E2] px-4 py-2 rounded-lg hover:bg-[#D9B08C] hover:text-[#2C3531] transition">
        Login
      </button>
    </nav>
  );
};

export default Navbar;
