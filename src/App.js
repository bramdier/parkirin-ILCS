import React, { useState } from "react";
import ParkingMap from "./components/ParkingMap";
import BookingForm from "./components/BookingForm";
import BookingDetails from "./components/BookingDetails";

const App = () => {
  const [parkingSlots, setParkingSlots] = useState([
    { id: 1, x: 50, y: 50, isAvailable: true },
    { id: 2, x: 110, y: 50, isAvailable: false },
    { id: 3, x: 170, y: 50, isAvailable: true },
    // Tambahkan slot lain sesuai kebutuhan
  ]);

  const [bookings, setBookings] = useState([]);

  const handleSlotClick = (id) => {
    // Logic untuk memilih slot parkir
    console.log("Slot dipilih:", id);
  };

  const handleBookingSubmit = (booking) => {
    setBookings([...bookings, booking]);
    alert("Pemesanan berhasil!");
  };

  return (
    <div>
      <h1>Sistem Pengelolaan Parkiran</h1>
      <ParkingMap parkingSlots={parkingSlots} onSlotClick={handleSlotClick} />
      <BookingForm onBookingSubmit={handleBookingSubmit} />
      <BookingDetails bookings={bookings} />
    </div>
  );
};

export default App;
