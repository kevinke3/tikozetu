// src/pages/Home.js
import React from 'react';
import EventList from '../components/EventList';
import BookingForm from '../components/BookingForm';

const Home = () => {
  return (
    <div>
      <section className="text-center py-20 bg-[#2C3531] text-[#FFCB9A]">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to Tikozetu</h1>
        <p className="text-[#D1E8E2] max-w-2xl mx-auto text-lg">
          Discover and book tickets for the best upcoming events around you.
        </p>
      </section>

      <EventList />

      <div className="my-20">
        <BookingForm />
      </div>
    </div>
  );
};

export default Home;
