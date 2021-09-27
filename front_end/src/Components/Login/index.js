import React from 'react'
import Logo from '../../assets/images/logo.png'
import {Link} from 'react-router-dom'
import "./style.css"
const index = () => {
    return (
        <div className="login-container">
            <Link to="/" className="logo-image">
                <img src={Logo} alt="" />
            </Link>
            <form action="" method="POST" className="loginForm-container">
                <h4>Đăng nhập</h4>
                <label htmlFor="login-field">Tên tài khoản</label>
                <input type="text" name="login-field"/>
                <label htmlFor="password-field">Mật khẩu</label>
                <input type="password" name="password-field" id="" />
                <input type="submit" value="Đăng nhập" className="sign-button"/>
                <Link to="/login">Bạn quên mật khẩu?</Link>
            </form>
            <p className="login-callout">
                Bạn là người mới? <Link to="/join">Tạo tài khoản ngay</Link>.
            </p>
        </div>
    )
}

export default index
