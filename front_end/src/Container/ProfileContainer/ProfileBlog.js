import React, { useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { deleteBlog, getUserBlogs } from '../../api/BlogAPI'
import Moment from 'react-moment'
import Pagination from 'react-js-pagination'
import Modal from 'react-modal';

const ProfileBlog = () => {
    const [blogs, setBlogs] = useState(null)
    const [modalIsOpen, setIsOpen] = useState(false);
    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          position: 'absolute',
          zIndex: '5',
        },
    };

    useEffect(() => {
        getUserBlogs(setBlogs)
    },[])

    return (
        <>

        <div className="profile-container">
        <Modal
                isOpen={modalIsOpen}
                onRequestClose={() => setIsOpen(false)}
                style={customStyles}
            >
                <h1>Đặt cọc</h1>
                <h4>Giá: VNĐ (cọc trước 1 tháng)</h4>
                <h4>Chọn phương thức thanh toán: </h4>
                <button  className="login-button">Xác nhận</button>
            </Modal>
            <Row>
                <h1 className="profile-title">Quản lý blog</h1>
            </Row>
            <div className="table-container">
                <table className="table-blog">
                    <tr>
                        <th>Tiêu đề</th>
                        <th>Ảnh nền</th>
                        <th>Ngày đăng bài</th>
                        <th>Link</th>
                        <th></th>
                        <th></th>
                    </tr>
                    {blogs && blogs.data[0].map((blog, index) => {
                        return <tr>
                            <td>{blog.title}</td>
                            <td className="profile-table-image"><img src={blog.imageAddress} alt="" /></td>
                            <td><Moment format="YYYY/MM/DD">
                            {blog.created_at}
                            </Moment></td>
                            <td><Link to={`/blog/${blog._id}`}>Dẫn đến bài viết</Link></td>
                            <td><button onClick={async () =>  {
                                await deleteBlog(blog._id)
                                getUserBlogs(setBlogs)
                            }} className="user-item-delete">Xóa</button></td>  
                            <td><button onClick={() => setIsOpen(true)} className="user-item-edit">Sửa</button></td>                      
                        </tr>
                    })}
                </table>
                {blogs && <Pagination
                    activePage={blogs.current_page}
                    itemsCountPerPage={blogs.per_page}
                    totalItemsCount={blogs.total}
                    pageRangeDisplayed={5}
                    onChange={(num) => getUserBlogs(setBlogs, num)}
                    itemClass="page-item"
                    linkClass="page-link"
                    firstPageText="First"
                    lastPageText="Last"
                />}
                
            </div>

        </div>

        </>
    )
}

export default ProfileBlog
