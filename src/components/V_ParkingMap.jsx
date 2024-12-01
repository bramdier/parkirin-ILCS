import React from 'react';
import { Stage, Layer, Rect, Text } from 'react-konva';

const V_ParkingMap = ({ parkingSlots, onSlotClick }) => {
  const SLOT_SIZE = 50; // Ukuran setiap slot parkir

  return (
    <Stage width={800} height={600}>
      <Layer>
        {parkingSlots.map((slot) => (
          <React.Fragment key={slot.id}>
            {/* Kotak parkir */}
            <Rect
              x={slot.x}
              y={slot.y}
              width={SLOT_SIZE}
              height={SLOT_SIZE}
              fill={slot.isAvailable ? 'green' : 'red'}
              stroke="black"
              strokeWidth={2}
              onClick={() => slot.isAvailable && onSlotClick(slot)}
            />
            {/* Nomor parkir */}
            <Text
              text={slot.slotNumber.toString()}
              fontSize={14}
              fill="white"
              x={slot.x + SLOT_SIZE / 2 - 10}
              y={slot.y + SLOT_SIZE / 2 - 10}
              align="center"
            />
          </React.Fragment>
        ))}
      </Layer>
    </Stage>
  );
};

export default V_ParkingMap;
