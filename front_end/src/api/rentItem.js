import axios from "axios";
import { BASE_URL } from "./Common";

export const getRentItems = (setRentItems, pageNumber = 1) => {
    axios({
        method: 'get',
        url: `${BASE_URL}rentItem?page=${pageNumber}`,
        headers: {'Content-Type': 'application/json'},
      }).then(response => {
        setRentItems(response.data)
      }).catch(error => {

    });
}

export const getById = (id, setRentItem)  => {
  axios({
      method: 'get',
      url: `${BASE_URL}rentItem/${id}`,
      headers: {'Content-Type': 'application/json'},
      }).then(response => {
        setRentItem(response.data)   
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
  axios({
    method: 'get',
    url: `${BASE_URL}rentItem/province/${province}`,
    headers: {'Content-Type': 'application/json'},
  }).then(response => {
    setOther(response.data)
  })
}