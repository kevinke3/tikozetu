import React, { useState } from 'react';
import Ticket from './Ticket';

const BookingForm = ({ eventName = 'General Event', date = 'TBA' }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const [booking, setBooking] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const bookingId = 'TIKO' + Math.floor(100000 + Math.random() * 900000);
    const newBooking = {
      id: bookingId,
      ...formData,
      eventName,
      date,
    };
    setBooking(newBooking);
    setSubmitted(true);

    // save booking locally
    const existing = JSON.parse(localStorage.getItem('tikozetu_bookings')) || [];
    existing.push(newBooking);
    localStorage.setItem('tikozetu_bookings', JSON.stringify(existing));

    // clear form
    setFormData({ name: '', email: '', phone: '' });
  };

  return (
    <div className="flex flex-col items-center bg-[#2C3531] py-10 px-4 text-[#D1E8E2]">
      <h2 className="text-2xl md:text-3xl font-bold text-[#FFCB9A] mb-6">Book Your Ticket</h2>

      <form
        onSubmit={handleSubmit}
        className="bg-[#116466] p-6 rounded-xl shadow-xl w-full max-w-md space-y-4 border border-[#D9B08C]"
      >
        <div>
          <label className="block text-[#FFCB9A] mb-1 font-semibold">Full Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Enter your full name"
            className="w-full p-2 rounded-md bg-[#2C3531] text-[#D1E8E2] focus:outline-none focus:ring-2 focus:ring-[#D9B08C]"
          />
        </div>

        <div>
          <label className="block text-[#FFCB9A] mb-1 font-semibold">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="example@email.com"
            className="w-full p-2 rounded-md bg-[#2C3531] text-[#D1E8E2] focus:outline-none focus:ring-2 focus:ring-[#D9B08C]"
          />
        </div>

        <div>
          <label className="block text-[#FFCB9A] mb-1 font-semibold">Phone</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            placeholder="07XXXXXXXX"
            className="w-full p-2 rounded-md bg-[#2C3531] text-[#D1E8E2] focus:outline-none focus:ring-2 focus:ring-[#D9B08C]"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-[#D9B08C] text-[#2C3531] font-semibold py-2 rounded-md hover:bg-[#FFCB9A] transition"
        >
          Book Ticket
        </button>
      </form>

      {submitted && (
        <div className="mt-10 w-full flex justify-center">
          <Ticket booking={booking} />
        </div>
      )}
    </div>
  );
};

export default BookingForm;
