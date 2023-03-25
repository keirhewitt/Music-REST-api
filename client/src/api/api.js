import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8000/swordfishtrombone/api/v1',
});

const p = {
    "headers": {
        "apiKey": "RqRdvUEo9FgNjI5o"
    }
}

/* LP */
const createLP = payload => api.post(`/music/lp/create`, p);
const getAllLPs = payload => api.get(`/music/lp`, p);
const updateLP = (id, payload) => api.patch(`/music/update/${id}`, p);
const deleteLP = id => api.delete(`/music/lp/delete/${id}`);

/* User */
const createUser = payload => api.post(`/user/create`, p);

export const lp_urls = {
    createLP,
    getAllLPs,
    updateLP,
    deleteLP,
};

export const user_urls = {
    createUser
};

