import img1 from '../assets/Images/course1.png';
import img2 from '../assets/Images/course2.png';
import img3 from '../assets/Images/course3.png';
import img4 from '../assets/Images/course4.png';
import logo from '../assets/Images/logo.png';

const dummyItems = [
  {
    id: 1,
    title: "CAT 25 & OMET DETAILED",
    pera: "CAT & OMETE Basics to Advanced Complete Coverage",
    imageUrl: img1,
    sideTextLines: [
      "Personalized One-on-One Mentorship",
      "Live Online Classes & Recorded Videos",
      "Classes per Week",
      "40 CAT Mocks 30 OMET Mocks",
      "24/7 Doubt Solving Support",
    ],
    redBarText: "Customized for your success - The Ultimate Personalized CAT Prep!",
    logoUrl: logo,
    logoText: "by Education Litmus",
    originalPrice: "24,999.00 ₹",
    offeredPrice: "19,999.00 ₹",
  },
  {
    id: 2,
    title: "GMAT Complete Course",
    pera: "Comprehensive GMAT preparation with practice tests",
    imageUrl: img2,
    sideTextLines: [
      "Experienced Tutors",
      "Interactive Sessions",
      "Practice Tests Included",
      "Flexible Timing",
      "24/7 Support",
    ],
    redBarText: "Achieve your target GMAT score with us!",
    logoUrl: logo,
    logoText: "by Education Litmus",
    originalPrice: "29,999.00 ₹",
    offeredPrice: "24,999.00 ₹",
  },
  {
    id: 3,
    title: "XAT Advanced Preparation",
    pera: "Get ready for XAT with expert guidance and materials",
    imageUrl: img3,
    sideTextLines: [
      "Extensive Study Material",
      "Weekly Practice Tests",
      "Mentor Support",
      "Flexible Schedule",
      "Interactive Doubt Sessions",
    ],
    redBarText: "Join now for guaranteed improvement!",
    logoUrl: logo,
    logoText: "by Education Litmus",
    originalPrice: "22,999.00 ₹",
    offeredPrice: "18,499.00 ₹",
  },
  {
    id: 4,
    title: "GRE Complete Preparation",
    pera: "All-in-one GRE prep for your study abroad goals",
    imageUrl: img4,
    sideTextLines: [
      "Live Classes",
      "Recorded Sessions",
      "Practice Quizzes",
      "24/7 Support",
      "Personal Mentorship",
    ],
    redBarText: "Your gateway to top universities!",
    logoUrl: logo,
    logoText: "by Education Litmus",
    originalPrice: "27,999.00 ₹",
    offeredPrice: "22,999.00 ₹",
  },
  {
    id: 5,
    title: "GRE Complete Preparation",
    pera: "All-in-one GRE prep for your study abroad goals",
    imageUrl: img3,
    sideTextLines: [
      "Live Classes",
      "Recorded Sessions",
      "Practice Quizzes",
      "24/7 Support",
      "Personal Mentorship",
    ],
    redBarText: "Your gateway to top universities!",
    logoUrl: logo,
    logoText: "by Education Litmus",
    originalPrice: "27,999.00 ₹",
    offeredPrice: "22,999.00 ₹",
  },
  {
    id: 6,
    title: "GRE Complete Preparation",
    pera: "All-in-one GRE prep for your study abroad goals",
    imageUrl: img1,
    sideTextLines: [
      "Live Classes",
      "Recorded Sessions",
      "Practice Quizzes",
      "24/7 Support",
      "Personal Mentorship",
    ],
    redBarText: "Your gateway to top universities!",
    logoUrl: logo,
    logoText: "by Education Litmus",
    originalPrice: "27,999.00 ₹",
    offeredPrice: "22,999.00 ₹",
  },
];

function ProductCard({
  title,
  pera,
  imageUrl,
  sideTextLines,
  redBarText,
  logoUrl,
  logoText,
  originalPrice,
  offeredPrice,
}) {
  return (
    <div className="bg-gray-300 p-6 rounded shadow max-w-sm w-full">
      {/* 1. Top Title */}
      <h4 className="font-semibold mb-2 text-lg">{title}</h4>
      <p className="text-sm text-gray-700 mb-4">{pera}</p>

      {/* 2. Image + side text */}
      <div className="flex gap-4 mb-4">
        <img
          src={imageUrl}
          alt={title}
          className="w-32 h-32 object-cover rounded flex-shrink-0"
        />
        <div className="flex flex-col justify-between">
          {sideTextLines.map((line, idx) => (
            <p key={idx} className="text-sm text-gray-700 leading-tight">
              {line}
            </p>
          ))}
        </div>
      </div>

      {/* 3. Red bar with paragraph */}
      <div className="bg-red-600 text-white px-2 py-1 rounded mb-4">
        <p className="text-xs">{redBarText}</p>
      </div>

      {/* 4. Title again */}
      <h3 className="font-semibold mb-3 text-lg">{title}</h3>

      {/* 5. Logo + text side by side */}
      <div className="flex items-center gap-3 mb-4">
        <img src={logoUrl} alt="Logo" className="w-8 h-8 object-contain" />
        <p className="text-gray-800 text-sm">{logoText}</p>
      </div>

      {/* 6. Price + Add to Cart button */}
      <div className="flex items-center justify-between">
        <div className="text-gray-600 text-sm">
          <span className="line-through mr-2">{originalPrice}</span>
          <span className="text-green-600 font-semibold">{offeredPrice}</span>
        </div>
        <button className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700 transition">
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default function Courses() {
  return (
    <div className="p-6 bg-gray-50 min-h-screen flex flex-col items-center space-y-8">
      {/* 1. Main Heading */}
      <div>
        <h2 className="bg-red-500 text-white text-2xl font-bold px-6 py-3 rounded">
          OUR MOST POPULAR COURSES
        </h2>
      </div>

      {/* 2. Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl w-full">
        {dummyItems.map((item) => (
          <ProductCard key={item.id} {...item} />
        ))}
      </div>

      {/* 3. Button */}
      <div>
        <button className="bg-red-600 text-black px-6 py-3 rounded hover:bg-white transition">
          Explore More Courses
        </button>
      </div>
    </div>
  );
}

