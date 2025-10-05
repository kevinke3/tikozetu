// src/pages/AdminDashboard.js
import React from 'react';
import events from '../data/events.json';

const AdminDashboard = () => {
  return (
    <div className="p-10 bg-[#2C3531] min-h-screen text-[#D1E8E2]">
      <h2 className="text-3xl font-semibold text-[#FFCB9A] mb-6">Admin Dashboard</h2>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-[#116466] text-[#D1E8E2]">
            <th className="p-3 text-left">Event</th>
            <th className="p-3 text-left">Date</th>
            <th className="p-3 text-left">Bookings</th>
          </tr>
        </thead>
        <tbody>
          {events.map((event) => (
            <tr key={event.id} className="border-b border-[#D9B08C]">
              <td className="p-3">{event.title}</td>
              <td className="p-3">{event.date}</td>
              <td className="p-3">{Math.floor(Math.random() * 100)} tickets</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDashboard;
