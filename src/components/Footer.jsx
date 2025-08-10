import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-white">Home</a></li>
            <li><a href="/about" className="hover:text-white">About Us</a></li>
            <li><a href="/courses" className="hover:text-white">Courses</a></li>
            <li><a href="/contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Career */}
        <div>
          <h3 className="text-white font-semibold mb-4">Career</h3>
          <ul className="space-y-2">
            <li><a href="/careers/apply" className="hover:text-white">Apply for Job</a></li>
            <li><a href="/careers/internships" className="hover:text-white">Internships</a></li>
            <li><a href="/careers/benefits" className="hover:text-white">Employee Benefits</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-white font-semibold mb-4">Contact Info</h3>
          <p className="flex items-center gap-2">
            <FaPhoneAlt /> <span>+91 98765 43210</span>
          </p>
          <p className="flex items-center gap-2 mt-2">
            <FaEnvelope /> <span>info@educationinstitute.com</span>
          </p>
          <div className="flex gap-4 mt-4">
            <a
              href="https://facebook.com/educationinstitute"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-white"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="https://twitter.com/educationinstitute"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="hover:text-white"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="https://linkedin.com/company/educationinstitute"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-white"
            >
              <FaLinkedinIn size={20} />
            </a>
            <a
              href="https://instagram.com/educationinstitute"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-white"
            >
              <FaInstagram size={20} />
            </a>
          </div>
        </div>

        {/* Newsletter or About */}
        <div>
          <h3 className="text-white font-semibold mb-4">About Us</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Education Institute is committed to providing quality education and mentorship to help students achieve their academic and career goals.
          </p>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Education Institute. All rights reserved.
      </div>
    </footer>
  );
}
