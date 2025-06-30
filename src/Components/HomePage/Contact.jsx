import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import contactImage from "../../assets/contact.jpg";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("https://httpbin.org/post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await res.json();
      console.log("Test API Response:", result);

      toast.success("Mesaage send ", { position: "top-right" });
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      toast.error("Something went wrong. Try again.");
    }

    setLoading(false);
  };

  return (
    <section className="bg-white py-26 px-4" id="contact">
      <ToastContainer />
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">
          Get in Touch
        </h2>
        <p className="text-center text-gray-600 mb-10">
          Have questions or need assistance? Fill out the form, and our team
          will get back to you shortly.
        </p>

        <div className="flex flex-col md:flex-row gap-10 items-center">
          <div className="md:w-1/2">
            <img
              src={contactImage}
              alt="Contact Us"
              className="w-full h-auto object-contain"
            />
          </div>

          <form
            onSubmit={handleSubmit}
            className="md:w-1/2 w-full bg-gray-50 p-8 rounded-xl shadow space-y-6"
          >
            <input
              required
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
            />
            <input
              required
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
            />
            <input
              required
              name="phone"
              type="text"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Your Phone Number"
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
            />
            <input
              required
              name="subject"
              type="text"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
            />
            <textarea
              required
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-red-500 text-white font-semibold py-2 rounded-md hover:bg-red-600 transition disabled:opacity-50"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
