import React from 'react';
import ProjectCard from '../../common/ProjectCard';
import Viberr from '../../assets/viberr.png';
import freshBurger from '../../assets/fresh-burger.png'
import hipsster from '../../assets/hipsster.png'
import Fitlift from '../../assets/fitlift.png'




function Projects() {
  return (
    <section id="Projects" className="flex flex-col items-center mt-10 text-center">
    <h1 className="text-3xl font-bold mb-6">Projects</h1>
    <div className="flex flex-wrap justify-center lg:justify-between w-full gap-6 lg:flex-row">
      <ProjectCard
        src={Viberr}
        link={'https://www.google.com/search?q=apple+store'}
        h3="Viberr"
        p="Streaming App"
      />
      <ProjectCard
        src={freshBurger}
        link={'https://www.google.com/search?q=apple+store'}
        h3="Fresh Burger"
        p="Number Restaurant"
      />
      <ProjectCard
        src={hipsster}
        link={'https://www.google.com/search?q=apple+store'}
        h3="Hipsster"
        p="Glasses Shop"
      />
      <ProjectCard
        src={Fitlift}
        link={'https://www.google.com/search?q=apple+store'}
        h3="Fitlift"
        p="Gym"
      />
    </div>
  </section>
  

  );
}

export default Projects;
