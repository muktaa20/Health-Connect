import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    fetch("https://backend-health-connect.vercel.app/doctors")
      .then((res) => res.json())
      .then((data) => {
        console.log("Doctors data:", data);
        if (Array.isArray(data)) {
          setDoctors(data);
        } else if (Array.isArray(data.doctors)) {
          setDoctors(data.doctors);
        } else {
          setDoctors([]);
        }
      })
      .catch((err) => console.error("Failed to fetch doctors:", err));
  }, []);

  const handleImageError = (e) => {
    e.target.src = "https://via.placeholder.com/150";
  };

  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <p className="text-gray-500 uppercase tracking-widest font-semibold">
          Our Team
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2 mb-6">
          Our Expert Doctors
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
        {doctors.slice(0, 4).map((doctor, index) => (
          <div
            key={doctor._id || index}
            className="flex flex-col items-center text-center p-4 bg-gray-50 rounded-xl shadow hover:shadow-md transition"
          >
            <img
              src={
                doctor.image
                  ? doctor.image.startsWith("http")
                    ? doctor.image
                    : `https://backend-health-connect.vercel.app/${doctor.image.replace(
                        /^\/+/,
                        ""
                      )}`
                  : "https://via.placeholder.com/150"
              }
              alt={doctor.name || "Doctor"}
              onError={handleImageError}
              className="w-28 h-28 object-cover rounded-full border-4 border-white shadow mb-4"
            />
            <h3 className="text-lg font-bold text-red-600 mb-1">
              {doctor.name || "No Name"}
            </h3>
            <p className="text-sm text-gray-600 mb-3">
              {typeof doctor.speciality === "string"
                ? doctor.speciality
                : doctor.speciality?.title || "Speciality not specified"}
            </p>
            <div className="flex gap-4 text-gray-500 text-sm">
              <FaFacebookF className="hover:text-blue-600 cursor-pointer" />
              <FaTwitter className="hover:text-blue-400 cursor-pointer" />
              <FaInstagram className="hover:text-pink-500 cursor-pointer" />
              <FaLinkedinIn className="hover:text-blue-700 cursor-pointer" />
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <Link to="/doctors">
          <button className="bg-red-600 text-white px-6 py-2 rounded-full font-medium hover:bg-red-700 transition">
            View More
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Doctors;
