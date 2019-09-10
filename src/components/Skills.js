import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Skills = ({ title, points }) => {
    return (
        <div className="skills">
            <h2 className="common-heading">
                <FontAwesomeIcon icon={faUser} className="icons" />
                {title}
            </h2>
            <ul>
                {points.map(item => <li>{item}</li>)}
            </ul>
        </div>
    )
}

export default Skills
