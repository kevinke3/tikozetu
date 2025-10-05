import React, { useState } from "react";

const BookingForm = ({ selectedEvent, onClose, onConfirm }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    onConfirm(formData);
  };

  if (!selectedEvent) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-lg w-full max-w-md p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-800">
            Book Ticket - <span className="text-[#00BFA6]">{selectedEvent.title}</span>
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-xl"
          >
            &times;
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-xl px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-[#00BFA6]"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              placeholder="e.g. 0712345678"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-xl px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-[#00BFA6]"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600">
              Email (optional)
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-xl px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-[#00BFA6]"
            />
          </div>

          {/* Price */}
          <div className="flex justify-between mt-4 text-lg font-semibold">
            <span>Total</span>
            <span className="text-[#00BFA6]">KES {selectedEvent.price}</span>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="mt-4 bg-[#00BFA6] hover:bg-[#00a98f] text-white rounded-xl py-2 transition"
          >
            Confirm Booking
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
