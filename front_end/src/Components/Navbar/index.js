import React, { useState } from 'react'
import './style.css'
import logo from '../../assets/images/logo-black.png'
import login from '../../assets/images/login.png'
import { NavLink } from 'react-router-dom'
import Dropdown from './Dropdown'
import { getUser } from '../../api/Common'

const dropdownItems = [{ 'name': 'Thuê một người' }, { 'name': 'Thuê nhiều người' }]

function DisplayUser({ user }) {
    const [userMenu, setUserMenu] = useState(false);
    const changeUserMenu = () => setUserMenu(!userMenu);
    if (user) {
        return (
            <div className="navbar-login">
                <NavLink to='/' onClick={changeUserMenu} ><img src={user.imageAddress ? user.imageAddress : login} alt="" /></NavLink>
                <div className={userMenu?"user-dropdown active":"user-dropdown"}>
                    <ul className="user-dropdown-list">
                        <li className="user-dropdown-item">Đăng xuất</li>
                    </ul>
                </div>

            </div>
        )
    } else {
        return (
            <div className="navbar-login">
                <NavLink to='/login' ><img src={login} alt="" /></NavLink>
            </div>
        )

    }
}

function index() {
    return (
        <>
            <div className="navbar-container">
                <NavLink to='/' className="navbar-logo"><img src={logo} alt="logo" /></NavLink>


                <div className="navbar-menu">
                    <ul className="navbar-list">
                        <li >
                            <NavLink className="navbar-item" activeClassName="navbar-item-active" to='/' exact>Trang Chủ</NavLink>
                        </li>
                        <li className="navbar-item">
                            <Dropdown title='Thuê Trọ' items={dropdownItems} />
                        </li>
                        <li >
                            <NavLink className="navbar-item" activeClassName="navbar-item-active" to='/List' exact>Danh Sách</NavLink>
                        </li>
                        <li >
                            <NavLink className="navbar-item" activeClassName="navbar-item-active" to='/Blog'>Blog</NavLink>
                        </li>
                        <li >
                            <NavLink className="navbar-item" activeClassName="navbar-item-active" to='/Post' exact>Đăng Tin</NavLink>
                        </li>
                    </ul>
                </div>
                <DisplayUser user={getUser()} />

            </div>
        </>
    )
}

export default index
