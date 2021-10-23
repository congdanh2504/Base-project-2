import React from 'react'
const Card = (props) => {
    return(
        <div className="card-container">
            <div className="card-title">
                <div className="card-image">
                    <img src={props.obj.imagesAddress.path1} />
                </div>
                <h2>{props.obj.title}</h2>
            </div>
            <div className="card-detail">
                <div className="card-detail-col">
                    <h5 className="card-detail-label">
                        Số người
                    </h5>
                    <p className="card-detail-desc">
                        {props.obj.people} người
                    </p>
                </div>
                <div className="card-detail-col">
                    <h5 className="card-detail-label">
                        Diện tích
                    </h5>
                    <p className="card-detail-desc">
                        {props.obj.area} (m<sup>2</sup>)
                    </p>
                </div>
                <div className="card-detail-col">
                    <h5 className="card-detail-label">
                        Địa chỉ
                    </h5>
                    <p className="card-detail-desc">
                        {props.obj.address.province}
                    </p>
                </div>
            </div>
            <div className="card-price">
                <div className="card-price-label">
                    <h5 className="card-detail-label">Giá</h5>
                </div>
                <p className="price">{props.obj.amount} VND/Tháng</p>
                
            </div>
        </div>
    )
}



export default Card
