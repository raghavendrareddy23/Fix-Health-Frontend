// FormStepThree.js
import React from "react";

const FormStepThree = ({ formData, handleChange }) => {
  return (
    <>
      <div className="form_div">
        <label htmlFor="chiefComplaints" className="form_label">
          Chief Complaints:
        </label>
        <textarea
          id="chiefComplaints"
          name="chiefComplaints"
          rows={4}
          cols={30}
          value={formData.chiefComplaints}
          onChange={handleChange}
          required
          className="form_input"
        />
      </div>
    </>
  );
};

export default FormStepThree;
