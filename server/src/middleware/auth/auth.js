const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
const User = mongoose.model('Users');

exports.authenticate = (login, password) => {
    return new Promise(async (reslove, reject) => {
        try {
            //Get user by login
            const user = await User.findOne({login});
            
            // Match password
            bcrypt.compare(password, user.password, (error, isMatch) => {
                if (error) throw error;
                if (isMatch) {
                    reslove(user)
                } else {
                    // Pass did't match
                    reject('Authentication failed!');
                }
            });
        } catch(error) {
            // Email not found
            reject('Authentication failed!')
        }
    });
}