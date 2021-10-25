import React, { useEffect, useState } from 'react'
import Navbar from '../../Components/Navbar'
import { Row, Col, Form } from 'react-bootstrap';
import Select from '../../Components/CustomSelect'
import Card from '../../Components/MostRent/Card';
import './style.css'
import { getRentItems } from '../../api/rentItem';
import Pagination from 'react-js-pagination';

const Index = () => {
    const [rentItems, setRentItems] = useState()

    useEffect(() => {
        getRentItems(setRentItems)
    }, [])

    return (
        <>
            <Navbar />
            <div className="content-container">
                <Row className="mt-5">
                    <h1 className="main-content-title">Danh sách phòng trọ</h1>
                </Row>
                <Form as={Row}>
                    <Col xl="10" className="mx-auto list-search-container justify-content-center" as={Row}>
                        <Form.Group as={Col}>
                            <Form.Label>Thành phố</Form.Label>
                            <Select />
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>Quận</Form.Label>
                            <Select />
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>Số người</Form.Label> <br/>
                            <Form.Control type='text'></Form.Control>
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>Diện tích</Form.Label> <br/>
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
                        {rentItems && rentItems.data.map((obj) =>
                            <Card obj={obj} />
                        )}
                    </div>
                    {rentItems && <div className="row mt-3 justify-content-center">
                        <Pagination
                            activePage={rentItems.current_page}
                            itemsCountPerPage={rentItems.per_page}
                            totalItemsCount={rentItems.total}
                            pageRangeDisplayed={5}
                            onChange={(num) => getRentItems(setRentItems, num)}
                            itemClass="page-item"
                            linkClass="page-link"
                            firstPageText="First"
                            lastPageText="Last"
                        />
                    </div>
                    }
                </div>

            </div>


        </>
    )
}

export default Index
