import React from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/GitHub';
import colors from './colors';


const Contact = props => {
    return <div id="Contact" style={{position: 'relative'}}>
              <img src={props.darkMode ? require('../images/night4-dark.jpg') : require('../images/night4.jpg')} className="contactSection" alt="night sky"/>

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
    textContainer: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      display: 'flex',
      flexDirection: 'column',
      width: '100%'
    }
  }
export default Contact;