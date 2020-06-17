import React from "react";
import PageHeading from "./PageHeading";

const About = () => {
  return (
    <div id="About" className="aboutSection">
      <PageHeading heading="A Little About Me" />
      <div className="aboutContainerParent">
        <div className="aboutContainer">
          <div className="picContainer">
            <img
              className="profilePic"
              src={require("../images/profile_pic3.png")}
              alt="Spencer Lyons"
            />
          </div>
          <div className="textContentContainer">
            <h2 className="aboutTitle">Back Story</h2>
            <p>
              I grew up in Kansas City and went to the University of Missouri
              for college. After college, I left Kansas City for the East Coast.
              I landed in Philadelphia where I worked in the investment
              accounting industry. After 7+ years in the investment accounting
              industry and a run at entrepreneurship, my experiences have led me
              to become a software developer. I found more passion in coding
              than I have with any other industry. I love problem solving and
              coding has given me the chance to expand on those skills.
            </p>
            <h2 className="aboutTitle">LauchCode Graduate</h2>
            <p>
              I graduated from LaunchCode's LC101 program this past March and
              just finished their LiftOff program in June.{" "}
              <a
                className="launchLink"
                href="https://www.launchcode.org/about"
                target="_blank"
                rel="noopener noreferrer"
              >
                LaunchCode
              </a>{" "}
              is a national nonprofit offering free tech education and job
              placement opportunities. Their goal is to bring new people from
              all backgrounds into the tech field and reshape the way employers
              think about hiring. LaunchCode is highly competitive. The amount
              of value and education the program offers is exceptional and I'm
              very thankful to get that experience. My goal is to take my
              knowledge and apply it to the real world.
            </p>
            <h2 className="aboutTitle">Ready To Work</h2>
            <p>
              I'm currently seeking a role as a full time developer. My strength
              is with JavaScript, so I would love to work with React or Node but
              eager to learn other frameworks and languages. I enjoy working in
              small teams and in a collaborative environment where ideas and
              thoughts are shared freely to solve problems. My business
              background has given me the chance to see both sides of the
              equation between business and technology teams. I understand the
              high cost that comes with breakdown of communication between the
              two. I believe I can help fill those gaps and make sure challenges
              from both sides are communicated effectively.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
