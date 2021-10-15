import React, { useState } from 'react'
import { Row, Col } from 'react-bootstrap';



const BlogItem = ({ item }) => {
    return (
        <Row className="user-item">
            <Col xl="1"><div className="object-cover blog-item-image"><img src={item.image} alt="" /></div></Col>
            <Col xl="1"><span className="user-item-name">{item.id}</span></Col>
            <Col xl="3"><span className="user-item-address" title={item.title}>{item.title}</span></Col>
            <Col xl="2"><span className="user-item-phone">{item.author}</span></Col>
            <Col xl="2"><span className="user-item-date">{item.dateAdd}</span></Col>
            <Col xl="2"><button className="user-item-delete">Xóa blog</button></Col>
        </Row>
    )
}

const ManageBlog = () => {
    const [blogItems, setBlogItems] = useState([
        {
            id: "B01",
            title: "blog asjklhaskdjsd ligsda ksjdgh",
            image: "https://wiki.matbao.net/wp-content/uploads/2019/09/blog-la-gi-2-1200x900.jpg",
            dateAdd: "20-09-2020",
            author: "sadjgas",
        },
        {
            id: "B02",
            title: "blog asjklhaskdjsd ligsda ksjdgh",
            image: "https://wiki.matbao.net/wp-content/uploads/2019/09/blog-la-gi-2-1200x900.jpg",
            dateAdd: "20-09-2020",
            author: "sadjgas",
        },
        {
            id: "B03",
            title: "blog asjklhaskdjsd ligsda ksjdgh",
            image: "https://wiki.matbao.net/wp-content/uploads/2019/09/blog-la-gi-2-1200x900.jpg",
            dateAdd: "20-09-2020",
            author: "sadjgas",
        },
        {
            id: "B04",
            title: "blog asjklhaskdjsd ligsda ksjdgh",
            image: "https://wiki.matbao.net/wp-content/uploads/2019/09/blog-la-gi-2-1200x900.jpg",
            dateAdd: "20-09-2020",
            author: "sadjgas",
        },
        {
            id: "B05",
            title: "blog asjklhaskdjsd ligsda ksjdgh",
            image: "https://wiki.matbao.net/wp-content/uploads/2019/09/blog-la-gi-2-1200x900.jpg",
            dateAdd: "20-09-2020",
            author: "sadjgas",
        },
        {
            id: "B06",
            title: "blog asjklhaskdjsd ligsda ksjdgh",
            image: "https://wiki.matbao.net/wp-content/uploads/2019/09/blog-la-gi-2-1200x900.jpg",
            dateAdd: "20-09-2020",
            author: "sadjgas",
        },
        {
            id: "B07",
            title: "blog asjklhaskdjsd ligsda ksjdgh",
            image: "https://wiki.matbao.net/wp-content/uploads/2019/09/blog-la-gi-2-1200x900.jpg",
            dateAdd: "20-09-2020",
            author: "sadjgas",
        },
        {
            id: "B08",
            title: "blog asjklhaskdjsd ligsda ksjdgh",
            image: "https://wiki.matbao.net/wp-content/uploads/2019/09/blog-la-gi-2-1200x900.jpg",
            dateAdd: "20-09-2020",
            author: "sadjgas",
        },
        
    ]);
    return (
        <>
            <Row>
                <h2>Quản lý Blog</h2>
            </Row>

            <Row className="admin-table-container">
                <Row className="admin-table-header">
                    <Col xl="1"><div></div></Col>
                    <Col xl="1"><h4>Id</h4></Col>
                    <Col xl="3"><h4>Tiêu đề</h4></Col>
                    <Col xl="2"><h4>Tác giả</h4></Col>
                    <Col xl="2"><h4>Ngày tạo</h4></Col>
                    <Col xl="2"></Col>
                </Row>
                <Row className="table-user-items">
                {blogItems.map((item) => <BlogItem item={item} />)}
                </Row>
            </Row>

        </>
    )
}

export default ManageBlog
