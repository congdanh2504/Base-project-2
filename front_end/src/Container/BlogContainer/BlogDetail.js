import React, { useEffect, useState } from 'react'
import Navbar from '../../Components/Navbar'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import defaultImage from '../../assets/images/login.png'
import { useParams } from 'react-router'
import * as AiIcons from 'react-icons/ai'
import { getById } from '../../api/BlogAPI'
import Loading from '../../Components/Loading'
import Footer from '../../Components/Footer'
import Moment from 'react-moment'

const BlogDetail = () => {
    const [blog, setBlog] = useState(null)
    const id = useParams('id')

    useEffect(() => {
        getById(id.id, setBlog)
    }, [])

    const [heartState, setHeartState] = useState(false);
    const changeHeartState = () => setHeartState(!heartState);
    return (
        <>
            <Navbar />
            {blog?<Row className="blog-detail-container">
                <Col xl="8" className="blog-detail-content">
                    <div className="blog-detail-info">
                        <div className="left">
                            <div className="blog-detail-author">
                                <div className="author-image">
                                    <img src={blog.user.imageAddress ? blog.user.imageAddress : defaultImage} alt="" />
                                </div>
                                <div className="author-info">
                                    <Link to="/"> {blog.user.name} </Link>
                                    <span onClick={changeHeartState}>{(heartState) ? <AiIcons.AiFillHeart /> : <AiIcons.AiOutlineHeart />} 1234</span>
                                </div>
                            </div>
                        </div>
                        <div className="right">
                            <span>Đăng ngày : <Moment format="YYYY/MM/DD">
                            {blog.created_at}
                            </Moment></span>
                            <span><AiIcons.AiOutlineEye /> {blog.views}</span>
                        </div>
                    </div>
                    <article class="blog-article">
                        <div dangerouslySetInnerHTML={{ __html: blog.content }}></div>
                    </article>
                </Col>
                <Col xl="3" className="blog-detail-side">
                    <div className="blog-detail-side-1">
                        <h3>Có thể bạn quan tâm</h3>
                        <ul className="side-1-list">
                            <li className="side-1-item">
                                <Link to="/">&gt; lkasdkjsahdkjasdhasdsad adasd as dasd as dasdas ds</Link>
                            </li>
                            <li className="side-1-item">
                                <Link to="/">&gt; lkasdkjsahdkjasdh</Link>
                            </li>
                            <li className="side-1-item">
                                <Link to="/">&gt; lkasdkjsahdkjasdh</Link>
                            </li>
                            <li className="side-1-item">
                                <Link to="/">&gt; lkasdkjsahdkjasdh</Link>
                            </li>
                            <li className="side-1-item">
                                <Link to="/">&gt; lkasdkjsahdkjasdh</Link>
                            </li>
                        </ul>
                    </div>
                </Col>
            </Row>:<Loading/>}
            <Footer/>
        </>
    )
}

export default BlogDetail
