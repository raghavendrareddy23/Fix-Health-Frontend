// BookingForm.js
import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import FormStepOne from "./FormStepOne";
import FormStepTwo from "./FormStepTwo";
import FormStepThree from "./FormStepThree";
import FormStepFour from "./FormStepFour";
import FormStepFive from "./FormStepFive";
import Confirmation from "./Confirmation";

const BookingForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    age: "",
    city: "",
    language: "",
    company: "",
    chiefComplaints: "",
    physioExperience: "",
  });
  const [doctors, setDoctors] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [showConfirmation, setShowConfirmation] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const cityParam = params.get("city");
    if (cityParam) {
      setFormData((prevData) => ({
        ...prevData,
        city: cityParam,
      }));
    }
  }, [location.search]);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        let apiUrl = "https://fix-health-backend.onrender.com/api/doctors?";
  
        if (formData.city) {
          apiUrl += `city=${formData.city}`;
        }
  
        if (formData.language) {
          apiUrl += `${formData.city ? "&" : ""}language=${formData.language}`;
        }
  
        const resp = await fetch(apiUrl);
        const allDoctors = await resp.json();
  
        console.log("All Doctors:", allDoctors);
  
        setDoctors(allDoctors);
      } catch (error) {
        console.log(error);
      }
    };
  
    // Fetch doctors when city or language changes
    if (formData.city && formData.language) {
      fetchDoctors();
    }
  }, [formData.city, formData.language]);
  

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    if (name === "city") {
      const params = new URLSearchParams(location.search);
      params.set("city", value);
      navigate({ search: params.toString() }, { replace: true });
    }
  }

  const handleNext = () => {
    if (currentStep === 5 && selectedDoctor) {
      setCurrentStep(6);
    } else {
      setCurrentStep((prevStep) => prevStep + 1);
    }
  }
  const handlePrev = () => setCurrentStep((prevStep) => prevStep - 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowConfirmation(true);
  };

  const resetForm = () => {
    setCurrentStep(1);
    setShowConfirmation(false);
    setFormData({
      name: "",
      phone: "",
      age: "",
      city: "",
      language: "",
      company: "",
      chiefComplaints: "",
      physioExperience: "",
    });
    setDoctors([]);
  };

  return (
    <section className="container bg-gray-900 mx-auto p-6">
      <h2 className="text-4xl font-semibold text-center my-4">
        Book a Consultation
      </h2>
      {showConfirmation ? (
        <Confirmation name={formData.name} resetForm={resetForm} />
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {currentStep === 1 && (
            <FormStepOne formData={formData} handleChange={handleChange} />
          )}
          {currentStep === 2 && (
            <FormStepTwo
              formData={formData}
              handleChange={handleChange}
              setDoctors={setDoctors}
            />
          )}
          {currentStep === 3 && (
            <FormStepThree formData={formData} handleChange={handleChange} />
          )}
          {currentStep === 4 && (
            <FormStepFour formData={formData} handleChange={handleChange} />
          )}
          {currentStep === 5 && (
            <FormStepFive
              doctors={doctors}
              selectedDoctor={selectedDoctor}
              setSelectedDoctor={setSelectedDoctor}
            />
          )}
          <div className="flex items-center justify-between mt-6">
            {currentStep > 1 && (
              <button
                type="button"
                onClick={handlePrev}
                className="btn-secondary"
              >
                Previous
              </button>
            )}
            {currentStep < 6 ? (
              <button
                type="button"
                onClick={handleNext}
                className="btn-primary"
              >
                Next
              </button>
            ) : (
              <button type="submit" className="btn-success">
                Book Now
              </button>
            )}
          </div>
        </form>
      )}
    </section>
  );
};

export default BookingForm;
