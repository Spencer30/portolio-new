import React from "react";
import Nav from "./Nav";
import { useState } from "react";

const Home = (props) => {
  const [loaded, setLoaded] = useState(false)
  return (
    <div
      style={{
        position: "relative",
        // backgroundImage: `url(${require("../images/waterfallReduced.jpg")})`,
      }}
      className="bgImage"
    >
      <img alt="waterfall" src={require(`../images/waterfallReduced1${!loaded ? 'Loading': ''}.jpg`)} style={styles.bgImage} onLoad={() => setLoaded(true)}/>
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
  bgImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
  }
};

export default Home;
