import React from 'react'
const Card = (props) => {
    return(
        <div className="card-container">
            <div className="card-title">
                <div className="card-image">
                    <img src={props.obj.image} />
                </div>
                <h2>{props.obj.title}</h2>
            </div>
            <div className="card-detail">
                <div className="card-detail-col">
                    <h5 className="card-detail-label">
                        Số người
                    </h5>
                    <p className="card-detail-desc">
                        {props.obj.people}
                    </p>
                </div>
                <div className="card-detail-col">
                    <h5 className="card-detail-label">
                        Diện tích
                    </h5>
                    <p className="card-detail-desc">
                        {props.obj.area}
                    </p>
                </div>
                <div className="card-detail-col">
                    <h5 className="card-detail-label">
                        Địa chỉ
                    </h5>
                    <p className="card-detail-desc">
                        {props.obj.address}
                    </p>
                </div>
            </div>
            <div className="card-price">
                <div className="card-price-label">
                    <h5 className="card-detail-label">Giá</h5>
                </div>
                <p className="price">{props.obj.price} VND/Tháng</p>
                
            </div>
        </div>
    )
}



export default Card
