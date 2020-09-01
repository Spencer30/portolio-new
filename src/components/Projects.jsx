import React from "react";
import PageHeading from "./PageHeading";
import ProjectCard from "./ProjectCard";
import projectList from "./projectList";
import colors from './colors'


const Projects = props => {
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
        darkMode={props.darkMode}
        goToProject={props.goToProject}
        alt="project"
      />
    );
  };

  return (
    <div id="Projects" className="projectsSection" style={{backgroundColor: props.darkMode ? colors.dark : colors.light }}>
      <PageHeading heading="My Projects" darkMode={props.darkMode}/>
      <div style={{display:'flex', justifyContent:'center'}}>
      <div className="projectsContainer">
            {projectList.map(createCard)}
      </div>
      </div>
    </div>
  );
};

export default Projects;
