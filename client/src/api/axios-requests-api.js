const axios = require('axios');

const domain = process.env.VUE_API_DOMAIN || 'http://localhost:3000';
const token  = localStorage.getItem('user') === null ? '' : JSON.parse(localStorage.getItem('user')).token;

/* Add to header token from localstorage */
axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;

function sendRequest(data, method, url) {
    return axios[method](domain + url, data)
        .then(result => result)
        .catch(error => {
            if (error.response.status === 401) {
                localStorage.user = '';
            }
            
            throw error;
        });
}

module.exports = sendRequest