// src/components/EventCard.js
import React from 'react';

const EventCard = ({ event }) => {
  return (
    <div className="bg-[#2C3531] text-[#D1E8E2] rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
      <img src={event.image} alt={event.title} className="w-full h-48 object-cover" />
      <div className="p-5">
        <h3 className="text-xl font-semibold text-[#FFCB9A]">{event.title}</h3>
        <p className="text-sm text-[#D9B08C] mt-2">{event.date}</p>
        <p className="mt-3 text-sm opacity-80">{event.description}</p>
        <button className="mt-4 w-full bg-[#116466] py-2 rounded-md hover:bg-[#D9B08C] hover:text-[#2C3531] transition">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default EventCard;
