import React from 'react'
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Card = ({obj}) => {
    return (
        <Col xs="4" className="my-5">
            <Link to={`/blog/${obj._id}`}>
                <div>
                    <div className="object-contain">
                        <img src={obj.imageAddress}  alt="" />
                    </div>
                    <div className="blog-sub-content mt-3">
                        <p>Bởi <Link to="/">{obj.user.name}</Link></p>
                        <h1>{obj.title}</h1>
                        <p className="text-overflow-4 mt-2">{obj.description}
                            </p>
                    </div>
                </div>
            </Link>
        </Col>
    )
}

export default Card
