import axios from "axios";
import { BASE_URL } from "./Common";

export const getBlogs = (setBlogs, pageNumber = 1) => {
    axios({
        method: 'get',
        url: `${BASE_URL}blog?page=${pageNumber}`,
        headers: {'Content-Type': 'application/json'},
      }).then(response => {
        setBlogs(response.data)
      }).catch(error => {

    });
}

export const getLimitBlogs = (setBlogs, limit) => {
  axios({
      method: 'get',
      url: `${BASE_URL}blog/limit/${limit}`,
      headers: {'Content-Type': 'application/json'},
    }).then(response => {
      setBlogs(response.data)
    }).catch(error => {

  });
}

export const getById = (id, setBlog) => {
    axios({
        method: 'get',
        url: `${BASE_URL}blog/${id}`,
        headers: {'Content-Type': 'application/json'},
        }).then(response => {
        setBlog(response.data)     
    })
}