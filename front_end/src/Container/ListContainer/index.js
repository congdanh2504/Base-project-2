import React from 'react'
import Navbar from '../../Components/Navbar'
import { Row, Col, Form } from 'react-bootstrap';
import Select from '../../Components/CustomSelect'
import CardList from '../../Components/MostRent/CardList'
import './style.css'
const index = () => {
    return (
        <div>
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
                    <CardList />
                </div>
            </div>


        </div>
    )
}

export default index
