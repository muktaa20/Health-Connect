import React from "react";
import { footerData } from "./FooterData";
import { MapPin, Phone, Mail } from "lucide-react";

const iconMap = {
  MapPin: <MapPin className="w-4 h-4 mr-2 text-red-400" />,
  Phone: <Phone className="w-4 h-4 mr-2 text-red-400" />,
  Mail: <Mail className="w-4 h-4 mr-2 text-red-400" />,
};

const Footer = () => {
  return (
    <footer className="bg-[#0f172a] text-white py-10 px-5 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Branding & Subscribe */}
        <div>
          <h2 className="text-xl font-bold mb-2">Health Connect</h2>
          <div className="flex border border-gray-400 rounded-full overflow-hidden max-w-xs">
            <input
              type="email"
              placeholder="Email"
              className="px-4 py-2 bg-transparent outline-none flex-1"
            />
            <button className="bg-red-500 sm:text-small px-4 text-white">
              SUBSCRIBE
            </button>
          </div>
          <div className="flex gap-4 mt-4">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-instagram"></i>
          </div>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-semibold mb-2">Company</h3>
          <ul className="space-y-1">
            {footerData.company.map((item) => (
              <li key={item} className="hover:underline cursor-pointer">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1">
            {footerData.quickLinks.map((item) => (
              <li key={item} className="hover:underline cursor-pointer">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="font-semibold mb-2">Contact Us</h3>
          <ul className="space-y-2">
            {footerData.contact.map(({ icon, text }, index) => (
              <li key={index} className="flex items-start">
                {iconMap[icon]}
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-10 flex flex-col md:flex-row justify-between text-sm text-gray-400 border-t border-gray-700 pt-4">
        <p>© 2024 All Rights Reserved</p>
        <p>
          Made with <span className="text-red-400">❤️</span> by Health Connect
        </p>
        <p>
          <a href="#" className="hover:underline">
            Terms & Use
          </a>{" "}
          ·{" "}
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
