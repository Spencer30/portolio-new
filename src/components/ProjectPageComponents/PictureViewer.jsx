import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { useCallback } from "react";

const PictureViewer = (props) => {
  const isMobile = useMediaQuery({ query: "(max-width: 750px)" });
  const [album, setAlbum] = useState(null);
  const [picNum, setPicNum] = useState(0)
  // const increasePicNum = useCallback(() => {
  //   if(!album)return
  //   setPicNum(pre => {
  //     if(pre < album.length - 1){
  //       return pre + 1
  //     } else if (pre === album.length - 1){
  //       return 0
  //     }
  //   } )
  // }, [album])
  useEffect(() => {
    setAlbum(props.photos)
  }, [props.photos])
  // useEffect(() => {
  //   setInterval(increasePicNum, 5000)
    
  // }, [increasePicNum])
  const styles = {
    container: {
      width: "100%",
      height: "100%",
    },
    imgArrowContainer: {
        height:isMobile ? 300 : 600,
        width:'100%',
        display:'flex',
        justifyContent: 'center'
    },
    img:{
        height:'100%',
        width:isMobile ? '100vw' : '100%',
    },
    arrowContainer: {
        display:isMobile ? 'none' : 'flex',
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
        <img src={!album ? null : album[picNum]} style={styles.img} alt={props.alt}/>
        <div style={styles.arrowContainer} onClick={handleRightArrow}><ArrowForwardIosIcon /></div>
      </div>
    </div>
  );
};

export default PictureViewer;
