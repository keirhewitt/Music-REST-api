import axios from 'axios';

// @ts-ignore
import { config } from '../config/config.app.js';

/* Local base endpoint */
const api = axios.create({
    baseURL: 'http://localhost:8000/swordfishtrombone/api/v1',
});

/* Temp payload for testing purposes */
const test_payload = config.test.header;
const user_test_payload = config.test.body;

/* LP */
const createLP = (payload: {}) => api.post(`/music/lp/create`, test_payload);
const getAllLPs = (payload: {}) => api.get(`/music/lp`, test_payload);
const updateLP = (id: number, payload: {}) => api.patch(`/music/update/${id}`, test_payload);
const deleteLP = (id: number) => api.delete(`/music/lp/delete/${id}`, test_payload);

/* User */
const createUser = (payload: {}) => api.post(`/user/create`, test_payload);
const loginUser = (id: number, payload: {}) => api.post(`/user/login/${id}`, test_payload);
const logoutUser = (payload: {}) => api.post(`/user/logout`, test_payload);
const registerUser = (email: string, password: string) => api.post(`/user/register`, {
    headers: { 
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        email: email,
        password: password
    })
})

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

