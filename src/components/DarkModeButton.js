import React from 'react';
import Brightness3Icon from '@material-ui/icons/Brightness3';//Moon
import WbSunnyIcon from '@material-ui/icons/WbSunny';;//Sun

const DarkModeButton = props => {
    return (
        <div style={{width: 50, height: 50, cursor: 'pointer',}} className="moonIcon" onClick={props.onClick}>
            {props.darkMode ? <WbSunnyIcon /> : <Brightness3Icon />}
        </div>
    )
}

export default DarkModeButton;