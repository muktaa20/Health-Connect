import React, { useState } from "react";
import doc from "../../assets/doc.png";

const Signup = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
    // console.log(name, username, email, password);

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
      const result = await response.text()
      if (response.ok){
        console.log("Signup Successfull",result);
        
      }
    } catch (error) {
      console.log(error);
    }
    finally {
     setLoading(false)
    }
  };

  return (
    <div className="flex min-h-screen">
      <div className="hidden md:block md:w-1/2 h-screen">
        <img className="w-full h-full object-fill" src={doc} alt="" />
      </div>

      <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-8 md:p-12 bg-white">
        <div className="w-full max-w-lg text-center bg-white rounded-lg ">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">
              Welcome to HealthConnect
            </h1>
            <p className="text-gray-600">
              Create Your account and start your healthcare journey
            </p>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="w-full md:w-3/4 shadow-lg p-8">
          <div className="space-y-4">
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
              type="text"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              placeholder="Password"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-red-500 placeholder-gray-500 transition-colors"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 mt-5 bg-red-500 text-white font-semibold rounded-md hover:bg-red-700 transition duration-300"
          >
            {loading?"Signing up..." : "Sign Up"}
          </button>
        </form>
        <p className="mt-6 text-gray-600 text-center">
          Already have an account?{""}
          <a
            href="/login"
            className="text-red-500 hover:underline font-medium transition-colors"
          >
            Log In
          </a>
        </p>
      </div>
    </div>
  );
};

export default Signup;

// import React, { useState } from "react";

// const Signup = () => {
//   const [fullName, setFullName] = useState("");
//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [otp, setOtp] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [showOTPForm, setShowOTPForm] = useState(false);

//   // Handle Signup Submit
//   const handleSignup = async (e) => {
//   e.preventDefault();
//   setLoading(true);

//   try {
//     const res = await fetch("https://backend-health-connect.vercel.app/auth/signup", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         name: fullName.trim(),
//         username: username.trim(),
//         email: email.trim(),
//         password: password.trim(),
//       }),
//     });

//     const result = await res.json();
//     console.log("Signup response:", result);
//     console.log("res.ok:", res.ok, "result.success:", result.success);

//     if (res.ok) {
//       setShowOTPForm(true);
//     } else {
//       alert(result.message || "Signup failed.");
//     }
//   } catch (error) {
//     console.error("Signup error:", error);
//     alert("Something went wrong during signup.");
//   } finally {
//     setLoading(false);
//   }
// };

//   // Handle OTP Verification
//   const handleVerifyOtp = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       const res = await fetch("https://backend-health-connect.vercel.app/auth/verify-email", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           email: email.trim(),
//           code: Number(otp.trim()),
//         }),
//       });

//       const result = await res.json();
//       console.log("Verification response:", result);

//       if (res.ok && result.success) {
//         alert("Email verified successfully!");
//         window.location.href = "/login";
//       } else {
//         alert(result.message || "Verification failed.");
//       }
//     } catch (error) {
//       console.error("Verification error:", error);
//       alert("Something went wrong during verification.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-white px-4 py-8">
//       <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
//         {/* Image Section */}
//         <div className="flex justify-center">
//           <img
//             src="https://img.freepik.com/free-photo/woman-working-as-doctor_23-2148827810.jpg"
//             alt="Doctor"
//             className="w-80 md:w-full object-cover rounded"
//           />
//         </div>

//         {/* Form Section */}
//         <div className="w-full shadow-lg p-6 rounded-lg">
//           <h2 className="text-2xl md:text-3xl font-bold text-center mb-3">
//             {showOTPForm ? "Verify Your Email" : "Welcome to HealthConnect"}
//           </h2>
//           <p className="text-center text-gray-600 mb-6">
//             {showOTPForm
//               ? "Enter the verification code sent to your email."
//               : "Create your account and start your healthcare journey."}
//           </p>

//           {showOTPForm ? (
//             <form onSubmit={handleVerifyOtp} className="space-y-4">
//               <label htmlFor="otp" className="block text-sm font-medium text-gray-700">
//                 Verification Code
//               </label>
//               <input
//                 id="otp"
//                 type="text"
//                 value={otp}
//                 onChange={(e) => setOtp(e.target.value)}
//                 required
//                 className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-green-500 outline-none"
//               />
//               <button
//                 type="submit"
//                 disabled={loading}
//                 className={`w-full ${
//                   loading ? "bg-gray-400" : "bg-green-600 hover:bg-green-700"
//                 } text-white py-2 rounded font-semibold transition`}
//               >
//                 {loading ? "Verifying..." : "Verify Email"}
//               </button>
//             </form>
//           ) : (
//             <form onSubmit={handleSignup} className="space-y-4">
//               <label className="block text-sm font-medium text-gray-700">
//                 Full Name
//               </label>
//               <input
//                 type="text"
//                 value={fullName}
//                 onChange={(e) => setFullName(e.target.value)}
//                 required
//                 className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 outline-none"
//               />

//               <label className="block text-sm font-medium text-gray-700">
//                 Username
//               </label>
//               <input
//                 type="text"
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//                 required
//                 className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 outline-none"
//               />

//               <label className="block text-sm font-medium text-gray-700">
//                 Email
//               </label>
//               <input
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//                 className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 outline-none"
//               />

//               <label className="block text-sm font-medium text-gray-700">
//                 Password
//               </label>
//               <input
//                 type="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//                 className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 outline-none"
//               />

//               <button
//                 type="submit"
//                 disabled={loading}
//                 className={`w-full ${
//                   loading ? "bg-gray-400" : "bg-red-500 hover:bg-red-600"
//                 } text-white py-2 rounded font-semibold transition`}
//               >
//                 {loading ? "Signing Up..." : "Sign Up"}
//               </button>
//             </form>
//           )}

//           {!showOTPForm && (
//             <p className="text-center text-sm mt-4">
//               Already have an account?{" "}
//               <a href="/login" className="text-red-500 hover:underline">
//                 Log In
//               </a>
//             </p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Signup;
