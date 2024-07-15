import React from 'react';

function ProjectCard({ src, link, h3, p }) {
  return (
    <div className="flex justify-center items-center mt-10">
      <a
        href={link}
        className="text-center transition-transform duration-200 ease-in-out hover:scale-105"
      >
        <img
          className="max-w-[250px] mx-auto border-2 solid bg-slate-50"
          src={src}
          alt="Viberr Logo"
        />
        <h3>{h3}</h3>
        <p>{p}</p>
      </a>
    </div>
  );
}

export default ProjectCard;
