import axios from "axios";
import { BASE_URL, getToken } from "./Common";

export const getRentItems = (setRentItems, pageNumber = 1) => {
    axios({
        method: 'get',
        url: `${BASE_URL}rentItem?page=${pageNumber}`,
        headers: {'Content-Type': 'application/json'},
      }).then(response => {
        setRentItems(response.data)
        console.log(response.data)
      }).catch(error => {

    });
}

export const getById = (id, setRentItem, setOther=null)  => {
   axios({
      method: 'get',
      url: `${BASE_URL}rentItem/${id}`,
      headers: {'Content-Type': 'application/json'},
      }).then(response => {
        setRentItem(response.data)   
        if (setOther) {
          getOther(setOther, response.data.address.province)
        }
  })
}

export const setLimitRentItems = (setRentItems, limit) => {
  axios({
      method: 'get',
      url: `${BASE_URL}rentItem/limit/${limit}`,
      headers: {'Content-Type': 'application/json'},
    }).then(response => {
      setRentItems(response.data)
    })
}

export const getOther = (setOther, province) => {
  console.log("request")
  axios({
    method: 'get',
    url: `${BASE_URL}rentItem/province/${province}`,
    headers: {'Content-Type': 'application/json'},
  }).then(response => {
    setOther(response.data)
  })
}

export const getUserRentItems = (setRentItems, pageNumber = 1) => {
  axios({
    method: 'get',
    url: `${BASE_URL}user/rentItem?token=${getToken()}&page=${pageNumber}`,
    headers: {'Content-Type': 'application/json'},
  }).then(response => {
    setRentItems(response.data)
    console.log(response.data)
  })
}

export const deleteRentItem = async (id) => {
  await axios({
    method: 'delete',
    url: `${BASE_URL}rentItem?token=${getToken()}`,
    headers: {'Content-Type': 'application/json'},
    data: {
      id: id
    }
  })
}

export const searchRentItem = (setRentItems, province, type, amount) => {
  axios({
    method: 'get',
    url: `${BASE_URL}search?province=${province}&type=${type}&amount=${amount}`,
    headers: {'Content-Type': 'application/json'},
  }).then(response => {
    setRentItems(response.data)
  })
}