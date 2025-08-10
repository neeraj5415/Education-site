import img from "../assets/Images/testimonealsDP.png"
import React, { useState, useEffect } from "react";

const peopleData = [
  {
    id: 1,
    imageUrl: img,
    fullName: "John Doe",
    institute: "Harvard University",
    description: "John graduated with honors and is now working at XYZ Corp.Jane led multiple research projects and excelled in her field.Jane led multiple research projects and excelled in her field.Jane led multiple research projects and excelled in her field.",
  },
  {
    id: 2,
    imageUrl: img,
    fullName: "Jane Smith",
    institute: "Stanford University",
    description: "John graduated with honors and is now working at XYZ Corp.Jane led multiple research projects and excelled in her field.Jane led multiple research projects and excelled in her field.Jane led multiple research projects and excelled in her field.",

  },
  {
    id: 3,
    imageUrl: img,
    fullName: "Alice Johnson",
    institute: "MIT",
    description: "John graduated with honors and is now working at XYZ Corp.Jane led multiple research projects and excelled in her field.Jane led multiple research projects and excelled in her field.Jane led multiple research projects and excelled in her field.",
  },
  {
    id: 4,
    imageUrl: img,
    fullName: "Bob Brown",
    institute: "Oxford University",
    description: "John graduated with honors and is now working at XYZ Corp.Jane led multiple research projects and excelled in her field.Jane led multiple research projects and excelled in her field.Jane led multiple research projects and excelled in her field.",
  },
  {
    id: 5,
    imageUrl: img,
    fullName: "Clara Wilson",
    institute: "Cambridge University",
    description: "John graduated with honors and is now working at XYZ Corp.Jane led multiple research projects and excelled in her field.Jane led multiple research projects and excelled in her field.Jane led multiple research projects and excelled in her field.",
  },
  {
    id: 6,
    imageUrl: img,
    fullName: "David Lee",
    institute: "Yale University",
    description: "John graduated with honors and is now working at XYZ Corp.Jane led multiple research projects and excelled in her field.Jane led multiple research projects and excelled in her field.Jane led multiple research projects and excelled in her field.",
  },
];

function PersonCard({ person }) {
  return (
    <div className="bg-white rounded-lg p-6 m-2 w-full max-w-sm flex flex-col items-center
      border-2 border-gray-300 relative
      before:absolute before:top-0 before:left-0 before:w-full before:h-1 before:bg-gray-500
      after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-gray-500
      ">
      {/* Person Image */}
      <img
        src={person.imageUrl}
        alt={person.fullName}
        className="w-24 h-24 rounded-full object-cover mb-4"
      />
      {/* Full Name */}
      <h3 className="text-lg font-medium mb-1">{person.fullName}</h3>
      {/* Institute Name (bigger text) */}
      <h2 className="text-2xl font-bold mb-2">{person.institute}</h2>

      {/* Blue divider line */}
      <div className="w-16 border-b-4 border-blue-600 mb-4"></div>

      {/* Description Paragraph */}
      <p className="text-center text-gray-700">{person.description}</p>
    </div>
  );
}

export default function FastSlider() {
  const [startIndex, setStartIndex] = useState(0);
  const cardsToShow = 3;
  const totalCards = peopleData.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prev) => (prev + 1) % totalCards);
    }, 1500); // slide every 1.5 seconds

    return () => clearInterval(interval);
  }, [totalCards]);

  // Select cards to show, wrap around with modulo
  const visibleCards = [];
  for (let i = 0; i < cardsToShow; i++) {
    visibleCards.push(peopleData[(startIndex + i) % totalCards]);
  }

  return (
    <section className="p-6 max-w-7xl mx-auto overflow-hidden">
      {/* Main Heading */}
      <h2 className="text-3xl font-bold mb-8 text-center">MBA LITMUS | PCP | TESTIMONIALS</h2>

      {/* Cards slider */}
      <div className="flex transition-transform duration-500 ease-in-out">
        {visibleCards.map((person) => (
          <PersonCard key={person.id} person={person} />
        ))}
      </div>
    </section>
  );
}
