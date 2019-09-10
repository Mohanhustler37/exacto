import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Summary = ({title, description}) => {
    return (
        <div className="summary">
            <h2 className="common-heading">
                <FontAwesomeIcon icon={faUser} className="icons" />
                {title}
            </h2>
            <p className="common-para">{description}</p>
        </div>
    )
}

export default Summary
