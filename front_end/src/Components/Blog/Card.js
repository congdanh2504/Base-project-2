import React from 'react'
import { Link } from 'react-router-dom';

const Card = ({obj}) => {
    return (
        <div className="blogCard-container">
            <Link to={`/blog/${obj._id}`}>
                <div>
                    <div className="object-contain blogCard-image">
                        <img src={obj.imageAddress}  alt="" />
                    </div>
                    <div className="blog-sub-content mt-3">
                        <p>Bởi <Link to="/">{obj.user.name}</Link></p>
                        <h2>{obj.title}</h2>
                        <p className="text-overflow-4 mt-2">{obj.description}
                            </p>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Card
