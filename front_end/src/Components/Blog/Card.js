import React from 'react'

const Card = ({obj}) => {
    return (
        <a href="#" className="blogCard-container">
            <div className="blogCard-image">
                <img src={obj.image} alt="" />
            </div>
            <div className="blogCard-content">
                <h4 className="blogCard-title">{obj.title}</h4>
                <p className="blogCard-desc">{obj.content}</p>
                <p>bởi <span className="blogCard-author">{obj.author}</span></p>
            </div>
            
        </a>
    )
}

export default Card
