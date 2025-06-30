import React from "react";
import { Routes, Route } from "react-router-dom";
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
import DoctorDetails from "./Components/Pages/DoctorDetails";
import Appointments from "./Components/Pages/Appointments";

const MainLayout = ({ children }) => (
  <>
    <Navbar />
    {children}
    <Footer />
  </>
);

const AuthLayout = ({ children }) => <>{children}</>;

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <MainLayout>
            <Home />
          </MainLayout>
        }
      />
      <Route
        path="/doctors"
        element={
          <MainLayout>
            <Doctors />
          </MainLayout>
        }
      />
      <Route
        path="/doctor/:department"
        element={
          <MainLayout>
            <Doctors />
          </MainLayout>
        }
      />
      <Route
        path="/appointment/:id"
        element={
          <MainLayout>
            <DoctorDetails />
          </MainLayout>
        }
      />
      <Route
        path="/about"
        element={
          <MainLayout>
            <About />
          </MainLayout>
        }
      />
      <Route
        path="/contact"
        element={
          <MainLayout>
            <Contact />
          </MainLayout>
        }
      />
      <Route
        path="/news"
        element={
          <MainLayout>
            <News />
          </MainLayout>
        }
      />

      <Route
        path="/appointments"
        element={
          <MainLayout>
            <Appointments />
          </MainLayout>
        }
      />
      <Route
        path="/signin"
        element={
          <AuthLayout>
            <Signin />
          </AuthLayout>
        }
      />
      <Route
        path="/signup"
        element={
          <AuthLayout>
            <Signup />
          </AuthLayout>
        }
      />
      <Route
        path="/department"
        element={
          <MainLayout>
            <Departments />
          </MainLayout>
        }
      />
      <Route
        path="/news"
        element={
          <MainLayout>
            <News />
          </MainLayout>
        }
      />
    </Routes>
  );
}

export default App;
