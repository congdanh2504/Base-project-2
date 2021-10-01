import React from 'react'
import './style.css'
import banner from '../../assets/images/search-banner.jpg'
import CustomSelect from '../CustomSelect'

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];

const index = () => {
    
    return (
        <div className="search-container">
            <div className="search-area">
                <h1>TÌM PHÒNG TRỌ VỪA Ý BẠN </h1>
            <div className="search-dropdown-area">
                <CustomSelect label='Thành phố' opts={options} />
                <CustomSelect label='Loại hình' opts={options} />
                <CustomSelect label='Giá cả'    opts={options} />
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
