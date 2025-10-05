import React from 'react';
import { Link } from 'react-router-dom';

const EventCard = ({ event }) => {
  return (
    <div className="bg-[#2C3531] rounded-2xl overflow-hidden shadow-lg transform transition duration-300 hover:-translate-y-2 hover:shadow-2xl border border-[#D9B08C]">
      <img
        src={event.image}
        alt={event.title}
        className="w-full h-56 object-cover"
      />
      <div className="p-5 text-[#D1E8E2]">
        <h3 className="text-2xl font-bold text-[#FFCB9A] mb-2">{event.title}</h3>
        <p className="text-sm text-[#D9B08C] mb-1">{event.date}</p>
        <p className="text-sm text-[#D9B08C] mb-4">{event.location}</p>
        <p className="text-sm mb-4 line-clamp-3">{event.description}</p>

        <div className="flex justify-between items-center">
          <span className="font-semibold text-[#FFCB9A]">Ksh {event.price}</span>
          <Link
            to={`/event/${event.id}`}
            className="bg-[#D9B08C] text-[#2C3531] px-4 py-2 rounded-md hover:bg-[#FFCB9A] transition"
          >
            View
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
