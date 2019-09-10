import React from 'react'

const Cards = ({title, category,color, description}) => {

    return (
        <div className="cards">
            <h2 className="common-heading">{title}</h2>
            <p>Relevance:</p>
            <span style={{color: color}}>{category}</span>
            <p className="common-para">{description}</p>
        </div>
    )
}

export default Cards
