import React, { useEffect,useState } from 'react'
import './style.css'
import banner from '../../assets/images/search-banner.jpg'
import CustomSelect from '../CustomSelect'
import {getProvinces} from '../../api/api'


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
        <div className="search-container">
            <div className="search-area">
                <h1>TÌM PHÒNG TRỌ VỪA Ý BẠN </h1>
            <div className="search-dropdown-area">
                <CustomSelect label='Thành phố'  opts={provinceOptions}/>
                <CustomSelect label='Loại hình'  />
                <CustomSelect label='Giá cả'     />
                <button className='search-button'><i class="far fa-paper-plane"></i></button>
            </div>
            </div>
            <div className="search-banner">
                <img src={banner} alt="" />
            </div>
        </div>
    )
}

export default Index
