// ParkingMap.js
import React from "react";
import { Stage, Layer, Rect, Text } from "react-konva";

const ParkingMap = ({ parkingSlots, onSlotClick }) => {
  return (
    <Stage width={window.innerWidth} height={400}>
      <Layer>
        {parkingSlots.map((slot) => (
          <Rect
            key={slot.id}
            x={slot.x}
            y={slot.y}
            width={50}
            height={50}
            fill={slot.isAvailable ? "green" : "red"}
            onClick={() => onSlotClick(slot.id)}
            stroke="black"
            strokeWidth={2}
          />
        ))}
      </Layer>
    </Stage>
  );
};

export default ParkingMap;
