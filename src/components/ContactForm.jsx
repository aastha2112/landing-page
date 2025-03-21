import { useState } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

export const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="bg-[#020012] flex flex-col justify-center items-center px-6 py-16">
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl">
        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-[#0d0b1f] w-full md:w-1/2 p-6 rounded-lg shadow-lg space-y-4"
        >
          <h2 className="text-white text-center text-2xl font-semibold mb-2">
            Contact Us
          </h2>
          <p className="text-gray-400 text-center text-sm">
            We'd love to hear from you!
          </p>

          {/* Name Input */}
          <input
            type="text"
            placeholder="Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full p-3 rounded-md border border-gray-600 bg-[#1a162e] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            required
          />

          {/* Email Input */}
          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="w-full p-3 rounded-md border border-gray-600 bg-[#1a162e] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            required
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 rounded-md transition-transform transform hover:scale-105 shadow-lg"
          >
            Submit
          </button>
        </form>

        {/* Divider Line (Only on larger screens) */}
        <div className="hidden md:block w-0.5 h-64 bg-gray-600 mx-10"></div>

        {/* Company Info */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <p className="text-white text-3xl font-semibold mb-3">
            Tech Solutions
          </p>
          <p className="text-gray-400 text-lg italic mb-6">
            Innovating the future, one line of code at a time.
          </p>

          {/* Social Media Icons */}
          <div className="flex justify-center md:justify-start space-x-6 text-2xl text-gray-400 mb-4">
            <a href="#" className="hover:text-white transition">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-white transition">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-white transition">
              <FaLinkedinIn />
            </a>
            <a href="#" className="hover:text-white transition">
              <FaInstagram />
            </a>
          </div>

          {/* Navigation Links */}
          <div className="flex justify-center md:justify-start space-x-6 mb-4">
            <a href="#" className="hover:text-white transition">
              About
            </a>
            <a href="#" className="hover:text-white transition">
              Careers
            </a>
            <a href="#" className="hover:text-white transition">
              Help
            </a>
            <a href="#" className="hover:text-white transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition">
              Terms of Service
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-10 w-full bg-[#0d0b1f] py-6 text-center text-gray-400">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Aastha. All rights reserved.
        </p>
      </footer>
    </div>
  );
};
