import React from "react";
import colors from "../colors";

const InfoItems = (props) => {
    const styles={
        linkInfoContainer: {
            display:'flex',
            justifyContent:'space-around',
            flexWrap: 'wrap',
            width:'100%',
            marginBottom:45,
        },
        link: {
            margin: '45px 0'
        },
        siteLink: {
            color:props.darkMode ? colors.light : colors.dark,
            fontWeight: '700'
        }
    }
  return (
    <div style={styles.linkInfoContainer}>
      <div style={styles.linkContainer}>
        <div style={styles.link}>Type: {props.type}</div>
        <div style={styles.link}>Code: <a style={styles.siteLink} href={props.code} target={props.public ? "blank" : ""}>{props.public ? 'Github' : 'Request For Access'}</a></div>
      </div>
      <div style={styles.linkContainer}>
        <div style={styles.link}>Tech Stack: {props.tech}</div>
        <div style={styles.link}>Website: <a style={styles.siteLink} href={props.site} target="blank">View Website</a></div>
      </div>
    </div>
  );
};

export default InfoItems;
