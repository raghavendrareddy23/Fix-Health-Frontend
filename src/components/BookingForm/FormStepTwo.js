// FormStepTwo.js
import React from "react";

const FormStepTwo = ({ formData, handleChange }) => {
  return (
    <>
      <div className="form_div">
        <label htmlFor="age" className="form_label">
          Age:
        </label>
        <input
          type="number"
          id="age"
          name="age"
          value={formData.age}
          onChange={handleChange}
          required
          className="form_input"
        />
      </div>
      <div className="form_div">
        <label htmlFor="city" className="form_label">
          City:
        </label>
        <input
          type="text"
          id="city"
          name="city"
          value={formData.city}
          onChange={handleChange}
          required
          className="form_input"
        />
      </div>
      <div className="form_div">
        <label htmlFor="company" className="form_label">
          Company:
        </label>
        <input
          type="text"
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          className="form_input"
        />
      </div>
      <div className="form_div">
        <label htmlFor="language" className="form_label">
          Language:
        </label>
        <input
          type="text"
          id="language"
          name="language"
          value={formData.language}
          onChange={handleChange}
          className="form_input"
        />
      </div>
    </>
  );
};

export default FormStepTwo;
