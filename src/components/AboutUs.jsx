import img from "../assets/Images/course1.png"
import React from "react";

const teamMembers = [
  {
    id: 1,
    name: "John Doe",
    institute: "Harvard University",
    imageUrl: img,
  },
  {
    id: 2,
    name: "Jane Smith",
    institute: "Stanford University",
    imageUrl: img,
  },
  {
    id: 3,
    name: "Alice Johnson",
    institute: "MIT",
    imageUrl: img,
  },
];

export default function About() {
  return (
    <main className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 max-w-4xl mx-auto">
          Empowering Students for a Brighter Future
        </h1>
        <p className="text-lg max-w-3xl mx-auto">
          Our mission is to provide top-quality education and personalized training that helps students unlock their potential and excel in their careers.
        </p>
      </section>

      {/* About Us Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">About Our Institute</h2>
        <p className="text-gray-700 text-center max-w-4xl mx-auto leading-relaxed mb-8">
          We offer a range of carefully curated courses designed to build knowledge, skills, and confidence.  
          With personalized mentorship, doubt-solving sessions, and hands-on training, we prepare students to thrive in competitive exams and the job market.
        </p>
        <div className="flex flex-col md:flex-row gap-8 justify-center">
          <div className="bg-white shadow rounded p-6 flex-1">
            <h3 className="text-xl font-semibold mb-3">Personalized Mentorship</h3>
            <p className="text-gray-600">
              One-on-one guidance to address individual student needs and keep them motivated throughout the journey.
            </p>
          </div>
          <div className="bg-white shadow rounded p-6 flex-1">
            <h3 className="text-xl font-semibold mb-3">Comprehensive Courses</h3>
            <p className="text-gray-600">
              Courses covering everything from fundamentals to advanced topics, including mock tests and revision workshops.
            </p>
          </div>
          <div className="bg-white shadow rounded p-6 flex-1">
            <h3 className="text-xl font-semibold mb-3">Placement Assistance</h3>
            <p className="text-gray-600">
              Dedicated support with resume building, interview preparation, and internship & placement opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-blue-50 to-indigo-100">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">Meet Our Expert Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg"
            >
              <img
                src={member.imageUrl}
                alt={member.name}
                className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-center items-center text-white p-4">
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-md mt-2">{member.institute}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-16 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Our Mission</h2>
        <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto">
          To empower students with knowledge, confidence, and skills necessary to succeed in their academic and professional lives.  
          We strive to foster a supportive learning environment that nurtures talent and promotes lifelong learning.
        </p>
      </section>
    </main>
  );
}
