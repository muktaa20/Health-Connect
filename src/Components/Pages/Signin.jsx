import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import doc from "../../assets/doc.png";

const Signin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        username: email, // API expects "username", not "email"
        password: password,
      }).toString(),
    };

    try {
      const response = await fetch(
        "https://backend-health-connect.vercel.app/auth/login",
        requestOptions
      );
      const result = await response.json();

      if (response.ok) {
        localStorage.setItem("token", result.access_token);
        localStorage.setItem("token_type", result.token_type);
        localStorage.setItem("username", result.username);

        setTimeout(() => {
          navigate("/");
        }, 1000);
      } else {
        setErrorMsg(result.detail || "Login failed. Please try again.");
      }
    } catch (error) {
      setErrorMsg("An unexpected error occurred.");
      console.error("Login error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Image Section */}
      <div className="hidden md:block md:w-1/2">
        <img src={doc} alt="Doctor" className="w-full h-full object-cover" />
      </div>

      {/* Form Section */}
      <div className="w-full md:w-1/2 flex flex-col justify-center px-6 py-12 bg-white">
        <h1 className="text-4xl font-bold text-center mb-6">Welcome Back</h1>

        <form
          onSubmit={handleLogin}
          className="max-w-md mx-auto w-full space-y-5 bg-gray-100 p-6 rounded-lg shadow"
          aria-label="Login form"
        >
          {errorMsg && (
            <p className="text-red-500 text-center text-sm">{errorMsg}</p>
          )}

          <input
            type="email"
            required
            aria-label="Email address"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 border rounded focus:outline-none focus:ring-2 focus:ring-red-400"
          />

          <input
            type="password"
            required
            aria-label="Password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 border rounded focus:outline-none focus:ring-2 focus:ring-red-400"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-red-500 text-white font-semibold rounded hover:bg-red-600 transition disabled:opacity-50"
          >
            {loading ? "Logging in..." : "Log In"}
          </button>
        </form>

        <p className="mt-4 text-center text-gray-600">
          Don&apos;t have an account?{" "}
          <a href="/signup" className="text-red-500 underline">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Signin;
