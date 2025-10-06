import React from "react";
import  Button  from "./ui/Button";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo / Brand */}
        <h1 className="text-2xl font-bold text-[#00BFA6] italic tracking-wide">
          Tiko<span className="text-gray-800">Zetu</span>
        </h1>

        {/* Navigation Links */}
        <ul className="hidden md:flex gap-6 text-gray-700 font-medium">
          <li className="hover:text-[#00BFA6] cursor-pointer transition">Home</li>
          <li className="hover:text-[#00BFA6] cursor-pointer transition">Events</li>
          <li className="hover:text-[#00BFA6] cursor-pointer transition">Tickets</li>
          <li className="hover:text-[#00BFA6] cursor-pointer transition">Contact</li>
        </ul>

        {/* CTA Button */}
        <Button className="bg-[#00BFA6] hover:bg-[#00a98f] text-white rounded-xl px-4 py-2">
          Book Now
        </Button>

        {/* Mobile Menu Icon */}
        <div className="md:hidden flex flex-col gap-1 cursor-pointer">
          <span className="w-6 h-0.5 bg-gray-800"></span>
          <span className="w-6 h-0.5 bg-gray-800"></span>
          <span className="w-6 h-0.5 bg-gray-800"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
