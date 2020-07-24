import { fetchWrapper } from '../_helpers/wrapper-fetch';

// const baseUrl = `${config.apiUrl}/users`;
const baseUrl = `https://jsonplaceholder.typicode.com/posts`;

// export const postService = {
//     getAll,
//     getById,
//     create,
//     update,
//     delete: _delete
// };
export const postService = {
    create,
    getAll,
    getById,
};

function create(params) {
    return fetchWrapper.post(baseUrl, params);
}

function getAll() {
    return fetchWrapper.get(baseUrl);
}

function getById(id) {
    return fetchWrapper.get(`${baseUrl}/${id}`);
}