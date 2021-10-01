import React from 'react'
import './style.css'
import CustomSelect from '../CustomSelect'
import CardList from './CardList'
const MostRent = () => {
    console.log(<CardList></CardList>)
    return (
        <div className='mostRent-container'>
            <h1>Nhà trọ được thuê nhiều</h1>
            <div className="rent-dropdown">
                <CustomSelect label='Thành phố' />
            </div>
            
            <CardList/>
        </div>
    )
}

export default MostRent
