import React from "react";
import PageHeading from "./PageHeading";
import SkillItem from "./SkillItem";
import colors from './colors';

const Skills = props => {
  return (
    <div id="Skills" className="skillsSection" style={{backgroundColor: props.darkMode ? colors.dark : colors.light }}>
      <PageHeading heading="My Skills" darkMode={props.darkMode}/>
      <div className="skillItemContainer">
        <SkillItem
          img="jigsaw1"
          title="Problem Solving"
          subText="I understand to solve a complex problem requires breaking the problem down, working through possible solutions and determining what is the best path forward."
          alt="Jigsaw"
          darkMode={props.darkMode}
        />
        <SkillItem
          img="report"
          title="Business Acumen"
          subText="My experience has given me the opportunity to work with a wide range of clients, understand their needs and be able to effectively communicate back to the team."
          alt="Business Report"
          darkMode={props.darkMode}
        />
        <SkillItem
          img="code"
          title="Coding"
          subText="In addition to LaunchCode, I have been teaching myself to code for the last nine months and have developed a strong passion for it. Major problems can be solved with a few lines of code. I enjoy working with Javascript, especially React."
          alt="Computer Code"
          darkMode={props.darkMode}
        />
      </div>
      <div style={{display: 'flex', flexWrap:'wrap', justifyContent:'center', marginTop:25}}>
    <div style={{textAlign:'center', width:'100%'}}>
        <h2 style={{color:props.darkMode ? colors.light : '#0D1B1E', fontWeight: 200}}>I'm comfortble working with these technologies:</h2>
    </div>
      <ul className="skillList" style={{display: 'flex', flexWrap:'wrap', justifyContent:'center'}}>
        <li className="skillBullets"><span style={{color:props.darkMode ? colors.light : '#0D1B1E'}} >HTML</span></li>
        <li className="skillBullets"><span style={{color:props.darkMode ? colors.light : '#0D1B1E'}} >CSS</span></li>
        <li className="skillBullets"><span style={{color:props.darkMode ? colors.light : '#0D1B1E'}} >JavaScript</span></li>
        <li className="skillBullets"><span style={{color:props.darkMode ? colors.light : '#0D1B1E'}} >React</span></li>
        <li className="skillBullets"><span style={{color:props.darkMode ? colors.light : '#0D1B1E'}} >Node</span></li>
        <li className="skillBullets"><span style={{color:props.darkMode ? colors.light : '#0D1B1E'}} >SQL</span></li>
      </ul>
    </div>
    <div style={{textAlign:'center'}}>
    <h2 style={{color:props.darkMode ? colors.light : '#0D1B1E', fontWeight: 200}}>I'm currently learning:</h2>
    </div>
    <div style={{display: 'flex', flexWrap:'wrap', justifyContent:'center'}}>
      <ul className="skillList" style={{display: 'flex', flexWrap:'wrap', justifyContent:'center'}}>
        <li className="skillBullets"><span style={{color:props.darkMode ? colors.light : '#0D1B1E'}} >React Native</span></li>
        <li className="skillBullets"><span style={{color:props.darkMode ? colors.light : '#0D1B1E'}} >Redux</span></li>
        <li className="skillBullets"><span style={{color:props.darkMode ? colors.light : '#0D1B1E'}} >Java</span></li>
      </ul>
    </div>
    </div>
  );
};

export default Skills;
