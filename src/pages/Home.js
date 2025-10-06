import React, { useState } from "react";
import EventList from "../components/EventList";
import BookingForm from "../components/BookingForm";
import eventsData from "../data/events.json";

const Home = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  // Open booking form
  const handleBookEvent = (event) => {
    setSelectedEvent(event);
  };

  // Close form
  const handleCloseForm = () => {
    setSelectedEvent(null);
  };

  // Confirm booking (can redirect to Ticket.js or store data)
  const handleConfirmBooking = (formData) => {
    console.log("Booking Confirmed:", { ...formData, event: selectedEvent });
    alert(
      `🎫 Booking confirmed for ${selectedEvent.title}\nName: ${formData.name}\nPhone: ${formData.phone}`
    );
    setSelectedEvent(null);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#00BFA6] text-white text-center py-16 px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Discover & Book Exciting Events
        </h1>
        <p className="max-w-2xl mx-auto text-lg opacity-90">
          Find the latest concerts, festivals, and experiences happening near you — only on TikoZetu!
        </p>
      </section>

      {/* Event List */}
      <EventList events={eventsData} onBook={handleBookEvent} />

      {/* Booking Form (Modal) */}
      {selectedEvent && (
        <BookingForm
          selectedEvent={selectedEvent}
          onClose={handleCloseForm}
          onConfirm={handleConfirmBooking}
        />
      )}
    </div>
  );
};

export default Home;
