import img from "../assets/Images/teamDP.png"
import React from "react";

const teachers = [
  {
    id: 1,
    imageUrl: img,
    name: "SUDHANSU R",
    institute: "IIM LUCKNOW | MBA TRAINER | 10 YRS | QA AND DIRL EXPERT",
  },
  {
    id: 2,
    imageUrl: img,
    name: "Jane Smith",
    institute: "IIM LUCKNOW | MBA TRAINER | 10 YRS | QA AND DIRL EXPERT",
  },
  {
    id: 3,
    imageUrl: img,
    name: "Alice Johnson",
    institute: "IIM LUCKNOW | MBA TRAINER | 10 YRS | QA AND DIRL EXPERT",
  },
];

export default function TeachersGallery() {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-indigo-100 p-10 max-w-7xl mx-auto rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Meet Our Teachers</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {teachers.map((teacher) => (
          <div key={teacher.id} className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg">
            {/* Full card image */}
            <img
              src={teacher.imageUrl}
              alt={teacher.name}
              className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Overlay on hover */}
            <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-center items-center text-white p-4">
              <h3 className="text-xl font-semibold">{teacher.name}</h3>
              <p className="text-md mt-2">{teacher.institute}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
