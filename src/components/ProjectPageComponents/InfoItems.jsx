import React from "react";
import { useMediaQuery } from "react-responsive";
import colors from "../colors";

const InfoItems = (props) => {
  const isMobile = useMediaQuery({ query: "(max-width: 750px)" });

    const styles={
        linkInfoContainer: {
            display:'flex',
            justifyContent:'space-between',
            flexWrap: 'wrap',
            width:'100%',
            marginBottom:90,
        },
        linkContainer: {
          display:'flex',
          flexWrap:'wrap',
          justifyContent:'space-between',
          width:'100%',
          margin: '0px 10px'
        },
        link: {
            margin:isMobile ? '45px 0 0 0' : '45px 0',
            width:300
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
        <div style={styles.link}>Tech Stack: {props.tech}</div>
      </div>
      <div style={styles.linkContainer}>
      <div style={styles.link}>Code: <a style={styles.siteLink} href={props.code} target={props.public ? "blank" : ''}>{props.public ? 'Github' : 'Request For Access'}</a></div>
        <div style={styles.link}>Website: <a style={styles.siteLink} href={props.site} target="blank">View Website</a></div>
      </div>
    </div>
  );
};

export default InfoItems;
