import React, { useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
const ProfilePost = () => {
    return (
        <div className="profile-container">
            <Row>
                <h1 className="profile-title">Quản lý blog</h1>
            </Row>
            <div className="table-container">
                <table className="table-blog">
                    <tr>
                        <th>Id</th>
                        <th>Tiêu đề</th>
                        <th>Ảnh nền</th>
                        <th>Ngày đăng bài</th>
                        <th>Link</th>
                        <th></th>
                    </tr>
                    <tr>
                        <td>123</td>
                        <td colSpan><span className="text-overflow-1">10 cách để abcd cho nó thật fkcd</span></td>
                        <td className="profile-table-image"><img src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80" alt="" /></td>
                        <td>20-10-2020</td>
                        <td><Link to="/">Dẫn đến bài viết</Link></td>
                        <td><button className="user-item-delete">Xóa</button></td>
                    </tr>
                    <tr>
                        <td>123</td>
                        <td colSpan><span className="text-overflow-1">10 cách để abcd cho nó thật fkcd</span></td>
                        <td className="profile-table-image"><img src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80" alt="" /></td>
                        <td>20-10-2020</td>
                        <td><Link to="/">Dẫn đến bài viết</Link></td>
                        <td><button className="user-item-delete">Xóa</button></td>
                    </tr>
                    <tr>
                        <td>123</td>
                        <td colSpan><span className="text-overflow-1">10 cách để abcd cho nó thật fkcd</span></td>
                        <td className="profile-table-image"><img src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80" alt="" /></td>
                        <td>20-10-2020</td>
                        <td><Link to="/">Dẫn đến bài viết</Link></td>
                        <td><button className="user-item-delete">Xóa</button></td>
                    </tr>
                    <tr>
                        <td>123</td>
                        <td colSpan><span className="text-overflow-1">10 cách để abcd cho nó thật fkcd</span></td>
                        <td className="profile-table-image"><img src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80" alt="" /></td>
                        <td>20-10-2020</td>
                        <td><Link to="/">Dẫn đến bài viết</Link></td>
                        <td><button className="user-item-delete">Xóa</button></td>
                    </tr>
                    <tr>
                        <td>123</td>
                        <td colSpan><span className="text-overflow-1">10 cách để abcd cho nó thật fkcd</span></td>
                        <td className="profile-table-image"><img src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80" alt="" /></td>
                        <td>20-10-2020</td>
                        <td><Link to="/">Dẫn đến bài viết</Link></td>
                        <td><button className="user-item-delete">Xóa</button></td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default ProfilePost
