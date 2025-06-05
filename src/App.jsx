import React from "react";
import Navbar from "./Components/Common/Navbar";
import "./index.css";
import Offer from "./Components/HomePage/Offer";
import Home from "./Components/HomePage/Home";
import Doctors from "./Components/HomePage/Doctors";
import Contact from "./Components/HomePage/Contact";

function App() {
  return (
   
      <div>
        <Navbar />
        <Home />
        <Offer />
        <Doctors />
        <Contact />
      </div>
    
  );
}

export default App;
