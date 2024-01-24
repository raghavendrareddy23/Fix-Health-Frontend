import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const DoctorTestimonials = () => {
  const [doctorsData, setDoctorsData] = useState([]);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await fetch('https://fix-health-backend.onrender.com/api/doctors');
        const data = await response.json();
        setDoctorsData(data);
      } catch (error) {
        console.error('Error fetching doctor data:', error);
      }
    };

    fetchDoctors();
  }, []);

  const experienceValues = [8, 14, 12, 10, 15, 18];

  const getExperienceValue = (doctorId) => {
    const storedExperience = localStorage.getItem(`doctorExperience_${doctorId}`);

    if (storedExperience) {
      return parseInt(storedExperience, 10);
    }

    const randomIndex = Math.floor(Math.random() * experienceValues.length);
    const randomExperience = experienceValues[randomIndex];

    localStorage.setItem(`doctorExperience_${doctorId}`, randomExperience.toString());

    return randomExperience;
  };

  const displayedDoctors = doctorsData.slice(0, 6).map((doctor) => ({
    ...doctor,
    experience: getExperienceValue(doctor.id),
  }));

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-3xl font-semibold text-center mb-6">Meet Our Experts</h2>
      <h3 className='text-xl font-semibold text-center mb-6'>Experience the Benefits of Advanced Technology and Expert Care</h3>
      <Slider {...sliderSettings}>
        {displayedDoctors.map((doctor) => (
          <div key={doctor.id} className="bg-gray-500 p-6 rounded-lg shadow-md mb-4">
            <div className="flex justify-center mb-4">
              <img
                src={doctor.image}
                alt={doctor.name}
                className="w-24 h-24 rounded-full"
              />
            </div>
            <h3 className="text-lg text-green-500 text-center font-semibold mb-2">{doctor.name}</h3>
            <p className="text-sm text-white text-center mb-2">{doctor.expertise}</p>
            <p className="text-sm text-white text-center mb-2">{doctor.city}</p>
            <p className="text-sm text-center">{`Experience: ${doctor.experience} years`}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default DoctorTestimonials;
