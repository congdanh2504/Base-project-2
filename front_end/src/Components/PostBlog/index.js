import React, { useState } from 'react'
import { CKEditor } from 'ckeditor4-react';
import { Alert, Form } from 'react-bootstrap';
import { Blog } from '../../model/Blog';
import { addBlog } from '../../api/post';
import Navbar from '../../Components/Navbar'

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

    return (
        <div>
            {/* <Navbar /> */}
            <Form.Group className="my-3">
                <Form.Label>Tiêu đề</Form.Label>
                <Form.Control type="text" className="post-input" onChange={changeTitle}/>
            </Form.Group>
            <Form.Group className="my-3">
                <Form.Label>Mô tả</Form.Label>
                <Form.Control type="textarea" className="post-input" onChange={changeDescription}/>
            </Form.Group>
            <Form.Group className="my-3">
                <Form.Label>Ảnh</Form.Label>
                <Form.Control type="file" className="post-input mb-2 col-xl-6" onChange={changeImage}/>
            </Form.Group>
            <CKEditor onChange={changeContent} />
            {message && <Alert variant="info"><Alert.Heading>{message}</Alert.Heading></Alert>}
            <Form.Group className="my-3">
                <Form.Control type="submit" onClick={submit} className="post-input mb-2 col-xl-12" />
            </Form.Group>
        </div>
    )
}

export default Index
