import React, { useEffect, useState } from "react";

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await fetch("https://backend-health-connect.vercel.app/doctors");
        const data = await response.json();
        setDoctors(data);
      } catch (error) {
        console.error("Failed to fetch doctors:", error);
      }
    };

    fetchDoctors();
  }, []);

  return (
    <div className="container mx-auto py-12 px-6 mt-16">
      <h4 className="md:text-3xl text-2xl font-bold text-gray-800 mb-8">
        Browse through the doctors specialist.
      </h4>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {doctors.map((doctor) => (
          <div
            key={doctor.id}
            className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center"
          >
            <img
              src={doctor.image}
              alt={doctor.name}
              className="w-24 h-24 rounded-full mb-4 object-cover"
            />

            <div className="font-semibold mb-2">
              <ul className="list-none pl-4">
                <li className="flex items-center space-x-2">
                  <span
                    className={`w-2 h-2 rounded-full animate-pulse ${
                      doctor.available ? "bg-green-500" : "bg-red-500"
                    }`}
                    style={{ minWidth: "6px", minHeight: "6px" }}
                  ></span>
                  <span
                    className={`${
                      doctor.available ? "text-green-500" : "text-red-500"
                    }`}
                  >
                    {doctor.available ? "Available" : "Unavailable"}
                  </span>
                </li>
              </ul>
            </div>

            <h3 className="text-lg font-bold text-gray-800">{doctor.name}</h3>
            <p className="text-gray-500">
              {doctor.speciality?.title || "Unknown Speciality"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Doctors;

