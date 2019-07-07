const axios    = require('axios');

const url      = 'http://localhost:3000/users';
const apiAuthe = {};

apiAuthe.registration = function(user) {
    return axios.post(`${url}/registration`, user)
}

module.exports = apiAuthe