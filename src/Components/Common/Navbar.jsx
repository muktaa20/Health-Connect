import React, { useEffect, useState } from "react";
import {
  Stethoscope,
  Menu,
  CircleX,
  ChevronDown,
  User,
  Calendar,
} from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [userName, setUserName] = useState("");
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  useEffect(() => {
    const storeUsername = localStorage.getItem("username");
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token")
    localStorage.removeItem("username")
    window.location.href = "/signin"
  }

  return (
    <nav className="w-full shadow-md py-4 px-4">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex items-center">
          <Stethoscope className="text-lg mr-2 text-[#eb4452]" />
          <Link to="/" className="text-2xl font-bold">
            Health Connect
          </Link>
        </div>

        <div className="md:flex justify-evenly w-1/2 text-lg hidden">
          <Link className="hover:text-[#eb4452]" to="/">
            Home
          </Link>
          <Link className="hover:text-[#eb4452]" to="/about">
            About
          </Link>
          <Link className="hover:text-[#eb4452]" to="/department">
            Department
          </Link>
          <Link className="hover:text-[#eb4452]" to="/doctors">
            Doctors
          </Link>
          <Link className="hover:text-[#eb4452]" to="/news">
            News
          </Link>
          <Link className="hover:text-[#eb4452]" to="/contact">
            Contact
          </Link>
        </div>

        {userName ? (
          <div>
            <button
              className="flex items-center space-x-2 text-gray-800 focus:outline-none"
              onClick={() => setUserMenuOpen(!userMenuOpen)}
            >
              <User className="text-2xl text-red-600" />
              <span className="font-medium uppercase">{userName}</span>
              <ChevronDown className="text-gray-500 text-sm" />{" "}
              {/* Dropdown icon */}
            </button>
            {userMenuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-b-md shadow-lg py-2">
                <a
                  href="/appointments"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100 flex items-center"
                >
                  <Calendar className="mr-2 text-red-500" />
                  My Appontment
                </a>
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

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden mt-4 flex flex-col space-y-4  text-lg font-semibold">
          <Link className="hover:text-[#eb4452]" to="/">
            Home
          </Link>
          <Link className="hover:text-[#eb4452]" to="/about">
            About
          </Link>
          <Link className="hover:text-[#eb4452]" to="/department">
            Department
          </Link>
          <Link className="hover:text-[#eb4452]" to="/doctors">
            Doctors
          </Link>
          <Link className="hover:text-[#eb4452]" to="/news">
            News
          </Link>
          <Link className="hover:text-[#eb4452]" to="/contact">
            Contact
          </Link>
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
