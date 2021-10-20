import React from 'react'
import Navbar from '../../Components/Navbar'
import { Row, Col, Form } from 'react-bootstrap';
import Select from '../../Components/CustomSelect'
import Card from '../../Components/MostRent/Card';
import './style.css'
const index = () => {
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
    return (
        <>
            <Navbar />
            <div className="content-container">
                <Row className="mt-5">
                    <h1 className="main-content-title">Danh sách phòng trọ</h1>
                </Row>
                <Form as={Row} >
                    <Col xl="10" className="mx-auto list-search-container" as={Row}>
                        <Form.Group as={Col}>
                            <Form.Label>Thành phố</Form.Label>
                            <Select />
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>Quận</Form.Label>
                            <Select />
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>Số người</Form.Label>
                            <Form.Control type='text'></Form.Control>
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>Diện tích</Form.Label>
                            <Form.Control type='text'></Form.Control>
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>Dao động giá</Form.Label>
                            <Select />
                        </Form.Group>
                    </Col>
                </Form>
                <div className="list-card-container">
                    <div className="CardList-container">
                        {list.map((obj) =>
                            <Card obj={obj} />
                        )}
                    </div>
                </div>
            </div>


        </>
    )
}

export default index
