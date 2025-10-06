import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import EventDetails from "./pages/EventDetails";
import VerifyTicket from "./pages/VerifyTicket";
import AdminDashboard from "./pages/AdminDashboard";
import Ticket from "./components/Ticket";

const App = () => {
  return (
    <Router>
      <div className="font-sans bg-gray-50 min-h-screen">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/event/:id" element={<EventDetails />} />
          <Route path="/verify" element={<VerifyTicket />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/ticket" element={<Ticket />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
