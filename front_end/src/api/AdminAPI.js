import axios from 'axios'
import { BASE_URL, getToken } from "./Common";

export const getUsers = (setUsers, page = 1) =>  {
    axios({
      method: 'get',
      url: `${BASE_URL}admin/user?token=${getToken()}&page=${page}`,
      headers: {'Content-Type': 'application/json'},
    }).then(response => {        
        setUsers(response.data)
    })
}

export const getContracts = (setContracts, page = 1) =>  {
  axios({
    method: 'get',
    url: `${BASE_URL}admin/contract?token=${getToken()}&page=${page}`,
    headers: {'Content-Type': 'application/json'},
  }).then(response => {        
    setContracts(response.data)
  })
}