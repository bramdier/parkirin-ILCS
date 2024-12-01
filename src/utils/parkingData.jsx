export const parkingSlots = [
  ...Array.from({ length: 15 }, (_, i) => ({
    id: `MallA-${i + 1}`,
    location: 'Mall A',
    slotNumber: i + 1,
    isAvailable: true,
  })),
  ...Array.from({ length: 20 }, (_, i) => ({
    id: `MallB-${i + 1}`,
    location: 'Mall B',
    slotNumber: i + 1,
    isAvailable: true,
  })),
  ...Array.from({ length: 18 }, (_, i) => ({
    id: `MallC-${i + 1}`,
    location: 'Mall C',
    slotNumber: i + 1,
    isAvailable: true,
  })),
];
