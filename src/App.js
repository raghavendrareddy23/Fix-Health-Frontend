import TestimonialCard from './components/Testimonials/TestimonialCard';
import DoctorTestimonials from './components/Testimonials/DoctorsTestimonials';
import Navbar from './components/LandingPage/LandingPage';
import Hero from './components/Hero/Hero';
// import BookingForm from './components/BookingForm/BookingForm';

const App = () => {

  return (
    <div className=" text-white min-h-screen">
      <Navbar/>
      <Hero/>
      <DoctorTestimonials/>
      <TestimonialCard/>

    </div>
  );
};

export default App;