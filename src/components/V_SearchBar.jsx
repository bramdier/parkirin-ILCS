import React from 'react';

const V_SearchBar = ({ locations, onLocationChange }) => {
  return (
    <div className="mb-3">
      <label htmlFor="locationDropdown" className="form-label">
        Select Location:
      </label>
      <select
        id="locationDropdown"
        className="form-select"
        onChange={(e) => onLocationChange(e.target.value)}
      >
        <option value="">All Locations</option>
        {locations.map((location) => (
          <option key={location} value={location}>
            {location}
          </option>
        ))}
      </select>
    </div>
  );
};

export default V_SearchBar;
