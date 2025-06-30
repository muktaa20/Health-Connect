import React from "react";
import { Link } from "react-router-dom";
import { HeartPulse, ShieldCheck, Clock } from "lucide-react";

const Banner = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen items-center bg-white pt-28 md:pt-32 lg:pt-36">
      {/* Left Content */}
      <div className="w-full md:w-1/2 p-6 md:p-16 flex flex-col justify-center">
        <div className="flex items-center gap-2 w-fit shadow-md px-4 py-2 rounded-2xl mb-4">
          <HeartPulse className="text-red-500" />
          <span className="text-sm font-medium">
            Trusted Healthcare Partner
          </span>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Your <br /> <span className="text-red-500">Health is</span>
          <br /> Our Priority
        </h1>

        <p className="text-gray-600 mt-10 text-lg font-semibold">
          Experience personalized healthcare through our network of qualified
          professionals. Your well-being is at the heart of everything we do.
        </p>

        <div className="flex gap-6 mt-10 font-bold">
          <div className="flex items-center gap-2 shadow-md px-4 py-2 rounded-2xl">
            <Clock className="text-blue-500" />
            <span className="text-sm">24/7 Availability</span>
          </div>
          <div className="flex items-center gap-2 shadow-md px-4 py-2 rounded-2xl">
            <ShieldCheck className="text-green-500" />
            <span className="text-sm">100% Secure</span>
          </div>
        </div>

        <Link to="/signup">
          <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 mt-8 rounded-xl font-semibold transition duration-500">
            Register Now
          </button>
        </Link>

        {/* Mobile Image */}
        <img
          src="https://img.freepik.com/free-photo/portrait-smiling-young-doctors-standing-together-portrait-medical-staff-inside-modern-hospital-smiling-camera_657921-885.jpg?ga=GA1.1.1094954375.1742993418&semt=ais_hybrid&w=740"
          alt="Mobile Doctor Banner"
          className="w-11/12 mx-auto mt-6 rounded-lg shadow-md block md:hidden"
        />
      </div>

      {/* Right Image */}
      <div className="w-full md:w-1/2 hidden md:flex justify-center items-center">
        <img
          src="https://img.freepik.com/free-photo/portrait-smiling-young-doctors-standing-together-portrait-medical-staff-inside-modern-hospital-smiling-camera_657921-885.jpg?ga=GA1.1.1094954375.1742993418&semt=ais_hybrid&w=740"
          alt="Banner"
          className="w-9/12 h-auto"
        />
      </div>
    </div>
  );
};

export default Banner;
