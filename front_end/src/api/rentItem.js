import axios from "axios";
import { BASE_URL } from "./Common";

export const getRentItems = (setRentItems, pageNumber = 1) => {
    axios({
        method: 'get',
        url: `${BASE_URL}rentItems?page=${pageNumber}`,
        headers: {'Content-Type': 'application/json'},
      }).then(response => {
        setRentItems(response.data)
      }).catch(error => {

    });
}

export const getById = (id, setRentItem) => {
  axios({
      method: 'get',
      url: `${BASE_URL}rentItems/${id}`,
      headers: {'Content-Type': 'application/json'},
      }).then(response => {
        setRentItem(response.data)   
        
  })
}