export const getUser = () => {
    const userStr = sessionStorage.getItem('user')
    if (userStr) {
        return JSON.parse(userStr)
    }
    return null
}

export const getToken = () => {
    return sessionStorage.getItem('token')
}

export const setUserSession = (user) => {
    sessionStorage.setItem('user', JSON.stringify(user))
}

export const setTokenSession = (token) => {
    sessionStorage.setItem('token', token)
}

export const removeUserSession = () => {
    sessionStorage.removeItem('user')
    sessionStorage.removeItem('token')
}

export const BASE_URL = "https://rentapartment.herokuapp.com/api/" 
// export const BASE_URL = "http://127.0.0.1:8000/api/"