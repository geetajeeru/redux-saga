import axios from 'axios';

axios.defaults.baseURL = 'https://reqres.in/api';

export const fectUsers = (pagenumber) => {
    return axios.get(`/users?page=${pagenumber}`);
}

export const getUserDetails = (id) => {
    return axios.get(`/users/${id}`);
}

export const deleteUser = (id) => {
    console.log(id);
    return axios.delete(`/users/${id}`);
}

export const login = (user) => {
    return axios.post('/login', user);
}

export const signup = (user) => {
    return axios.post('/register', user);
}