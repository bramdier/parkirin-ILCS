export const generateParkingLayout = (location, slots) => {
    // Layout berbeda untuk tiap lokasi
    if (location === 'Mall A') {
      return slots.map((slot, index) => ({
        ...slot,
        x: (index % 5) * 60, // Kolom
        y: Math.floor(index / 5) * 60, // Baris
      }));
    } else if (location === 'Mall B') {
      return slots.map((slot, index) => ({
        ...slot,
        x: (index % 3) * 80, // Kolom
        y: Math.floor(index / 3) * 80, // Baris
      }));
    }
  
    // Default layout
    return slots.map((slot, index) => ({
      ...slot,
      x: (index % 4) * 70,
      y: Math.floor(index / 4) * 70,
    }));
  };
  