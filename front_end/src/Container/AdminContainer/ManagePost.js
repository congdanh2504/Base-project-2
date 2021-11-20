import moment from 'moment';
import React, { useEffect, useState } from 'react'
import {Row,Col} from 'react-bootstrap';
import Pagination from 'react-js-pagination';
import Moment from 'react-moment';
import { deleteRentItem, getRentItems } from '../../api/rentItem';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Modal from 'react-modal';

const ManagePost = () => {
    const [rentItems, setRentItems] = useState(null)
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
        getRentItems(setRentItems);
    }, [])

    return (
        <>
            <Row>
                <h2>Quản lý bài viết</h2>
            </Row>
            <ToastContainer/>
            <Row className="admin-table-container">
            <Row className="admin-table-header">
                <Col xl="1"><div></div></Col>
                <Col xl="2"><h4>Id</h4></Col>
                <Col xl="3"><h4>Tiêu đề</h4></Col>
                <Col xl="3"><h4>Loại</h4></Col>
                <Col xl="2"><h4>Ngày tạo</h4></Col>
                <Col xl="2"></Col>
            </Row>
            <Row className="table-user-items">

            {rentItems && rentItems.data.map((rentItem, index) => {
                return <Row className="user-item">
                <Col xl="1"><div className="object-cover blog-item-image"><img src={rentItem.imagesAddress.path1} alt="" /></div></Col>
                <Col xl="2"><span className="user-item-name">{rentItem._id.$oid}</span></Col>
                <Col xl="3"><span className="user-item-address" >{rentItem.title}</span></Col>
                <Col xl="2"><span className="user-item-phone">{rentItem.type}</span></Col>
                <Col xl="2"><span className="user-item-date"><Moment format="YYYY/MM/DD">
                {moment(parseInt(rentItem.created_at.$date.$numberLong))}
                </Moment></span></Col>
                <Col xl="2"><td><button onClick={() => {
                    setIdDelete(rentItem._id.$oid)
                    setIsOpenDelete(true)
                }} className="user-item-delete">Xóa</button></td></Col>
            </Row>
            })}

            <Modal
                isOpen={modalIsOpenDelete}
                onRequestClose={() => setIsOpenDelete(false)}
                style={customStylesDelete}
            >
                <h1>Bạn có chắc chắn muốn xóa?</h1>
                <button onClick={async () =>  {
                    await deleteRentItem(idDelete, toast)
                    await getRentItems(setRentItems);
                    setIsOpenDelete(false)
                }} className="login-button">Xác nhận</button>
                <button onClick={() => setIsOpenDelete(false)} className="login-button">Hủy</button>
            </Modal>

            {rentItems && <Pagination
                activePage={rentItems.current_page}
                itemsCountPerPage={rentItems.per_page}
                totalItemsCount={rentItems.total}
                pageRangeDisplayed={5}
                onChange={(num) => getRentItems(setRentItems, num)}
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

export default ManagePost
