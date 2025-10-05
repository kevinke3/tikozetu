// src/components/EventList.js
import React from 'react';
import EventCard from './EventCard';
import events from '../data/events.json';

const EventList = () => {
  return (
    <section className="bg-[#116466] py-12 px-6 min-h-screen">
      <h2 className="text-3xl text-center font-bold text-[#D1E8E2] mb-10 tracking-wide">
        Upcoming Events
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </section>
  );
};

export default EventList;
