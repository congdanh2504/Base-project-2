import React, { useEffect, useState } from 'react'
import { Row, Col, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { deleteBlog, editBlog, getUserBlogs } from '../../api/BlogAPI'
import Moment from 'react-moment'
import Pagination from 'react-js-pagination'
import Modal from 'react-modal';
import { CKEditor } from 'ckeditor4-react'
import { Blog } from '../../model/Blog'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProfileBlog = () => {
    const [blogs, setBlogs] = useState(null)
    const [modalIsOpenEdit, setIsOpenEdit] = useState(false);
    const [modalIsOpenDelete, setIsOpenDelete] = useState(false);
    const [idDelete, setIdDelete] = useState(null)
    const [id, setID] = useState(null)
    const [title, setTitle] = useState(null)
    const [description, setDescription] = useState(null)
    const [content, setContent] = useState(null)
    const customStylesEdit = {
        content: {
            height: "70%",
            width: "70%",
            top: '55%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            position: 'absolute',
            zIndex: '10',
            overflowY: 'scroll'
        },    
    };

    const customStylesDelete = {
        content: {
            top: '55%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            position: 'absolute',
            zIndex: '10',
        },    
    };

    const changeTitle = (param) => {
        setTitle(param.target.value)
    }

    const changeDescription = (param) => {
        setDescription(param.target.value)
    }

    const changeContent = (param) => {
        setContent(param.editor.getData())
    }

    const submit = async () => {
        const blog = new Blog(title, description, null, content)
        await editBlog(id, blog, toast)
        await getUserBlogs(setBlogs)
        setIsOpenEdit(false)
    }

    useEffect(() => {
        getUserBlogs(setBlogs)
    },[])

    return (
        <>

        <div className="profile-container">
            <ToastContainer/>
            <Modal
                isOpen={modalIsOpenEdit}
                onRequestClose={() => setIsOpenEdit(false)}
                style={customStylesEdit}
            >
                <div className="post-desc col-xl-12">
                <h1>Sửa blog</h1>  
                <Form.Group as={Row} className="my-3">
                    <Form.Control onChange={changeTitle} defaultValue={title} placeholder="Tiêu đề" type="text" className="post-input"/>
                </Form.Group>
                <Form.Group as={Row} className="my-3">
                    <Form.Control onChange={changeDescription} defaultValue={description} placeholder="Mô tả" type="text" className="post-input"/>
                </Form.Group>
                <CKEditor onChange={changeContent} initData={content} />
                <button onClick={submit} className="login-button">Xác nhận</button>
                </div>
                
            </Modal>
            <Modal
                isOpen={modalIsOpenDelete}
                onRequestClose={() => setIsOpenDelete(false)}
                style={customStylesDelete}
            >
                <h1>Bạn có chắc chắn muốn xóa?</h1>
                <button onClick={async () =>  {
                    await deleteBlog(idDelete, toast)
                    await getUserBlogs(setBlogs)
                    setIsOpenDelete(false)
                }} className="login-button">Xác nhận</button>
                <button onClick={() => setIsOpenDelete(false)} className="login-button">Hủy</button>
            </Modal>
            <Row>
                <h1 className="profile-title">Quản lý blog</h1>
            </Row>
            <div className="table-container">
                <table className="table-blog">
                    <tr>
                        <th>Tiêu đề</th>
                        <th>Ảnh nền</th>
                        <th>Ngày đăng bài</th>
                        <th>Link</th>
                        <th></th>
                        <th></th>
                    </tr>
                    {blogs && blogs.data[0].map((blog, index) => {
                        return <tr>
                            <td>{blog.title}</td>
                            <td className="profile-table-image"><img src={blog.imageAddress} alt="" /></td>
                            <td><Moment format="YYYY/MM/DD">
                            {blog.created_at}
                            </Moment></td>
                            <td><Link to={`/blog/${blog._id}`}>Dẫn đến bài viết</Link></td>
                            <td><button onClick={() => {
                                setIdDelete(blog._id)
                                setIsOpenDelete(true)
                            }} className="user-item-delete">Xóa</button></td>  
                            <td><button onClick={() => {
                                setID(blog._id)
                                setTitle(blog.title)
                                setDescription(blog.description)
                                setContent(blog.content)
                                setIsOpenEdit(true)
                            }} className="user-item-edit">Sửa</button></td>                      
                        </tr>
                    })}
                </table>
                {blogs && <Pagination
                    activePage={blogs.current_page}
                    itemsCountPerPage={blogs.per_page}
                    totalItemsCount={blogs.total}
                    pageRangeDisplayed={5}
                    onChange={(num) => getUserBlogs(setBlogs, num)}
                    itemClass="page-item"
                    linkClass="page-link"
                    firstPageText="First"
                    lastPageText="Last"
                />}
                
            </div>

        </div>

        </>
    )
}

export default ProfileBlog
