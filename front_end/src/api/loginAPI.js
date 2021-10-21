import axios from "axios";
import { BASE_URL, getToken, removeUserSession, setTokenSession, setUserSession } from "./Common";

export const login = (email, password, setError, history) => {
    axios({
        method: 'post',
        url: `${BASE_URL}login`,
        headers: {'Content-Type': 'application/json'},
        data: {
            email: email,
            password: password
        }
    }).then(response => {
        setTokenSession(response.data.token)
        setUserSession(response.data.user)
        history.push("/")
    }).catch(error => {
        setError(error.response.data.message)
    })
}

export const register = (email, username, password, rePassword, setEmailError, setUsernameError, setPasswordError, setRePasswordError, history) => {
    axios({
        method: 'post',
        url:  `${BASE_URL}register`,
        headers: {'Content-Type': 'application/json'},
        withCredentials: true,
        data: {
            email: email,
            name: username,
            password: password,
            repassword: rePassword,
            type: "Employer"
        }
    }).then(response => {
        history.push("/login")
    }).catch(error => {
        if (error.response.status === 409 || error.response.status === 400) {
            setEmailError(error.response.data[0].email)
            setUsernameError(error.response.data[0].name)
            setPasswordError(error.response.data[0].password)
            setRePasswordError(error.response.data[0].repassword)
        }
    })
}

export const loginWithGG = (idToken, setError, history) => {
    axios({
        method: 'post',
        url: `${BASE_URL}loginWithGG`,
        headers: {'Content-Type': 'application/json'},
        withCredentials: true,
        data: {
            id_token: idToken,
        }
    }).then(response => {
        setUserSession(response.data['user'])
        setTokenSession(response.data['token'])
        history.push('/')
    }).catch(error => {
        if (error.response.status === 401 || error.response.status === 400) {
            setError(error.response.data.message)
        }
    })
}

export const getUser = (setAuthLoading) => {
    axios({
      method: 'get',
      url: `${BASE_URL}user?token=${getToken()}`,
      headers: {'Content-Type': 'application/json'},
    }).then(response => {
      setUserSession(response.data)
      setAuthLoading(false)
    }).catch(error => {
      removeUserSession() 
      setAuthLoading(false)
    });
}

export const getUserById = (id, setUser) => {
    axios({
        method: 'get',
        url: `${BASE_URL}getUserById/${id}`,
        headers: {'Content-Type': 'application/json'},
      }).then(response => {
        setUser(response.data)
      })
}

