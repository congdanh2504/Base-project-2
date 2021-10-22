import axios from "axios";
import { BASE_URL, getToken } from "./Common";

export const addRentItem = (rentItem, setMessage) => {
    var formData = new FormData();
    console.log(rentItem.images)
    formData.append('image1', rentItem.image1)
    formData.append('image2', rentItem.image2)
    formData.append('image3', rentItem.image3)
    formData.append('document', JSON.stringify({
        title: rentItem.title,
        description: rentItem.description,
        type: rentItem.type,
        people : rentItem.people,
        area: rentItem.area,
        amount: rentItem.amount,
        province: rentItem.province,
        detailLocation: rentItem.detailLocation
    }))
    axios({
        method: 'post',
        url: `${BASE_URL}addRentItem?token=${getToken()}`,
        headers: {'Content-Type': 'multipart/form-data'},
        data: formData
    }).then(res => {
        setMessage("Thành công")
    })
}

export const addBlog = (blog, setMessage) => {
    var formData = new FormData();
    formData.append('image', blog.image)
    formData.append('document', JSON.stringify({
        title: blog.title,
        description: blog.description,
        content: blog.content,
    }))
    axios({
        method: 'post',
        url: `${BASE_URL}addBlog?token=${getToken()}`,
        headers: {'Content-Type': 'multipart/form-data'},
        data: formData
    }).then(res => {
        setMessage("Thành công")
    })
}