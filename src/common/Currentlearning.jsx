import { useEffect, useState } from "react";
import { BrainCircuit } from "lucide-react";

const OngoingStudies = () => {
  const studies = [
    { name: "Data Science with Python", progress: 70 },
    { name: "Machine Learning", progress: 60 },
    { name: "Deep Learning", progress: 50 },
    { name: "NumPy & Pandas", progress: 75 },
    { name: "Statistics", progress: 65 },
    { name: "SQL", progress: 80 },
    { name: "Power BI", progress: 70 },
    { name: "Excel", progress: 90 },
    { name: "Tableau", progress: 60 },
  ];

  // State to store animated progress
  const [animatedProgress, setAnimatedProgress] = useState(
    Array(studies.length).fill(0)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimatedProgress(prev =>
        prev.map((value, i) => {
          if (value < studies[i].progress) {
            return value + 1; // increment by 1% at a time
          }
          return value;
        })
      );
    }, 20); // adjust speed here (ms)

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-gradient-to-br from-gray-50 to-gray-200 text-black py-10 px-6 md:px-12 rounded-2xl shadow-lg mx-6 md:mx-14 my-10">
      <h2 className="flex items-center justify-center gap-3 text-3xl md:text-4xl font-bold text-gray-800 mb-8">
        <BrainCircuit className="w-8 h-8 text-purple-600" />
        Mastering Data Science
      </h2>

      <ul className="space-y-6">
        {studies.map((item, index) => (
          <li key={index}>
            <div className="flex justify-between mb-1 text-lg font-medium text-gray-700">
              <span>{item.name}</span>
              <span>{animatedProgress[index]}%</span>
            </div>
            <div className="w-full bg-gray-300 rounded-full h-4">
              <div
                className="bg-blue-500 h-4 rounded-full transition-all duration-500"
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
