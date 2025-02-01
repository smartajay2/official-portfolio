import React from 'react';
import ProjectCard from '../../common/ProjectCard';
import Weather from '../../assets/weather app.png';
import school from '../../assets/school.png'; 
import Blog from '../../assets/blog.png';
import bulk from '../../assets/mailapp.png'; // If the file is named bulk-mail.png




function Projects() {
  return (
    <section id="Projects" className="flex flex-col items-center mt-10 text-center">
    <h1 className="text-3xl font-bold mb-6">Mern Stack Projects</h1>
    <div className="flex flex-wrap justify-center lg:justify-between w-full gap-6 lg:flex-row">
  <ProjectCard
    src={Weather}
    link={'https://weatherapp-beryl-three.vercel.app/'}
    h3="Weather App"
    p="Real-time weather updates"
  />
  <ProjectCard
    src={Blog}
    link={'https://github.com/smartajay2/Blogsite.git'}
    h3="Blog App"
    p="platform for sharing blogs"
  />
  <ProjectCard
    src={bulk}
    link={'https://github.com/smartajay2/bulkmail.git'}
    h3="Bulk Mail App"
    p="Efficiently send bulk emails"
  />
  <ProjectCard
    src={school}
    link={'https://github.com/smartajay2/schoolapp.git'}
    h3="Class Projects"
    p="projects and assignments"
  />
</div>
  </section>
  

  );
}

export default Projects;
