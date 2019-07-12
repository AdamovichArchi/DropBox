const sendRequest  = require('../axios-requests-api');

const auth = {
    signIn: data => sendRequest(data, 'post', '/users/auth'),
    registration: data => sendRequest(data, 'post', '/users/registration') 
}

module.exports = auth