import React, { useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { getUser } from '../../api/Common';
import { updateProfile } from '../../api/loginAPI';
import { User } from '../../model/User';
const ProfileUser = () => {
    const [name, setName] = useState(getUser().name);
    const [phone, setPhone] = useState(getUser().phone);
    const [zalo, setZalo] = useState(getUser().zalo);
    const [fb, setFb] = useState(getUser().fb);
    const [imageAddress, setImageAddress] = useState(null);
    const [overviewAvatar, setOverviewAvatar] = useState(getUser().imageAddress)
    const [message, setMassage] = useState(null)

    const changeAvatar = (param) => {
        var file = param.target.files[0];
        setImageAddress(file);
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = function (e) {
          setOverviewAvatar(reader.result)
        }.bind(this);
    }

    const submit = () => {
        const user = new User(name, phone, zalo, fb, imageAddress)
        updateProfile(user, setMassage)
    }

    return (
        <div className="profile-container">
            <Row>
                <h1 className="profile-title">Sửa thông tin cá nhân</h1>
            </Row>
            <Row className="profile-items">
                <Row className="profile-item">
                    <Col className="col-md-2 offset-md-2 col-form-label">Tên hiển thị</Col>
                    <Col><input type="text" value={name} onChange={e => setName(e.target.value)} /></Col>
                </Row>
                <Row className="profile-item">
                    <Col className="col-md-2 offset-md-2 col-form-label">Số điện thoại</Col>
                    <Col><input type="phone" value={phone} onChange={e => setPhone(e.target.value)} /></Col>
                </Row>
                <Row className="profile-item">
                    <Col className="col-md-2 offset-md-2 col-form-label">Zalo</Col>
                    <Col><input type="email" value={zalo} onChange={e => setZalo(e.target.value)} /></Col>
                </Row>
                <Row className="profile-item">
                    <Col className="col-md-2 offset-md-2 col-form-label">FaceBook</Col>
                    <Col><input type="email" value={fb} onChange={e => setFb(e.target.value)} placeholder="https://www.facebook.com/blery.alex/"/></Col>
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
                    <Col><button className="save-button" onClick={submit}>Lưu và thay đổi</button></Col>
                </Row>

                {message &&  <Row className="profile-item">
                    <Col className="col-md-2"></Col>
                    {message}
                </Row>}
            </Row>
        </div>
    )
}

export default ProfileUser
