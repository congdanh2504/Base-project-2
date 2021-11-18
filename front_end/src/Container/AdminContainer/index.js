import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo-white.png'
import { Row, Col } from 'react-bootstrap';
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import { SidebarData } from './SidebarData' 
import { Router, Switch, Route, useRouteMatch } from 'react-router-dom'
import ManageUser from './ManageUser';
import ManageBlog from './ManageBlog';
import ManagePost from './ManagePost';
import "./style.css"
const Index = () => {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);
    let { path, url } = useRouteMatch();
    return (
        <div className="admin-page-container">
            <Row className="navbar" >
                <Col className="left" as={Row}>
                    <Link to="/" className="navbar-logo" id="admin-nav-logo">
                        <img src={logo} alt="" />
                    </Link>
                    <Col className="sidebar-icon">
                        <FaIcons.FaBars onClick={showSidebar} />
                    </Col>
                </Col>

                <Col  className="right">
                    <div className="searchbar-container">
                        <div className="searchbar" >
                            <AiIcons.AiOutlineSearch />
                            <input type="text" name="" id="" placeholder="Type to search" />
                        </div>
                    </div>
                </Col>
            </Row>
            <Row className="admin-mainpage">
                <Col xl="1" className={sidebar ? "sidebar active" : "sidebar"}>
                    <div className="sidebar-background"></div>
                    <ul className="sidebar-items">
                        {SidebarData.map((item, index) => {
                            return (
                                <li key={index} className="sidebar-item">
                                    <Link activeClassName="navbar-item-active" to={`${url + item.path}`}>{item.icon} <span>{item.label}</span></Link>
                                </li>
                            )
                        })}
                    </ul>
                </Col>

                <Col className={sidebar ? "admin-page on" : "admin-page"}>
                    <Switch>
                        <Route path={`${url}/manageUser`} component={ManageUser} />
                        <Route path={`${url}/manageBlog`} component={ManageBlog} />
                        <Route path={`${url}/managePost`} component={ManagePost} />
                    </Switch>

                </Col>
            </Row>


        </div>

    )
}

export default Index;
