import React, { useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap';
import Pagination from 'react-js-pagination';
import { deleteUser, getUsers } from '../../api/AdminAPI';
import defaultImage from '../../assets/images/login.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Modal from 'react-modal';

const ManageUser = () => {
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

    const [users, setUsers] = useState(null)

    useEffect(() => {
        getUsers(setUsers)
    }, [])

    return (
        <>
            <Row>
                <h2>Quản lý người dùng</h2>
            </Row>
            <ToastContainer/>
            <Row className="admin-table-container">
                <Row className="admin-table-header">
                    <Col md="1"><div></div></Col>
                    <Col md="2"><h4>ID</h4></Col>
                    <Col md="3"><h4>Tên</h4></Col>
                    <Col md="2"><h4>Email</h4></Col>
                    <Col md="2"><h4>Ngày tham gia</h4></Col>
                    <Col md="2"></Col>
                </Row>
                <Row className="table-user-items">
                {users && users.data[0].map((user, index) => {
                    return <Row className="user-item">
                        <Col md="1"><div className="object-cover user-item-image"><img src={user.imageAddress ? user.imageAddress : defaultImage} alt="" /></div></Col>
                        <Col md="2"><span className="user-item-name">{user._id}</span></Col>
                        <Col md="3"><span className="user-item-address">{user.name}</span></Col>
                        <Col md="2"><span className="user-item-phone">{user.email}</span></Col>
                        <Col md="2"><span className="user-item-date">{user.created_at}</span></Col>
                        <Col md="2"><button onClick={() => {
                            setIdDelete(user._id)
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
                        await deleteUser(idDelete, toast)
                        await getUsers(setUsers)
                        setIsOpenDelete(false)
                    }} className="login-button">Xác nhận</button>
                    <button onClick={() => setIsOpenDelete(false)} className="login-button">Hủy</button>
                </Modal>
                {users && <Pagination
                    activePage={users.current_page}
                    itemsCountPerPage={users.per_page}
                    totalItemsCount={users.total}
                    pageRangeDisplayed={5}
                    onChange={(num) => getUsers(setUsers, num)}
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

export default ManageUser
