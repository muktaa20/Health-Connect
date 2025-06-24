import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import doc from "../../assets/doc.png";

const Signin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault(); // ✅ important
    setLoading(true);

    const formData = new URLSearchParams();
    formData.append("email", email.trim());
    formData.append("password", password);

    try {
      console.log("Submitting login with:", formData.toString());
      const response = await fetch(
        "https://backend-health-connect.vercel.app/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: formData.toString(),
        }
      );

      const result = await response.json();
      console.log("Login response:", response.status, result);

      if (response.ok) {
        // Save tokens or other returned data
        localStorage.setItem("token", result.access_token);
        alert("Login successful!");
        navigate("/"); // Redirect to dashboard or home
      } else {
        alert(result.message || "Login failed: " + JSON.stringify(result));
      }
    } catch (err) {
      console.error("Network/login error:", err);
      alert("Login error: Check console.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen">
      <div className="hidden md:block md:w-1/2">
        <img
          className="w-full h-full object-cover"
          src={doc}
          alt="Doctor"
        />
      </div>

      <div className="w-full md:w-1/2 flex flex-col justify-center p-8 bg-white">
        <h1 className="text-4xl font-bold text-center mb-4">Welcome Back</h1>
        <form
          onSubmit={handleLogin}
          className="max-w-md mx-auto space-y-4 p-6 bg-gray-50 rounded shadow"
        >
          <input
            type="email"
            required
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 border rounded focus:outline-none focus:ring-red-500"
          />

          <input
            type="password"
            required
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 border rounded focus:outline-none focus:ring-red-500"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-red-500 text-white font-semibold rounded hover:bg-red-600"
          >
            {loading ? "Logging in..." : "Log In"}
          </button>
        </form>

        <p className="mt-4 text-center text-gray-600">
          Don't have an account? <a href="/signup" className="text-red-500">Sign Up</a>
        </p>
      </div>
    </div>
  );
};

export default Signin;




// // src/pages/Signin.jsx
// import React, { useState } from "react";
// // import { Navigate, useNavigate } from "react-router-dom";
// import doc from "../../assets/doc.png";

// const Signin = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();
//   const handleLogin = async (e) => {
//     e.preventDefault;
//     setLoading(true);
//     const requestOptions = {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/x-www-form-urlencoded",
//       },
//       body: new URLSearchParams({ username, password }).toStrin(),
//     };
//     try {
//       const response = await fetch(
//         "https://backend-health-connect.vercel.app/auth/login",
//         requestOptions
//       );
//       const result = await response.json();
//       if (response.ok) {
//         localStorage.srtItem("token", result.access_token);
//         localStorage.srtItem("token_type", result.token_type);
//         localStorage.srtItem("username", result.token_username);
//         setTimeout(() => {
//           navigate("/");
//         }, 2000);
//       }
//     } catch (error) {
//       console.log(error);
//     } finally {
//       setLoading(false);
//     }
//   };
//   return (
//     <div className="flex min-h-screen">
//       {/* Left Image Section */}
//       <div className="hidden md:block md:w-1/2 h-screen">
//         <img className="w-full h-full object-cover" src={doc} alt="Doctor" />
//       </div>

//       {/* Right Form Section */}
//       <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-8 md:p-12 bg-white">
//         <div className="w-full max-w-lg text-center bg-white rounded-lg">
//           <h1 className="text-4xl font-bold text-gray-800 mb-4">
//             Welcome Back
//           </h1>
//           <p className="text-gray-600 mb-8">
//             Login to access your HealthConnect account
//           </p>
//         </div>

//         {/* Login Form */}
//         <form
//           onSubmit={handleLogin}
//           className="w-full md:w-3/4 shadow-lg p-8 space-y-4"
//         >
//           <input
//             type="email"
//             required
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-red-500 placeholder-gray-500"
//           />
//           <input
//             type="password"
//             required
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-red-500 placeholder-gray-500"
//           />
//           <button
//             type="submit"
//             disabled={loading}
//             className="w-full py-3 mt-5 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600 transition duration-300"
//           >
//             {loading ? "Logging in..." : "Log In"}
//           </button>
//         </form>

//         <p className="mt-6 text-gray-600 text-center">
//           Don't have an account?{" "}
//           <a
//             href="/signup"
//             className="text-red-500 hover:underline font-medium transition-colors"
//           >
//             Sign Up
//           </a>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Signin;
