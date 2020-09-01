import React from "react";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

const PictureViewer = (props) => {
  const styles = {
    container: {
      width: "100%",
      height: "100%",
    },
    imgArrowContainer: {
        height:'60%',
        width:'100%',
        display:'flex',
        justifyContent: 'center'
    },
    img:{
        height:'100%',
        width:'100%',
    },
    arrowContainer: {
        display:'flex',
        justifyContent:'center',
        alignItems: 'center',
        width:'100%',
        cursor:'pointer',
        margin: '0 15px'
    }
  };
  return (
    <div style={styles.container}>
      <div style={styles.imgArrowContainer}>
        <div style={styles.arrowContainer}><ArrowBackIosIcon /></div>
        <img src={require('../../images/retroLanes.png')} style={styles.img}/>
        <div style={styles.arrowContainer}><ArrowForwardIosIcon /></div>
      </div>
    </div>
  );
};

export default PictureViewer;
