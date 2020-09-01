import React from "react";

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
        }
    }
  return (
    <div style={styles.linkInfoContainer}>
      <div style={styles.linkContainer}>
        <div style={styles.link}>Type: Client</div>
        <div style={styles.link}>Tech Stack: React, Node, MySQL</div>
      </div>
      <div style={styles.linkContainer}>
        <div style={styles.link}>Code: Request For Access</div>
        <div style={styles.link}>Website: View Site</div>
      </div>
    </div>
  );
};

export default InfoItems;
