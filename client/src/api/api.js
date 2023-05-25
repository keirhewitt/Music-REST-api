import axios from 'axios';

/* Local base endpoint */
const api = axios.create({
    baseURL: 'http://localhost:8000/swordfishtrombone/api/v1',
});

/* Temp payload for testing purposes */
const test_payload = {
    "headers": { "apiKey": process.env.REACT_APP_PLACEHOLDER_API_KEY }
}

/* LP */
const createLP = payload => api.post(`/music/lp/create`, test_payload);
const getAllLPs = payload => api.get(`/music/lp`, test_payload);
const updateLP = (id, payload) => api.patch(`/music/update/${id}`, test_payload);
const deleteLP = id => api.delete(`/music/lp/delete/${id}`, test_payload);

/* User */
const createUser = payload => api.post(`/user/create`, test_payload);

export const LP__ROUTES = {
    createLP,
    getAllLPs,
    updateLP,
    deleteLP,
};

export const USER__ROUTES = {
    createUser
};

