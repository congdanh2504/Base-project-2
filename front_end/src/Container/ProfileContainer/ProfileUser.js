import React, { useState } from 'react'
import { Row, Col, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { getUser } from '../../api/Common';
import { changePasswordUser, updateProfile } from '../../api/loginAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Modal from 'react-modal';

const ProfileUser = () => {
    const [loading, setLoading] = useState(false)
    const [user, setUser] = useState({name: getUser().name, phone: getUser().phone, zalo: getUser().zalo, fb: getUser().fb, imageAddress: null})
    const [changePassword, setChangePassword] = useState({id: getUser()._id, email: getUser().email, oldPassword: "", newPassword: "", confirmNewPassword: ""})
    const [overviewAvatar, setOverviewAvatar] = useState(getUser().imageAddress)
    const [modalIsOpen, setIsOpen] = useState(false);
    const customStyles = {
        content: {
            height: "70%",
            width: "70%",
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

    const changeInputPassword = (e) => {
        setChangePassword({...changePassword, [e.target.name] : e.target.value})
    }

    const changeAvatar = (param) => {
        var file = param.target.files[0];
        setUser({...user, ["imageAddress"] : file})
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = function (e) {
          setOverviewAvatar(reader.result)
        }.bind(this);
    }

    const changeInput = (e) => {
        setUser({...user, [e.target.name] : e.target.value})
    }

    const submit = async () => {
        setLoading(true)
        await updateProfile(user, toast)
        setLoading(false)
    }

    const changePass = async () => {
        if(changePassword.newPassword !== changePassword.confirmNewPassword) {
            toast.info("M???t kh???u m???i kh??ng tr??ng kh???p")
            return
        }
        setLoading(true)
        await changePasswordUser(changePassword, toast)
        setLoading(false)
        setIsOpen(false)
    }

    return (
        <div className="profile-container">
            <ToastContainer/>
            <Row>
                <h1 className="profile-title">S???a th??ng tin c?? nh??n</h1>
            </Row>
            <Row>
                <h4 className="profile-title">L??u ??: c???p nh???t profile ????? c?? th??? ????ng tin</h4>
            </Row>
            <Row className="profile-items">
                <Row className="profile-item">
                    <Col className="col-md-2 offset-md-2 col-form-label">T??n hi???n th???</Col>
                    <Col><input type="text" value={user.name} name="name" onChange={changeInput} /></Col>
                </Row>
                <Row className="profile-item">
                    <Col className="col-md-2 offset-md-2 col-form-label">S??? ??i???n tho???i</Col>
                    <Col><input type="phone" value={user.phone} name="phone" onChange={changeInput} /></Col>
                </Row>
                <Row className="profile-item">
                    <Col className="col-md-2 offset-md-2 col-form-label">Zalo</Col>
                    <Col><input type="email" value={user.zalo} name="zalo" onChange={changeInput} /></Col>
                </Row>
                <Row className="profile-item">
                    <Col className="col-md-2 offset-md-2 col-form-label">FaceBook</Col>
                    <Col><input type="email" value={user.fb} name="fb" onChange={changeInput} placeholder="https://www.facebook.com/blery.alex/"/></Col>
                </Row>
                <Row className="profile-item"> 
                    <Col className="col-md-2 offset-md-2 col-form-label">M???t kh???u</Col>
                    <Col><button className="save-button" onClick={() => setIsOpen(true)} >?????i m???t kh???u</button></Col>
                </Row>
                <Row className="profile-item">
                    <Col className="col-md-2 offset-md-2 col-form-label ">???nh ?????i di???n</Col>
                    <Col>
                        <div className="avatar">
                            <img src={overviewAvatar} alt="" />
                        </div>
                        <input
                            type="file"
                            class="form-control"
                            accept="image/*"
                            className="change-avatar-button"
                            onChange={changeAvatar}
                        />
                    </Col>
                </Row>
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={() => setIsOpen(false)}
                    style={customStyles}
                >
                    <h1>?????i m???t kh???u</h1>
                    <Form.Group className="form-group" >
                        <Form.Label>M???t kh???u c??</Form.Label>
                        <br />
                        <Form.Control type="password" className="login-input" placeholder="********************" name="oldPassword" onChange={changeInputPassword} />
                    </Form.Group>
                    <Form.Group className="form-group" >
                        <Form.Label>M???t kh???u m???i</Form.Label>
                        <br />
                        <Form.Control type="password" className="login-input" placeholder="********************" name="newPassword" onChange={changeInputPassword} />
                    </Form.Group>
                    <Form.Group className="form-group" >
                        <Form.Label>Nh???p l???i m???t kh???u m???i</Form.Label>
                        <br />
                        <Form.Control type="password" className="login-input" placeholder="********************" name="confirmNewPassword" onChange={changeInputPassword} />
                    </Form.Group>
                    <button disabled={loading} className="save-button" onClick={changePass}>{loading && <span className="fa fa-refresh fa-spin"></span>}L??u v?? thay ?????i</button>
                </Modal>

                <Row className="profile-item">
                    <Col className="col-md-2"></Col>
                    <Col><button disabled={loading} className="save-button" onClick={submit}>{loading && <span className="fa fa-refresh fa-spin"></span>}L??u v?? thay ?????i</button></Col>
                </Row>
            </Row>
        </div>
    )
}

export default ProfileUser
