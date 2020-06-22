import React from "react";
import Nav from "./Nav";

const Home = props => {
  return (
    <div style={{position:'relative'}}>
      <img src={props.darkMode ? require('../images/waterfallReduced-dark.jpg') : require('../images/waterfallReduced.jpg')} className="bgImage" alt="waterfall"/>
      <Nav darkMode={props.darkMode} onDarkChange={props.onDarkChange}/>
      <div className="homeTextContainer" style={styles.textContainer}>
        <h1 className="mainTitle">Hi! I'm <span style={{color:'#F2CEE6'}}>Spencer Lyons</span></h1>
        <h3 className="subTitle" >A Software Devloper</h3>
      </div>
    </div>
  );
};

const styles = {
  textContainer: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    display: 'flex',
    flexDirection: 'column',
    width: '100%'
  }
}

export default Home;
