// Confirmation.js
import React from "react";

const Confirmation = ({ name, resetForm }) => {
  return (
    <div className="confirmation-container">
      <h2 className="confirmation-heading">
        Thank you, {name}!
      </h2>
      <p className="confirmation-message">
        Your Appointment is Booked.
        We will WhatsApp you the appointment details and schedule on the number provided.
      </p>
      <button
        className="confirmation-reset-button"
        onClick={resetForm}
      >
        Reset Form
      </button>
    </div>
  );
};

export default Confirmation;
