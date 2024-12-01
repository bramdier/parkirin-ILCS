import React from 'react';
import { Stage, Layer, Rect } from 'react-konva';

const ParkingMap = ({ parkingSlots, onSlotClick }) => {
  return (
    <div className="border p-3 mb-4">
      <h5 className="text-center">Parking Map</h5>
      <Stage width={window.innerWidth - 100} height={400}>
        <Layer>
          {parkingSlots.map((slot) => (
            <Rect
              key={slot.id}
              x={slot.x}
              y={slot.y}
              width={50}
              height={30}
              fill={slot.isAvailable ? 'green' : 'red'}
              onClick={() => onSlotClick(slot)}
            />
          ))}
        </Layer>
      </Stage>
    </div>
  );
};

export default ParkingMap;
