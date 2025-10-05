// src/components/BookingForm.js
import React, { useState } from 'react';

const BookingForm = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    tickets: 1,
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Booking confirmed for ${form.name} (${form.tickets} ticket(s))!`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto bg-[#2C3531] p-8 rounded-2xl text-[#D1E8E2] shadow-lg"
    >
      <h2 className="text-2xl font-semibold text-center mb-6 text-[#FFCB9A]">
        Book Your Ticket
      </h2>
      <label className="block mb-3">
        Name:
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          className="w-full p-2 rounded-md bg-[#116466] mt-1 focus:outline-none focus:ring-2 focus:ring-[#D9B08C]"
          required
        />
      </label>

      <label className="block mb-3">
        Email:
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          className="w-full p-2 rounded-md bg-[#116466] mt-1 focus:outline-none focus:ring-2 focus:ring-[#D9B08C]"
          required
        />
      </label>

      <label className="block mb-5">
        Tickets:
        <input
          type="number"
          name="tickets"
          min="1"
          value={form.tickets}
          onChange={handleChange}
          className="w-full p-2 rounded-md bg-[#116466] mt-1 focus:outline-none focus:ring-2 focus:ring-[#D9B08C]"
        />
      </label>

      <button
        type="submit"
        className="w-full bg-[#D9B08C] text-[#2C3531] py-2 rounded-md hover:bg-[#FFCB9A] font-semibold transition"
      >
        Confirm Booking
      </button>
    </form>
  );
};

export default BookingForm;
