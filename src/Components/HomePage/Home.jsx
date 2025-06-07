import React from 'react';
import ServicesSection from "./Services";
import About from "./About"; 
import Banner from "./Banner"
import PopularDepartments from './PopularDepartments';
import Offer from './Offer'
import Doctors from './Doctors';
import Contact from './Contact'

const Home = () => {
  return (
    <main>
      <Banner />
      <ServicesSection />
      <About />
      <PopularDepartments />
      <Offer />
      <Doctors />
      <Contact />
    </main>
  );
};

export default Home;