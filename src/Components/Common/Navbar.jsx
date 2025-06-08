import React, { useState } from "react";
import { Stethoscope, Menu, CircleX } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full shadow-md p-4">
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

        <Link to="/signup" className="w-1/4 hidden md:block text-right">
          <button className="border px-4 py-2 border-red-400 rounded-lg hover:bg-[#eb4452] hover:text-white">
            Sign Up
          </button>
        </Link>

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
