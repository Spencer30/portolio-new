import React from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/GitHub';


const Contact = () => {
    return <div id="Contact" className="contactSection">
        <div className="contactMe">
            <h1>Contact Me</h1>
            <p className="emailPhone"><LinkedInIcon /><a className="email" href="https://www.linkedin.com/in/spencer-lyons-21b2981b/">Spencer Lyons</a></p>
            <p className="emailPhone"><EmailIcon /><a className="email" href="mailto:sjl8r8@gmail.com">sjl8r8@gmail.com</a></p>
            <p className="emailPhone"><GitHubIcon /><a className="email" href="https://github.com/Spencer30">Spencer30</a></p>

        </div>
    </div>
}

export default Contact;