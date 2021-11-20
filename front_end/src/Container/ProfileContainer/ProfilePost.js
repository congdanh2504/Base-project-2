import React, { useEffect, useState } from 'react'
import { Row, Col, Form } from 'react-bootstrap'
import Pagination from 'react-js-pagination'
import { Link } from 'react-router-dom'
import { deleteRentItem, editRentItem, getUserRentItems } from '../../api/rentItem'
import Moment from 'react-moment'
import Modal from 'react-modal';
import { getProvinces } from '../../api/api'
import CustomSelect from '../../Components/CustomSelect'
import { RentItem } from '../../model/RentItem'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProfilePost = () => {
    const [provinceOptions, changeProvinceOptions] = useState([]);
    const typeOpt = [{"value": 1, "label": "Trọ"},{"value": 2, "label": "Căn hộ"}, {"value": 3, "label": "Nhà"},{"value": 4, "label": "Villa"}];
    const [rentItems, setRentItems] = useState(null)
    const [modalIsOpenEdit, setIsOpenEdit] = useState(false);
    const [modalIsOpenDelete, setIsOpenDelete] = useState(false);
    const [idDelete, setIdDelete] = useState(null)
    const [id, setId] = useState(null)
    const [title, setTitle] = useState(null)
    const [description, setDescription] = useState(null)
    const [type, setType] = useState(null)
    const [people, setPeople] = useState(null)
    const [area, setArea] = useState(null)
    const [amount, setAmount] = useState(null)
    const [detailLocation, setDetailLocation] = useState(null)
    const [province, setProvince] = useState(null)
    const customStylesEdit = {
        content: {
            height: "70%",
            width: '70%',
            top: '55%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            position: 'absolute',
            zIndex: '10',
            overflowY: 'scroll'
        },    
    };

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

    const changeTitle = (param) => {
        setTitle(param.target.value)
    }

    const changeType = (param) => {
        setType(param.label)
    }

    const changeDescription = (param) => {
        setDescription(param.target.value)
    }

    const changePeople = (param) => {
        setPeople(param.target.value)
    }

    const changeAmount = (param) => {
        setAmount(param.target.value)
    }

    const changeArea = (param) => {
        setArea(param.target.value)
    }

    const changeDetailLocation = (param) => {
        setDetailLocation(param.target.value)
    }

    const changeProvince = (param) => {
        setProvince(param.label)
    }

    const submit =  async () => {
        const rentItem = new RentItem(title, description, type, people, area, province, detailLocation, amount, null, null, null)
        await editRentItem(id, rentItem, toast)
        await getUserRentItems(setRentItems)
        setIsOpenEdit(false)
    }

    useEffect(() => {
        async function fetchProvinces() {
            let response = await getProvinces()
            changeProvinceOptions(response)
        }
        fetchProvinces()
        getUserRentItems(setRentItems)
    }, [])

    return (
        <div className="profile-container">
            <Modal
                isOpen={modalIsOpenEdit}
                onRequestClose={() => setIsOpenEdit(false)}
                style={customStylesEdit}
            >
                <div className="post-desc col-xl-12">
                <h1>Sửa bài đăng</h1>  
                <Form.Group as={Row} className="my-3">
                    <Form.Control onChange={changeTitle} defaultValue={title} placeholder="Tiêu đề" type="text" className="post-input"/>
                </Form.Group>
                <Form.Group as={Row} className="my-3">
                    <Form.Control onChange={changeDescription} defaultValue={description} placeholder="Mô tả" type="text" className="post-input"/>
                </Form.Group>
                <Form.Group as={Row} className="my-3">
                    <Form.Control onChange={changeDetailLocation} defaultValue={detailLocation} placeholder="Địa chỉ chi tiết" type="text" className="post-input"/>
                </Form.Group>
                <Form.Group as={Row} className="my-3">
                    <CustomSelect defaultValue={province} label="Tỉnh/Thành phố" onChange={changeProvince} opts={provinceOptions} />
                </Form.Group>
                <Form.Group as={Row} className="my-3">
                    <CustomSelect defaultValue={type} placeholder="Loại hình" opts={typeOpt} onChange={changeType}/>
                </Form.Group>
                <Form.Group as={Row} className="my-3">
                    <Form.Control defaultValue={people} placeholder="Số người ở" type="number" className="post-input mb-2 col-xl-6" onChange={changePeople} />
                </Form.Group>

                <Form.Group as={Row} className="my-3">
                    <Form.Control defaultValue={amount} placeholder="Giá cho thuê(VND/Tháng)" type="text" className="post-input mb-2 col-xl-6" onChange={changeAmount} placeholder="VD: 10000000" />
                </Form.Group>
                <Form.Group as={Row} className="my-3">
                    <Form.Control defaultValue={area} placeholder="Diện tích m2" type="text" className="post-input mb-2 col-xl-6" onChange={changeArea} placeholder="VD: 50" />
                </Form.Group>
                <button onClick={submit} className="login-button">Xác nhận</button>
                </div>
                
            </Modal>
            <Modal
                isOpen={modalIsOpenDelete}
                onRequestClose={() => setIsOpenDelete(false)}
                style={customStylesDelete}
            >
                <h1>Bạn có chắc chắn muốn xóa?</h1>
                <button onClick={async () =>  {
                    await deleteRentItem(idDelete, toast)
                    await getUserRentItems(setRentItems)
                    setIsOpenDelete(false)
                }} className="login-button">Xác nhận</button>
                <button onClick={() => setIsOpenDelete(false)} className="login-button">Hủy</button>
            </Modal>
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
                        <td><button onClick={() => {
                            setIdDelete(rentItem._id)
                            
                            setIsOpenDelete(true)
                        }} className="user-item-delete">Xóa</button></td>
                        <td><button onClick={() => {
                            setId(rentItem._id)
                            setType(rentItem.type)
                            setTitle(rentItem.title)
                            setDescription(rentItem.description)
                            setDetailLocation(rentItem.address.detailLocation)
                            setProvince(rentItem.address.province)
                            setPeople(rentItem.people)
                            setAmount(rentItem.amount)
                            setArea(rentItem.area)
                            setIsOpenEdit(true)
                        }} className="user-item-edit">Sửa</button></td>
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
