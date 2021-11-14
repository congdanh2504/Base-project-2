import React, { useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap';
import Pagination from 'react-js-pagination';
import { getBlogs } from '../../api/BlogAPI';



const BlogItem = ({ blog }) => {
    return (
        <Row className="user-item">
            <Col xl="1"><div className="object-cover blog-item-image"><img src={blog.imageAddress} alt="" /></div></Col>
            <Col xl="1"><span className="user-item-name">{blog._id}</span></Col>
            <Col xl="3"><span className="user-item-address" >{blog.title}</span></Col>
            <Col xl="2"><span className="user-item-phone">{blog.user.name}</span></Col>
            <Col xl="2"><span className="user-item-date">{blog.created_at}</span></Col>
            <Col xl="2"><button className="user-item-delete">Xóa blog</button></Col>
        </Row>
    )
}

const ManageBlog = () => {
    const [blogs, setBlogs] = useState(null)

    useEffect(() => {
        getBlogs(setBlogs)
    }, [])

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
                {blogs && blogs.data.map((blog, index) => {
                    return <BlogItem blog={blog} />
                })}

                {blogs && <Pagination
                    activePage={blogs.current_page}
                    itemsCountPerPage={blogs.per_page}
                    totalItemsCount={blogs.total}
                    pageRangeDisplayed={5}
                    onChange={(num) => getBlogs(setBlogs, num)}
                    itemClass="page-item"
                    linkClass="page-link"
                    firstPageText="First"
                    lastPageText="Last"
                />}
                </Row>
            </Row>

        </>
    )
}

export default ManageBlog
