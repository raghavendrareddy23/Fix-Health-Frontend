// FormStepFour.js
import React from "react";

const FormStepFour = ({ formData, handleChange }) => {
  return (
    <>
      <div className="form_div">
        {parseInt(formData.age) >= 40 ? (
          <>
            <label htmlFor="physioExperience" className="form_label">
              Previous Experience with Physiotherapy:
            </label>
            <textarea
              rows={4}
              cols={30}
              id="physioExperience"
              name="physioExperience"
              value={formData.physioExperience}
              onChange={handleChange}
              required
              className="form_input"
            />
          </>
        ) : (
          <p>This section is not applicable for you, please move forward</p>
        )}
      </div>
    </>
  );
};

export default FormStepFour;
