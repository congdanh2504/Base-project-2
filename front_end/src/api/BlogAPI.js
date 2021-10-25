import axios from "axios";
import { BASE_URL } from "./Common";

export const getBlogs = (setBlogs, pageNumber = 1) => {
    axios({
        method: 'get',
        url: `${BASE_URL}blogs?page=${pageNumber}`,
        headers: {'Content-Type': 'application/json'},
      }).then(response => {
        setBlogs(response.data)
      }).catch(error => {

    });
}

export const getById = (id, setBlog) => {
    axios({
        method: 'get',
        url: `${BASE_URL}blogs/${id}`,
        headers: {'Content-Type': 'application/json'},
        }).then(response => {
        setBlog(response.data)   
        console.log(response.data)  
    })
}