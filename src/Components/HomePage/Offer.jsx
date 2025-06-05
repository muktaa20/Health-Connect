import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMicroscope,
  faUserMd,
  faClipboardCheck,
  faHeartbeat,
} from "@fortawesome/free-solid-svg-icons";

const services = [
  {
    icon: faMicroscope,
    title: "Advanced equipment",
    description:
      "State-of-the-art medical equipment for accurate diagnostics and treatment.",
  },
  {
    icon: faUserMd,
    title: "Qualified doctors",
    description:
      "Our team includes highly qualified and experienced medical professionals.",
  },
  {
    icon: faClipboardCheck,
    title: "Certified services",
    description:
      "All services are certified to ensure the highest quality standards.",
  },
  {
    icon: faHeartbeat,
    title: "Emergency care",
    description:
      "24/7 emergency services to provide urgent care when you need it most.",
  },
];

const OfferCard = ({ icon, title, description }) => (
  <div
    className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center text-center hover:shadow-lg transition"
    role="region"
    aria-label={title}
  >
    <FontAwesomeIcon icon={icon} className="text-4xl text-red-500 mb-4" />
    <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-600 text-sm">{description}</p>
  </div>
);

const Offer = () => {
  return (
    <section className="bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          What We Offer
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Explore the top healthcare features that make our services reliable
          and trusted by thousands.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <OfferCard
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Offer;
