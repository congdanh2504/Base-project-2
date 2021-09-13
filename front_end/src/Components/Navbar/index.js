import React,{useState} from 'react'
import './style.css'
import logo from '../../assets/images/logo.png'
import login from '../../assets/images/login.png'
import {Link} from 'react-router-dom'
import Dropdown from './Dropdown'
const items = [{'name':'Thuê một người'},{'name':'Thuê nhiều người'}]



function index() {
    return (
        <>
            <div className="navbar-container">
                <Link to='/' className="navbar-logo"><img src={logo} alt="logo" /></Link>
                    

                <div className="navbar-menu">
                    <ul className="navbar-list">
                        <li className="navbar-item active">
                            <Link to='/'>Trang Chủ</Link>
                        </li>
                        <li className="navbar-item">
                            <Dropdown title='Thuê Trọ' items={items}/>
                        </li>
                        <li className="navbar-item">
                            <Link to='/'>Danh Sách</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to='/'>Blog</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to='/'>Đăng Tin</Link>
                        </li>
                    </ul>
                </div>
                    <Link to='/' className="navbar-login"><img src={login} alt="" /></Link>
            </div>   
        </>
    )
}

export default index
