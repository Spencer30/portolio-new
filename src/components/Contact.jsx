import React, { useState } from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/GitHub';
import colors from './colors';


const Contact = props => {
  const [loaded, setLoaded] = useState(false)
    return <div id="Contact" style={styles.container}>
              <img src={require(`../images/night5${!loaded ? 'Loading' : ''}.jpg`)}  style={styles.img} alt="night sky" onLoad={() => setLoaded(true)}/>
            <div style={{display: props.darkMode ? 'block' : 'none'}}><div style={styles.overlay}></div></div>
        <img className="star" src={require('../images/star.png')} alt="star"/>
        {/* <img className="star star2" src={require('../images/star.png')} /> */}

        <div className="contactMe" style={styles.textContainer}>
            <h1>Contact Me</h1>
            <p className="emailPhone" style={{color:props.darkMode ? colors.pink : ''}}><LinkedInIcon /><a className="email" href="https://www.linkedin.com/in/spencer-lyons-21b2981b/">Spencer Lyons</a></p>
            <p className="emailPhone" style={{color:props.darkMode ? colors.pink : ''}}><EmailIcon /><a className="email" href="mailto:sjl8r8@gmail.com">sjl8r8@gmail.com</a></p>
            <p className="emailPhone" style={{color:props.darkMode ? colors.pink : ''}}><GitHubIcon /><a className="email" href="https://github.com/Spencer30">Spencer30</a></p>

        </div>
    </div>
}



const styles = {
  container: {
    position: 'relative',
    height:'100vh',
    width: '100%',
  },
    textContainer: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      display: 'flex',
      flexDirection: 'column',
      width: '100%'
    },
    overlay: {
      position:'absolute',
      top:0,
      left:0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0,0,0,.65)'
    },
    img: {
      width: '100%',
      height: '100%',
    }
  }
export default Contact;