import React from "react";
import LanguageIcon from "@material-ui/icons/Language";
import GitHubIcon from "@material-ui/icons/GitHub";
import colors from './colors';

const ProjectCard = (props) => {
    // const [hover, setHover] = useState(false);

    const handleOver = () => {
      // setHover(() => true)
    }
    
    const handleOut = () => {
      // setHover(() => false)
    }

  return (
    <div id={props.id} className="card" onMouseOver={handleOver} onMouseOut={handleOut} onClick={props.goToProject} style={{cursor:'pointer',zIndex:5}}>
      <div id={props.id} style={{ textAlign: "center", position:'relative', width:'100%' }}>
        <img id={props.id} className="projectPic" src={props.img} alt="project snapshot"/>
        {/* <div className="imgOverlay" style={{display: hover ? 'flex' : 'none', flexDirection:'column', justifyContent:'center'}}>
            <h2 style={{color:'white'}}>Tech Stack:</h2>
            <h4 style={{color:''}}>{props.techStack}</h4>
        </div> */}
      </div>
      <div id={props.id} className="cardText" style={{color: props.darkMode ? colors.light : '' }}>
        <h2 id={props.id} style={{ marginBottom: 3 }}>{props.title}</h2>
        <hr
          id={props.id}
          style={{
            border: `3px solid ${colors.pink}`,
            width: 225,
            borderRadius: 25,
            margin: 0,
            marginTop: 10
          }}
        ></hr>
        <p id={props.id} style={{height:100}}>{props.summary}</p>
        <div
          id={props.id}
          style={{
            display: "flex",
            alignItems: "center",
            height: 60,
            width: "100%",
          }}
        >
          <LanguageIcon />
          <h4 className="webGit" style={{marginLeft: 5}}>
            <a className="webGitLink" target="blank" href={props.website}>
            Website
            </a>
          </h4>
          <GitHubIcon />
          <h4 className="webGit" style={{marginLeft: 8}}>
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
