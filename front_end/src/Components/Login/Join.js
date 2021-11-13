import React, { useState } from 'react'
import Logo from '../../assets/images/logo-white.png'
import { Link, useHistory } from 'react-router-dom'
import { Row, Col, Form } from 'react-bootstrap'
import LoginBg from '../../assets/images/login-bg.png'
import "./style.css"
import GoogleLogin from "react-google-login";
import { loginWithGG, register } from '../../api/loginAPI';

const Join = () => {
  const [email, setEmail] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [rePassword, setRePassword] = useState("")
  const [userNameError, setUserNameError] = useState(null)
  const [emailError, setEmailError] = useState(null)
  const [passwordError, setPasswordError] = useState(null)
  const [rePasswordError, setRePasswordError] = useState(null)
  const [error, setError] = useState(null)
  const history = useHistory()

  const changeUsername = (param) => {
    setUsername(param.target.value)
  }

  const changeEmail = (param) => {
    setEmail(param.target.value)
  }

  const changePassword = (param) => {
    setPassword(param.target.value)
  }

  const changeRePassword = (param) => {
    setRePassword(param.target.value)
  }

  const submit = () => {
    register(email, username, password, rePassword, setEmailError, setUserNameError, setPasswordError, setRePasswordError, history)
  }

  const handleGG = (param) => {
    loginWithGG(param.tokenId, setError)
  }

  return (
    // <div className="login-container">
    //     <Link to="/" className="logo-image">
    //         <img src={Logo} alt="" />
    //     </Link>

    //     <h4>Đăng ký</h4>
    //     <div className="loginForm-container">
    //     <label htmlFor="login-field">E-mail</label>
    //     <input type="email" name="login-field" onChange={changeEmail} required/>

    //     <label htmlFor="login-field">Tên tài khoản</label>
    //     <input type="text" onChange={changeUsername} required/>

    //     <label htmlFor="password-field">Mật khẩu</label>
    //     <input type="password" name="rePassword-field" id="" onChange={changePassword} required/>
    //     {passwordError && <div class="alert alert-danger">{passwordError}</div>}
    //     <label htmlFor="rePassword-field">Xác nhận mật khẩu</label>
    //     <input type="password" name="password-field" id="" onChange={changeRePassword} required/>

    //     <div>
    //     <input type="checkbox" name="term" id="" required/>
    //     <label htmlFor="term">Tôi chấp nhận mọi điều khoản dịch vụ</label>
    //     </div>
    //     <input type="submit" value="Đăng ký" onClick={submit} className="sign-button"/>
    //     <GoogleLogin 
    //             clientId="246456551142-222jord9ruqrqlafkbnm7212euatdihl.apps.googleusercontent.com"
    //             buttonText="Login"
    //             onSuccess={handleGG}
    //             className="btn btn-google btn-block justify-content-center"
    //             cookiePolicy={'single_host_origin'}/>
    //     </div>    

    //     <p className="login-callout">
    //         Đã có tài khoản? <Link to="/login">Đăng nhập ngay</Link>.
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
              <h2>Đăng ký ngay</h2>
              <span className="login-quote">Đã có tài khoản? <Link to="/login" className="login-link">Đăng nhập</Link></span>
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
                  <Form.Label>Email</Form.Label>
                  <br />
                  <Form.Control type="email" className="login-input" placeholder="abc@xyz.com" name="login-field" onChange={changeEmail} required />
                  {emailError && <div class="alert alert-danger">{emailError}</div>}
                </Form.Group>

                <Form.Group className="form-group">
                  <Form.Label>Tên người dùng</Form.Label>
                  <br />
                  <Form.Control type="text" className="login-input" placeholder="Nguyen Van A" onChange={changeUsername} required />
                  {userNameError && <div class="alert alert-danger">{userNameError}</div>}
                </Form.Group>

                <Form.Group className="form-group" >
                  <Form.Label>Mật khẩu</Form.Label>
                  <br />
                  <Form.Control type="password" className="login-input" placeholder="********************" name="rePassword-field" onChange={changePassword} required />
                </Form.Group>

                <Form.Group className="form-group" >
                  <Form.Label>Nhập lại mật khẩu</Form.Label>
                  <br />
                  <Form.Control type="password" className="login-input" placeholder="********************" name="password-field" onChange={changeRePassword} required />
                    {rePasswordError && <div class="alert alert-danger">{rePasswordError}</div>}
                    {error && <div class="alert alert-danger">{error}</div>}
                </Form.Group>
                <Form.Control type="checkbox" value="term" name="term" required></Form.Control>
                <span className="login-quote">Tôi đồng ý với <Link to="/" className="login-link">điều khoản sử dụng</Link></span>
                <Form.Group className="form-group" >
                  <Form.Control type="submit" value="Đăng nhập" onClick={submit} className="login-input sign-button" />
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

export default Join
