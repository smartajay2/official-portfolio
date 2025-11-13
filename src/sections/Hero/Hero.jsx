import { useState, useEffect } from "react";
import mine from '../../assets/p-1.jpg';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import twitterlight from '../../assets/twitter-light.svg';
import twitterdark from '../../assets/twitter-dark.svg';
import githublight from '../../assets/github-light.svg';
import githubdark from '../../assets/github-dark.svg';
import linkedinlight from '../../assets/linkedin-light.svg';
import linkedindark from '../../assets/linkedin-dark.svg';
import { useTheme } from '../../common/TemeContext';

// AnimatedName Component
function AnimatedName() {
  const nameLines = ["Ajay", "Jestin"];
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setShow(true), 300);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <h1 className="text-3xl md:text-4xl font-bold leading-snug">
      {nameLines.map((line, lineIndex) => (
        <div key={lineIndex}>
          {line.split("").map((char, charIndex) => (
            <span
              key={charIndex}
              className="inline-block opacity-0 transform translate-y-4"
              style={{
                transition: `all 0.4s ease-out ${show ? charIndex * 0.1 + lineIndex * 0.5 : 0}s`,
                opacity: show ? 1 : 0,
                transform: show ? "translateY(0)" : "translateY(16px)",
              }}
            >
              {char}
            </span>
          ))}
        </div>
      ))}
    </h1>
  );
}

// Hero Component
function Hero() {
  const { theme, toggleTheme } = useTheme();
  const themeIcon = theme === 'light' ? sun : moon;
  const twitterIcon = theme === 'light' ? twitterlight : twitterdark;
  const githubIcon = theme === 'light' ? githublight : githubdark;
  const linkedinIcon = theme === 'light' ? linkedinlight : linkedindark;

  const [showContent, setShowContent] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => setShowContent(true), 500);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section
      id="hero"
      className="flex flex-col md:flex-row justify-center items-center gap-8 text-center min-h-[550px] py-10 px-4 md:px-12 lg:px-16 m-3 mb-16"
    >
      {/* Profile Image */}
      <div className={`relative md:w-1/2 flex justify-center md:justify-end mb-6 md:mb-0 transition-all duration-1000 ease-out ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <img
          className="w-full max-w-[250px] h-auto rounded-full shadow-md border-4 border-white"
          src={mine}
          alt="Profile of Ajay Jestin"
        />
        <img
          className="h-8 w-8 cursor-pointer absolute top-0 right-0 mt-5"
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>

      {/* Intro Text */}
      <div className={`font-bold md:w-1/2 text-center md:text-left mt-6 md:ml-10 md:mt-20 transition-all duration-1000 ease-out ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <AnimatedName />

         <p className={`max-w-[28ch] mt-5 mx-auto md:mx-0 ${theme === 'light' ? 'text-gray-700' : 'text-white'}`}>
          Hi, I'm Ajay Jestin, an MBA graduate and HRIS Officer with a passion for leveraging data to improve HR processes and business decisions.
          </p>

          <p className={`max-w-[28ch] mt-4 mx-auto md:mx-0 ${theme === 'light' ? 'text-gray-700' : 'text-white'}`}>
          Exploring Data Science and Analytics — Python, Machine Learning, and HR analytics to create meaningful insights and smarter solutions.
           </p>

        {/* Social Links */}
        <div className="inline-flex items-center justify-center md:justify-start gap-4 mt-6">
          <a href="https://x.com/ajayjestin1107" target="_blank" rel="noopener noreferrer">
            <img src={twitterIcon} alt="Twitter icon" className="h-10 w-10 hover:scale-110 transition-transform" />
          </a>
          <a href="https://github.com/smartajay2" target="_blank" rel="noopener noreferrer">
            <img src={githubIcon} alt="GitHub icon" className="h-10 w-10 hover:scale-110 transition-transform" />
          </a>
          <a href="https://www.linkedin.com/in/ajay-jestin-5a50b2215/" target="_blank" rel="noopener noreferrer">
            <img src={linkedinIcon} alt="LinkedIn icon" className="h-10 w-10 hover:scale-110 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
