import React, { useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
const ProfileUser = () => {
    const [name, setName] = useState("asjdsakjdhs");
    const [phone, setPhone] = useState("123456789");
    const [email, setEmail] = useState("asd@asv.com");
    const [zalo, setZalo] = useState(null);
    const [fb, setFb] = useState(null);
    console.log(name)
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
                    <Col className="col-md-2 offset-md-2 col-form-label">Email</Col>
                    <Col><input type="email" value={email} onChange={e => setEmail(e.target.value)} /></Col>
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
                            <img src="https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg" alt="" />
                        </div>
                        <button className="change-avatar-button">Đổi ảnh đại diện</button>
                    </Col>
                </Row>

                <Row className="profile-item">
                    <Col className="col-md-2"></Col>
                    <Col><button className="save-button">Lưu và thay đổi</button></Col>
                    
                </Row>
            </Row>
        </div>
    )
}

export default ProfileUser
