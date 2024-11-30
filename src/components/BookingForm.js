// BookingForm.js
import React, { useState } from "react";

const BookingForm = ({ onBookingSubmit }) => {
  const [name, setName] = useState("");
  const [vehicleNumber, setVehicleNumber] = useState("");
  const [duration, setDuration] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onBookingSubmit({ name, vehicleNumber, duration });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nama:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </label>
      <label>
        Nomor Kendaraan:
        <input type="text" value={vehicleNumber} onChange={(e) => setVehicleNumber(e.target.value)} required />
      </label>
      <label>
        Durasi (jam):
        <input type="number" value={duration} onChange={(e) => setDuration(e.target.value)} required />
      </label>
      <button type="submit">Pesan</button>
    </form>
  );
};

export default BookingForm;
