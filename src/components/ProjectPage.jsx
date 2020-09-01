import React, { useEffect } from "react";
import Jumbotron from "./ProjectPageComponents/Jumbotron";
import InfoItems from "./ProjectPageComponents/InfoItems";
import PictureViewer from "./ProjectPageComponents/PictureViewer";
import colors from "./colors";
import projectList from "./projectList";
import ProjectCard from "./ProjectCard";
import { useState } from "react";

const ProjectPage = (props) => {
  const [selectedProject, setSelectedProject] = useState('')  
  const { display, projectId } = props;
  useEffect(() => {
    window.scrollTo(0, 0);
    const project = projectList.filter(pro => pro.id === Number(projectId));
    console.log(project)
    setSelectedProject(project[0])
  }, [display, projectId]);
  const styles = {
    page: {
      width: "100%",
      height: "100%",
      color: props.darkMode ? colors.light : colors.dark,
      backgroundColor: props.darkMode ? colors.dark : colors.light,
    },
    sectionContainer: {
      width: "100%",
      height: "100%",
      // padding: '50px 25px',
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    contentContainer: {
      width: "55%",
      paddingTop: 50,
    },
    textInfoContainer: {
      margin: "45px 0",
    },
    projectsContainer:{ 
        width: '100%',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent:'space-evenly'
    },
    paragraph: {
        fontSize: 18,
        letterSpacing:.5,
        lineHeight:1.8
    }
  };
  if(!selectedProject){
      return <div>Loading...</div>
  }
  return (
    <div style={styles.page}>
      <Jumbotron onClick={props.closeProject} darkMode={props.darkMode} title={selectedProject.title} coverImg={selectedProject.coverImage}/>
      <div style={styles.sectionContainer}>
        <div style={styles.contentContainer}>
          <div style={styles.textInfoContainer}>
            <h2>Overview</h2>
            <p style={styles.paragraph}>
            {selectedProject.overview}
            </p>
          </div>
          <InfoItems tech={selectedProject.techStack} type={selectedProject.type} code={selectedProject.gitHub} site={selectedProject.website} public={selectedProject.public} darkMode={props.darkMode}/>
          <PictureViewer photos={selectedProject.photos}/>
        </div>

        <div style={styles.contentContainer}>
          <div style={styles.textInfoContainer}>
            <h2>Web Stack Explanation</h2>
            <p style={styles.paragraph}>
                {selectedProject.stackReasons}
            </p>
          </div>
          <div style={styles.textInfoContainer}>
            <h2>Challenges</h2>
            <p style={styles.paragraph}>
                {selectedProject.challenges}
            </p>
          </div>
          <div style={styles.textInfoContainer}>
            <h2>Other Projects:</h2>
            <div style={styles.projectsContainer}>{projectList.filter(pro => pro.id !== selectedProject.id).map((card) => (
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
            ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
