import './App.css'
import Contact from './sections/Contact/Contact';
import Hero from './sections/Hero/Hero';
import Currentlearning from './common/Currentlearning';

import Projects from './sections/Projects/Projects';
import Skills from './sections/Skills/Skills';
import Footer from './sections/Footer/Footer'
import Navbar from './sections/Navbar/Navbar';


function App(){
  console.log("test")
  return(
    <div>
      <Navbar/>
      <Hero/>
      <Currentlearning />
      <Projects/>
      <Skills/>
      <Contact/>
      <Footer/>
    </div>
  ) 
}

export default App
