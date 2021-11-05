import React, { useEffect, useState } from 'react'
import './style.css'
import Navbar from '../Navbar'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import * as GoIcons from 'react-icons/go'
import * as AiIcons from 'react-icons/ai'
import * as GiIcons from 'react-icons/gi'
import * as BiIcons from 'react-icons/bi'
import * as BsIcons from 'react-icons/bs'
import { Row, Col } from 'react-bootstrap'
import { useHistory, useParams } from 'react-router';
import { getById, getOther } from '../../api/rentItem';
import Loading from '../Loading';
import defaultImage from '../../assets/images/login.png'
import Footer from '../../Components/Footer'
import { Link } from 'react-router-dom';

const PostDetail = () => {
    const id = useParams('id');
    const [idChange, setChange] = useState(id)
    const [rentItem, setRentItem] = useState(null)
    const [other, setOther] = useState(null)

    if (rentItem) {
        getOther(setOther, rentItem.address.province)
    }

    useEffect(() => {
        getById(id.id, setRentItem)  
    }, [idChange])
    

    return (
        <>
            <Navbar />      
            {rentItem ? <Row className="post-detail">
                <Col xl="8">
                    <div className="post-detail-header">
                        <h2 className="post-detail-title">{rentItem.title}</h2>
                        <span className="post-detail-address"><GoIcons.GoLocation /> Địa chỉ: {rentItem.address.detailLocation}</span>
                        <div className="post-detail-rating">
                            <span>Đánh giá:</span>
                            <div className="post-detail-rating-stars">
                                <AiIcons.AiFillStar />
                                <AiIcons.AiFillStar />
                                <AiIcons.AiFillStar />
                                <AiIcons.AiFillStar />
                                <AiIcons.AiOutlineStar />
                            </div>
                        </div>
                    </div>
                    <div className="post-detail-carousel">
                        <Carousel>
                            <div className="carousel-item">
                                <img src={rentItem.imagesAddress.path1} />

                            </div>
                            <div className="carousel-item">
                                <img src={rentItem.imagesAddress.path2} />

                            </div>
                            <div className="carousel-item">
                                <img src={rentItem.imagesAddress.path3} />

                            </div>
                        </Carousel>
                    </div>
                </Col>
                <Col xl="3">
                    <div className="post-detail-user-field">
                        <div className="post-detail-user-avatar">
                            <img src={rentItem.user.imageAddress ? rentItem.user.imageAddress : defaultImage} alt="" />
                        </div>
                        <h2>{rentItem.user.name}</h2>
                        <button className="post-detail-user-button button-phone"><AiIcons.AiFillPhone /> <span>{rentItem.user.phone}</span></button>
                        <a href={rentItem.user.fb}><button className="post-detail-user-button"><AiIcons.AiFillFacebook /><span>Liên lạc qua Facebook</span> </button></a>
                        <a href={rentItem.user.zalo}><button className="post-detail-user-button"><img src="https://phongtro123.com/images/icon-zalo.png" alt="" width="20px" /> <span>Liên lạc qua Zalo</span></button> </a>
                    </div>
                </Col>
                <Col xl="8">
                    <Row className="post-detail-info">
                        <Col xl="5" className="post-detail-info-price">
                            <GiIcons.GiPriceTag />
                            <span>{rentItem.amount} VND/Tháng</span>
                        </Col>
                        <Col xl="3" className="post-detail-info-area">
                            <BiIcons.BiShapeSquare />
                            <span>{rentItem.area} m <sup>2</sup></span>
                        </Col>
                        <Col xl="3" className="post-detail-info-num">
                            <BsIcons.BsPeopleFill />
                            <span>{rentItem.people} người</span>
                        </Col>
                    </Row>
                </Col>
                <Col xl="7" className="detail-section">
                    <h2 className="section-title">Thông tin mô tả</h2>
                    <div class="section-content">
                        {rentItem.description}
                    </div>
                    <h2 className="section-title">Bản đồ</h2>
                    <p>Địa chỉ : {rentItem.address.detailLocation}</p>
                    <div className="section-map">
                        <iframe
                            loading="lazy"
                            src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBT-FcupKSzJG1IuC4ZtNyQ-Qg0rdoY47k&q=${rentItem.address.detailLocation}`}>
                        </iframe>
                    </div>
                   
                </Col>
                <Col xl="4" className="relevant">
                    <div className="relevant-container">
                        <h3 className="relevant-title">Cùng thành phố</h3>
                        <ul className="relevant-list">
                            {other && other.map((_rentItem, index) => {
                                return <li className="relevant-item">
                                <div className="relevant-item-image">
                                    <img src={_rentItem.imagesAddress.path1} alt="" />
                                </div>
                                <div className="relevant-item-content">
                                <Link onClick={() => {
                                    setChange(_rentItem._id)
                                }} to={`/post/${_rentItem._id}`}  ><h5 className="relevant-item-title">{_rentItem.title}</h5></Link> 
                                    <p className="relevant-item-price">
                                        <GiIcons.GiPriceTag />
                                        <span>{_rentItem.amount} VND/Tháng</span>
                                    </p>
                                </div>
                            </li>
                            })}
                        </ul>
                    </div>

                </Col>
                <div className="navbar-login">
                    <button className="login-button">Đặt cọc</button>
                </div>
            </Row>: <Loading/>}
            
            <Footer/>
        </>
    )
}

export default PostDetail
