// BookingDetails.js
import React from "react";

const BookingDetails = ({ bookings }) => {
  return (
    <div>
      <h3>Rincian Pemesanan</h3>
      <ul>
        {bookings.map((booking, index) => (
          <li key={index}>
            Tempat Parkir: {booking.slotId} | Nama: {booking.name} | Nomor Kendaraan: {booking.vehicleNumber} | Durasi: {booking.duration} jam
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookingDetails;
