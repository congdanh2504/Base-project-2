import React, { useEffect, useState } from 'react'
import CustomSelect from '../CustomSelect'
import "./style.css"
import { Container, Row, Col, Form } from 'react-bootstrap';
import { getDistricts, getProvinces, getWards } from '../../api/api'

const PostForm = () => {

    const [provinceOptions, changeProvinceOptions] = useState([]);
    const [districtOptions, changeDistrictOptions] = useState([]);
    const [wardOptions, changeWardOptions] = useState([]);
    const [province, changeProvince] = useState("");
    const updateProvince = (param) => {
        changeProvince(param.label)
        async function fetchDistricts() {
            let response = await getDistricts(param.value)
            changeDistrictOptions(response)
        }
        fetchDistricts()
    }

    const [district, changeDistrict] = useState("");
    const updateDistrict = (param) => {
        changeDistrict(param.label)
        async function fetchWards() {
            let response = await getWards(param.value)
            changeWardOptions(response)
        }
        fetchWards()
    }

    const [ward, changeWard] = useState("");
    const updateWard = (param) => changeWard(param.label)
    const [street, changeStreet] = useState("");
    const updateStreet = (param) => changeStreet(param.target.value)
    const [num, changeNum] = useState("");
    const updateNum = (param) => changeNum(param.target.value)
    var defaultLocation = `${num},${street},${ward},${district},${province},viet_nam`;

    useEffect(() => {
        async function fetchProvinces() {
            let response = await getProvinces()
            changeProvinceOptions(response)
        }
        fetchProvinces()
    }, [])

    return (
        <div className="content-container">
            <Form action=" " className="post-form" as={Row}>
                <Row className="my-5">
                    <h1 className="main-content-title">Đăng bài</h1>
                </Row>
                <Container className="post-address col-xl-12" as={Col}>
                    <Row >
                        <h2 className="px-4">Địa chỉ cho thuê</h2>
                    </Row>

                    <Row className="post-address-row">
                        <Col className="post-address-detail" md={6}>
                            <Col className="post-address-col">
                                <CustomSelect label="Tỉnh/Thành phố" onChange={updateProvince} opts={provinceOptions} />
                            </Col>
                            <Col className="post-address-col">
                                <CustomSelect label="Quận/Huyện" onChange={updateDistrict} opts={districtOptions} />
                            </Col>
                            <Col className="post-address-col">
                                <CustomSelect label="Phường/Xã" onChange={updateWard} opts={wardOptions} />
                            </Col>
                            <Col className="post-address-col">
                                <input type="text" placeholder="Đường/Phố" id="post-address-input" onChange={updateStreet} />
                            </Col>
                            <Col className="post-address-col">
                                <input type="text" placeholder="Số nhà" id="post-address-input" onChange={updateNum} />
                            </Col>

                        </Col>

                        <Col className="map">
                            <iframe
                                loading="lazy"
                                src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBT-FcupKSzJG1IuC4ZtNyQ-Qg0rdoY47k&q=${defaultLocation}`}>
                            </iframe>
                        </Col>
                    </Row>
                </Container>
                <div className="post-desc col-xl-6 px-3"  >
                    <Row className="my-3">
                        <h2 className="px-4">Thông tin mô tả</h2>
                    </Row>
                    <Form.Group as={Row} className="my-3">
                        <Form.Label>Tiêu đề</Form.Label>
                        <Form.Control type="text" className="post-input" />
                    </Form.Group>

                    <Form.Group as={Row} className="my-3">
                        <Form.Label>Loại hình</Form.Label>
                        <CustomSelect />
                    </Form.Group>

                    <Form.Group as={Row} className="my-3">
                        <Form.Label>Nội dung mô tả</Form.Label>
                        <Form.Control as="textarea" className="post-input post-textarea" />
                    </Form.Group>

                    <Form.Group as={Row} className="my-3">
                        <Form.Label>Thông tin liên hệ</Form.Label>
                        <Form.Control type="text" placeholder="Số điện thoại" className="post-input mb-2 col-xl-6" />
                        <Form.Control type="text" placeholder="Email" className="post-input col-xl-6" />
                    </Form.Group>

                    <Form.Group as={Row} className="my-3">
                        <Form.Label>Giá cho thuê(VND/Tháng)</Form.Label>
                        <Form.Control type="text" className="post-input mb-2 col-xl-6" placeholder="VD: 10000000" />
                    </Form.Group>
                    <Form.Group as={Row} className="my-3">
                        <Form.Label>Diện tích(m<sup>2</sup>)</Form.Label>
                        <Form.Control type="text" className="post-input mb-2 col-xl-6" placeholder="VD: 50" />
                    </Form.Group>
                    <Form.Group as={Row} className="my-3">
                        <Form.Label>Hình ảnh</Form.Label>
                        <Form.Control type="file" className="post-input mb-2 col-xl-6" multiple />
                        <Form.Text>Dùng nút <kbd>Shift</kbd> hoặc <kbd>Ctrl</kbd> để chọn nhiều ảnh</Form.Text>
                    </Form.Group>
                    <Form.Group as={Row} className="my-3">
                        <Form.Control type="submit" className="post-input mb-2 col-xl-12" />
                    </Form.Group>

                </div>

            </Form>
        </div>


    )
}
const index = () => {
    return (
        <div>
            <PostForm />
        </div>
    )
}

export default index
