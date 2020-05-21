import React from "react";
import Nav from "./Nav";

const Home = () => {
  return (
    <div className="bgImage">
      <Nav />
      <div className="homeTextContainer">
        <h1 className="mainTitle">Hi! I'm <span style={{color:'#F2CEE6'}}>Spencer Lyons</span></h1>
        <h3 className="subTitle" >A Software Devloper</h3>
      </div>
    </div>
  );
};

export default Home;
