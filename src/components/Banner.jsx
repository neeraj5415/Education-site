export default function Banner() {
  return (
    <div className="text-white py-10 px-6" style={{ backgroundColor: "#151719" }}>
      <div className="max-w-7xl mx-auto h-130 space-y-10 flex flex-col justify-center items-center">

       
        <div className="text-center space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold uppercase">
            TURN YOUR MBA ASPIRATIONS INTO REALITY!
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Personalized One-on-One Mentorship & a Structured Doubt Solving Mechanism to Help you Reach your Full Potential!
          </p>
        </div>

        
        <div className="flex flex-wrap justify-center items-center gap-x-2 text-sm md:text-base font-medium">
          {["CAT", "OMETS", "GMAT", "GDPI", "Placement Preparation", "Pre MBA Certifications", "CV Building & Interview preparation"].map((item, idx, arr) => (
            <span key={item} className="flex items-center">
              <a href="#" className="hover:underline">{item}</a>
              {idx !== arr.length - 1 && <span className="mx-2 text-white">|</span>}
            </span>
          ))}
        </div>

        
        <div className="flex flex-wrap justify-between max-w-5xl mx-auto gap-6">
          <div className="flex flex-col items-center text-center flex-1 min-w-[140px]">
            <h4 className="text-2xl font-semibold">2000+</h4>
            <p className="text-sm">Personalized mentorship hours in last 2 years</p>
          </div>
          <div className="flex flex-col items-center text-center flex-1 min-w-[140px]">
            <h4 className="text-2xl font-semibold">4000+</h4>
            <p className="text-sm">MBA Admissions in the last 5 years</p>
          </div>
          <div className="flex flex-col items-center text-center flex-1 min-w-[140px]">
            <h4 className="text-2xl font-semibold">4.8/5</h4>
            <p className="text-sm">Course rating by 1000+ students</p>
          </div>
          <div className="flex flex-col items-center text-center flex-1 min-w-[140px]">
            <h4 className="text-2xl font-semibold">50+</h4>
            <p className="text-sm">Committed mentor network from top B- Schools</p>
          </div>
          <div className="flex flex-col items-center text-center flex-1 min-w-[140px]">
            <h4 className="text-2xl font-semibold">96%</h4>
            <p className="text-sm">Of our students converted at least 1 of their top 3 interviews</p>
          </div>
        </div>
      </div>
    </div>
  );
}
