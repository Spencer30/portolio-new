import React from "react";
import LanguageIcon from "@material-ui/icons/Language";
import GitHubIcon from "@material-ui/icons/GitHub";

const ProjectCard = (props) => {
  return (
    <div className="card">
      <div style={{ textAlign: "center" }}>
        <img className="projectPic" src={props.img} />
      </div>
      <div className="cardText">
        <h2 style={{ marginBottom: 3 }}>{props.title}</h2>
        <hr
          style={{
            border: "3px solid #F2CEE6",
            width: 200,
            borderRadius: 25,
            margin: 0,
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
