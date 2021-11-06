import axios from 'axios'
import { BASE_URL, getToken } from './Common'

export const addContract = async (contract) => {
    console.log(contract.rentItemId)
    axios({
        method: 'post',
        url: `${BASE_URL}contract?token=${getToken()}`,
        headers: {'Content-Type': 'application/json'},
        data: {
            userId2 : contract.userId2,
            deposit : contract.deposit,
            rentItemId : contract.rentItemId
        }
    })
}