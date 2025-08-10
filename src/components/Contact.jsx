import React from "react";
import {
  FaWhatsapp,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

export default function ContactUs() {
  return (
    <section className="bg-gray-50 py-16 px-6 max-w-7xl mx-auto rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-10 text-center text-gray-900">Contact Us</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <form
          className="bg-white p-8 rounded shadow-md"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Query submitted! We'll get back to you soon.");
            e.target.reset();
          }}
        >
          <div className="mb-4">
            <label htmlFor="name" className="block font-medium mb-1">
              Name
            </label>
            <input
              id="name"
              type="text"
              required
              placeholder="Your full name"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block font-medium mb-1">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              placeholder="Your email address"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="mobile" className="block font-medium mb-1">
              Mobile Number
            </label>
            <input
              id="mobile"
              type="tel"
              pattern="[0-9]{10}"
              required
              placeholder="10-digit mobile number"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block font-medium mb-1">
              Your Query
            </label>
            <textarea
              id="message"
              rows="5"
              required
              placeholder="Write your message here..."
              className="w-full border border-gray-300 rounded px-3 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
          >
            Send Query
          </button>
        </form>

        {/* Contact Info + Social + Map */}
        <div className="flex flex-col justify-between">
          {/* Contact Info */}
          <div className="mb-8 space-y-6">
            <div className="flex items-center gap-3 text-gray-700">
              <FaPhoneAlt className="text-blue-600 text-xl" />
              <span className="text-lg font-semibold">+91 98765 43210</span>
            </div>
            <div className="flex items-center gap-3 text-gray-700">
              <FaEnvelope className="text-blue-600 text-xl" />
              <span className="text-lg font-semibold">info@educationinstitute.com</span>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex gap-6 mb-10">
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 text-3xl hover:text-green-600 transition"
              aria-label="WhatsApp"
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://instagram.com/educationinstitute"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-600 text-3xl hover:text-pink-700 transition"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://linkedin.com/company/educationinstitute"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 text-3xl hover:text-blue-800 transition"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://youtube.com/educationinstitute"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-600 text-3xl hover:text-red-700 transition"
              aria-label="YouTube"
            >
              <FaYoutube />
            </a>
          </div>

          {/* Location iframe */}
          <div className="rounded overflow-hidden shadow-md">
            <iframe
              title="Institute Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.1214239755587!2d72.83706611485147!3d19.07598398705962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c63f13e3c7a7%3A0x48e4b31476b11b36!2sMumbai!5e0!3m2!1sen!2sin!4v1691697100000!5m2!1sen!2sin"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
