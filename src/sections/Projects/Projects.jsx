import React from 'react';
import ProjectCard from '../../common/ProjectCard';
import Weather from '../../assets/weather.png';
import Blog from '../../assets/blog.png'
import bulk from '../../assets/bulk mail.png'
import Fitlift from '../../assets/.png'




function Projects() {
  return (
    <section id="Projects" className="flex flex-col items-center mt-10 text-center">
    <h1 className="text-3xl font-bold mb-6">Projects</h1>
    <div className="flex flex-wrap justify-center lg:justify-between w-full gap-6 lg:flex-row">
      <ProjectCard
        src={Weather}
        link={'https://www.google.com/search?q=apple+store'}
        h3="Viberr"
        p="Weather App"
      />
      <ProjectCard
        src={Blog}
        link={'https://www.google.com/search?q=apple+store'}
        h3="Fresh Burger"
        p="Blog App"
      />
      <ProjectCard
        src={bulk}
        link={'https://www.google.com/search?q=apple+store'}
        h3="Bulk Mail"
        p="Bulk Mail App"
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
