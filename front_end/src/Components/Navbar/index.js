import React,{useState} from 'react'
import './style.css'
import logo from '../../assets/images/logo-black.png'
import login from '../../assets/images/login.png'
import {NavLink} from 'react-router-dom'
import Dropdown from './Dropdown'

const dropdownItems = [{'name':'Thuê một người'},{'name':'Thuê nhiều người'}]



function index() {
    return (
        <>
            <div className="navbar-container">
                <NavLink to='/' className="navbar-logo"><img src={logo} alt="logo" /></NavLink>
                    

                <div className="navbar-menu">
                    <ul className="navbar-list">
                        <li >
                            <NavLink  className="navbar-item" activeClassName="navbar-item-active" to='/' exact>Trang Chủ</NavLink>
                        </li>
                        <li className="navbar-item">
                            <Dropdown  title='Thuê Trọ' items={dropdownItems}/>
                        </li>
                        <li >
                            <NavLink  className="navbar-item" activeClassName="navbar-item-active" to='/List' exact>Danh Sách</NavLink>
                        </li>
                        <li >
                            <NavLink  className="navbar-item" activeClassName="navbar-item-active" to='/Blog'>Blog</NavLink>
                        </li>
                        <li >
                            <NavLink  className="navbar-item" activeClassName="navbar-item-active" to='/Post' exact>Đăng Tin</NavLink>
                        </li>
                    </ul>
                </div>
                    <NavLink to='/login' className="navbar-login"><img src={login} alt="" /></NavLink>
            </div>   
        </>
    )
}

export default index
