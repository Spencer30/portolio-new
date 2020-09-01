import React from "react";
import CancelIcon from '@material-ui/icons/Cancel';
import { colors } from "@material-ui/core";
const Jumbotron = (props) => {
    const styles = {
        jumboTron:{
            width:'100%',
            height:'60vh',
            position:'relative',
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
        },
        jumboTronImg:{
            width:'100%',
            height:'100%'
        },
        opacityFilter:{
            position:'absolute',
            width:'100%',
            height:'100%',
            top:0,
            left:0,
            zIndex:2,
            backgroundColor:'rgba(0,0,0,.5)'
        },
        jumboTextContainer: {
            position:'absolute',
            color:'white',
            top: '50%',
            left: '50%',
            transform: "translate(-50%, -50%)",
            width: '100%',
            textAlign:'center',
            zIndex:3
        },
        cancelContainer: {
            position:'fixed',
            top: 15,
            left:25,
            fontSize: 48,
            color:props.darkMode ? colors.light : 'gray',
            zIndex:3,
            cursor:'pointer'
        }
    }
  return (
    <div style={styles.jumboTron}>
        <div style={styles.cancelContainer} onClick={props.onClick}><CancelIcon fontSize="large"/></div>
      <img src={props.coverImg} style={styles.jumboTronImg} />
      <div style={styles.jumboTextContainer}>
        <h2 style={{ fontSize: 68 }}>{props.title}</h2>
      </div>
      <div style={styles.opacityFilter}></div>
    </div>
  );
};

export default Jumbotron;
