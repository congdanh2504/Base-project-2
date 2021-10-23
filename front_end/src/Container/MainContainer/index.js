import React, { useState, useEffect } from 'react'
import './style.css'
import MostRent from '../../Components/MostRent'
import Navbar from '../../Components/Navbar'
import banner from '../../assets/images/search-banner.jpg'
import CustomSelect from '../../Components/CustomSelect'
import { getProvinces } from '../../api/api'
import Blog from '../../Components/Blog'
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


const Index = () => {
    const [provinceOptions, changeProvinceOptions] = useState([]);
    useEffect(() => {
        async function fetchProvinces() {
            let response = await getProvinces()
            changeProvinceOptions(response)
        }
        fetchProvinces()
    }, [])
    return (
        <>
            <Navbar />

            <div className="search-container">
                <div className="search-area">
                    <h1>TÌM PHÒNG TRỌ VỪA Ý BẠN </h1>
                    <div className="search-dropdown-area">
                        <CustomSelect label='Thành phố' opts={provinceOptions} />
                        <CustomSelect label='Loại hình' />
                        <CustomSelect label='Giá cả' />
                        <button className='search-button'><i class="far fa-paper-plane"></i></button>
                    </div>
                </div>
                <div className="search-banner">
                    <img src={banner} alt="" />
                </div>
            </div>

            <MostRent />

            <Blog />
            
        </>
    )
}

export default Index
