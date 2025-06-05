import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHospital, faAmbulance, faBriefcaseMedical } from "@fortawesome/free-solid-svg-icons";

const Services = ({ title, icon, description, buttonLink, buttonText }) => {
  return (
    <div className='flex flex-col items-center p-10 text-center text-white'>
      <div className='text-5xl mb-4'>
        <FontAwesomeIcon icon={icon} />
      </div>
      <h3 className='font-semibold text-2xl mb-2'>{title}</h3>
      <p className='mb-6 text-base'>{description}</p>
      <a href={buttonLink} className='border border-white px-6 py-2 rounded-full hover:bg-white hover:text-red-500 transition'>
        {buttonText}
      </a>
    </div>
  );
};

const ServicesSection = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-0'>
      <div className='bg-gradient-to-br from-red-500 to-red-400'>
        <Services
          icon={faHospital}
          title="Hospitality"
          description="Clinic excellence must be the priority for any health."
          buttonText="Apply For a Bed"
          buttonLink="#"
        />
      </div>

      <div className='bg-gradient-to-br from-red-500 to-red-400'>
        <Services
          icon={faAmbulance}
          title="Emergency Care"
          description="Rapid response and immediate medical attention."
          buttonText="Call Now"
          buttonLink="#"
        />
      </div>

      <div className='bg-gradient-to-br from-red-500 to-red-400'>
        <Services
          icon={faBriefcaseMedical}
          title="Chamber"
          description="Expert doctors available for regular consultations."
          buttonText="Book Appointment"
          buttonLink="#"
        />
      </div>
    </div>
  );
};

export default ServicesSection;
