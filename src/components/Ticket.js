import React from "react";
import { Card, CardContent } from "./src/components/ui/card";
import { Button } from "./src/components/ui/button";

const Ticket = ({ ticket }) => {
  return (
    <Card className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-lg transition duration-300">
      <CardContent className="p-4 flex flex-col gap-3">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold text-gray-800">{ticket.name}</h2>
          <span className="text-green-600 font-bold text-sm">Ksh {ticket.price}</span>
        </div>
        <p className="text-sm text-gray-600">{ticket.description}</p>
        <div className="flex justify-between items-center mt-3">
          <span className="text-xs text-gray-500">Available: {ticket.available}</span>
          <Button className="bg-[#00BFA6] hover:bg-[#00a98f] text-white rounded-xl px-3 py-1 text-sm">
            Book Now
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default Ticket;
