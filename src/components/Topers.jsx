import logo from "../assets/Images/logo.png"
import img6 from "../assets/Images/marksheet.png"

import React, { useEffect, useState } from "react";

// Sample data array for 6 cards, structured like CongratsSection expects
const cardsData = [
  {
    id: 1,
    logoUrl: logo,
    name: "John Doe",
    paragraph: "CAT 24 - 99.49%ile",
    imageUrl: img6,
  },
  {
    id: 2,
    logoUrl: logo,
    name: "Jane Smith",
    paragraph: "CAT 24 - 99.51%ile",
    imageUrl: img6,
  },
  {
    id: 3,
    logoUrl: logo,
    name: "Alice Johnson",
    paragraph: "CAT 24 - 99.55%ile",
    imageUrl: img6,
  },
  {
    id: 4,
    logoUrl: logo,
    name: "Bob Brown",
    paragraph: "CAT 24 - 99.88%ile",
    imageUrl: img6,
  },
  {
    id: 5,
    logoUrl: logo,
    name: "Clara Wilson",
    paragraph: "CAT 24 - 99.39%ile",
    imageUrl: img6,
  },
  {
    id: 6,
    logoUrl: logo,
    name: "David Lee",
    paragraph: "CAT 24 - 99.29%ile",
    imageUrl: img6,
  },
];

// Single Congrats Card component
function CongratsCard({ cardData }) {
  return (
    <div className="bg-gray-300 rounded shadow-lg overflow-hidden flex flex-col h-[500px] m-6 w-full max-w-sm">
      {/* Logo */}
      <div className="p-4 flex justify-center">
        <img src={cardData.logoUrl} alt="Logo" className="h-12 object-contain" />
      </div>

      {/* Congratulations Heading */}
      <h3 className="text-xl font-semibold text-center mb-2">Congratulations</h3>

      {/* Small styled band with name */}
      <div className="relative mx-8 mb-4">
            <div
                className="bg-gray-200 text-gray-700 text-center text-sm font-medium py-1 rounded"
                style={{
                clipPath: 'polygon(10px 0%, 100% 0%, 100% 100%, 10px 100%, 0% 50%)',
                }}
            >
                {cardData.name}
            </div>
        </div>

      {/* Paragraph */}
      <p className="px-6 text-center text-gray-700 mb-4">{cardData.paragraph}</p>

      {/* Full width image */}
      <div className="flex-grow">
        <img
          src={cardData.imageUrl}
          alt={cardData.name}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

// The main slider component showing 3 cards sliding every 3 seconds
export default function CongratsSlider() {
  const [startIndex, setStartIndex] = useState(0);
  const cardsToShow = 3;
  const totalCards = cardsData.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prev) => (prev + cardsToShow) % totalCards);
    }, 3000);

    return () => clearInterval(interval);
  }, [cardsToShow, totalCards]);

  // Get the slice of cards to show, wrap around with modulo
  const visibleCards = [];
  for (let i = 0; i < cardsToShow; i++) {
    visibleCards.push(cardsData[(startIndex + i) % totalCards]);
  }

  return (
    <section className="p-6 max-w-7xl mx-auto overflow-hidden">
      <h2 className="text-3xl font-bold mb-8 text-center">MBA LITMUS | CAT 2024 TOPPERS</h2>

      <div className="flex transition-transform duration-700 ease-in-out">
        {visibleCards.map((card) => (
          <CongratsCard key={card.id} cardData={card} />
        ))}
      </div>
    </section>
  );
}
