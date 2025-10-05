import React from "react";

const EventCard = ({ event, onBook }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition duration-300 overflow-hidden">
      {/* Event Image */}
      <img
        src={event.image}
        alt={event.title}
        className="w-full h-56 object-cover"
      />

      {/* Event Info */}
      <div className="p-5 flex flex-col gap-2">
        <h2 className="text-xl font-semibold text-gray-800">{event.title}</h2>
        <p className="text-gray-500 text-sm">{event.date} • {event.location}</p>
        <p className="text-gray-700 text-sm line-clamp-2">{event.description}</p>

        {/* Price and Book Button */}
        <div className="flex justify-between items-center mt-4">
          <span className="text-lg font-bold text-[#00BFA6]">
            KES {event.price}
          </span>
          <button
            onClick={() => onBook(event)}
            className="bg-[#00BFA6] hover:bg-[#00a98f] text-white text-sm px-4 py-2 rounded-xl transition"
          >
            Book Ticket
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
