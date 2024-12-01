import React, { useState } from 'react';

const V_BookingForm = ({ onBookingSubmit }) => {
  const [formData, setFormData] = useState({ name: '', vehicle: '', duration: '', email: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onBookingSubmit(formData);
    setFormData({ name: '', vehicle: '', duration: '', email: '' });
  };
  

  return (
    <div className="card p-3 mb-4">
      <h5 className="card-title">Book a Parking Slot</h5>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Vehicle Number</label>
          <input
            type="text"
            name="vehicle"
            className="form-control"
            placeholder="Vehicle Number"
            value={formData.vehicle}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Duration (hrs)</label>
          <input
            type="number"
            name="duration"
            className="form-control"
            placeholder="Duration"
            value={formData.duration}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Submit
        </button>
      </form>
    </div>
  );
};

export default V_BookingForm;
