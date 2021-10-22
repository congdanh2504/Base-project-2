import React, { useState, useEffect } from 'react'
import { getProvinces } from '../../api/api'
import './style.css'
import CustomSelect from '../CustomSelect'
import Card from './Card'

const MostRent = () => {
    const list = [
        {
            'title' : "nha pro vjp ehehehe hehehe heheh asdasdasdasd asdasdasdas 1",
            'image' : "https://pix10.agoda.net/hotelImages/9065853/-1/142d78192fda46d5b58e14c9d3f2fe51.jpg?s=1024x768",
            'people' : 2,
            'area' : 100,
            "address" : "asodj oiw ehj rew odsif asdasdas dasd asdsa dasd",
            "price" : 10000000,
        },
        {
            'title' : "nha pro vjp 2 ",
            'image' : "https://pix10.agoda.net/hotelImages/9065853/-1/142d78192fda46d5b58e14c9d3f2fe51.jpg?s=1024x768",
            'people' : 2,
            'area' : 100,
            "address" : "uqwgekwejgqwsldbasdb",
            "price" : 10000000,
        },
        {
            'title' : "nha pro vjp 3",
            'image' : "https://pix10.agoda.net/hotelImages/9065853/-1/142d78192fda46d5b58e14c9d3f2fe51.jpg?s=1024x768",
            'people' : 2,
            'area' : 100,
            "address" : "uqwgekwejgqwsldbasdb",
            "price" : 10000000,
        },
        {
            'title' : "nha pro vjp 4 ",
            'image' : "https://pix10.agoda.net/hotelImages/9065853/-1/142d78192fda46d5b58e14c9d3f2fe51.jpg?s=1024x768",
            'people' : 2,
            'area' : 100,
            "address" : "uqwgekwejgqwsldbasdb",
            "price" : 10000000,
        },
        {
            'title' : "nha pro vjp 5 ",
            'image' : "https://pix10.agoda.net/hotelImages/9065853/-1/142d78192fda46d5b58e14c9d3f2fe51.jpg?s=1024x768",
            'people' : 2,
            'area' : 100,
            "address" : "uqwgekwejgqwsldbasdb",
            "price" : 10000000,
        },
        {
            'title' : "nha pro vjp 6 ",
            'image' : "https://pix10.agoda.net/hotelImages/9065853/-1/142d78192fda46d5b58e14c9d3f2fe51.jpg?s=1024x768",
            'people' : 2,
            'area' : 100,
            "address" : "uqwgekwejgqwsldbasdb",
            "price" : 10000000,
        },
    ]
    const [provinceOptions, changeProvinceOptions] = useState([]);
    useEffect(() => {
        async function fetchProvinces() {
            let response = await getProvinces()
            changeProvinceOptions(response)
        }
        fetchProvinces()
    }, [])
    return (
        <div className='mostRent-container'>
            <h1>Nhà trọ được thuê nhiều</h1>
            <div className="rent-dropdown">
                <CustomSelect label='Thành phố' opts={provinceOptions}/>
            </div>

            <div className="CardList-container">
                {list.map((obj) =>
                    <Card obj={obj} />
                )}
            </div>
        </div>
    )
}

export default MostRent
