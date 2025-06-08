import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeartbeat,
  faPeopleCarry,
  faUserMd,
} from "@fortawesome/free-solid-svg-icons";
import Doctors from "../HomePage/Doctors";

const coreValuesData = [
  {
    icon: faHeartbeat,
    title: "Compassion",
    description:
      "We care deeply for our patients and treat them like family, providing a compassionate experience at every touchpoint.",
  },
  {
    icon: faPeopleCarry,
    title: "Collaboration",
    description:
      "Working together with patients, doctors, and the community to achieve holistic health for everyone.",
  },
  {
    icon: faUserMd,
    title: "Excellence",
    description:
      "Striving for excellence in every service, from routine checkups to complex procedures.",
  },
];

const About = () => {
  return (
    <div className="pt-5">
      {/* Hero Section */}
      <section
        className="text-white text-center py-20 px-4 md:px-10 lg:px-20 bg-cover bg-center rounded-3xl max-w-7xl mx-auto"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/free-photo/hands-unrecognizable-female-doctor-writing-form-typing-laptop-keyboard_1098-20374.jpg?w=740')",
          backgroundColor: "rgba(255, 1, 1, 0.5)",
          backgroundBlendMode: "multiply",
        }}
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 ">
          Welcome to Health Connect
        </h1>
        <p className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto">
          Connecting you with top healthcare professionals, compassionate care,
          and a healthier tomorrow.
        </p>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-6 px-4 grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        <div className="bg-gray-100 p-6 md:p-8 rounded-xl shadow">
          <h2 className="text-2xl font-bold mb-2">Our Mission</h2>
          <p className="text-gray-700 leading-relaxed font-semibold">
            At Health Connect, our mission is to bridge the gap between patients
            and healthcare providers, ensuring accessible, efficient, and
            high-quality medical services for everyone.
          </p>
        </div>
        <div className="bg-gray-100 p-6 md:p-8 rounded-xl shadow">
          <h2 className="text-2xl font-bold mb-2">Our Vision</h2>
          <p className="text-gray-700 leading-relaxed font-semibold">
            We envision a world where healthcare is accessible to all, fostering
            a healthier, happier global community.
          </p>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="bg-white py-8 px-4 text-center">
        <h2 className="text-3xl font-bold mb-12">Our Core Values</h2>
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 max-w-6xl mx-auto">
          {coreValuesData.map((value, index) => (
            <div
              key={index}
              className="bg-gray-100 p-6 rounded-xl shadow flex flex-col items-center"
            >
              <FontAwesomeIcon
                icon={value.icon}
                className="text-red-500 text-4xl mb-4"
              />
              <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
              <p className="text-sm text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Doctors Section */}
      <section className="bg-white  px-4">
        <Doctors />
      </section>

      {/* Call to Action */}
      <section className="text-center py-10 px-4">
        <h2 className="text-2xl font-semibold mb-2">
          Ready to Connect with Us?
        </h2>
        <p className="text-gray-700 mb-6">
          We're here to support your health journey. Reach out today!
        </p>
        <a
          href="/contact"
          className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-full text-lg transition"
        >
          Contact Us
        </a>
      </section>
    </div>
  );
};

export default About;
