import React from "react";
import Nav from "./Nav";

const Home = (props) => {
  return (
    <div
      style={{
        position: "relative",
        backgroundImage: `url(${require("../images/waterfallReduced.jpg")})`,
      }}
      className="bgImage"
    >
      <Nav darkMode={props.darkMode} onDarkChange={props.onDarkChange} />
        <div className="homeTextContainer" style={styles.textContainer}>
          <h1 className="mainTitle">
            Hi! I'm{" "}
            <span style={{ color: props.darkMode ? "#b43088" : "white" }}>
              Spencer Lyons
            </span>
          </h1>
          <h3 className="subTitle">A Software Devloper</h3>
        </div>
      <div style={{...styles.blackCover, opacity:props.darkMode ? '60%' : '25%'}}>
      </div>
    </div>
  );
};

const styles = {
  textContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    display: "flex",
    flexDirection: "column",
    width: "100%",
    zIndex: 5,
  },
  blackCover: {
    backgroundColor: "black",
    width: "100%",
    height: "100%",
    opacity: '75%',
    zIndex: 0,
  },
};

export default Home;
