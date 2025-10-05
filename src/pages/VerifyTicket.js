// src/pages/VerifyTicket.js
import React, { useState } from 'react';

const VerifyTicket = () => {
  const [ticketId, setTicketId] = useState('');
  const [verified, setVerified] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setVerified(ticketId === 'TIKO123' ? true : false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#116466] text-[#D1E8E2]">
      <h2 className="text-3xl font-semibold text-[#FFCB9A] mb-6">Verify Ticket</h2>
      <form onSubmit={handleSubmit} className="bg-[#2C3531] p-6 rounded-xl w-80 text-center">
        <input
          type="text"
          placeholder="Enter Ticket ID"
          value={ticketId}
          onChange={(e) => setTicketId(e.target.value)}
          className="w-full p-2 rounded-md bg-[#116466] focus:outline-none focus:ring-2 focus:ring-[#D9B08C]"
          required
        />
        <button
          type="submit"
          className="mt-4 w-full bg-[#D9B08C] text-[#2C3531] py-2 rounded-md hover:bg-[#FFCB9A] transition"
        >
          Verify
        </button>
      </form>

      {verified !== null && (
        <p className={`mt-6 text-lg font-semibold ${verified ? 'text-green-400' : 'text-red-400'}`}>
          {verified ? 'Ticket is valid!' : 'Invalid Ticket'}
        </p>
      )}
    </div>
  );
};

export default VerifyTicket;
