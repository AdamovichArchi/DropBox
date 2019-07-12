const axios  = require('axios');

const domain = process.env.VUE_API_DOMAIN || 'http://localhost:3000';

/* Add to header token from localstorage */
axios.defaults.headers.common['Authorization'] = 'Bearer ' + JSON.parse(localStorage.getItem('user')).token || '';

function sendRequest(data, method, url) {
    return axios[method](domain + url, data)
        .then(result => result)
        .catch(error => {
            if (error.response.status === 401) {
                // TO:DO logout
                console.log('TO:DO logout')
            }
            console.error(error)
            throw error;
        });
}

module.exports = sendRequest