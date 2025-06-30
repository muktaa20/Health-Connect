import React, { useEffect, useState } from "react";
import {
  Stethoscope,
  Menu,
  CircleX,
  ChevronDown,
  User,
  Calendar,
  LogOut,
} from "lucide-react";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [userName, setUserName] = useState("");
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  useEffect(() => {
    const storeUsername = localStorage.getItem("username");
    if (storeUsername) {
      setUserName(storeUsername);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    window.location.href = "/signin";
  };

  const navLinkStyle = ({ isActive }) =>
    isActive
      ? "text-[#eb4452] font-semibold border-b-2 border-[#eb4452] pb-1"
      : "hover:text-[#eb4452] transition";

  return (
    <nav className="w-full shadow-sm border-b border-gray-200 py-4 px-4 bg-white z-50 fixed top-0 left-0">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex items-center">
          <Stethoscope className="text-lg mr-2 text-[#eb4452]" />
          <NavLink to="/" className="text-2xl font-bold">
            Health Connect
          </NavLink>
        </div>

        <div className="md:flex justify-evenly w-1/2 text-lg hidden space-x-6">
          <NavLink to="/" className={navLinkStyle}>Home</NavLink>
          <NavLink to="/about" className={navLinkStyle}>About</NavLink>
          <NavLink to="/department" className={navLinkStyle}>Department</NavLink>
          <NavLink to="/doctors" className={navLinkStyle}>Doctors</NavLink>
          <NavLink to="/news" className={navLinkStyle}>News</NavLink>
          <NavLink to="/contact" className={navLinkStyle}>Contact</NavLink>
        </div>

        {userName ? (
          <div className="relative">
            <button
              className="flex items-center space-x-2 text-gray-800 focus:outline-none"
              onClick={() => setUserMenuOpen(!userMenuOpen)}
            >
              <User className="text-2xl text-red-600" />
              <span className="font-medium uppercase">{userName}</span>
              <ChevronDown className="text-gray-500 text-sm" />
            </button>
            {userMenuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-b-md shadow-lg py-2 z-50">
                <NavLink
                  to="/appointments"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100 flex items-center"
                >
                  <Calendar className="mr-2 text-red-500" />
                  My Appointment
                </NavLink>
                <button
                  onClick={handleLogout}
                  className="w-full text-left px-4 py-2 flex items-center hover:bg-gray-100"
                >
                  <LogOut className="mr-2 text-red-500" />
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <Link to="/signup" className="w-1/4 hidden md:block text-right">
            <button className="border px-4 py-2 border-red-400 rounded-lg hover:bg-[#eb4452] hover:text-white">
              Sign Up
            </button>
          </Link>
        )}

        <div className="block md:hidden" onClick={() => setOpen(!open)}>
          {open ? <CircleX /> : <Menu />}
        </div>
      </div>

      {open && (
        <div className="md:hidden mt-4 flex flex-col space-y-4 text-lg font-semibold">
          <NavLink to="/" className={navLinkStyle}>Home</NavLink>
          <NavLink to="/about" className={navLinkStyle}>About</NavLink>
          <NavLink to="/department" className={navLinkStyle}>Department</NavLink>
          <NavLink to="/doctors" className={navLinkStyle}>Doctors</NavLink>
          <NavLink to="/news" className={navLinkStyle}>News</NavLink>
          <NavLink to="/contact" className={navLinkStyle}>Contact</NavLink>
          <Link to="/signup">
            <button className="border px-4 py-2 border-red-400 rounded-lg hover:bg-[#eb4452] hover:text-white">
              Sign Up
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

