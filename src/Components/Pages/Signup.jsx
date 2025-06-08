import React from 'react';

const Signup = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Doctor Image */}
        <div className="flex justify-center">
          <img
            src="https://img.freepik.com/free-photo/woman-working-as-doctor_23-2148827810.jpg?ga=GA1.1.1094954375.1742993418&semt=ais_hybrid&w=740"
            alt="Doctor"
            className="w-80 md:w-full"
          />
        </div>

        {/* Signup Form */}
        <div className="shadow-lg p-8 rounded-lg w-full">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">
            Welcome to <span className="text-[#0f172a]">HealthConnect</span>
          </h2>
          <p className="text-center text-gray-600 mb-6">
            Create your account and start your healthcare journey
          </p>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="text"
              placeholder="Username"
              className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              type="submit"
              className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded font-semibold transition"
            >
              Sign Up
            </button>
          </form>
          <p className="text-center text-sm mt-4">
            Already have an account?{" "}
            <a href="/login" className="text-red-500 hover:underline">
              Log In
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;

