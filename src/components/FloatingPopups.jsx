import React, { useState, useEffect } from "react";
import { FaWhatsapp, FaArrowUp } from "react-icons/fa";

export default function FloatingPopups() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Track visibility of each popup separately
  const [showCoursePopup, setShowCoursePopup] = useState(true);
  const [showAchievementPopup, setShowAchievementPopup] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.pageYOffset > 300);
    };
    window.addEventListener("scroll", handleScroll);

    // Auto hide popups after 8 seconds
    const courseTimer = setTimeout(() => setShowCoursePopup(false), 8000);
    const achievementTimer = setTimeout(() => setShowAchievementPopup(false), 8000);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(courseTimer);
      clearTimeout(achievementTimer);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* WhatsApp Chat Button - RIGHT Bottom */}
      <a
        href="https://wa.me/919876543210" // replace with your WhatsApp number
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-lg flex items-center gap-2 z-50 transition"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp size={24} />
        <span className="hidden md:inline font-semibold">Chat with us</span>
      </a>

      {/* Left Bottom Popups Container */}
      <div className="fixed bottom-6 left-6 flex flex-col gap-4 z-50">
        {/* Popup 1 - New Course */}
        {showCoursePopup && (
          <div className="relative bg-blue-600 text-white rounded-lg shadow-lg p-4 max-w-xs w-72 cursor-pointer hover:bg-blue-700 transition">
            {/* Close button */}
            <button
              onClick={() => setShowCoursePopup(false)}
              aria-label="Close popup"
              className="absolute top-2 right-2 text-white hover:text-gray-300 text-xl font-bold"
            >
              &times;
            </button>

            <h4 className="font-bold text-lg mb-1">New Course Launched!</h4>
            <p className="text-sm mb-2">
              Check out our latest MBA preparation course with expert mentorship.
            </p>
            <a
              href="/courses/new"
              className="inline-block bg-white text-blue-600 font-semibold px-3 py-1 rounded hover:bg-gray-100 transition"
            >
              Explore Course
            </a>
          </div>
        )}

        {/* Popup 2 - New Achievement */}
        {showAchievementPopup && (
          <div className="relative bg-purple-700 text-white rounded-lg shadow-lg p-4 max-w-xs w-72 cursor-pointer hover:bg-purple-800 transition">
            {/* Close button */}
            <button
              onClick={() => setShowAchievementPopup(false)}
              aria-label="Close popup"
              className="absolute top-2 right-2 text-white hover:text-gray-300 text-xl font-bold"
            >
              &times;
            </button>

            <h4 className="font-bold text-lg mb-1">Our Latest Achievement</h4>
            <p className="text-sm mb-2">
              96% of our students cleared top 3 interviews successfully!
            </p>
            <a
              href="/achievements"
              className="inline-block bg-white text-purple-700 font-semibold px-3 py-1 rounded hover:bg-gray-100 transition"
            >
              See More
            </a>
          </div>
        )}
      </div>

      {/* Scroll to Top Button - RIGHT Bottom Above WhatsApp */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="fixed bottom-24 right-6 bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-900 transition z-50"
        >
          <FaArrowUp size={20} />
        </button>
      )}
    </>
  );
}
