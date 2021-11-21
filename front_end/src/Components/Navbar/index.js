import React, { useState } from 'react'
import './style.css'
import logo from '../../assets/images/logo-black.png'
import defaultImage from '../../assets/images/login.png'
import { Link, NavLink } from 'react-router-dom'
import Dropdown from './Dropdown'
import { useHistory } from 'react-router'
import { getUser, removeUserSession } from '../../api/Common'
import * as FiIcons from 'react-icons/fi'
import * as BiIcons from 'react-icons/bi'

const dropdownItems = [{ 'name': 'Thuê một người' }, { 'name': 'Thuê nhiều người' }]

function DisplayUser({ user }) {
    const [userMenu, setUserMenu] = useState(false);
    const changeUserMenu = () => setUserMenu(!userMenu);
    const history = useHistory()

    const logout = () => {
        removeUserSession()
        history.push('/')
        window.location.reload()
    }

    if (user) {
        return (
            <div className="navbar-login">
                <BiIcons.BiBell title="Notifications" />
                <div>
                    <div onClick={changeUserMenu} className="navbar-profile-image"><img src={user.imageAddress ? user.imageAddress : defaultImage} alt="" /></div>
                    <div className={userMenu ? "user-dropdown active" : "user-dropdown"}>
                        <ul className="user-dropdown-list">

                            {user.type == "admin" ? <li className="user-dropdown-item" ><BiIcons.BiGroup /> <span><Link to="/admin">Adminstration</Link></span> </li> :
                                <li className="user-dropdown-item" ><BiIcons.BiUserPin /> <span><Link to="/profile/user">Trang cá nhân</Link></span> </li>}
                            <li className="user-dropdown-item" onClick={logout}><FiIcons.FiLogOut /> <span>Đăng xuất</span> </li>
                        </ul>
                    </div>
                </div>


            </div>
        )
    } else {
        return (
            <div className="navbar-login">
                <NavLink to='/login' >
                    <button className="login-button">Đăng nhập</button>
                </NavLink>
            </div>
        )

    }
}

function index() {
    return (
        <>
            <div className="navbar-container">

                <div className="navbar-content">
                    <NavLink to='/' className="navbar-logo"><img src={logo} alt="logo" /></NavLink>

                    <div className="navbar-menu">
                        <ul className="navbar-list">
                            <li >
                                <NavLink className="navbar-item" activeClassName="navbar-item-active" to='/' exact>Trang Chủ</NavLink>
                            </li>
                            <li >
                                <NavLink className="navbar-item" activeClassName="navbar-item-active" to='/List' exact>Danh Sách</NavLink>
                            </li>
                            <li >
                                <NavLink className="navbar-item" activeClassName="navbar-item-active" to='/Blog'>Blog</NavLink>
                            </li>
                            <li >
                                <NavLink className="navbar-item" activeClassName="navbar-item-active" to='/guide'>Hướng dẫn</NavLink>
                            </li>
                            {getUser() && <li >
                                <NavLink className="navbar-item" activeClassName="navbar-item-active" to='/Post' exact>Đăng Tin</NavLink>
                            </li>}
                        </ul>
                        <DisplayUser user={getUser()} />
                    </div>
                </div>




            </div>
        </>
    )
}

export default index
