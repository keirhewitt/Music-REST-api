import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8000/swordfishtrombone/api/v1',
});

/* LP */
export const createLP = payload => api.post(`/music/lp/create`, payload);
export const getAllLPs = () => api.get(`/music/lp`);
export const updateLP = (id, payload) => api.patch(`/music/update/${id}`, payload);
export const deleteLP = id => api.delete(`/music/lp/delete/${id}`);

/* User */
export const createUser = payload => api.post(`/user/create`, payload);

const lp_urls = {
    createLP,
    getAllLPs,
    updateLP,
    deleteLP,
};

const user_urls = {
    createUser
};

export { lp_urls, user_urls };