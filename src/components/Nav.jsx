import React from 'react';

const Nav = () => {
    return <div className="navBar">
        <ul className="navList">
            <li className="navItem"><a href="#About" className="navLink">About</a></li>
            <li className="navItem"><a href="#Skills" className="navLink">Skills</a></li>
            <li className="navItem"><a href="#Projects" className="navLink">Projects</a></li>
            <li className="navItem"><a href="#Contact" className="navLink">Contact</a></li>
        </ul>
    </div>
}

export default Nav;