import React, { useState } from 'react'
import { CKEditor } from 'ckeditor4-react';
import { Alert, Form, Row, Col } from 'react-bootstrap';
import { Blog } from '../../model/Blog';
import { addBlog } from '../../api/post';
import Navbar from '../../Components/Navbar'
import BlogCard from '../Blog/Card'

const Index = () => {
    const [title, setTitle] = useState(null);
    const [description, setDescription] = useState(null)
    const [image, setImage] = useState(null)
    const [content, setContent] = useState(null)
    const [message, setMessage] = useState(null)

    const changeTitle = (param) => {
        setTitle(param.target.value)
    }

    const changeDescription = (param) => {
        setDescription(param.target.value)
    }

    const changeContent = (param) => {
        setContent(param.editor.getData())
    }

    const changeImage = (param) => {
        setImage(param.target.files[0])
    }

    const submit = () => {
        const blog = new Blog(title, description, image, content)
        addBlog(blog, setMessage)
    }
    const object = {
        __id : " ",
        "user" : {
            "name" : ''
        },
        "imageAddress" : image,
        "title" :title,
        "description" :description

    }
    return (
        <>
            {/* <div>
            <Navbar />
            
        </div> */}
            <Navbar />
            <div className="content-container">
                <Row className="mt-5">
                    <h1>Tạo blog cho riêng bạn</h1>
                </Row>
                <Row className="mt-4">
                    <Col md="7">
                        <Form.Group className="my-3">
                            <Form.Label className="px-3">Tiêu đề</Form.Label>    <br />
                            <Form.Control type="text" className="post-input" onChange={changeTitle} />
                        </Form.Group>
                        <Form.Group className="my-3">
                            <Form.Label className="px-3">Mô tả</Form.Label>  <br />
                            <Form.Control type="textarea" className="post-input" onChange={changeDescription} />
                        </Form.Group>
                        <Form.Group className="my-3">
                            <Form.Label className="px-3">Ảnh</Form.Label>    <br />
                            <Form.Control type="file" className="post-input mb-2 col-xl-6" onChange={changeImage} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Nội dung</Form.Label>   <br />
                            <CKEditor onChange={changeContent} />
                        </Form.Group>
                        
                        {message && <Alert variant="info"><Alert.Heading>{message}</Alert.Heading></Alert>}
                        <Form.Group className="my-3">
                            <Form.Control type="submit" onClick={submit} className="post-input save-button mb-2 col-xl-12" />
                        </Form.Group>
                    </Col>
                    <Col >
                        <BlogCard obj={object}/>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default Index
