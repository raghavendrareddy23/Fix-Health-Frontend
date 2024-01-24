// FormStepFive.js
import React from "react";

const FormStepFive = ({ doctors, selectedDoctor, setSelectedDoctor }) => {
  return (
    <>
      <div className="form_div">
        {doctors.length > 0 ? (
          <>
            <label htmlFor="doctor" className="form_label">
              Select Doctor:
            </label>
            <select
              id="doctor"
              name="doctor"
              value={selectedDoctor}
              onChange={(e) => setSelectedDoctor(e.target.value)}
              className="form_input"
            >
              <option value="" disabled>
                Choose a Doctor
              </option>
              {doctors.map((doctor) => (
                <option key={doctor.id} value={doctor.id}>
                  {doctor.name} - {doctor.expertise}
                </option>
              ))}
            </select>
          </>
        ) : (
          <p>No doctors found. Sorry we are not providing our Services to your location, we are rapidly growing, please stay on.</p>
        )}
      </div>
    </>
  );
};

export default FormStepFive;
