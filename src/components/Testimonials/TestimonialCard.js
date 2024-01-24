// import React, { useState, useEffect } from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import dummy from "../../logo.svg";

// const TestimonialCard = () => {
//   const [patientsData, setPatientsData] = useState([]);

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//   };

  // useEffect(() => {
  //   const fetchPatientsData = async () => {
  //     try {
  //       const response = await fetch('https://fix-health-backend.onrender.com/api/patients');
  //       if (!response.ok) {
  //         throw new Error('Error fetching patient data');
  //       }
  //       const data = await response.json();
  //       setPatientsData(data.patient_feedback);
  //     } catch (error) {
  //       console.error('Error fetching patient data:', error.message);
  //     }
  //   };

  //   fetchPatientsData();
  // }, []); // Empty dependency array ensures this effect runs once when the component mounts

//   return (
//     <Slider {...settings}>
//       {patientsData.map((patient) => (
//         <div key={patient.id} className="flex flex-col gap-4 w-[15rem] bg-neutral-800 rounded-sm overflow-hidden">
//           <img src={dummy} alt={`dummy doctor ${patient.name}`} className="w-full" />
//           <div className="flex flex-col gap-1 px-2">
//             <h6 className="font-medium text-lg">{patient.name}</h6>
//             <p className="font-light text-gray-300">{`Sex: ${patient.sex}`}</p>
//             <p className="font-light text-gray-300">{`Comment: ${patient.comment}`}</p>
//           </div>
//           <button className="border p-1 my-2 mx-3 rounded-md transition-all duration-300 hover:bg-neutral-700">
//             Know More
//           </button>
//         </div>
//       ))}
//     </Slider>
//   );
// };

// export default TestimonialCard;

import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const TestimonialCard = () => {
  const [patientsData, setPatientsData] = useState([]);

  useEffect(() => {
    const fetchPatientsData = async () => {
      try {
        const response = await fetch('https://fix-health-backend.onrender.com/api/patients');
        if (!response.ok) {
          throw new Error('Error fetching patient data');
        }
        const data = await response.json();
        setPatientsData(data.patient_feedback);
      } catch (error) {
        console.error('Error fetching patient data:', error.message);
      }
    };

    fetchPatientsData();
  }, []);


  

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
      <h2 className="text-3xl font-semibold text-center mb-6">What our patients says....</h2>
      <h3 className='text-xl font-semibold text-center mb-6'>We are providing the best environment to our patients and treate like a baby.</h3>
      <Slider {...sliderSettings}>
        {patientsData.map((patient) => (
          <div key={patient.id} className="bg-gray-500 p-6 rounded-lg shadow-md mb-4">
            <div className="flex justify-center mb-4">
              <img
                src={patient.image_url}
                alt={patient.name}
                className="w-24 h-24 rounded-full"
              />
            </div>
            <h3 className="text-lg text-green-500 text-center font-semibold mb-2">{patient.name}</h3>
            <p className="text-sm text-white text-center mb-2">{patient.comment}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialCard;

