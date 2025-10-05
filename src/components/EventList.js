import React from 'react';
import EventCard from './EventCard';
import events from '../data/events.json';

const EventList = () => {
  return (
    <section className="py-16 bg-[#116466]">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#FFCB9A] mb-3">Upcoming Events</h2>
        <p className="text-[#D1E8E2]">Find your next great experience with Tikozetu.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto px-6">
        {events.length > 0 ? (
          events.map((event) => <EventCard key={event.id} event={event} />)
        ) : (
          <p className="text-center text-[#D9B08C] col-span-full">
            No events available right now. Check back soon!
          </p>
        )}
      </div>
    </section>
  );
};

export default EventList;
