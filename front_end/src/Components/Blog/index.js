import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getBlogs } from '../../api/BlogAPI'
import Card from './Card'
import "./style.css"

const Index = () => {
    const [blogs, setBlogs] = useState(null)
    
    useEffect(() => {
        getBlogs(setBlogs)
    }, [])

    return (
        <div className="blog-container">
            <h1 className="blog-title">Blog</h1>
            <div className="blogList-container">
            
            {blogs && blogs.data.map((obj)=>
                <Card obj={obj}/>
            )}
            </div>
            <Link className="loadMore" to="/blog">Xem thêm</Link>
        </div>
    )
}

export default Index
