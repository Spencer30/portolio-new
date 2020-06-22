import React from 'react';
import colors from './colors';

const SkillItem = props => {
    return <div className="skillItem">
        <img className="icon" src={require(`../images/${props.img}.png`)} alt={props.alt}/>
        <h2 className="skillTitle">{props.title}</h2>
<h4 className="skillSubText" style={{color: props.darkMode ? colors.light : '' }}>{props.subText}</h4>
    </div>
}

export default SkillItem;