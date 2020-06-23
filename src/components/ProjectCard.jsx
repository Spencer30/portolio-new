import React, {useState} from "react";
import LanguageIcon from "@material-ui/icons/Language";
import GitHubIcon from "@material-ui/icons/GitHub";
import colors from './colors';

const ProjectCard = (props) => {
    const [hover, setHover] = useState(false);

    const handleOver = () => {
      setHover(() => true)
    }
    
    const handleOut = () => {
      setHover(() => false)
    }

  return (
    <div className="card" onMouseOver={handleOver} onMouseOut={handleOut}>
      <div style={{ textAlign: "center", position:'relative', width:'100%' }}>
        <img className="projectPic" src={props.img} alt="project snapshot"/>
        <div className="imgOverlay" style={{display: hover ? 'flex' : 'none', flexDirection:'column', justifyContent:'center'}}>
            <h2 style={{color:'white'}}>Tech Stack:</h2>
            <h4 style={{color:'#b43088'}}>{props.techStack}</h4>
        </div>
      </div>
      <div className="cardText" style={{color: props.darkMode ? colors.light : '' }}>
        <h2 style={{ marginBottom: 3 }}>{props.title}</h2>
        <hr
          style={{
            border: "3px solid #b43088",
            width: 225,
            borderRadius: 25,
            margin: 0,
            marginTop: 10
          }}
        ></hr>
        <p style={{height:100}}>{props.summary}</p>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            height: 60,
            width: "100%",
          }}
        >
          <LanguageIcon />
          <h4 className="webGit" >
            <a className="webGitLink" target="blank" href={props.website}>
              Website
            </a>
          </h4>
          <GitHubIcon />
          <h4 className="webGit">
            <a className="webGitLink" target={props.public ? "blank" : ""} href={props.gitHub}>
              {props.public ? "Github" : "Request for Access"}
            </a>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
