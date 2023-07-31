import axios from 'axios';
import { config } from '../config/config.app';

/* Local base endpoint */
const api = axios.create({
    baseURL: 'http://localhost:8000/swordfishtrombone/api/v1',
});

/* Temp payload for testing purposes */
const test_payload = config.test.header;
const user_test_payload = config.test.body;

let data = JSON.stringify({
    "email": "keir11@hotmail.com",
    "password": "test"
});

let conf = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'http://localhost:8000/swordfishtrombone/api/v1/user/register',
    headers: { 
        'Content-Type': 'application/json'
    },
    data : data
};

/* LP */
const createLP = payload => api.post(`/music/lp/create`, test_payload);
const getAllLPs = payload => api.get(`/music/lp`, test_payload);
const updateLP = (id, payload) => api.patch(`/music/update/${id}`, test_payload);
const deleteLP = id => api.delete(`/music/lp/delete/${id}`, test_payload);

/* User */
const createUser = payload => api.post(`/user/create`, test_payload);
const loginUser = (payload, id) => api.post(`/user/login/${id}`, test_payload);
const logoutUser = payload => api.post(`/user/logout`, test_payload);
const registerUser = (email, password) => api.post(`/user/register`, {
    headers: { 
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        email: email,
        password: password
    })
})



async function makeRequest() {
    try {
      const response = await axios.request(conf);
      console.log(JSON.stringify(response.data));
    }
    catch (error) {
      console.log(error);
    }
}


export const LP__ROUTES = {
    createLP,
    getAllLPs,
    updateLP,
    deleteLP,
};

export const USER__ROUTES = {
    createUser,
    loginUser,
    logoutUser,
    registerUser
};

