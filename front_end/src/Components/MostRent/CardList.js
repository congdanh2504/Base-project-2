import React from 'react'
import Card from './Card'
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


const CardList = () => {

    return (
        <div className="CardList-container">
            {list.map((obj) => 
                <Card obj={obj}/>
            )}
        </div>
    )
}

export default CardList;
