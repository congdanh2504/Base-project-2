import React from 'react'
import './style.css'
import banner from '../../assets/images/search-banner.jpg'
import Dropdown from '../Dropdown'

const options = {

}

const index = () => {
    return (
        <div className="search-container">
            <div className="search-area">
                <h1>TÌM PHÒNG TRỌ VỪA Ý BẠN </h1>
            <div className="search-dropdown-area">
                <Dropdown label='Thành phố'  />
                <Dropdown label='Loại hình'  />
                <Dropdown label='Giá cả'  />
                <button className='search-button'><i class="far fa-paper-plane"></i></button>
            </div>
            </div>
            <div className="search-banner">
                <img src={banner} alt="" />
            </div>
        </div>
    )
}

export default index
