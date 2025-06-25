import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import {
  faHeartPulse,
  faUserMd,
  faTooth,
  faEye,
  faBrain,
  faSyringe,
} from "@fortawesome/free-solid-svg-icons";

const iconMapping = {
  faHeartPulse: faHeartPulse,
  faUserMd: faUserMd,
  faTooth: faTooth,
  faEye: faEye,
  faBrain: faBrain,
  faSyringe: faSyringe,
};

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await fetch("https://backend-health-connect.vercel.app/doctors");
        const data = await response.json();
        setDoctors(data);

        const deptResponse = await fetch("https://backend-health-connect.vercel.app/doctors/department");
        const deptData = await deptResponse.json();
        setDepartments(deptData.departments);
      } catch (error) {
        console.error("Failed to fetch doctors:", error);
      }
    };

    fetchDoctors();
  }, []);

  return (
    <div className="container mx-auto py-12 px-6 mt-16">
      <div className="flex flex-col md:flex-row gap-8">
        
        {/* Sidebar Filter */}
        <div className="md:w-1/4">
          <div className="shadow-md bg-white p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-red-500 mb-4">
              Filter by Departments
            </h3>
            <div className="flex flex-col gap-2">
              {departments.map((department) => (
                <div
                  key={department.title}
                  className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 hover:bg-gray-200 cursor-pointer"
                >
                  <FontAwesomeIcon
                    icon={iconMapping[department.icon] || faUserMd}
                    className="text-lg text-gray-600"
                  />
                  <span className="text-gray-700">{department.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Doctor Cards */}
        <div className="md:w-3/4">
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

      </div>
    </div>
  );
};

export default Doctors;

