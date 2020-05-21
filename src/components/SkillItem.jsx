import React from 'react';

const SkillItem = props => {
    return <div className="skillItem">
        <img className="icon" src={require(`../images/${props.img}.png`)} alt={props.alt}/>
        <h2 className="skillTitle">{props.title}</h2>
<h4 className="skillSubText">{props.subText}</h4>
    </div>
}

export default SkillItem;