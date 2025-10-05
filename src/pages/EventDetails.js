// src/pages/EventDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';
import events from '../data/events.json';
import BookingForm from '../components/BookingForm';

const EventDetails = () => {
  const { id } = useParams();
  const event = events.find((e) => e.id === parseInt(id));

  if (!event) {
    return <div className="text-center py-20 text-[#FFCB9A] text-xl">Event not found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto py-16 px-6 text-[#D1E8E2]">
      <img src={event.image} alt={event.title} className="rounded-xl w-full mb-6" />
      <h2 className="text-3xl font-semibold text-[#FFCB9A]">{event.title}</h2>
      <p className="text-[#D9B08C] mb-4">{event.date}</p>
      <p className="mb-8">{event.description}</p>

      <BookingForm />
    </div>
  );
};

export default EventDetails;
