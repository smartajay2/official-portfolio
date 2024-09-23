import myImg from '../../assets/my-photo.jpeg'
import sun from '../../assets/sun.svg'
import moon from '../../assets/moon.svg'
import twitterlight from '../../assets/twitter-light.svg'
import twitterdark from '../../assets/twitter-dark.svg'
import githublight from '../../assets/github-light.svg'
import githubdark from '../../assets/github-dark.svg'
import linkedinlight from '../../assets/linkedin-light.svg'
import linkedindark from '../../assets/linkedin-dark.svg'


import { useTheme } from '../../common/TemeContext'


function Hero() {

  const { theme, toggleTheme } = useTheme();
  const themeIcoon = theme === 'light' ? sun : moon;
  const twitterIcon = theme === 'light' ? twitterlight : twitterdark;
  const githubIcon = theme === 'light' ? githublight : githubdark;
  const LinkedinIcon = theme === 'light' ? linkedinlight : linkedindark;



  return (
    <section id="hero" className="h-screen flex flex-col md:flex-row justify-center items-center gap-10 text-center min-h-[500px] m-3">
    <div className="relative md:w-1/2 flex justify-center md:justify-end">
      <img
        className="w-full max-w-[250px] h-auto rounded-full shadow-md border-4 border-white ml-0 mt-11"
        src={myImg}
        alt="Profile of Ajay Jestin"
      />
      <img
        className="h-8 w-8 cursor-pointer absolute top-0 right-0 mt-5"
        src={themeIcoon}
        alt="Color mode icon"
        onClick={toggleTheme}
      />
    </div>
  
    <div className="font-bold md:w-1/2 text-center md:text-left mt-6 md:ml-10 md:mt-20">
      <h1 className="text-3xl">
        Ajay<br />Jestin
      </h1>
      <h2 className="text-xl mt-2">MERN Stack Developer</h2>
      <div className="inline-flex items-center justify-start gap-4 mt-4">
        <a href="https://x.com/ajayjestin1107" target="_blank" rel="noopener noreferrer">
          <img src={twitterIcon} alt="Twitter icon" className="h-10 w-10" />
        </a>
        <a href="https://github.com/smartajay2" target="_blank" rel="noopener noreferrer">
          <img src={githubIcon} alt="GitHub icon" className="h-10 w-10" />
        </a>
        <a href="www.linkedin.com/in/ajay-jestin-5a50b2215" target="_blank" rel="noopener noreferrer">
          <img src={LinkedinIcon} alt="LinkedIn icon" className="h-10 w-10" />
        </a>
      </div>
      <p className="max-w-[24ch] mt-4">
        With a passion for developing modern React web apps for commercial businesses.
      </p>
      <a href={""} download>
        <button className="bg-white transition-transform transform hover:scale-105 font-bold py-2 px-4 rounded-lg border-2 border-black mt-4 shadow-md">
          Resume
        </button>
      </a>
    </div>
  </section>
  

  )
}

export default Hero