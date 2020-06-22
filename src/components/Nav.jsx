import React from 'react';
import DarkModeButton from './DarkModeButton'

const Nav = props => {
    return <div className="navBar">
        <ul className="navList">
            <li className="navItem"><a href="#About" className="navLink">About</a></li>
            <li className="navItem"><a href="#Skills" className="navLink">Skills</a></li>
            <li className="navItem"><a href="#Projects" className="navLink">Projects</a></li>
            <li className="navItem"><a href="#Contact" className="navLink">Contact</a></li>
            <DarkModeButton darkMode={props.darkMode} onClick={props.onDarkChange}/>
        </ul>
    </div>
}

export default Nav;