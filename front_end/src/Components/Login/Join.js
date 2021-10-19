import React, { useState } from 'react'
import Logo from '../../assets/images/logo-black.png'
import {Link, useHistory} from 'react-router-dom'
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
        <div className="login-container">
            <Link to="/" className="logo-image">
                <img src={Logo} alt="" />
            </Link>

            <h4>Đăng ký</h4>
            <div className="loginForm-container">
            <label htmlFor="login-field">E-mail</label>
            <input type="email" name="login-field" onChange={changeEmail} required/>
            {emailError && <div class="alert alert-danger">{emailError}</div>}
            <label htmlFor="login-field">Tên tài khoản</label>
            <input type="text" onChange={changeUsername} required/>
            {userNameError && <div class="alert alert-danger">{userNameError}</div>}
            <label htmlFor="password-field">Mật khẩu</label>
            <input type="password" name="rePassword-field" id="" onChange={changePassword} required/>
            {passwordError && <div class="alert alert-danger">{passwordError}</div>}
            <label htmlFor="rePassword-field">Xác nhận mật khẩu</label>
            <input type="password" name="password-field" id="" onChange={changeRePassword} required/>
            {rePasswordError && <div class="alert alert-danger">{rePasswordError}</div>}
            {error && <div class="alert alert-danger">{error}</div>}
            <div>
            <input type="checkbox" name="term" id="" required/>
            <label htmlFor="term">Tôi chấp nhận mọi điều khoản dịch vụ</label>
            </div>
            <input type="submit" value="Đăng ký" onClick={submit} className="sign-button"/>
            <GoogleLogin 
                    clientId="246456551142-222jord9ruqrqlafkbnm7212euatdihl.apps.googleusercontent.com"
                    buttonText="Login"
                    onSuccess={handleGG}
                    className="btn btn-google btn-block justify-content-center"
                    cookiePolicy={'single_host_origin'}/>
            </div>    

            <p className="login-callout">
                Đã có tài khoản? <Link to="/login">Đăng nhập ngay</Link>.
            </p>
            
        </div>
    )
}

export default Join
