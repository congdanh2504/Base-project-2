import React, { useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap';
import Pagination from 'react-js-pagination';
import { deleteBlog, getBlogs } from '../../api/BlogAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Modal from 'react-modal';

const ManageBlog = () => {
    const [blogs, setBlogs] = useState(null)
    const [idDelete, setIdDelete] = useState(null)
    const [modalIsOpenDelete, setIsOpenDelete] = useState(false);
    const customStylesDelete = {
        content: {
            top: '55%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            position: 'absolute',
            zIndex: '10',
        },    
    };

    useEffect(() => {
        getBlogs(setBlogs)
    }, [])

    return (
        <>
            <Row>
                <h2>Quản lý Blog</h2>
            </Row>
            <ToastContainer/>
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
                    return <Row className="user-item">
                        <Col xl="1"><div className="object-cover blog-item-image"><img src={blog.imageAddress} alt="" /></div></Col>
                        <Col xl="1"><span className="user-item-name">{blog._id}</span></Col>
                        <Col xl="3"><span className="user-item-address" >{blog.title}</span></Col>
                        <Col xl="2"><span className="user-item-phone">{blog.user.name}</span></Col>
                        <Col xl="2"><span className="user-item-date">{blog.created_at}</span></Col>
                        <Col xl="2"><button onClick={() =>  {
                            setIdDelete(blog._id)
                            setIsOpenDelete(true)
                        }} className="user-item-delete">Xóa</button></Col>
                    </Row>
                })}

                <Modal
                    isOpen={modalIsOpenDelete}
                    onRequestClose={() => setIsOpenDelete(false)}
                    style={customStylesDelete}
                >
                    <h1>Bạn có chắc chắn muốn xóa?</h1>
                    <button onClick={async () =>  {
                        await deleteBlog(idDelete, toast)
                        await getBlogs(setBlogs)
                        setIsOpenDelete(false)
                    }} className="login-button">Xác nhận</button>
                    <button onClick={() => setIsOpenDelete(false)} className="login-button">Hủy</button>
                </Modal>

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
