import React, { useState } from 'react';
import ParkingMap from './components/ParkingMap';
import BookingForm from './components/BookingForm';
import BookingDetails from './components/BookingDetails';
import SearchBar from './components/SearchBar';
import { PCircle } from "react-bootstrap-icons";
import { parkingSlots as initialSlots } from './utils/parkingData';
import Swal from 'sweetalert2';
import sendEmail from './utils/sendEmail';

const App = () => {
  const [parkingSlots, setParkingSlots] = useState(initialSlots);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [booking, setBooking] = useState(null);

  const handleSlotClick = (slot) => {
    if (slot.isAvailable) {
      setSelectedSlot(slot);
    }
  };

  const handleBookingSubmit = async (formData) => {
    const bookingCode = `BOOK-${Date.now()}`;
    const qrCodeUrl = 'https://w7.pngwing.com/pngs/144/829/png-transparent-qr-code-information-qr-code-android-qrcode-text-rectangle-monochrome-thumbnail.png';

    
    setParkingSlots((slots) =>
      slots.map((slot) =>
        slot.id === selectedSlot.id ? { ...slot, isAvailable: false } : slot
      )
    );

    
    setBooking({ ...formData, slotId: selectedSlot.id, bookingCode });

    
    Swal.fire({
      title: 'Booking Successful!',
      html: `
        <p>Booking Code: <strong>${bookingCode}</strong></p>
        <img src="${qrCodeUrl}" alt="QR Code" style="width: 200px; height: 200px;" />
      `,
      icon: 'success',
    });

    
    await sendEmail(formData.email, bookingCode, qrCodeUrl);

    setSelectedSlot(null);
  };

  const handleSearch = (query) => {
    console.log(`Search query: ${query}`);
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">< PCircle/> Parkirin System</h1>
      <SearchBar onSearch={handleSearch} />
      <div className="row">
        <div className="col-md-8">
          <ParkingMap parkingSlots={parkingSlots} onSlotClick={handleSlotClick} />
        </div>
        <div className="col-md-4">
          {selectedSlot && <BookingForm onBookingSubmit={handleBookingSubmit} />}
          <BookingDetails booking={booking} />
        </div>
      </div>
    </div>
  );
};

export default App;
