import React, { useEffect, useState } from 'react'
import './style.css'
import logo from '../../assets/images/logo-black.png'
import defaultImage from '../../assets/images/login.png'
import { Link, NavLink } from 'react-router-dom'
import Dropdown from './Dropdown'
import { useHistory } from 'react-router'
import { getUser, removeUserSession } from '../../api/Common'
import * as FiIcons from 'react-icons/fi'
import * as BiIcons from 'react-icons/bi'
import { getUserNotifications } from '../../api/NotificationAPI'

function DisplayUser({ user }) {
    const [userMenu, setUserMenu] = useState(false);
    const [notiState, setNotiState] = useState(false); //noti dropdown
    const [label, setLabel] = useState(true); // notification label 
    const changeUserMenu = () => setUserMenu(!userMenu);
    const [notifications, setNotification] = useState(null)
    const history = useHistory()

    useEffect(() => {
        getUserNotifications(setNotification);
    }, [])

    const logout = () => {
        removeUserSession()
        history.push('/')
        window.location.reload()
    }
    //set 'noti-item' to 'noti-item unread' to set unread state
    const NotiItem = (item) => {
        return (
            <>
                <li >
                    <Link className='noti-item unread' to='/'>
                        <div className="noti-user-image"><img src={defaultImage} alt="" /></div>
                        <span>ABC đã xyz bài thuê của bạn</span>
                    </Link>
                </li>
                <li >
                    <Link className='noti-item' to='/'>
                        <div className="noti-user-image"><img src={defaultImage} alt="" /></div>
                        <span>ABC đã xyz bài thuê của bạn</span>
                    </Link>
                </li>
            </>
        )
    }

    if (user) {
        return (
            <div className="navbar-login">
                <div className={label ? 'noti-icon active' : 'noti-icon'}><BiIcons.BiBell title="Notifications" className='noti-bell' onClick={() => setNotiState(!notiState)} /></div>

                <div className={notiState ? "noti-dropdown active" : "noti-dropdown"}>
                    <h4 className='noti-title'>Thông báo</h4>
                    <div className="noti-filter">
                        <div className="noti-filter-item active" name='all'>All</div>
                        <div className="noti-filter-item" name='unread'>Unread</div>
                    </div>
                    <ul className='noti-dropdown-list'>
                        <NotiItem />
                    </ul>
                </div>
                <div>
                    <div onClick={changeUserMenu} className="navbar-profile-image"><img src={user.imageAddress ? user.imageAddress : defaultImage} alt="" /></div>
                    <div className={userMenu ? "user-dropdown active" : "user-dropdown"}>
                        <ul className="user-dropdown-list">
                            {user.type == "admin" ? <li className="user-dropdown-item" ><BiIcons.BiGroup /> <span><Link to="/admin/home">Adminstration</Link></span> </li> :
                                <li className="user-dropdown-item" ><BiIcons.BiPlus /> <span><Link to="/Post">Đăng tin</Link></span> </li>}
                            <li className="user-dropdown-item" ><BiIcons.BiUserPin /> <span><Link to="/profile/user">Trang cá nhân</Link></span> </li>
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
                            <li >
                                <NavLink className="navbar-item" activeClassName="navbar-item-active" to='/terms'>Điều khoản</NavLink>
                            </li>
                        </ul>
                        <DisplayUser user={getUser()} />
                    </div>
                </div>




            </div>
        </>
    )
}

export default index
