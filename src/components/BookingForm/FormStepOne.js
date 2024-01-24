// FormStepOne.js
import React from "react";

const FormStepOne = ({ formData, handleChange }) => {

  return (
    <>
      <div className="form_div">
        <label htmlFor="name" className="form_label">
          Name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="form_input"
        />
      </div>
      <div className="form_div">
        <label htmlFor="phone" className="form_label">
          Phone Number:
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          className="form_input"
        />
      </div>
    </>
  );
};

export default FormStepOne;
