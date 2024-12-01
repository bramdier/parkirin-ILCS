import React from 'react';

const V_BookingDetails = ({ booking }) => {
  if (!booking) return <p className="text-center text-muted">No booking details available</p>;

  return (
    <div className="card p-3">
      <h5 className="card-title">Booking Details</h5>
      <p><strong>Slot:</strong> {booking.slotId}</p>
      <p><strong>Name:</strong> {booking.name}</p>
      <p><strong>Vehicle:</strong> {booking.vehicle}</p>
      <p><strong>Duration:</strong> {booking.duration} hours</p>
    </div>
  );
};

export default V_BookingDetails;
