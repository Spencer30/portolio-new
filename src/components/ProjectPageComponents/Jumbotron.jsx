import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import CancelIcon from "@material-ui/icons/Cancel";
import { colors } from "@material-ui/core";
const Jumbotron = (props) => {
  const isMobile = useMediaQuery({ query: "(max-width: 750px)" });
  const [loaded, setLoaded] = useState(false);
  const styles = {
    jumboTron: {
      width: "100%",
      height: "60vh",
      position: "relative",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    jumboTronImg: {
      width: "100%",
      height: "100%",
    },
    opacityFilter: {
      position: "absolute",
      width: "100%",
      height: "100%",
      top: 0,
      left: 0,
      zIndex: 2,
      backgroundColor: "rgba(0,0,0,.5)",
    },
    jumboTextContainer: {
      position: "absolute",
      color: "white",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: "100%",
      lineHeight: 1.5,
      textAlign: "center",
      zIndex: 3,
    },
    cancelContainer: {
      position: "fixed",
      top: 15,
      left: isMobile ? 10 : 25,
      fontSize: 48,
      color: props.darkMode ? colors.light : "gray",
      zIndex: 7,
      cursor: "pointer",
    },
  };
  return (
    <div style={styles.jumboTron}>
      <div style={styles.cancelContainer} onClick={props.onClick}>
        <CancelIcon fontSize="large" />
      </div>
      <img src={loaded ? props.coverImg : props.coverMini} style={styles.jumboTronImg} alt={props.alt} onLoad={() => setLoaded(true)}/>
      <div style={styles.jumboTextContainer}>
        <h2 style={{ fontSize: isMobile ? 45 : 68 }}>{props.title}</h2>
      </div>
      <div style={styles.opacityFilter}></div>
    </div>
  );
};

export default Jumbotron;
