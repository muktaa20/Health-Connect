import React, { useEffect, useState } from "react";
import {
  faHeartPulse,
  faUserMd,
  faTooth,
  faEye,
  faBrain,
  faSyringe,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const iconMapping = {
  faHeartPulse: faHeartPulse,
  faUserMd: faUserMd,
  faTooth: faTooth,
  faEye: faEye,
  faBrain: faBrain,
  faSyringe: faSyringe,
};

const PopularDepartments = () => {
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    fetch("https://backend-health-connect.vercel.app/doctors/department")
      .then((res) => res.json())
      .then((data) => {
        const departmentsWithIcons = data.departments.map((dept) => ({
          title: dept.title,
          iconname: iconMapping[dept.icon] || faUserMd, // fallback
        }));
        setDepartments(departmentsWithIcons);
      });
  }, []);

  return (
    <div className="bg-gray-50 py-12 text-center">
      <h4 className="text-gray-500 uppercase text-sm mb-2">Why Choose Us?</h4>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
        Health connect popular Departments
      </h2>
      <p className="text-gray-500 mb-10 px-4">
        Discover the range of medical specialties that our expert team offers to
        ensure comprehensive health care services.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 w-11/12 mx-auto">
        {departments.slice(0, 5).map((dept, index) => (
          <div
            key={index}
            className="bg-gradient-to-b from-red-400 to-red-600 text-white rounded-xl shadow-md p-6 flex flex-col items-center transition transform hover:scale-105"
          >
            <FontAwesomeIcon icon={dept.iconname} className="text-4xl mb-4" />
            <h3 className="text-lg font-semibold">{dept.title}</h3>
          </div>
        ))}
      </div>
      <div className="mt-10">
        <button className="px-6 py-3  bg-red-600 text-white font-semibold rounded-full hover:scale-105">
          <a href=""> View More</a>
        </button>
      </div>
    </div>
  );
};

export default PopularDepartments;
