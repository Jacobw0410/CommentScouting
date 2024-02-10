// pages/commentForm.js

import React, { useState } from 'react';

const CommentForm = () => {
  const [formData, setFormData] = useState({
    driving: '',
    scoring: '',
    maneuverability: '',
    autons: '',
    effectiveness: '',
    overallRating: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send formData to backend using fetch or Axios
      console.log(formData);
      // Reset form after submission
      setFormData({
        driving: '',
        scoring: '',
        maneuverability: '',
        autons: '',
        effectiveness: '',
        overallRating: '',
      });
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <h1>Comment Scouting Form</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Driving:
          <input
            type="number"
            name="driving"
            value={formData.driving}
            onChange={handleChange}
          />
        </label>
        {/* Repeat similar input fields for other criteria */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CommentForm;

