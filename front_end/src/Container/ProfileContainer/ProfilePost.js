import React, { useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
const ProfilePost = () => {
    return (
        <div className="profile-container">
            <Row>
                <h1 className="profile-title">Quản lý tin đăng</h1>
            </Row>
            <div className="table-container">
                <table className="table-blog">
                    <tr>
                        <th>Id</th>
                        <th>Tiêu đề</th>
                        <th>Ảnh nền</th>
                        <th>Giá</th>
                        <th>Ngày đăng bài</th>
                        <th>Link</th>
                        <th></th>
                    </tr>
                    <tr>
                        <td>45654</td>
                        <td><span className="text-overflow-1">Phòng trọ vjp pro không che hjhj asdaskdb akjsda skjdh kasjdh askdjh kasjskdjh kajdhaskjdh</span></td>
                        <td className="profile-table-image"><img src="https://www.immune-image.eu/wp-content/uploads/2020/01/publications-immune-image.jpg" alt="" /></td>
                        <td>2000000</td>
                        <td>12-12-2020</td>
                        <td><Link to="/">Dẫn đến bài đăng</Link></td>
                        <td><button className="user-item-delete">Xóa</button></td>
                    </tr>
                    <tr>
                        <td>45654</td>
                        <td><span className="text-overflow-1">Phòng trọ vjp pro không che hjhj asdaskdb akjsda skjdh kasjdh askdjh kasjskdjh kajdhaskjdh</span></td>
                        <td className="profile-table-image"><img src="https://www.immune-image.eu/wp-content/uploads/2020/01/publications-immune-image.jpg" alt="" /></td>
                        <td>2000000</td>
                        <td>12-12-2020</td>
                        <td><Link to="/">Dẫn đến bài đăng</Link></td>
                        <td><button className="user-item-delete">Xóa</button></td>
                    </tr>
                    <tr>
                        <td>45654</td>
                        <td><span className="text-overflow-1">Phòng trọ vjp pro không che hjhj asdaskdb akjsda skjdh kasjdh askdjh kasjskdjh kajdhaskjdh</span></td>
                        <td className="profile-table-image"><img src="https://www.immune-image.eu/wp-content/uploads/2020/01/publications-immune-image.jpg" alt="" /></td>
                        <td>2000000</td>
                        <td>12-12-2020</td>
                        <td><Link to="/">Dẫn đến bài đăng</Link></td>
                        <td><button className="user-item-delete">Xóa</button></td>
                    </tr>
                    <tr>
                        <td>45654</td>
                        <td><span className="text-overflow-1">Phòng trọ vjp pro không che hjhj asdaskdb akjsda skjdh kasjdh askdjh kasjskdjh kajdhaskjdh</span></td>
                        <td className="profile-table-image"><img src="https://www.immune-image.eu/wp-content/uploads/2020/01/publications-immune-image.jpg" alt="" /></td>
                        <td>2000000</td>
                        <td>12-12-2020</td>
                        <td><Link to="/">Dẫn đến bài đăng</Link></td>
                        <td><button className="user-item-delete">Xóa</button></td>
                    </tr>
                    <tr>
                        <td>45654</td>
                        <td><span className="text-overflow-1">Phòng trọ vjp pro không che hjhj asdaskdb akjsda skjdh kasjdh askdjh kasjskdjh kajdhaskjdh</span></td>
                        <td className="profile-table-image"><img src="https://www.immune-image.eu/wp-content/uploads/2020/01/publications-immune-image.jpg" alt="" /></td>
                        <td>200000</td>
                        <td>12-12-2020</td>
                        <td><Link to="/">Dẫn đến bài đăng</Link></td>
                        <td><button className="user-item-delete">Xóa</button></td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default ProfilePost
