import React, { useRef } from 'react';
import QRCode from 'qrcode.react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const Ticket = ({ booking }) => {
  const ticketRef = useRef();

  const handleDownloadPDF = async () => {
    const element = ticketRef.current;
    const canvas = await html2canvas(element, { scale: 2 });
    const imgData = canvas.toDataURL('image/png');

    const pdf = new jsPDF('p', 'mm', 'a4');
    const width = pdf.internal.pageSize.getWidth();
    const height = (canvas.height * width) / canvas.width;
    pdf.addImage(imgData, 'PNG', 0, 0, width, height);
    pdf.save(`Tikozetu_Ticket_${booking.id}.pdf`);
  };

  return (
    <div className="flex flex-col items-center py-10 bg-[#2C3531] text-[#D1E8E2]">
      <div
        ref={ticketRef}
        className="bg-[#116466] p-8 rounded-2xl shadow-xl w-[350px] text-center border border-[#D9B08C]"
      >
        <h2 className="text-2xl font-bold text-[#FFCB9A] mb-2">Tikozetu Ticket</h2>
        <p className="text-sm mb-4 text-[#D9B08C]">Booking ID: {booking.id}</p>

        <div className="bg-[#2C3531] rounded-xl p-4 mb-4">
          <QRCode
            value={booking.id || 'Tikozetu'}
            size={120}
            bgColor="#2C3531"
            fgColor="#D1E8E2"
            level="H"
            includeMargin
          />
        </div>

        <h3 className="text-lg font-semibold text-[#FFCB9A]">{booking.eventName}</h3>
        <p className="text-sm text-[#D1E8E2]">{booking.date}</p>
        <div className="mt-4 text-left bg-[#2C3531] p-3 rounded-md">
          <p><span className="font-semibold text-[#FFCB9A]">Name:</span> {booking.name}</p>
          <p><span className="font-semibold text-[#FFCB9A]">Email:</span> {booking.email}</p>
          <p><span className="font-semibold text-[#FFCB9A]">Phone:</span> {booking.phone}</p>
        </div>

        <div className="mt-6">
          <button
            onClick={handleDownloadPDF}
            className="bg-[#D9B08C] text-[#2C3531] px-6 py-2 rounded-lg font-semibold hover:bg-[#FFCB9A] transition"
          >
            Download Ticket
          </button>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
