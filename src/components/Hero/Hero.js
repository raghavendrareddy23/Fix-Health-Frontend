import React from 'react';
import BookingForm from '../BookingForm/BookingForm';

const Hero = () => {
  return (
    <div className="relative h-screen flex flex-col md:flex-row bg-cover bg-center filter brightness-75" style={{ backgroundImage: 'url("https://nursingdegreeprograms.net/wp-content/uploads/2018/01/bigstock-Friendly-Smiling-Young-Female-180753226.jpg")' }}>
      {/* For sm screens */}
      <div className="flex md:hidden w-full items-center justify-center text-center text-white p-8">
        <div className="z-10">
          <h1 className="text-4xl font-extrabold sm:text-5xl lg:text-6xl">
            Welcome to <span className="text-blue-500">Fix Health</span>
          </h1>
          <p className="mt-4 text-lg font-bold text-gray-900">
            Your Journey to Better Health Starts Here
          </p>
        </div>
      </div>

      {/* Main content for all screen sizes */}
      <div className="flex w-full md:w-1/2 items-center justify-center p-8  bg-opacity-75">
        <BookingForm />
      </div>

      {/* For md and lg screens */}
      <div className="hidden md:flex w-1/2 items-center justify-center">
        <div className="text-center text-white z-10">
          <h1 className="text-4xl font-extrabold sm:text-5xl lg:text-6xl">
            Welcome to <span className="text-blue-500">Fix Health</span>
          </h1>
          <p className="mt-4 text-lg font-bold text-gray-900">
            Your Journey to Better Health Starts Here
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
