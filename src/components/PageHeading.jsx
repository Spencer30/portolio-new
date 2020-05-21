import React from "react";

const PageHeading = (props) => {
  return (
    <div className="headingContainer">
         <hr className="hr-text" data-content={props.heading}></hr>
    </div>
  );
};

export default PageHeading;
