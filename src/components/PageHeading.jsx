import React from "react";
import colors from './colors'


const PageHeading = (props) => {
  return (
    <div className="headingContainer" style={{backgroundColor: props.darkMode ? colors.dark : colors.light }}>
         <hr className={props.darkMode ? "hr-text-dark" : "hr-text"} data-content={props.heading} ></hr>
    </div>
  );
};

export default PageHeading;
