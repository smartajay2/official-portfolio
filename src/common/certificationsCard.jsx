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
      className={`certifications-section ${theme === "light" ? "bg-white text-black" : "bg-black text-white"}`}
    >
      <h2>Certifications</h2>
      <ul>
        {certifications.map((cert, idx) => (
          <li
            key={idx}
            className={visibleCerts[idx] ? "opacity-100 translate-x-0" : "opacity-0 translate-x-5"}
          >
            • {cert}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Certifications;
