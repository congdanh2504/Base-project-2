import React from 'react'
import { Row, Col } from 'react-bootstrap';
import Navbar from '../../Components/Navbar'
import { Link } from 'react-router-dom';
import "./style.css"
const blogButton = {
    width: "120px",
    height: "40px",
    borderRadius: "13px",
    border: "none",
    cursor: "pointer",
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
    // position:"absolute",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e3e3e3",
    float: "right",
}
const blogContainer = {
    margin: "50px 10px"
}
const imageHeight = {
    height: "400px"
}
const index = () => {
    return (
        <div>
            <Navbar />
            <Row style={blogContainer}>
                <Col xs="10"><h1>Blog</h1></Col>
                <Col ><Link style={blogButton} to="postBlog"><i class="fas fa-plus-square"></i>&#160; Đăng blog</Link></Col>
            </Row>
            <Row className="my-4">
                <Col xs="12" as={Row} style={imageHeight}>
                    <Col xs="6" className="object-contain">
                        <img src="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg" alt="" />
                    </Col>
                    <Col xs="6" className="px-5">
                        <p>Bởi <Link to="/">asdasd</Link></p>
                        <h1 className="blog-main-title">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
                        <p className="text-overflow-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, impedit deleniti, ipsa necessitatibus maiores possimus ratione voluptatem iste illum consequuntur enim, incidunt ex fugiat inventore expedita libero magnam! Inventore, omnis?
                            Iusto eius ad delectus, cumque tempore, amet ea, unde fugiat quia quibusdam ab magnam incidunt quam totam. Rerum iusto similique sequi molestiae fuga at dolorem minus, praesentium porro corporis possimus.</p>
                    </Col>
                </Col>
            </Row>
            <Row>
                
                <Col xs="4" className="my-5">
                    <Link to="/">
                        <div>
                            <div className="object-contain">
                                <img src="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg" alt="" />
                            </div>
                            <div className="blog-sub-content mt-3">
                                <p>Bởi <Link to="/">asdasd</Link></p>
                                <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
                                <p className="text-overflow-4 mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, impedit deleniti, ipsa necessitatibus maiores possimus ratione voluptatem iste illum consequuntur enim, incidunt ex fugiat inventore expedita libero magnam! Inventore, omnis?
                                    Iusto eius ad delectus, cumque tempore, amet ea, unde fugiat quia quibusdam ab magnam incidunt quam totam. Rerum iusto similique sequi molestiae fuga at dolorem minus, praesentium porro corporis possimus.</p>
                            </div>
                        </div>
                    </Link>
                </Col>
                <Col xs="4" className="my-5">
                    <Link to="/">
                        <div>
                            <div className="object-contain">
                                <img src="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg" alt="" />
                            </div>
                            <div className="blog-sub-content mt-3">
                                <p>Bởi <Link to="/">asdasd</Link></p>
                                <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
                                <p className="text-overflow-4 mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, impedit deleniti, ipsa necessitatibus maiores possimus ratione voluptatem iste illum consequuntur enim, incidunt ex fugiat inventore expedita libero magnam! Inventore, omnis?
                                    Iusto eius ad delectus, cumque tempore, amet ea, unde fugiat quia quibusdam ab magnam incidunt quam totam. Rerum iusto similique sequi molestiae fuga at dolorem minus, praesentium porro corporis possimus.</p>
                            </div>
                        </div>
                    </Link>
                </Col>
                <Col xs="4" className="my-5">
                    <Link to="/">
                        <div>
                            <div className="object-contain">
                                <img src="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg" alt="" />
                            </div>
                            <div className="blog-sub-content mt-3">
                                <p>Bởi <Link to="/">asdasd</Link></p>
                                <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
                                <p className="text-overflow-4 mt-2">quam totam. Rerum iusto similique sequi molestiae fuga at dolorem minus, praesentium porro corporis possimus.</p>
                            </div>
                        </div>
                    </Link>
                </Col>
                <Col xs="4" className="my-5">
                    <Link to="/">
                        <div>
                            <div className="object-contain">
                                <img src="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg" alt="" />
                            </div>
                            <div className="blog-sub-content mt-3">
                                <p>Bởi <Link to="/">asdasd</Link></p>
                                <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
                                <p className="text-overflow-4 mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, impedit deleniti, ipsa necessitatibus maiores possimus ratione voluptatem iste illum consequuntur enim, incidunt ex fugiat inventore expedita libero magnam! Inventore, omnis?
                                    Iusto eius ad delectus, cumque tempore, amet ea, unde fugiat quia quibusdam ab magnam incidunt quam totam. Rerum iusto similique sequi molestiae fuga at dolorem minus, praesentium porro corporis possimus.</p>
                            </div>
                        </div>
                    </Link>
                </Col>
                <Col xs="4" className="my-5">
                    <Link to="/">
                        <div>
                            <div className="object-contain">
                                <img src="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg" alt="" />
                            </div>
                            <div className="blog-sub-content mt-3">
                                <p>Bởi <Link to="/">asdasd</Link></p>
                                <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
                                <p className="text-overflow-4 mt-2">dm consequuntur enim, incidunt ex fugiat inventore expedita libero magnam! Inventore, omnis?
                                    </p>
                            </div>
                        </div>
                    </Link>
                </Col>
                <Col xs="4" className="my-5">
                    <Link to="/">
                        <div>
                            <div className="object-contain">
                                <img src="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg" alt="" />
                            </div>
                            <div className="blog-sub-content mt-3">
                                <p>Bởi <Link to="/">asdasd</Link></p>
                                <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
                                <p className="text-overflow-4 mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, impedit deleniti, ipsa necessitatibus maiores possimus ratione voluptatem iste illum consequuntur enim, incidunt ex fugiat inventore expedita libero magnam! Inventore, omnis?
                                    </p>
                            </div>
                        </div>
                    </Link>
                </Col>
                
            </Row>

        </div>
    )
}

export default index;
