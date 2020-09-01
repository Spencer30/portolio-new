import React, { useEffect } from "react";
import Jumbotron from "./ProjectPageComponents/Jumbotron";
import InfoItems from "./ProjectPageComponents/InfoItems";
import PictureViewer from "./ProjectPageComponents/PictureViewer";
import colors from "./colors";

const ProjectPage = (props) => {
const {display} = props
  useEffect(() => {
    console.log('firing')
    window.scrollTo(0, 0)
  }, [display])
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
      width: "60%",
      paddingTop: 50,
    },
    textInfoContainer: {
        margin: '45px 0'
    }
  };
  return (
    <div style={styles.page}>
      <Jumbotron onClick={props.closeProject}/>
      <div style={styles.sectionContainer}>
        <div style={styles.contentContainer}>
          <div style={styles.textInfoContainer}>
            <h3>Overview</h3>
            <p>
              Keep track of your bowling games and stats. You can select your
              ball, alley, and type of bowling for each game. Track your
              progress and use stats to improve your game.Keep track of your
              bowling games and stats. You can select your ball, alley, and type
              of bowling for each game. Track your progress and use stats to
              improve your game.Keep track of your bowling games and stats. You
              can select your ball, alley, and type of bowling for each game.
              Track your progress and use stats to improve your game.
            </p>
          </div>
          <InfoItems />
          <PictureViewer />
        </div>

        <div style={styles.contentContainer}>
        <div style={styles.textInfoContainer}>
          <h3>Web Stack Explanation</h3>
          <p>
            Keep track of your bowling games and stats. You can select your
            ball, alley, and type of bowling for each game. Track your progress
            and use stats to improve your game.Keep track of your bowling games
            and stats. You can select your ball, alley, and type of bowling for
            each game. Track your progress and use stats to improve your
            game.Keep track of your bowling games and stats. You can select your
            ball, alley, and type of bowling for each game. Track your progress
            and use stats to improve your game.
          </p>
          </div>
          <div style={styles.textInfoContainer}>
          <h3>Challenges</h3>
          <p>
            Keep track of your bowling games and stats. You can select your
            ball, alley, and type of bowling for each game. Track your progress
            and use stats to improve your game.Keep track of your bowling games
            and stats. You can select your ball, alley, and type of bowling for
            each game. Track your progress and use stats to improve your
            game.Keep track of your bowling games and stats. You can select your
            ball, alley, and type of bowling for each game. Track your progress
            and use stats to improve your game.
          </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
