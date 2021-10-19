import React, { useState } from 'react'
import Logo from '../../assets/images/logo-black.png'
import {Link, useHistory} from 'react-router-dom'
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
        <div className="login-container">
            <Link to="/" className="logo-image">
                <img src={Logo} alt="" />
            </Link>
            <div className="loginForm-container">
                <h4>Đăng nhập</h4>
                <label htmlFor="login-field">Email</label>
                <input type="email" name="login-field" onChange={changeEmail}/>
                <label htmlFor="password-field">Mật khẩu</label>
                <input type="password" name="password-field" onChange={changePassword} />
                <button onClick={submit} className="sign-button">Đăng nhập</button>      
                <Link to="/login">Bạn quên mật khẩu? Kệ mẹ bạn</Link>
                <GoogleLogin 
                    clientId="246456551142-222jord9ruqrqlafkbnm7212euatdihl.apps.googleusercontent.com"
                    buttonText="Login"
                    onSuccess={handleGG}
                    className="btn btn-google btn-block justify-content-center"
                    cookiePolicy={'single_host_origin'}/>
                { error && <div class="alert alert-danger">
                    {error}
                </div>}
            </div>
            <p className="login-callout">
                Bạn là người mới? <Link to="/join">Tạo tài khoản ngay</Link>.
            </p>
            
        </div>
    )
}

export default Login
