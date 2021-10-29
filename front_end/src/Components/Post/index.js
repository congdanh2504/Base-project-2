import React, { useEffect, useState } from 'react'
import CustomSelect from '../CustomSelect'
import "./style.css"
import { Container, Row, Col, Form, Alert } from 'react-bootstrap';
import { getDistricts, getProvinces, getWards } from '../../api/api'
import { RentItem } from '../../model/RentItem';
import { addRentItem } from '../../api/post';
import Navbar from '../../Components/Navbar'
import PostCard from '../MostRent/Card'
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
    var defaultLocation = `${num} ${street}, ${ward}, ${district}, ${province}`;

    const typeOpt = [{"value": 1, "label": "Trọ"},{"value": 2, "label": "Căn hộ"}, {"value": 3, "label": "Nhà"},{"value": 4, "label": "Villa"}];
    const [title, setTitle] = useState("")
    const [type, setType] = useState("")
    const [description, setDescription] = useState("")
    const [people, setPeople] = useState("")
    const [amount, setAmount] = useState("")
    const [area, setArea] = useState("")
    const [image1, setImage1] = useState(null)
    const [image2, setImage2] = useState(null)
    const [image3, setImage3] = useState(null)
    const [message, setMessage] = useState(null)

    const changeTitle = (param) => {
        setTitle(param.target.value)
    }

    const changeType = (param) => {
        setType(param.label)
    }

    const changeDescription = (param) => {
        setDescription(param.target.value)
    }

    const changePeople = (param) => {
        setPeople(param.target.value)
    }

    const changeAmount = (param) => {
        setAmount(param.target.value)
    }

    const changeArea = (param) => {
        setArea(param.target.value)
    }

    const changeImage1 = (param) => {
        // setImage1(param.target.files[0])
        var file = param.target.files[0];
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = function (e) {
            setImage1(reader.result)
        }.bind(this);
    }

    const changeImage2 = (param) => {
        setImage2(param.target.files[0])
    }

    const changeImage3 = (param) => {
        setImage3(param.target.files[0])
    }

    const changeImg = (param) => {
        
    }

    const submit = () => {
        const rentItem = new RentItem(title, description, type, people, area, province, defaultLocation, amount, image1, image2, image3)
        addRentItem(rentItem, setMessage)
    }

    useEffect(() => {
        async function fetchProvinces() {
            let response = await getProvinces()
            changeProvinceOptions(response)
        }
        fetchProvinces()
    }, [])
    
    const testItem={
        "_id" : {
            "$oid" : "6179510e075c0000da004062"
        },
        "address" : {
            "detailLocation" : "112 Nguyễn Minh Châu, Phường Hoà Quý, Quận Ngũ Hành Sơn, Thành phố Đà Nẵng",
            "province" : province,
        },
        "amount" : amount,
        "area" : area,
        "description" : description,
        "imagesAddress" : {
            "path1" : image1,
            "path2" : "https://drive.google.com/uc?export=view&id=17T53MleWXEeavHuidRD8p4JkrOX4e18X",
            "path3" : "https://drive.google.com/uc?export=view&id=1bkJk-qQVCVnBe0Dt0ew_C28gP653C8NJ",
        },
        "people" : people,
        "title" : title,
    }

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
                <div className="post-desc col-xl-6">
                    <Row className="my-3">
                        <h2 className="px-4">Thông tin mô tả</h2>
                    </Row>
                    <Form.Group as={Row} className="my-3">
                        <Form.Label>Tiêu đề</Form.Label>
                        <Form.Control type="text" className="post-input" onChange={changeTitle}/>
                    </Form.Group>

                    <Form.Group as={Row} className="my-3">
                        <Form.Label>Loại hình</Form.Label>
                        <CustomSelect opts={typeOpt} onChange={changeType}/>
                    </Form.Group>

                    <Form.Group as={Row} className="my-3">
                        <Form.Label>Nội dung mô tả</Form.Label>
                        <Form.Control as="textarea" className="post-input post-textarea" onChange={changeDescription} />
                    </Form.Group>

                    <Form.Group as={Row} className="my-3">
                        <Form.Label>Số người ở</Form.Label>
                        <Form.Control type="number" className="post-input mb-2 col-xl-6" onChange={changePeople} />
                    </Form.Group>

                    <Form.Group as={Row} className="my-3">
                        <Form.Label>Giá cho thuê(VND/Tháng)</Form.Label>
                        <Form.Control type="text" className="post-input mb-2 col-xl-6" onChange={changeAmount} placeholder="VD: 10000000" />
                    </Form.Group>
                    <Form.Group as={Row} className="my-3">
                        <Form.Label>Diện tích(m<sup>2</sup>)</Form.Label>
                        <Form.Control type="text" className="post-input mb-2 col-xl-6" onChange={changeArea} placeholder="VD: 50" />
                    </Form.Group>
                    <Form.Group as={Row} className="my-3">
                        <Form.Label>Hình ảnh 1</Form.Label>
                        <Form.Control type="file" className="post-input mb-2 col-xl-6" onChange={changeImage1}  />
                        {/* <Form.Text>Dùng nút <kbd>Shift</kbd> hoặc <kbd>Ctrl</kbd> để chọn nhiều ảnh</Form.Text> */}
                    </Form.Group>
                    <Form.Group as={Row} className="my-3">
                        <Form.Label>Hình ảnh 2</Form.Label>
                        <Form.Control type="file" className="post-input mb-2 col-xl-6" onChange={changeImage2}  />
                        {/* <Form.Text>Dùng nút <kbd>Shift</kbd> hoặc <kbd>Ctrl</kbd> để chọn nhiều ảnh</Form.Text> */}
                    </Form.Group>
                    <Form.Group as={Row} className="my-3">
                        <Form.Label>Hình ảnh 3</Form.Label>
                        <Form.Control type="file" className="post-input mb-2 col-xl-6" onChange={changeImage3}  />
                        {/* <Form.Text>Dùng nút <kbd>Shift</kbd> hoặc <kbd>Ctrl</kbd> để chọn nhiều ảnh</Form.Text> */}
                    </Form.Group>
                    {message && <Alert variant="info"><Alert.Heading>{message}</Alert.Heading></Alert>}
                    <Form.Group as={Row} className="my-3">
                        <Form.Control type="submit" onClick={submit} value="Xác nhận và đăng" className="post-input save-button mb-2 col-xl-12" />
                    </Form.Group>
                </div>
                <Col xl="4" className="post-preview-container">
                    <div className="post-preview">
                        <PostCard obj={testItem}/>
                    </div>
                </Col>
            </Form>
        </div>


    )
}


const index = () => {
    return (
        <>
            <Navbar/>
            <PostForm />
        </>
    )
}

export default index
