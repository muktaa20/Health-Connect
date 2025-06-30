import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import doc from "../../assets/doc.jpg";

const Signup = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showOTPForm, setShowOTPForm] = useState(false);
  const [otp, setOtp] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        username,
        name,
        password,
      }),
    };

    try {
      const response = await fetch(
        "https://backend-health-connect.vercel.app/auth/signup",
        requestOptions
      );
      const result = await response.text();
      if (response.ok) {
        console.log("Signup Successful", result);
        setShowOTPForm(true);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    setLoading(true);

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        verification_code: otp,
      }),
    };

    try {
      const response = await fetch(
        "https://backend-health-connect.vercel.app/auth/verify-email",
        requestOptions
      );

      if (response.ok) {
        console.log("Email verified successfully!");
        navigate("/signin");

        window.location.reload();
      } else {
        const result = await response.text();
        console.error("Verification Failed:", result);
      }
    } catch (error) {
      console.error("Verification error", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen">
      <div className="hidden md:block md:w-1/2 h-screen">
        <img
          className="w-[500px] h-[700px] object-contain mx-auto my-auto"
          src={doc}
          alt="Doctor"
        />
      </div>

      <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-8 md:p-12 bg-white">
        <div className="w-full max-w-lg text-center bg-white rounded-lg">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">
              Welcome to HealthConnect
            </h1>
            <p className="text-gray-600">
              {showOTPForm
                ? "Please enter the verification code sent to your email"
                : "Create your account and start your healthcare journey"}
            </p>
          </div>
        </div>

        {!showOTPForm ? (
          <form
            onSubmit={handleSubmit}
            className="w-full md:w-3/4 shadow-lg p-8 space-y-4"
          >
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
              placeholder="Enter full name"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-red-500 placeholder-gray-500 transition-colors"
            />
            <input
              type="text"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              placeholder="Username"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-red-500 placeholder-gray-500 transition-colors"
            />
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              placeholder="Email"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-red-500 placeholder-gray-500 transition-colors"
            />
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              placeholder="Password"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-red-500 placeholder-gray-500 transition-colors"
            />
            <button
              type="submit"
              className="w-full py-3 mt-5 bg-red-500 text-white font-semibold rounded-md hover:bg-red-700 transition duration-300"
            >
              {loading ? "Signing up..." : "Sign Up"}
            </button>
          </form>
        ) : (
          <form
            onSubmit={handleVerifyOtp}
            className="space-y-4 shadow-lg p-10 w-full max-w-md"
          >
            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none"
            />
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600 transition duration-300"
            >
              {loading ? "Verifying..." : "Verify OTP"}
            </button>
          </form>
        )}

        {!showOTPForm && (
          <p className="mt-6 text-gray-600 text-center">
            Already have an account?{" "}
            <a
              href="/signin"
              className="text-red-500 hover:underline font-medium transition-colors"
            >
              Log In
            </a>
          </p>
        )}
      </div>
    </div>
  );
};

export default Signup;
