import React, { useState } from 'react';
import ParkingMap from './components/ParkingMap';
import BookingForm from './components/BookingForm';
import BookingDetails from './components/BookingDetails';
import SearchBar from './components/SearchBar';
import { parkingSlots as initialSlots } from './utils/parkingData';
import { generateParkingLayout } from './utils/generateParkingLayout';
import Swal from 'sweetalert2';
import sendEmail from './utils/sendEmail';

const App = () => {
  const [parkingSlots, setParkingSlots] = useState(initialSlots);
  const [filteredSlots, setFilteredSlots] = useState(initialSlots);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [booking, setBooking] = useState(null);
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState('');

  const uniqueLocations = [...new Set(initialSlots.map((slot) => slot.location))];

  const handleLocationChange = (location) => {
    setSelectedLocation(location);
    if (location) {
      const filtered = parkingSlots.filter((slot) => slot.location === location);
      const layout = generateParkingLayout(location, filtered);
      setFilteredSlots(layout);
    } else {
      setFilteredSlots(parkingSlots);
    }
  };

  const handleSlotClick = (slot) => {
    if (slot.isAvailable) {
      setSelectedSlot(slot);
      setShowBookingForm(true);
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

    setFilteredSlots((slots) =>
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

    setShowBookingForm(false);
    setSelectedSlot(null);
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Parking Management System</h1>
      <SearchBar locations={uniqueLocations} onLocationChange={handleLocationChange} />
      <div className="row">
        <div className="col-md-8">
          <h2 className="text-center mb-3">
            Parking Map {selectedLocation ? `- ${selectedLocation}` : ''}
          </h2>
          <ParkingMap parkingSlots={filteredSlots} onSlotClick={handleSlotClick} />
        </div>
        <div className="col-md-4">
          {showBookingForm && selectedSlot && (
            <BookingForm onBookingSubmit={handleBookingSubmit} />
          )}
          <BookingDetails booking={booking} />
        </div>
      </div>
    </div>
  );
};

export default App;
