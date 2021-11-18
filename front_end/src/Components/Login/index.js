import React, { useState } from 'react'
import Logo from '../../assets/images/logo-white.png'
import LoginBg from '../../assets/images/login-bg.png'
import { Link, useHistory } from 'react-router-dom'
import { Row, Col, Form } from 'react-bootstrap'
import "./style.css"
import { login, loginWithGG } from '../../api/loginAPI'
import GoogleLogin from "react-google-login";

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(null)
    const history = useHistory()

    const changeEmail = (param) => {
        setEmail(param.target.value)
    }

    const changePassword = (param) => {
        setPassword(param.target.value)
    }

    const submit = () => {
        login(email, password, setError, history)
    }

    const handleGG = (param) => {
        loginWithGG(param.tokenId, setError, history)
    }

    return (
        // <div className="login-container">
        //     <Link to="/" className="logo-image">
        //         <img src={Logo} alt="" />
        //     </Link>
        //     <div className="loginForm-container">
        //         <h4>Đăng nhập</h4>
        //         <label htmlFor="login-field">Email</label>
        //         <input type="email" name="login-field" onChange={changeEmail}/>
        //         <label htmlFor="password-field">Mật khẩu</label>
        //         <input type="password" name="password-field" onChange={changePassword} />
        //         <button onClick={submit} className="sign-button">Đăng nhập</button>      
        //         <Link to="/login">Bạn quên mật khẩu? Kệ mẹ bạn</Link>

        // { error && }
        //     </div>
        //     <p className="login-callout">
        //         Bạn là người mới? <Link to="/join">Tạo tài khoản ngay</Link>.
        //     </p>

        // </div>
        <>
            <Row className="login-container">
                <Col xl='6' className="left">
                    <Link to="/">
                        <div className="login-logo">
                            <img src={Logo} alt="" />
                        </div>
                    </Link>

                    <div className="login-bg">
                        <img src={LoginBg} alt="" />
                    </div>
                </Col>
                <Col xl='6' className="right">
                    <div className="login-field">
                        <Row>
                            <h2>Đăng nhập để trải nghiệm</h2>
                            <span className="login-quote">Bạn chưa có tài khoản? <Link to="/join" className="login-link">Đăng ký</Link></span>
                        </Row>
                        <Row>
                            <GoogleLogin
                                clientId="246456551142-222jord9ruqrqlafkbnm7212euatdihl.apps.googleusercontent.com"
                                buttonText="Đăng nhập với Google"
                                onSuccess={handleGG}
                                className="btn btn-google btn-block justify-content-center"
                                cookiePolicy={'single_host_origin'} />
                        </Row>
                        <Row><h4 className="legend"><span>hoặc</span></h4></Row>
                        <Row>
                            <Form>
                                <Form.Group className="form-group">
                                    <Form.Label>Tài khoản đăng nhập</Form.Label>
                                    <br />
                                    <Form.Control type="text" className="login-input" placeholder="abc@xyz.com" name="login-field" onChange={changeEmail} />
                                </Form.Group>

                                <Form.Group className="form-group" >
                                    <Form.Label>Mật khẩu</Form.Label>
                                    <br />
                                    <Form.Control type="password" className="login-input" placeholder="********************" name="password-field" onChange={changePassword} />
                                </Form.Group>

                                <span className="login-quote">Quên mật khẩu? <Link to="/" className="login-link">Lấy lại mật khẩu</Link></span>
                                <Form.Group className="form-group" >
                                    <Form.Control value="Đăng nhập" onClick={submit} className="login-input sign-button" />
                                </Form.Group>
                                <div class="alert">
                                    {error}
                                </div>
                            </Form>
                        </Row>
                    </div>

                </Col>
            </Row>
        </>
    )
}

export default Login
