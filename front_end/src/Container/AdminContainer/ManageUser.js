import React, { useState } from 'react'
import { Row, Col } from 'react-bootstrap';



const UserItem = ({ item }) => {
    return (
        <Row className="user-item">
            <Col xl="1"><div className="object-cover user-item-image"><img src={item.avatar} alt="" /></div></Col>
            <Col xl="2"><span className="user-item-name">{item.name}</span></Col>
            <Col xl="3"><span className="user-item-address" title={item.address}>{item.address}</span></Col>
            <Col xl="2"><span className="user-item-phone">{item.phoneNum}</span></Col>
            <Col xl="2"><span className="user-item-date">{item.dateAdd}</span></Col>
            <Col xl="2"><button className="user-item-delete">Xóa người dùng</button></Col>
        </Row>
    )
}

const ManageUser = () => {
    const [userItems, setUserItems] = useState([
        {
            name: "astd",
            avatar: "https://s3-ap-southeast-1.amazonaws.com/images.spiderum.com/sp-images/e9fef2d083cf11ea8f996dbfbe6e50b1.jpg",
            dateAdd: "20-09-2020",
            phoneNum: "321654897",
            address: "132 asda asd , ádj"
        },
        {
            name: "astd",
            avatar: "https://s3-ap-southeast-1.amazonaws.com/images.spiderum.com/sp-images/e9fef2d083cf11ea8f996dbfbe6e50b1.jpg",
            dateAdd: "20-09-2020",
            phoneNum: "321654897",
            address: "132 asda asd , ádj kjgfj sgdfjhgfjgakjdfgh jajkdfg askdfjg"
        },
        {
            name: "astd",
            avatar: "https://s3-ap-southeast-1.amazonaws.com/images.spiderum.com/sp-images/e9fef2d083cf11ea8f996dbfbe6e50b1.jpg",
            dateAdd: "20-09-2020",
            phoneNum: "321654897",
            address: "132 asda asd , ádj"
        },
        {
            name: "astd",
            avatar: "https://s3-ap-southeast-1.amazonaws.com/images.spiderum.com/sp-images/e9fef2d083cf11ea8f996dbfbe6e50b1.jpg",
            dateAdd: "20-09-2020",
            phoneNum: "321654897",
            address: "132 asda asd , ádj"
        },
        {
            name: "astd",
            avatar: "https://s3-ap-southeast-1.amazonaws.com/images.spiderum.com/sp-images/e9fef2d083cf11ea8f996dbfbe6e50b1.jpg",
            dateAdd: "20-09-2020",
            phoneNum: "321654897",
            address: "132 asda asd , ádj"
        },
        {
            name: "astd",
            avatar: "https://s3-ap-southeast-1.amazonaws.com/images.spiderum.com/sp-images/e9fef2d083cf11ea8f996dbfbe6e50b1.jpg",
            dateAdd: "20-09-2020",
            phoneNum: "321654897",
            address: "132 asda asd , ádj"
        },
        {
            name: "astd",
            avatar: "https://s3-ap-southeast-1.amazonaws.com/images.spiderum.com/sp-images/e9fef2d083cf11ea8f996dbfbe6e50b1.jpg",
            dateAdd: "20-09-2020",
            phoneNum: "321654897",
            address: "132 asda asd , ádj"
        },
        {
            name: "astd",
            avatar: "https://s3-ap-southeast-1.amazonaws.com/images.spiderum.com/sp-images/e9fef2d083cf11ea8f996dbfbe6e50b1.jpg",
            dateAdd: "20-09-2020",
            phoneNum: "321654897",
            address: "132 asda asd , ádj"
        },
        {
            name: "astd",
            avatar: "https://s3-ap-southeast-1.amazonaws.com/images.spiderum.com/sp-images/e9fef2d083cf11ea8f996dbfbe6e50b1.jpg",
            dateAdd: "20-09-2020",
            phoneNum: "321654897",
            address: "132 asda asd , ádj"
        },
    ]);
    return (
        <>
            <Row>
                <h2>Quản lý người dùng</h2>
            </Row>

            <Row className="admin-table-container">
                <Row className="admin-table-header">
                    <Col xl="1"><div></div></Col>
                    <Col xl="2"><h4>Tên người dùng</h4></Col>
                    <Col xl="3"><h4>Địa chỉ</h4></Col>
                    <Col xl="2"><h4>Số điện thoại</h4></Col>
                    <Col xl="2"><h4>Ngày tham gia</h4></Col>
                    <Col xl="2"></Col>
                </Row>
                <Row className="table-user-items">
                {userItems.map((item) => <UserItem item={item} />)}
                </Row>
            </Row>

        </>
    )
}

export default ManageUser
