import axios from "axios";
import { BASE_URL, getToken } from "./Common";

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

export const getUserBlogs = (setBlogs, pageNumber = 1) => {
  axios({
    method: 'get',
    url: `${BASE_URL}user/blog?token=${getToken()}&page=${pageNumber}`,
    headers: {'Content-Type': 'application/json'},
  }).then(response => {
      setBlogs(response.data)
  })
}

export const deleteBlog = async (id) => {
  await axios({
    method: 'delete',
    url: `${BASE_URL}blog?token=${getToken()}`,
    headers: {'Content-Type': 'application/json'},
    data: {
      id: id
    }
  })
}

export const editBlog = async (id, blog) => {
  await axios({
    method: 'patch',
    url: `${BASE_URL}blog?token=${getToken()}`,
    headers: {'Content-Type': 'application/json'},
    data: {
      id: id,
      content: blog.content,
      description: blog.description,
      title: blog.title
    }
  })
}

