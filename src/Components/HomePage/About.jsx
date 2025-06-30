import React, { useState } from "react";
import { BadgeCheck } from "lucide-react";

const checklistItems = [
  "State-of-the-art medical facilities and equipment.",
  "Experienced doctors and friendly, supportive staff.",
  "Comprehensive care to each patient’s needs.",
];

const extraChecklistItems = [
  "24/7 emergency support with modern infrastructure.",
  "Affordable treatment plans for all age groups.",
  "Digital health records for seamless follow-ups.",
  "Real-time appointment scheduling and updates.",
  "Trusted by thousands of patients across the country.",
];

const About = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleDetails = () => setShowMore((prev) => !prev);

  return (
    <div className="flex flex-col md:flex-row items-center md:px-6 mb-20 mt-20 w-3/4 mx-auto">
      {/* Left Image Section */}
      <div className="md:w-1/2 mb-8 md:mb-0 justify-center">
        <div className="relative">
          <img
            src="https://media.istockphoto.com/id/1077729946/photo/young-woman-lies-with-closed-eyes-cosmetologist-making-procedur.jpg?s=612x612&w=0&k=20&c=M-4YOnC0CKOLxUyaTAKMxASozks7UTiNAEdXhmyykb4="
            alt="about1.webp"
            className="w-full h-auto rounded-lg shadow-lg"
          />
          <img
            src="https://media.istockphoto.com/id/1077729946/photo/young-woman-lies-with-closed-eyes-cosmetologist-making-procedur.jpg?s=612x612&w=0&k=20&c=M-4YOnC0CKOLxUyaTAKMxASozks7UTiNAEdXhmyykb4="
            alt="about2.webp"
            className="w-full h-auto rounded-lg shadow-lg absolute top-20 left-20 border-4 border-white hidden md:flex"
          />
        </div>
      </div>

      {/* Right Text Section */}
      <div className="w-full md:w-1/2 text-center md:text-left md:ml-28">
        <h4 className="text-red-500 font-semibold text-sm uppercase mb-2">
          Welcome to the Health Connect
        </h4>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Best Care For Your Good Health
        </h2>
        <p className="text-gray-600 mb-6">
          At Health Connect, we prioritize compassionate, personalized care that
          meets the unique needs of every patient. Our team of experienced
          professionals is committed to providing the highest quality medical
          services, ensuring you receive the best care possible.
        </p>

        <ul className="space-y-3 mb-6 text-gray-600 text-left">
          {checklistItems.map((item, index) => (
            <li key={index} className="flex items-center text-[14px] md:text-[16px]">
              <BadgeCheck className="text-red-500 md:mr-3 mr-1" />
              {item}
            </li>
          ))}

          {showMore &&
            extraChecklistItems.map((item, index) => (
              <li key={index} className="flex items-center text-[14px] md:text-[16px]">
                <BadgeCheck className="text-red-500 md:mr-3 mr-1" />
                {item}
              </li>
            ))}
        </ul>

        <button
          onClick={toggleDetails}
          className="px-6 py-3 bg-red-500 text-white font-semibold rounded-md transition duration-300"
        >
          {showMore ? "Hide Details" : "Explore Details"}
        </button>
      </div>
    </div>
  );
};

export default About;




