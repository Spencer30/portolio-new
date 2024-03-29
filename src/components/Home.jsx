import React from "react";
import Nav from "./Nav";
import { useState } from "react";
import colors from "./colors";

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
      <img alt="night sky" src={require(
        props.darkMode ? loaded ? '../images/darkSky.jpg' : '../images/darkSkyLoading.jpg' : loaded ? '../images/beach.jpg' : '../images/beach-sm.jpg'
        )} style={styles.bgImage} onLoad={() => setLoaded(true)}/>

      <Nav darkMode={props.darkMode} onDarkChange={props.onDarkChange} />
        <div className="homeTextContainer" style={styles.textContainer}>
          <h1 className="mainTitle">
            Hi! I'm{" "}
            <span style={{ color: props.darkMode ? colors.pink : colors.white }}>
              Spencer Lyons
            </span>
          </h1>
          <h3 className="subTitle">A Software Developer</h3>
        </div>
      <div style={{...styles.blackCover, opacity:props.darkMode ? '60%' : '25%'}}>
      </div>
      <img src={require(`../images/star.png`)} className="homeStar1" alt="star" style={{display: props.darkMode ? 'flex' : 'none'}}/>
      <img src={require(`../images/star.png`)} className="homeStar2" alt="star" style={{display: props.darkMode ? 'flex' : 'none'}}/>
      <img src={require(`../images/star.png`)} className="homeStar3" alt="star" style={{display: props.darkMode ? 'flex' : 'none'}}/>
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
    // backgroundColor: "black",
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
  },
  star1: {
    position: 'absolute',
    left: 225,
    top: 275,
    width: 5,
  },
  star2: {
    position: 'absolute',
    right: 225,
    top: 275,
    width: 5,
  },
  star3: {
    position: 'absolute',
    right: '50%',
    top: '50%',
    width: 5,
  }
};

export default Home;
