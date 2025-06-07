import React from "react";
import { Routes, Route } from "react-router-dom"; // Removed BrowserRouter from here
import Navbar from "./Components/Common/Navbar";
import Footer from "./Components/Common/Footer";
import "./index.css";
import Home from "./Components/HomePage/Home";
import Doctors from "./Components/Pages/Doctors";
import About from "./Components/Pages/About";
import Contact from "./Components/Pages/Contact";
import Signin from "./Components/Pages/Signin";
import Signup from "./Components/Pages/Signup";
import Departments from "./Components/Pages/Departments";
import News from "./Components/Pages/News";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/departments" element={<Departments />} />
        <Route path="/news" element={<News />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
