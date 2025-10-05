import React from "react";
import EventCard from "./EventCard";

const EventList = ({ events, onBook }) => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">
        Upcoming <span className="text-[#00BFA6]">Events</span>
      </h2>

      {events.length === 0 ? (
        <p className="text-center text-gray-500">No events available right now.</p>
      ) : (
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => (
            <EventCard key={event.id} event={event} onBook={onBook} />
          ))}
        </div>
      )}
    </div>
  );
};

export default EventList;
