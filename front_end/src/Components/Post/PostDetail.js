import React from 'react'
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

const PostDetail = ({ item }) => {
    return (
        <>
            <Navbar />
            <Row className="post-detail">
                <Col xl="8">
                    <div className="post-detail-header">
                        <h2 className="post-detail-title">{item.title}</h2>
                        <span className="post-detail-address"><GoIcons.GoLocation /> Địa chỉ: {item.address}</span>
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
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png" />

                            </div>
                            <div className="carousel-item">
                                <img src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80" />

                            </div>
                            <div className="carousel-item">
                                <img src="https://ix-www.imgix.net/hp/snowshoe.jpg?q=70&w=1800&auto=compress%2Cenhance&fm=jpeg" />

                            </div>
                        </Carousel>
                    </div>
                </Col>
                <Col xl="3">
                    <div className="post-detail-user-field">
                        <div className="post-detail-user-avatar">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg" alt="" />
                        </div>
                        <h2>Nguyễn Abc Dfuk</h2>
                        <button className="post-detail-user-button button-phone"><AiIcons.AiFillPhone /> <span>0564321354</span></button>
                        <button className="post-detail-user-button"><AiIcons.AiFillFacebook /><span>Liên lạc qua Facebook</span> </button>
                        <button className="post-detail-user-button"><img src="https://phongtro123.com/images/icon-zalo.png" alt="" width="20px" /> <span>Liên lạc qua Zalo</span></button>
                    </div>
                </Col>
                <Col xl="8">
                    <Row className="post-detail-info">
                        <Col xl="5" className="post-detail-info-price">
                            <GiIcons.GiPriceTag />
                            <span>1.000.000 VND/Tháng</span>
                        </Col>
                        <Col xl="3" className="post-detail-info-area">
                            <BiIcons.BiShapeSquare />
                            <span>20m <sup>2</sup></span>
                        </Col>
                        <Col xl="3" className="post-detail-info-num">
                            <BsIcons.BsPeopleFill />
                            <span>2 người</span>
                        </Col>
                    </Row>
                </Col>
                <Col xl="7" className="detail-section">
                    <h2 className="section-title">Thông tin mô tả</h2>
                    <div class="section-content">
                        <p> Phòng ngay hẻm 82 Nguyễn Xí - Hẻm lớn yên tĩnh</p>
                        <p>_Vivu Homes_</p>
                        <p>Khu vực gần nhiều chợ, trương học, ngân hàng.</p>
                        <p>Thuận tiện di chuyển làm việc ở các quận .</p>
                        <p>Khu vực an toàn, yên tĩnh để nghỉ ngơi.</p>
                        <p>Giờ giấc tự do, an ninh cao.</p>
                        <p>Camera quan sát các lầu.</p>
                        <p>Bảo vệ bên mình ở đó 24/7 tài sản của bạn sẽ luôn được an toàn</p>
                        <p>__________________</p>
                        <p>Giá Phòng: 2tr2/tháng</p>
                        <p>️ Điện: 3.5k/số ( nhiều chỗ giờ ngta lên 4k ròi, nhưng bên mình vẫn hỗ trợ giá này )</p>
                        <p> Nước: 18k/m3</p>
                        <p>???? Rác/vệ sinh: 40k/phòng</p>
                        <p> Wifi: 100k/ phòng ( 1 ng ở sẽ đc free )</p>
                        <p> Xe: 130k/ chiếc. Bảo vệ coi xe an toàn, lễ tết để xe không tăng giá.</p>
                        <p>__________________</p>
                        <p>Địa chỉ: 82/12 Nguyễn Xí, Phường 26, Quận Bình Thạnh</p>
                        <p>Liên hệ mình để xem phòng hoàn toàn miễn phí</p>
                    </div>
                    <h2 className="section-title">Bản đồ</h2>
                    <p>Địa chỉ : {item.address}</p>
                    <div className="section-map">
                        <iframe
                            loading="lazy"
                            src='https://www.google.com/maps/embed/v1/place?key=AIzaSyBT-FcupKSzJG1IuC4ZtNyQ-Qg0rdoY47k&q=da+nang'>
                        </iframe>
                    </div>

                </Col>
                <Col xl="4" className="relevant">
                    <div className="relevant-container">
                        <h3 className="relevant-title">Cùng thành phố</h3>
                        <ul className="relevant-list">
                            <li className="relevant-item">
                                <div className="relevant-item-image">
                                    <img src="https://www.w3schools.com/w3images/lights.jpg" alt="" />
                                </div>
                                <div className="relevant-item-content">
                                    <h5 className="relevant-item-title">sakjdhsajkd kajdk jah asdsdasd akdhksjh kajdh kajdh</h5>
                                    <p className="relevant-item-price">
                                        <GiIcons.GiPriceTag />
                                        <span>1.000.000 VND/Tháng</span>
                                    </p>
                                </div>
                            </li>
                            <li className="relevant-item">
                                <div className="relevant-item-image">
                                    <img src="https://www.w3schools.com/w3images/lights.jpg" alt="" />
                                </div>
                                <div className="relevant-item-content">
                                    <h5 className="relevant-item-title">sakjdhsajkd kajdk jah asdsdasd akdhksjh kajdh kajdh</h5>
                                    <p className="relevant-item-price">
                                        <GiIcons.GiPriceTag />
                                        <span>1.000.000 VND/Tháng</span>
                                    </p>
                                </div>
                            </li>
                            <li className="relevant-item">
                                <div className="relevant-item-image">
                                    <img src="https://www.w3schools.com/w3images/lights.jpg" alt="" />
                                </div>
                                <div className="relevant-item-content">
                                    <h5 className="relevant-item-title">sakjdhsajkd kajdk jah asdsdasd akdhksjh kajdh kajdh</h5>
                                    <p className="relevant-item-price">
                                        <GiIcons.GiPriceTag />
                                        <span>1.000.000 VND/Tháng</span>
                                    </p>
                                </div>
                            </li>
                            <li className="relevant-item">
                                <div className="relevant-item-image">
                                    <img src="https://www.w3schools.com/w3images/lights.jpg" alt="" />
                                </div>
                                <div className="relevant-item-content">
                                    <h5 className="relevant-item-title">sakjdhsajkd kajdk jah asdsdasd akdhksjh kajdh kajdh</h5>
                                    <p className="relevant-item-price">
                                        <GiIcons.GiPriceTag />
                                        <span>1.000.000 VND/Tháng</span>
                                    </p>
                                </div>
                            </li>
                            <li className="relevant-item">
                                <div className="relevant-item-image">
                                    <img src="https://www.w3schools.com/w3images/lights.jpg" alt="" />
                                </div>
                                <div className="relevant-item-content">
                                    <h5 className="relevant-item-title">sakjdhsajkd kajdk jah asdsdasd akdhksjh kajdh kajdh kasghdjhsg ajsdgajhgs jhag ajkh gsdjk </h5>
                                    <p className="relevant-item-price">
                                        <GiIcons.GiPriceTag />
                                        <span>1.000.000 VND/Tháng</span>
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>

                </Col>
            </Row>

        </>
    )
}

export default PostDetail
