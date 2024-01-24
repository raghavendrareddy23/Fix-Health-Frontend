import React,{useState} from "react";
import ReactDOM from 'react-dom';
import '@fortawesome/fontawesome-free/css/all.css';
import BookingForm from "../BookingForm/BookingForm";

export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [isBookingFormOpen, setBookingFormOpen] = useState(false);

  const openBookingForm = () => {
    setBookingFormOpen(true);
  };

  const closeBookingForm = () => {
    setBookingFormOpen(false);
  };

  const bookingFormContainer = document.getElementById("booking-form-container");


  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-gray-600 mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="text-2xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
              href="home"
            >
              fix health
            </a>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="home"
                >
                  <span className="ml-2">Home</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="#pablo"
                >
                  <span className="ml-2">Services</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="#pablo"
                >
                  <span className="ml-2">About</span>
                </a>
              </li>
              <li className="nav-item">
                <button className="px-3 py-2 flex items-center text-xs uppercase font-bold border rounded-md leading-snug text-white hover:opacity-65" onClick={openBookingForm}>Book Appointment</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {
  isBookingFormOpen &&
  ReactDOM.createPortal(
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="p-4 rounded-md relative  sm:max-w-md w-full">
        {/* Close button */}
        <button
          className="absolute top-0 right-5 text-white"
          onClick={closeBookingForm}
          style={{ fontSize: "3.5rem" }}
        >
          &times;
        </button>

        {/* BookingForm component */}
        <div className="mx-auto my-auto text-white">
          <BookingForm />
        </div>
      </div>
    </div>,
    bookingFormContainer
  )
}

    </>
  );
}