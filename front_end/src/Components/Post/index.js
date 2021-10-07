import React from 'react'
import { useState } from 'react/cjs/react.development';
import CustomSelect from '../CustomSelect'
import "./style.css"
import { Container,Row,Col,Form} from 'react-bootstrap';

const options = [
    { value: 'da nang', label: 'da nang' },
    { value: 'hue', label: 'hue' },
    { value: 'ha noi', label: 'ha noi' },
];

const PostForm = () => {
    var defaultLocation = "viet_nam";
    const [city, changeCity] = useState("");
    const updateCity = (param) => changeCity(param.value)
    const [district, changeDistrict] = useState("");
    const updateDistrict = (param) => changeDistrict(param.value)
    const [ward, changeWard] = useState("");
    const updateWard = (param) => changeWard(param.value)
    const [street, changeStreet] = useState("");
    const updateStreet = (param) => changeStreet(param.value)
    const [num, changeNum] = useState("");
    const updateNum = (param) => changeNum(param.value)
    if (city || district || ward || street || num) {
        defaultLocation = `${num},${street},${ward},${district},${city}`
    }
    return (
        <Form action=" " className="post-form" as={Row}>

            <Container className="post-address col-xl-12" as={Col}>
                <Row>
                    <h2>Địa chỉ cho thuê</h2>
                </Row>
                
                <Row className="post-address-row">
                    <Col className="post-address-detail" md={6}>
                            <Col className="post-address-col">
                                <CustomSelect label="Tỉnh/Thành phố" onChange={updateCity} opts={options} />
                            </Col>
                            <Col className="post-address-col">
                                <CustomSelect label="Quận/Huyện" onChange={updateDistrict} opts={options} />
                            </Col>
                            <Col className="post-address-col">
                                <CustomSelect label="Phường/Xã" onChange={updateWard} opts={options} />
                            </Col>
                            <Col className="post-address-col">
                                <CustomSelect label="Đường/Phố" onChange={updateStreet} opts={options} />
                            </Col>
                            <Col className="post-address-col">
                                <input type="text" placeholder="Số nhà" id="post-address-input" onChange={updateNum} />
                            </Col>
                        
                    </Col>

                    <Col className="map">
                        <iframe
                            width="600"
                            height="450"
                            loading="lazy"
                            src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBT-FcupKSzJG1IuC4ZtNyQ-Qg0rdoY47k&q=${defaultLocation}`}>
                        </iframe>
                    </Col>
                </Row>
            </Container>
            <div className="post-desc col-xl-6"  >
                <Row className="my-3">
                    <h2>Thông tin mô tả</h2>
                </Row>
                <Form.Group as={Row} className="my-3">
                    <Form.Label>Loại hình</Form.Label> 
                    <CustomSelect/> 
                </Form.Group>
                
                <Form.Group as={Row} className="my-3">
                    <Form.Label>Tiêu đề</Form.Label>
                    <Form.Control type="text" className="post-input"/>
                </Form.Group>

                <Form.Group as={Row} className="my-3">
                    <Form.Label>Nội dung mô tả</Form.Label>
                    <Form.Control as="textarea" className="post-input post-textarea"/>
                </Form.Group>
                
                <Form.Group as={Row} className="my-3">
                    <Form.Label>Thông tin liên hệ</Form.Label>
                    <Form.Control type="text" placeholder="Số điện thoại" className="post-input mb-2 col-xl-6"/>
                    <Form.Control type="text" placeholder="Email" className="post-input col-xl-6"/>
                </Form.Group>

                <Form.Group as={Row} className="my-3">
                    <Form.Label>Giá cho thuê(VND/Tháng)</Form.Label>
                    <Form.Control type="text" className="post-input mb-2 col-xl-6" placeholder="VD: 10000000"/>
                </Form.Group>
                <Form.Group as={Row} className="my-3">
                    <Form.Label>Diện tích(m<sup>2</sup>)</Form.Label>
                    <Form.Control type="text" className="post-input mb-2 col-xl-6" placeholder="VD: 50"/>
                </Form.Group>
                <Form.Group as={Row} className="my-3">
                    <Form.Label>Hình ảnh</Form.Label>
                    <Form.Control type="file" className="post-input mb-2 col-xl-6" multiple/>
                    <Form.Text>Dùng nút <kbd>Shift</kbd> hoặc <kbd>Ctrl</kbd> để chọn nhiều ảnh</Form.Text>
                </Form.Group>
                <Form.Group as={Row} className="my-3">
                    <Form.Control type="submit" className="post-input mb-2 col-xl-12"/>
                </Form.Group>
                
            </div>
            
        </Form>
        
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
