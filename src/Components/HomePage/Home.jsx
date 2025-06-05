import React from 'react';
import ServicesSection from "./Services";
import About from "./About"; 
import Banner from "./Banner"
import PopularDepartments from './PopularDepartments';

const Home = () => {
  return (
    <main>
      <Banner />
      <ServicesSection />
      <About />
      <PopularDepartments />
    </main>
  );
};

export default Home;