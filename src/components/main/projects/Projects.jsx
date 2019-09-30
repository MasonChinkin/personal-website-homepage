import React from "react";
import Project from "./Project";

const Projects = () => {
  return (
    <section className='projects'>
      <Project
        img='../../../assets/images/redditvisualizations.png'
        title='Reddit Visualizations'
        description='ABCs'
        liveLink='google.com'
        githubLink='bbc.com'
      />
    </section>
  );
};

export default Projects;
