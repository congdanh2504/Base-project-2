import React, { useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import Pagination from 'react-js-pagination'
import { Link } from 'react-router-dom'
import { deleteRentItem, getUserRentItems } from '../../api/rentItem'
import Moment from 'react-moment'
const ProfilePost = () => {
    const [rentItems, setRentItems] = useState(null)

    useEffect(() => {
        getUserRentItems(setRentItems)
    }, [])

    return (
        <div className="profile-container">
            <Row>
                <h1 className="profile-title">Quản lý tin đăng</h1>
            </Row>
            <div className="table-container">
                <table className="table-blog">
                    <tr>
                        <th>Tiêu đề</th>
                        <th>Ảnh nền</th>
                        <th>Giá (VNĐ/tháng)</th>
                        <th>Ngày đăng bài</th>
                        <th>Link</th>
                        <th></th>
                        <th></th>
                    </tr>
                    {rentItems && rentItems.data[0].map((rentItem, index) => {
                        return <tr>
                        <td>{rentItem.title}</td>
                        <td className="profile-table-image"><img src={rentItem.imagesAddress.path1} alt="" /></td>
                        <td>{rentItem.amount}</td>
                        <td><Moment format="YYYY/MM/DD">
                        {rentItem.created_at}
                        </Moment></td>
                        <td><Link to={`/post/${rentItem._id}`}>Dẫn đến bài đăng</Link></td>
                        <td><button onClick={async () => {
                            await deleteRentItem(rentItem._id)
                            getUserRentItems(setRentItems)
                        }} className="user-item-delete">Xóa</button></td>
                         <td><button className="user-item-edit">Sửa</button></td>
                    </tr>
                    })}
                </table>
                {rentItems && <Pagination
                    activePage={rentItems.current_page}
                    itemsCountPerPage={rentItems.per_page}
                    totalItemsCount={rentItems.total}
                    pageRangeDisplayed={5}
                    onChange={(num) => getUserRentItems(setRentItems, num)}
                    itemClass="page-item"
                    linkClass="page-link"
                    firstPageText="First"
                    lastPageText="Last"
                />}
            </div>
        </div>
    )
}

export default ProfilePost
