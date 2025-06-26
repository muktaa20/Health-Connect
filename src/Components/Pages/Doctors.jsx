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
  const [selectedDept, setSelectedDept] = useState("All");

  // Fetch departments on mount
  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        const deptResponse = await fetch("https://backend-health-connect.vercel.app/doctors/department");
        const deptData = await deptResponse.json();

        // Remove duplicate departments based on title
        const uniqueDepartments = deptData.departments.filter(
          (dept, index, self) =>
            index === self.findIndex((d) => d.title.toLowerCase() === dept.title.toLowerCase())
        );

        setDepartments(uniqueDepartments);
      } catch (error) {
        console.error("Failed to fetch departments:", error);
      }
    };
    fetchInitialData();
  }, []);

  // Fetch doctors when selectedDept changes
  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const endpoint =
          selectedDept === "All"
            ? "https://backend-health-connect.vercel.app/doctors"
            : `https://backend-health-connect.vercel.app/doctors/department/${selectedDept.toLowerCase()}`;

        const response = await fetch(endpoint);
        const data = await response.json();
        setDoctors(data);
      } catch (error) {
        console.error("Failed to fetch doctors:", error);
      }
    };

    fetchDoctors();
  }, [selectedDept]);

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
              {/* 'All' Option */}
              <div
                className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer ${
                  selectedDept === "All"
                    ? "bg-red-100 text-red-500 font-semibold"
                    : "bg-gray-50 hover:bg-gray-200 text-gray-700"
                }`}
                onClick={() => setSelectedDept("All")}
              >
                <FontAwesomeIcon icon={faUserMd} className="text-lg text-inherit" />
                <span>All Departments</span>
              </div>

              {/* Dynamic Department List */}
              {departments.map((department) => (
                <div
                  key={department.title}
                  className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer ${
                    selectedDept === department.title
                      ? "bg-red-100 text-red-500 font-semibold"
                      : "bg-gray-50 hover:bg-gray-200 text-gray-700"
                  }`}
                  onClick={() => setSelectedDept(department.title)}
                >
                  <FontAwesomeIcon
                    icon={iconMapping[department.icon] || faUserMd}
                    className="text-lg text-inherit"
                  />
                  <span>{department.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Doctor Cards */}
        <div className="md:w-3/4">
          <h4 className="md:text-3xl text-2xl font-bold text-gray-800 mb-8">
            {selectedDept === "All"
              ? "Browse through all doctors"
              : `Doctors in ${selectedDept}`}
          </h4>

          {doctors.length === 0 ? (
            <p className="text-gray-500">No doctors available.</p>
          ) : (
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
          )}
        </div>
      </div>
    </div>
  );
};

export default Doctors;



