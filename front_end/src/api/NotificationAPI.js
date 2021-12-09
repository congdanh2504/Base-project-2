import axios from "axios";
import { BASE_URL, getToken } from "./Common";

export const getUserNotifications = (setNotification) => {
    axios({
        method: 'get',
        url: `${BASE_URL}notification/userNotifications?token=${getToken()}`,
        headers: {'Content-Type': 'application/json'}
    }).then(response => {
        setNotification(response.data)
    })
}

export const seenNotification = (notificationId) => {
    axios({
        method: 'post',
        url: `${BASE_URL}notification?token=${getToken()}`,
        headers: {'Content-Type': 'application/json'},
        data: {
            id: notificationId
        }
    })
}

export const deleteNotification = (notificationId) => {
    axios({
        method: 'delete',
        url: `${BASE_URL}notification?token=${getToken()}`,
        headers: {'Content-Type': 'application/json'},
        data: {
            id: notificationId
        }
    })
}