import React from "react";
import PageHeading from "./PageHeading";
import ProjectCard from "./ProjectCard";
import projectList from "./projectList";

const Projects = () => {
  const createCard = (card) => {
    return (
      <ProjectCard
        key={card.id}
        id={card.id}
        title={card.title}
        summary={card.summary}
        img={card.img}
        website={card.website}
        gitHub={card.gitHub}
        public={card.public}
        techStack={card.techStack}
        alt="project"
      />
    );
  };

  return (
    <div id="Projects" className="projectsSection">
      <PageHeading heading="My Projects" />
      <div style={{display:'flex', justifyContent:'center'}}>
      <div className="projectsContainer">
            {projectList.map(createCard)}
      </div>
      </div>
    </div>
  );
};

export default Projects;
