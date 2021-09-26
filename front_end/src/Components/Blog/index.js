import React from 'react'
import Card from './Card'
import "./style.css"
const blogList = [
    {
        "title":"101 lý do abcd",
        "image" :"https://wiki.matbao.net/wp-content/uploads/2019/09/blog-la-gi-2-1200x900.jpg",
        "content" : "Tempor fugiat cillum dolor Lorem eu ea commodo quis. Incididunt deserunt voluptate officia cupidatat Lorem magna id commodo sint. Deserunt qui irure nulla amet ut. Ex voluptate non ut do.",
        "author" : "kgasdas",
    },
    {
        "title":"101 lý do abcd",
        "image" :"https://wiki.matbao.net/wp-content/uploads/2019/09/blog-la-gi-2-1200x900.jpg",
        "content" : "Tempor fugiat cillum dolor Lorem eu ea commodo quis. Incididunt deserunt voluptate officia cupidatat Lorem magna id commodo sint. Deserunt qui irure nulla amet ut. Ex voluptate non ut do.",
        "author" : "kgasdas",
    },
    {
        "title":"101 lý do abcd",
        "image" :"https://wiki.matbao.net/wp-content/uploads/2019/09/blog-la-gi-2-1200x900.jpg",
        "content" : "Tempor fugiat cillum dolor Lorem eu ea commodo quis. Incididunt deserunt voluptate officia cupidatat Lorem magna id commodo sint. Deserunt qui irure nulla amet ut. Ex voluptate non ut do.",
        "author" : "kgasdas",
    },
]

const index = () => {
    return (
        <div className="blog-container">
            <h1 className="blog-title">Blog</h1>
            <div className="blogList-container">
            {blogList.map((obj)=>
                <Card obj={obj}/>
            )}
            </div>
            <button className="loadMore">Xem thêm</button>
        </div>
    )
}

export default index
