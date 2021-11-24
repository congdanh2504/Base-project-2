import React, { useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { getUser } from '../../api/Common';
import { updateProfile } from '../../api/loginAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProfileUser = () => {
    const [loading, setLoading] = useState(false)
    const [user, setUser] = useState({name: getUser().name, phone: getUser().phone, zalo: getUser().zalo, fb: getUser().fb, imageAddress: null})
    const [overviewAvatar, setOverviewAvatar] = useState(getUser().imageAddress)

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

    return (
        <div className="profile-container">
            <ToastContainer/>
            <Row>
                <h1 className="profile-title">Sửa thông tin cá nhân</h1>
            </Row>
            <Row className="profile-items">
                <Row className="profile-item">
                    <Col className="col-md-2 offset-md-2 col-form-label">Tên hiển thị</Col>
                    <Col><input type="text" value={user.name} name="name" onChange={changeInput} /></Col>
                </Row>
                <Row className="profile-item">
                    <Col className="col-md-2 offset-md-2 col-form-label">Số điện thoại</Col>
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
                    <Col className="col-md-2 offset-md-2 col-form-label">Mật khẩu</Col>
                    <Col><Link to="/">Đổi mật khẩu</Link></Col>
                </Row>
                <Row className="profile-item">
                    <Col className="col-md-2 offset-md-2 col-form-label ">Ảnh đại diện</Col>
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

                <Row className="profile-item">
                    <Col className="col-md-2"></Col>
                    <Col><button disabled={loading} className="save-button" onClick={submit}>{loading && <span className="fa fa-refresh fa-spin"></span>}Lưu và thay đổi</button></Col>
                </Row>
            </Row>
        </div>
    )
}

export default ProfileUser
