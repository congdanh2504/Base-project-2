import React from 'react'
import Logo from '../../assets/images/logo.png'
import {Link} from 'react-router-dom'
import "./style.css"
const Join = () => {
    return (
        <div className="login-container">
            <Link to="/" className="logo-image">
                <img src={Logo} alt="" />
            </Link>
            <form action="" method="POST" className="loginForm-container">
                <h4>Đăng ký</h4>
                <label htmlFor="login-field">E-mail</label>
                <input type="email" name="login-field" required/>
                <label htmlFor="numbers">Số điện thoại</label>
                <input type="text" name="numbers"  required/>
                <label htmlFor="password-field">Mật khẩu</label>
                <input type="password" name="rePassword-field" id="" required/>
                <label htmlFor="rePassword-field">Xác nhận mật khẩu</label>
                <input type="password" name="password-field" id="" required/>
                <div>
                <input type="checkbox" name="term" id="" required/>
                <label htmlFor="term">Tôi chấp nhận mọi điều khoản dịch vụ</label>
                </div>
                <input type="submit" value="Đăng ký" className="sign-button"/>
                
            </form>

            <p className="login-callout">
                Đã có tài khoản? <Link to="/login">Đăng nhập ngay</Link>.
            </p>
            
        </div>
    )
}

export default Join
