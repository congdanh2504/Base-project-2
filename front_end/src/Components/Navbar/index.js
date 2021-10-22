import React, { useState } from 'react'
import './style.css'
import logo from '../../assets/images/logo-black.png'
import { NavLink } from 'react-router-dom'
import Dropdown from './Dropdown'
import { getUser } from '../../api/Common'
import * as FiIcons from 'react-icons/fi'
import * as BiIcons from 'react-icons/bi'
import * as AiIcons from 'react-icons/ai'

const dropdownItems = [{ 'name': 'Thuê một người' }, { 'name': 'Thuê nhiều người' }]

function DisplayUser({ user }) {
    const [userMenu, setUserMenu] = useState(false);
    const changeUserMenu = () => setUserMenu(!userMenu);
    if (user) {
        return (
            <div className="navbar-login">
                <AiIcons.AiOutlineBell title="Notifications"/>
                <div>
                    <NavLink to='/' onClick={changeUserMenu} className="navbar-profile-image"><img src={user.imageAddress} alt="" /></NavLink>
                    <div className={userMenu ? "user-dropdown active" : "user-dropdown"}>
                        <ul className="user-dropdown-list">
                            <li className="user-dropdown-item" ><BiIcons.BiUserPin /> <span><NavLink to="/profile">Trang cá nhân</NavLink></span> </li>
                            <li className="user-dropdown-item"><FiIcons.FiLogOut /> <span>Đăng xuất</span> </li>
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
