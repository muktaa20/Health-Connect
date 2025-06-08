import React, { Children } from "react";
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

const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

const AuthLayout = ({ children }) => {
  return <>{children}</>;
};

function App() {
  return (
    <>
      {/* <Navbar /> */}
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
          path="/departments"
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
      {/* <Footer /> */}
    </>
  );
}

export default App;
