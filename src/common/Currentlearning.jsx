import { useEffect, useState } from "react";
import { BrainCircuit } from "lucide-react";

const OngoingStudies = () => {
  const studies = [
    { name: "Data Science with Python", progress: 75 },
    { name: "Machine Learning", progress: 60 },
    { name: "Deep Learning", progress: 30 },
    { name: "NumPy & Pandas", progress: 75 },
    { name: "Statistics", progress: 65 },
    { name: "SQL", progress: 75 },
    { name: "Power BI", progress: 70 },
    { name: "Excel", progress: 90 },
    { name: "Tableau", progress: 40 },
  ];

  const [animatedProgress, setAnimatedProgress] = useState(
    Array(studies.length).fill(0)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimatedProgress(prev =>
        prev.map((value, i) =>
          value < studies[i].progress ? value + 1 : value
        )
      );
    }, 20);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="
      bg-gradient-to-br from-gray-50 to-gray-200 
      text-black 
      py-8 px-4 
      xs:px-5 
      sm:px-6 
      md:px-10 
      lg:px-14 
      rounded-2xl shadow-lg 
      mx-3 xs:mx-5 sm:mx-8 md:mx-14 
      my-8 sm:my-10
    ">
      <h2 className="
        flex items-center justify-center gap-3 
        text-2xl xs:text-3xl sm:text-3xl md:text-4xl 
        font-bold text-gray-800 mb-6 sm:mb-8
        text-center
      ">
        <BrainCircuit className="w-7 h-7 sm:w-8 sm:h-8 text-purple-600" />
        Mastering Data Science
      </h2>

      <ul className="space-y-5 sm:space-y-6">
        {studies.map((item, index) => (
          <li key={index}>
            <div className="
              flex justify-between 
              mb-1 
              text-sm xs:text-base sm:text-lg 
              font-medium text-gray-700
            ">
              <span>{item.name}</span>
              <span>{animatedProgress[index]}%</span>
            </div>

            <div className="w-full bg-gray-300 rounded-full h-3 sm:h-4">
              <div
                className="
                  bg-blue-500 
                  h-3 sm:h-4 
                  rounded-full 
                  transition-all duration-500
                "
                style={{ width: `${animatedProgress[index]}%` }}
              ></div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default OngoingStudies;
