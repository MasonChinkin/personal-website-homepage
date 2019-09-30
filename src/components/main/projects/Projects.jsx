import React from "react";
import ProjectCard from "./ProjectCard";
import { d3Projects, otherProjects } from "./projectList";

const Projects = () => {
  const importAll = r => {
    let images = {};
    r.keys().map(item => (images[item.replace("./", "")] = r(item)));
    return images;
  };

  const images = importAll(
    require.context("../../../assets/images", false, /\.(png|jpe?g|svg)$/)
  );

  const otherCards = Object.values(otherProjects).map((project, i) => {
    return (
      <ProjectCard
        img={images[project.img]}
        title={project.title}
        description={project.description}
        liveLink={project.liveLink}
        githubLink={project.githubLink}
        key={i}
      />
    );
  });

  const d3Cards = Object.values(d3Projects).map((project, i) => {
    return (
      <ProjectCard
        img={images[project.img]}
        title={project.title}
        description={project.description}
        liveLink={project.liveLink}
        githubLink={project.githubLink}
        key={i}
      />
    );
  });

  return (
    <section className='projects'>
      <h1>D3.js Projects</h1>
      <ul className='d3-projects'>{d3Cards}</ul>
      <h1>Other Projects</h1>
      <ul className='other-projects'>{otherCards}</ul>
    </section>
  );
};

export default Projects;
