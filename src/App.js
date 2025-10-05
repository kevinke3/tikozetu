// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import EventDetails from './pages/EventDetails';
import AdminDashboard from './pages/AdminDashboard';
import VerifyTicket from './pages/VerifyTicket';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#116466] text-[#D1E8E2]">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/event/:id" element={<EventDetails />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/verify" element={<VerifyTicket />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
