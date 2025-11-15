import { useEffect, useState } from "react";
import { useTheme } from './TemeContext';

const certifications = [
  "CSCMP Supply Chain Foundations: The Essentials – CSCMP (2025)",
  "Analysis & Reporting for Supply Chain Management",
  "SQL Developer Certificate – Intellipaat",
  "Data Science – OdinSchool Data Science Bootcamp",
  "MERN Stack Development – Error Makes Clever"
];

const Certifications = () => {
  const { theme } = useTheme();
  const [visibleCerts, setVisibleCerts] = useState(
    Array(certifications.length).fill(false)
  );

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setVisibleCerts(prev => {
        const newArr = [...prev];
        newArr[i] = true;
        return newArr;
      });
      i++;
      if (i >= certifications.length) clearInterval(interval);
    }, 300);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className={`w-full py-10 md:py-16 ${
        theme === "light" ? "bg-white text-black" : "bg-black text-white"
      }`}
    >
      <div className="max-w-3xl mx-auto px-4 md:px-6">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
          Coursework
        </h2>

        <ul className="space-y-4">
          {certifications.map((cert, idx) => (
            <li
              key={idx}
              className={`transition-all duration-700 ease-out text-base md:text-lg
                ${visibleCerts[idx]
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-5"
                }
              `}
            >
              • {cert}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Certifications;
