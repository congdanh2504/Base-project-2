import React, { useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { deleteBlog, getUserBlogs } from '../../api/BlogAPI'
import Moment from 'react-moment'
import Pagination from 'react-js-pagination'
const ProfileBlog = () => {
    const [blogs, setBlogs] = useState(null)

    useEffect(() => {
        getUserBlogs(setBlogs)
    },[])

    return (
        <div className="profile-container">
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
    )
}

export default ProfileBlog
