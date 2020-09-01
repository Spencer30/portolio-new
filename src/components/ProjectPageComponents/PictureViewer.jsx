import React, { useState, useEffect } from "react";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

const PictureViewer = (props) => {
  const [album, setAlbum] = useState(null);
  const [picNum, setPicNum] = useState(0)
  useEffect(() => {
    setAlbum(props.photos)
  }, [props.photos])
  const styles = {
    container: {
      width: "100%",
      height: "100%",
    },
    imgArrowContainer: {
        height:700,
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
  const handleLeftArrow = () => {
    setPicNum(pre => {
      if(pre > 0){
        return pre - 1
      }
      return pre;
    })
  }

  const handleRightArrow = () => {
    setPicNum(pre => {
      if(pre < album.length - 1){
        return pre +1
      }
      return pre;
    })
  }
  console.log(picNum)
  return (
    <div style={styles.container}>
      <div style={styles.imgArrowContainer}>
        <div style={styles.arrowContainer} onClick={handleLeftArrow}><ArrowBackIosIcon /></div>
        <img src={!album ? null : album[picNum]} style={styles.img}/>
        <div style={styles.arrowContainer} onClick={handleRightArrow}><ArrowForwardIosIcon /></div>
      </div>
    </div>
  );
};

export default PictureViewer;
