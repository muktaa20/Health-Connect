import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeartPulse,
  faUserMd,
  faTooth,
  faEye,
  faBrain,
  faSyringe,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const iconMapping = {
  faHeartPulse,
  faUserMd,
  faTooth,
  faEye,
  faBrain,
  faSyringe,
};

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [selectedDept, setSelectedDept] = useState("All");

  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        const res = await fetch(
          "https://backend-health-connect.vercel.app/doctors/department"
        );
        const data = await res.json();
        const unique = data.departments.filter(
          (dept, index, self) =>
            index ===
            self.findIndex(
              (d) => d.title.toLowerCase() === dept.title.toLowerCase()
            )
        );
        setDepartments(unique);
      } catch (err) {
        console.error("Error fetching departments", err);
      }
    };
    fetchDepartments();
  }, []);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const url =
          selectedDept === "All"
            ? "https://backend-health-connect.vercel.app/doctors"
            : `https://backend-health-connect.vercel.app/doctors/department/${selectedDept.toLowerCase()}`;
        const res = await fetch(url);
        const data = await res.json();
        setDoctors(data);
      } catch (err) {
        console.error("Error fetching doctors", err);
      }
    };
    fetchDoctors();
  }, [selectedDept]);

  return (
    <div className="container mx-auto py-12 px-6 mt-16">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/4">
          <div className="shadow-md bg-white p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-red-500 mb-4">
              Filter by Departments
            </h3>
            <div className="flex flex-col gap-2">
              <div
                className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer ${
                  selectedDept === "All"
                    ? "bg-red-100 text-red-500 font-semibold"
                    : "bg-gray-50 hover:bg-gray-200 text-gray-700"
                }`}
                onClick={() => setSelectedDept("All")}
              >
                <FontAwesomeIcon icon={faUserMd} className="text-lg" />
                <span>All Departments</span>
              </div>
              {departments.map((dept, idx) => (
                <div
                  key={dept.title + idx}
                  className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer ${
                    selectedDept === dept.title
                      ? "bg-red-100 text-red-500 font-semibold"
                      : "bg-gray-50 hover:bg-gray-200 text-gray-700"
                  }`}
                  onClick={() => setSelectedDept(dept.title)}
                >
                  <FontAwesomeIcon
                    icon={iconMapping[dept.icon] || faUserMd}
                    className="text-lg"
                  />
                  <span>{dept.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

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
                <Link
                  to={`/appointment/${doctor.id}`}
                  key={doctor.id || doctor._id || doctor.name}
                >
                  <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
                    <img
                      src={doctor.image}
                      alt={doctor.name}
                      className="w-24 h-24 rounded-full mb-4 object-cover"
                    />
                    <h3 className="text-lg font-bold text-gray-800">
                      {doctor.name}
                    </h3>
                    <p className="text-gray-500">
                      {doctor.speciality?.title || "Unknown Speciality"}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Doctors;
