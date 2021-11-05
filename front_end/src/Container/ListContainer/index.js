import React, { useEffect, useState } from 'react'
import Navbar from '../../Components/Navbar'
import { Row, Col, Form } from 'react-bootstrap';
import Select from '../../Components/CustomSelect'
import Card from '../../Components/MostRent/Card';
import './style.css'
import { getRentItems } from '../../api/rentItem';
import Pagination from 'react-js-pagination';
import Footer from '../../Components/Footer'
import { getProvinces } from '../../api/api';
import { Loader } from '../../Components/Blog';

const Index = () => {
    const [rentItems, setRentItems] = useState()
    const [provinces, setProvinces] = useState()

    useEffect(() => {
        getRentItems(setRentItems)
        async function fetchProvinces() {
            let response = await getProvinces()
            setProvinces(response)
        }
        fetchProvinces()
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
                            <Select opts={provinces}/>
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>Số người</Form.Label> <br/>
                            <Form.Control type='number'></Form.Control>
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>Dao động giá</Form.Label>
                            <Form.Control type='number'></Form.Control>
                        </Form.Group>
                        <Form.Group as={Col}>
                            <button className='search-button'><i class="far fa-paper-plane"></i></button>
                        </Form.Group>
                        
                    </Col>
                </Form>
                <div className="list-card-container">
                    {(rentItems) ?
                    <Row className="justify-content-center">
                        {rentItems && rentItems.data.map((blog) =>
                            <Card obj={blog} />
                        )}
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
                    </Row> : <Row className="justify-content-center"><Loader /><Loader /></Row>
                }
                </div>

            </div>

            <Footer/>

        </>
    )
}

export default Index
